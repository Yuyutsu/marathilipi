/**
 * transpiler.ts
 *
 * Converts MarathiLipi source code into valid TypeScript by replacing
 * Marathi keywords with their TypeScript equivalents.
 *
 * Design notes:
 *  - All keyword mappings live exclusively in keywordMap.ts.
 *  - Each keyword is replaced as a whole word (word-boundary aware) so that
 *    Marathi identifiers that merely contain a keyword are not accidentally
 *    mutated.
 *  - Longer keywords are processed first to prevent partial matches.
 */

import { keywordMap } from "./keywordMap";
import type { MarathiSource, TranspileResult, TypeScriptSource } from "./types";

/**
 * Build a RegExp that matches the given keyword as a standalone token.
 *
 * Because Devanagari characters are not covered by the `\b` word-boundary
 * assertion, we use a lookahead / lookbehind approach that checks for
 * non-alphanumeric (and non-Devanagari) boundaries.
 */
function buildKeywordRegex(keyword: string): RegExp {
  // Escape any regex special characters present in the keyword string.
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Match the keyword only when it is NOT preceded or followed by a Devanagari
  // letter or a standard word character (\w).  This prevents replacing a
  // keyword that is a sub-string of a longer Devanagari identifier.
  return new RegExp(
    `(?<![\\w\u0900-\u097F])${escaped}(?![\\w\u0900-\u097F])`,
    "g"
  );
}

/**
 * Transpile MarathiLipi source code to TypeScript.
 *
 * @param source - Raw contents of a .ml file.
 * @returns A {@link TranspileResult} containing the generated TypeScript.
 */
export function transpile(source: MarathiSource): TranspileResult {
  // Sort keywords longest-first to avoid partial matches where a shorter key
  // is a prefix of a longer one (e.g. "नाही" vs "नाहीतर").
  const sortedEntries = Object.entries(keywordMap).sort(
    ([a], [b]) => b.length - a.length
  );

  let typescript: TypeScriptSource = source;

  for (const [marathiKeyword, tsKeyword] of sortedEntries) {
    const regex = buildKeywordRegex(marathiKeyword);
    typescript = typescript.replace(regex, tsKeyword);
  }

  return { typescript, original: source };
}
