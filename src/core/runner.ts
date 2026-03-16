/**
 * runner.ts
 *
 * Orchestrates the end-to-end execution of a .ml file:
 *
 *   1. Read the source file via fileUtils.
 *   2. Transpile MarathiLipi → TypeScript via the transpiler.
 *   3. Compile TypeScript → JavaScript using the official TypeScript compiler API
 *      (typescript.transpileModule — no separate tsc process required).
 *   4. Execute the resulting JavaScript in the current Node.js process.
 */

import ts from "typescript";
import vm from "vm";
import { readFile, resolveFilePath, validateExtension } from "../utils/fileUtils";
import { transpile } from "./transpiler";
import type { CompilerDiagnostic, RunnerOptions } from "./types";

/**
 * Convert TypeScript compiler diagnostics into our own lightweight format.
 */
function formatDiagnostics(
  diagnostics: readonly ts.Diagnostic[]
): CompilerDiagnostic[] {
  return diagnostics.map((d) => {
    const message =
      typeof d.messageText === "string"
        ? d.messageText
        : d.messageText.messageText;

    if (d.file && d.start !== undefined) {
      const { line, character } = d.file.getLineAndCharacterOfPosition(d.start);
      return { message, line: line + 1, character: character + 1 };
    }

    return { message };
  });
}

/**
 * Run a MarathiLipi (.ml) source file.
 *
 * @param options - {@link RunnerOptions} controlling execution behaviour.
 */
export async function run(options: RunnerOptions): Promise<void> {
  const { filePath, verbose = false } = options;

  // ── 1. Resolve & validate the file path ─────────────────────────────────
  const absolutePath = resolveFilePath(filePath);
  validateExtension(absolutePath);

  // ── 2. Read source ───────────────────────────────────────────────────────
  const marathiSource = readFile(absolutePath);

  // ── 3. Transpile Marathi → TypeScript ────────────────────────────────────
  const { typescript } = transpile(marathiSource);

  if (verbose) {
    console.log("── Generated TypeScript ─────────────────────────────────");
    console.log(typescript);
    console.log("─────────────────────────────────────────────────────────");
  }

  // ── 4. Compile TypeScript → JavaScript ───────────────────────────────────
  const compilerOptions: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.CommonJS,
    strict: false, // user code should not be penalised for missing type annotations
    esModuleInterop: true,
  };

  const result = ts.transpileModule(typescript, {
    compilerOptions,
    reportDiagnostics: true,
    fileName: absolutePath.replace(/\.ml$/, ".ts"),
  });

  // Surface any compilation errors before attempting to execute.
  if (result.diagnostics && result.diagnostics.length > 0) {
    const diagnostics = formatDiagnostics(result.diagnostics);
    const messages = diagnostics
      .map((d) =>
        d.line !== undefined
          ? `  Line ${d.line}:${d.character} — ${d.message}`
          : `  ${d.message}`
      )
      .join("\n");

    throw new Error(`TypeScript compilation failed:\n${messages}`);
  }

  // ── 5. Execute JavaScript ─────────────────────────────────────────────────
  const script = new vm.Script(result.outputText);
  const context = vm.createContext({
    console,
    process,
    require,
    __dirname: absolutePath.replace(/[^/\\]+$/, ""),
    __filename: absolutePath,
    exports: {},
    module: { exports: {} },
  });

  script.runInContext(context);
}
