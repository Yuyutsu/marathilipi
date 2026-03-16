/**
 * fileUtils.ts
 *
 * Utility helpers for file I/O and path validation used throughout
 * the MarathiLipi toolchain.
 */

import fs from "fs";
import path from "path";

/** The canonical extension for MarathiLipi source files. */
export const ML_EXTENSION = ".ml";

/**
 * Resolve a file path to an absolute path based on the current working
 * directory, then verify that the file exists.
 *
 * @throws {Error} When the file does not exist.
 */
export function resolveFilePath(filePath: string): string {
  const absolute = path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(absolute)) {
    throw new Error(`File not found: ${absolute}`);
  }

  return absolute;
}

/**
 * Ensure that the given file path has the `.ml` extension.
 *
 * @throws {Error} When the extension does not match.
 */
export function validateExtension(filePath: string): void {
  if (path.extname(filePath).toLowerCase() !== ML_EXTENSION) {
    throw new Error(
      `Invalid file type: expected a ${ML_EXTENSION} file, got "${filePath}".`
    );
  }
}

/**
 * Read the contents of a file as a UTF-8 string.
 *
 * @throws {Error} When the file cannot be read.
 */
export function readFile(filePath: string): string {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch (err) {
    throw new Error(`Failed to read file "${filePath}": ${String(err)}`);
  }
}
