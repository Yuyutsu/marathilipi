/**
 * keywordMap.ts
 *
 * Single source of truth for all Marathi → TypeScript keyword translations.
 *
 * To add a new keyword:
 *   1. Add an entry here: "मराठी_शब्द": "tsKeyword"
 *   2. No other file needs to change — the transpiler reads this map dynamically.
 *
 * Multi-word phrases (e.g. "स्थिर नाव") are supported. The transpiler processes
 * longer strings first, so multi-word phrases are always matched before their
 * component words. Cells that list multiple aliases (A / B) appear as separate
 * map entries that all point to the same TypeScript keyword.
 */

export const keywordMap: Record<string, string> = {
  // ── Variable declarations ────────────────────────────────────────────────
  // Multi-word phrases must appear before their component words so the
  // transpiler's longest-first sort replaces them as complete phrases.
  "स्थिर नाव": "const",    // const  (two-word phrase)
  "जुने नाव": "var",       // var    (two-word phrase)
  "नाव": "let",             // let

  // Alias for const
  "कायम": "const",

  // ── Control flow ──────────────────────────────────────────────────────────
  "जर": "if",
  "नाहीतर": "else",
  "निवडा": "switch",
  "प्रकरण": "case",
  "मूळ": "default",
  "पुन्हा": "for",
  "जोपर्यंत": "while",
  "करा": "do",
  "थांब": "break",
  "पुढे": "continue",

  // ── Functions ─────────────────────────────────────────────────────────────
  "काम": "function",
  "परत": "return",
  "वेढा": "yield",

  // ── Async ─────────────────────────────────────────────────────────────────
  "समकाल": "async",
  "असिन्क्रॉन": "async",   // alias
  "प्रतीक्षा": "await",

  // ── Classes & objects ─────────────────────────────────────────────────────
  "प्रकार": "class",
  "वाढवा": "extends",
  "नवीन": "new",
  "हा": "this",
  "पालक": "super",
  "निर्माता": "constructor",

  // ── Imports / exports ─────────────────────────────────────────────────────
  // "मूळ द्या" must precede "मूळ" and "द्या" so the phrase is matched first.
  "मूळ द्या": "export default",
  "आणा": "import",
  "पासून": "from",
  "द्या": "export",

  // ── Error handling ────────────────────────────────────────────────────────
  "प्रयत्न": "try",
  "पकडा": "catch",
  "शेवटी": "finally",
  "फेका": "throw",

  // ── Console ───────────────────────────────────────────────────────────────
  "दाखवा": "console.log",
  "सांगा": "console.log",  // alias
  "छापा": "console.log",   // alias
  "चूक": "console.error",
  "सूचना": "console.warn",
  "माहिती": "console.info",

  // ── Operators / misc ──────────────────────────────────────────────────────
  "हटवा": "delete",
  "मध्ये": "in",
  "उदाहरण": "instanceof",

  // ── TypeScript-only keywords ──────────────────────────────────────────────
  "प्रकारघोषणा": "type",
  "अंतरफलक": "interface",
  "नामविश्व": "namespace",
  "जाहीर": "declare",
  "अमूर्त": "abstract",
  "सार्वजनिक": "public",
  "खाजगी": "private",
  "संरक्षित": "protected",
  "स्थिरसदस्य": "static",
  "फक्तवाचा": "readonly",
  "की": "keyof",
  "अनुमान": "infer",
  "संतोष": "satisfies",
};
