#!/usr/bin/env node
/**
 * cli.ts
 *
 * Entry point for the `marathilipi` command-line tool.
 *
 * Usage:
 *   marathilipi run <file.ml>        # explicit sub-command
 *   marathilipi <file.ml>            # shorthand — file is executed directly
 *   marathilipi run --verbose <file.ml>
 */

import { run } from "../core/runner";

const HELP_TEXT = `
MarathiLipi — write TypeScript with Marathi keywords.

Usage:
  marathilipi run [--verbose] <file.ml>
  marathilipi [--verbose] <file.ml>

Options:
  --verbose   Print the generated TypeScript before execution.
  --help, -h  Show this help message.

Examples:
  marathilipi examples/hello.ml
  marathilipi run examples/hello.ml
  marathilipi run --verbose examples/hello.ml
`.trimStart();

/** Parse command-line arguments into a structured form. */
interface ParsedArgs {
  filePath: string | null;
  verbose: boolean;
  showHelp: boolean;
}

function parseArgs(argv: string[]): ParsedArgs {
  // argv[0] = node, argv[1] = cli.js — skip both.
  const args = argv.slice(2);

  let filePath: string | null = null;
  let verbose = false;
  let showHelp = false;

  for (const arg of args) {
    if (arg === "--help" || arg === "-h") {
      showHelp = true;
    } else if (arg === "--verbose" || arg === "-v") {
      verbose = true;
    } else if (arg === "run") {
      // Sub-command keyword — simply skip it; the file path follows.
    } else if (!arg.startsWith("--")) {
      filePath = arg;
    }
  }

  return { filePath, verbose, showHelp };
}

async function main(): Promise<void> {
  const { filePath, verbose, showHelp } = parseArgs(process.argv);

  if (showHelp || filePath === null) {
    process.stdout.write(HELP_TEXT);
    process.exit(filePath === null && !showHelp ? 1 : 0);
  }

  try {
    await run({ filePath, verbose });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`\nError: ${message}\n\n`);
    process.exit(1);
  }
}

main();
