/**
 * transpiler-browser.js
 *
 * Browser-compatible port of src/core/transpiler.ts + src/core/keywordMap.ts.
 * No Node.js dependencies — runs entirely in the browser.
 *
 * Usage:
 *   const js = transpileMarathi(marathiSource);
 */

// ── Keyword map ────────────────────────────────────────────────────────────
// Mirrors src/core/keywordMap.ts exactly.  Multi-word phrases must be listed
// before their component words so the longest-first sort matches them first.
const keywordMap = {
  // Variable declarations
  "स्थिर नाव": "const",
  "जुने नाव":  "var",
  "नाव":        "let",
  "कायम":       "const",

  // Control flow
  "जर":        "if",
  "नाहीतर":   "else",
  "निवडा":    "switch",
  "प्रकरण":   "case",
  "मूळ":       "default",
  "पुन्हा":   "for",
  "जोपर्यंत": "while",
  "करा":       "do",
  "थांब":      "break",
  "पुढे":      "continue",

  // Functions
  "काम":   "function",
  "परत":   "return",
  "वेढा":  "yield",

  // Async
  "समकाल":     "async",
  "असिन्क्रॉन": "async",
  "प्रतीक्षा": "await",

  // Classes & objects
  "प्रकार":    "class",
  "वाढवा":     "extends",
  "नवीन":      "new",
  "हा":         "this",
  "पालक":      "super",
  "निर्माता":  "constructor",

  // Imports / exports
  "मूळ द्या": "export default",
  "आणा":      "import",
  "पासून":    "from",
  "द्या":     "export",

  // Error handling
  "प्रयत्न": "try",
  "पकडा":    "catch",
  "शेवटी":   "finally",
  "फेका":    "throw",

  // Console
  "दाखवा": "console.log",
  "सांगा":  "console.log",
  "छापा":   "console.log",
  "चूक":    "console.error",
  "सूचना":  "console.warn",
  "माहिती": "console.info",

  // Operators / misc
  "हटवा":    "delete",
  "मध्ये":   "in",
  "उदाहरण":  "instanceof",

  // TypeScript-only (kept for completeness — browser runs JS output)
  "प्रकारघोषणा": "type",
  "अंतरफलक":     "interface",
  "नामविश्व":    "namespace",
  "जाहीर":       "declare",
  "अमूर्त":      "abstract",
  "सार्वजनिक":   "public",
  "खाजगी":       "private",
  "संरक्षित":    "protected",
  "स्थिरसदस्य":  "static",
  "फक्तवाचा":    "readonly",
  "की":           "keyof",
  "अनुमान":      "infer",
  "संतोष":       "satisfies",
};

/**
 * Build a RegExp that matches `keyword` as a standalone token.
 * Devanagari characters are NOT covered by \b, so we use lookahead/lookbehind
 * checking for non-alphanumeric / non-Devanagari boundaries.
 */
function buildKeywordRegex(keyword) {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(
    `(?<![\\w\u0900-\u097F])${escaped}(?![\\w\u0900-\u097F])`,
    "g"
  );
}

/**
 * Transpile MarathiLipi source → plain JavaScript (suitable for `new Function`).
 *
 * @param {string} source - MarathiLipi source code.
 * @returns {string} Equivalent JavaScript.
 */
function transpileMarathi(source) {
  // Sort longest-first to prevent partial matches.
  const sorted = Object.entries(keywordMap).sort(
    ([a], [b]) => b.length - a.length
  );

  let output = source;
  for (const [marathiKeyword, jsKeyword] of sorted) {
    output = output.replace(buildKeywordRegex(marathiKeyword), jsKeyword);
  }
  return output;
}

// Expose globally for use in main.js and language.js
window.transpileMarathi = transpileMarathi;
window.marathiKeywords  = Object.keys(keywordMap);
