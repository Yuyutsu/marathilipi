/**
 * Shared type definitions for MarathiLipi.
 */

/** Raw source text of a .ml file. */
export type MarathiSource = string;

/** Valid TypeScript source text produced by the transpiler. */
export type TypeScriptSource = string;

/** Result returned after transpiling a MarathiLipi source string. */
export interface TranspileResult {
  /** The transpiled TypeScript source code. */
  typescript: TypeScriptSource;
  /** The original Marathi source code. */
  original: MarathiSource;
}

/** Options that control how the runner executes a file. */
export interface RunnerOptions {
  /** Absolute or relative path to the .ml file to run. */
  filePath: string;
  /** When true, print the generated TypeScript before execution. */
  verbose?: boolean;
}

/** Diagnostic information emitted by the TypeScript compiler. */
export interface CompilerDiagnostic {
  message: string;
  line?: number;
  character?: number;
}
