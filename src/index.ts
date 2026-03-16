/**
 * index.ts
 *
 * Public API surface for MarathiLipi when used as a library rather than a CLI.
 *
 * External consumers can import individual modules directly, but this file
 * re-exports the most commonly needed symbols for convenience.
 */

export { keywordMap } from "./core/keywordMap";
export { transpile } from "./core/transpiler";
export { run } from "./core/runner";
export { readFile, resolveFilePath, validateExtension, ML_EXTENSION } from "./utils/fileUtils";
export type {
  MarathiSource,
  TypeScriptSource,
  TranspileResult,
  RunnerOptions,
  CompilerDiagnostic,
} from "./core/types";
