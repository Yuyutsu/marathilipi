// Keyword map matching src/core/dictionary.ts exactly.
// Multi-word phrases are listed before component words
// to ensure longest-match-first strategy works correctly.
const keywordMap: [string, string][] = [
  // Multi-word phrases (must come first)
  ["स्थिर नाव", "const"],
  ["जुने नाव", "var"],
  ["मूळ द्या", "export default"],

  // Variable declarations
  ["नाव", "let"],
  ["कायम", "const"],

  // Control flow
  ["जर", "if"],
  ["नाहीतर", "else"],
  ["निवडा", "switch"],
  ["प्रकरण", "case"],
  ["मूळ", "default"],
  ["थांब", "break"],
  ["पुढे", "continue"],

  // Loops
  ["पुन्हा", "for"],
  ["जोपर्यंत", "while"],
  ["करा", "do"],

  // Functions
  ["काम", "function"],
  ["परत", "return"],
  ["वेढा", "yield"],

  // Async
  ["समकाल", "async"],
  ["असिन्क्रॉन", "async"],
  ["प्रतीक्षा", "await"],

  // Classes & objects
  ["प्रकार", "class"],
  ["वाढवा", "extends"],
  ["नवीन", "new"],
  ["हा", "this"],
  ["पालक", "super"],
  ["निर्माता", "constructor"],

  // Imports / exports
  ["आणा", "import"],
  ["पासून", "from"],
  ["द्या", "export"],

  // Error handling
  ["प्रयत्न", "try"],
  ["पकडा", "catch"],
  ["शेवटी", "finally"],
  ["फेका", "throw"],

  // Console / output
  ["दाखवा", "console.log"],
  ["सांगा", "console.log"],
  ["सांग", "console.log"],
  ["छापा", "console.log"],
  ["चूक", "console.error"],
  ["सूचना", "console.warn"],
  ["माहिती", "console.info"],

  // Operators / misc
  ["हटवा", "delete"],
  ["मध्ये", "in"],
  ["उदाहरण", "instanceof"],

  // TypeScript-specific keywords
  ["प्रकारघोषणा", "type"],
  ["अंतरफलक", "interface"],
  ["नामविश्व", "namespace"],
  ["जाहीर", "declare"],
  ["अमूर्त", "abstract"],
  ["सार्वजनिक", "public"],
  ["खाजगी", "private"],
  ["संरक्षित", "protected"],
  ["स्थिरसदस्य", "static"],
  ["फक्तवाचा", "readonly"],
  ["की", "keyof"],
  ["अनुमान", "infer"],
  ["संतोष", "satisfies"],
];

export function browserTranspile(source: string): string {
  let result = source;
  for (const [marathi, ts] of keywordMap) {
    const escaped = marathi.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = "(?<![\\w\\u0900-\\u097F])" + escaped + "(?![\\w\\u0900-\\u097F])";
    const re = new RegExp(pattern, "g");
    result = result.replace(re, ts);
  }
  return result;
}
