const keywordMap: [string, string][] = [
  ["स्थिर नाव", "const"],
  ["जुने नाव", "var"],
  ["मूळ द्या", "export default"],
  ["नाव", "let"],
  ["चल", "let"],
  ["जर", "if"],
  ["नाहीतर", "else"],
  ["निवडा", "switch"],
  ["प्रकरण", "case"],
  ["मूळ", "default"],
  ["पुन्हा", "for"],
  ["जोपर्यंत", "while"],
  ["करा", "do"],
  ["थांब", "break"],
  ["पुढे", "continue"],
  ["काम", "function"],
  ["कार्य", "function"],
  ["परत", "return"],
  ["वेढा", "yield"],
  ["समकाल", "async"],
  ["असिन्क्रॉन", "async"],
  ["प्रतीक्षा", "await"],
  ["प्रकार", "class"],
  ["वाढवा", "extends"],
  ["नवीन", "new"],
  ["हा", "this"],
  ["पालक", "super"],
  ["निर्माता", "constructor"],
  ["आणा", "import"],
  ["पासून", "from"],
  ["द्या", "export"],
  ["प्रयत्न", "try"],
  ["पकडा", "catch"],
  ["शेवटी", "finally"],
  ["फेका", "throw"],
  ["दाखवा", "console.log"],
  ["सांगा", "console.log"],
  ["सांग", "console.log"],
  ["छापा", "console.log"],
  ["चूक", "console.error"],
  ["सूचना", "console.warn"],
  ["माहिती", "console.info"],
  ["खरे", "true"],
  ["खोटे", "false"],
  ["रिकामे", "null"],
  ["अपरिभाषित", "undefined"],
  ["सार्वजनिक", "public"],
  ["खाजगी", "private"],
  ["संरक्षित", "protected"],
  ["स्थिरसदस्य", "static"],
  ["फक्तवाचा", "readonly"],
  ["कायम", "const"],
  ["प्रकारघोषणा", "type"],
  ["अंतरफलक", "interface"],
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
