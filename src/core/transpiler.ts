/**
 * transpiler.ts
 *
 * Converts MarathiLipi source code into valid TypeScript by replacing
 * Marathi keywords with their TypeScript equivalents.
 *
 * Design notes:
 *  - All keyword mappings live in dictionary.ts (structured) and are
 *    re-exported as a flat map via keywordMap.ts.
 *  - `sortedPatterns` from dictionary.ts is pre-sorted with word-count DESC
 *    as the primary key and string-length DESC as the secondary key, so
 *    multi-word phrases (e.g. "मूळ द्या") are always matched before any of
 *    their component single-words ("मूळ", "द्या").
 *  - Each pattern is replaced as a whole token (Devanagari word-boundary
 *    aware) so that Marathi identifiers that merely contain a keyword are
 *    not accidentally mutated.
 */

import { sortedPatterns } from "./dictionary";
import type { MarathiSource, TranspileResult, TypeScriptSource } from "./types";

/**
 * Build a RegExp that matches the given keyword (or phrase) as a standalone
 * token.
 *
 * Because Devanagari characters are not covered by the `\b` word-boundary
 * assertion, we use a lookahead / lookbehind that checks for non-alphanumeric
 * (and non-Devanagari) boundaries on both sides.
 *
 * For multi-word phrases (e.g. "मूळ द्या") each component word is escaped
 * individually and then joined with `\s+` so that any amount of internal
 * whitespace (spaces, tabs, etc.) still matches.
 */
function buildKeywordRegex(keyword: string): RegExp {
  // 1. Escape each whitespace-delimited word separately to avoid accidentally
  //    escaping the regex metacharacters we're about to introduce (\s+).
  const escapedPhrase = keyword
    .trim()
    .split(/\s+/)
    .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("\\s+");

  // 2. Wrap with Devanagari-aware word boundaries.
  return new RegExp(
    `(?<![\\w\u0900-\u097F])${escapedPhrase}(?![\\w\u0900-\u097F])`,
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
  // `sortedPatterns` is pre-sorted: word-count DESC, then length DESC.
  // This guarantees multi-word phrases win over their component words.
  let typescript: TypeScriptSource = source;

  for (const [pattern, replacement] of sortedPatterns) {
    const regex = buildKeywordRegex(pattern);
    typescript = typescript.replace(regex, replacement);
  }

  return { typescript, original: source };
}
