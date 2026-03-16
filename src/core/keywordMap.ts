/**
 * keywordMap.ts
 *
 * Single source of truth for all Marathi → TypeScript keyword translations.
 *
 * To add a new keyword:
 *   1. Add an entry here: "मराठी_शब्द": "tsKeyword"
 *   2. No other file needs to change — the transpiler reads this map dynamically.
 */

export const keywordMap: Record<string, string> = {
  // Variable declarations
  चल: "let",
  स्थिर: "const",
  चर: "var",

  // Functions
  कार्य: "function",
  परत: "return",
  बाण: "=>",

  // Control flow
  जर: "if",
  नाहीतर: "else",
  जोपर्यंत: "while",
  साठी: "for",
  करा: "do",
  थांब: "break",
  चालू: "continue",
  निवडा: "switch",
  बाबतीत: "case",
  पूर्वनिर्धारित: "default",

  // Classes & objects
  वर्ग: "class",
  नवीन: "new",
  हे: "this",
  वाढवा: "extends",
  अंमलबजावणी: "implements",
  सुपर: "super",

  // Async
  असमकालीन: "async",
  थांबा: "await",

  // Error handling
  प्रयत्न: "try",
  पकड: "catch",
  शेवटी: "finally",
  फेका: "throw",

  // Types
  प्रकार: "type",
  इंटरफेस: "interface",
  enum: "enum",

  // Imports / exports
  आयात: "import",
  निर्यात: "export",
  पासून: "from",

  // Boolean literals
  खरे: "true",
  खोटे: "false",
  रिकामे: "null",
  अपरिभाषित: "undefined",

  // Operators (word form)
  आणि: "&&",
  किंवा: "||",
  नाही: "!",

  // Built-ins
  सांग: "console.log",
  कन्सोल: "console",
};
