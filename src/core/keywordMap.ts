/**
 * keywordMap.ts
 *
 * Flat Marathi → TypeScript lookup table, derived from the canonical
 * structured dictionary in `dictionary.ts`.
 *
 * Consumers that need the raw `Record<string, string>` map (e.g. the
 * existing test suite) continue to import from here.  New code should
 * prefer importing directly from `dictionary.ts` which carries richer
 * metadata (descriptions, alias groupings, romanized prefixes).
 *
 * To add a new keyword:
 *   1. Add an entry to `dictionary.ts`.
 *   2. This file automatically reflects the change — no edits needed here.
 */

import { dictionary } from "./dictionary";

/**
 * Flat map of every Marathi pattern → its TypeScript replacement.
 * Multi-word phrases (e.g. "स्थिर नाव") and aliases are all present as
 * individual keys, exactly as they were before the dictionary refactor.
 */
export const keywordMap: Record<string, string> = Object.fromEntries(
  dictionary.flatMap(({ patterns, replace }) =>
    patterns.map((p) => [p, replace])
  )
);
