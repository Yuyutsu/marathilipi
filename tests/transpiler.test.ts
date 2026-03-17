/**
 * transpiler.test.ts
 *
 * Unit tests for the MarathiLipi transpiler.
 */

import { transpile } from "../src/core/transpiler";
import { keywordMap } from "../src/core/keywordMap";

describe("transpile() — single keywords", () => {
  it("replaces नाव (let) in a variable declaration", () => {
    const { typescript } = transpile('नाव व्यक्ती = "अमोल"');
    expect(typescript).toBe('let व्यक्ती = "अमोल"');
  });

  it("replaces दाखवा with console.log", () => {
    const { typescript } = transpile('दाखवा("नमस्कार")');
    expect(typescript).toBe('console.log("नमस्कार")');
  });

  it("replaces alias सांगा with console.log", () => {
    const { typescript } = transpile('सांगा("नमस्कार")');
    expect(typescript).toBe('console.log("नमस्कार")');
  });

  it("replaces alias सांग with console.log", () => {
    const { typescript } = transpile('सांग("नमस्कार")');
    expect(typescript).toBe('console.log("नमस्कार")');
  });

  it("replaces alias छापा with console.log", () => {
    const { typescript } = transpile('छापा("नमस्कार")');
    expect(typescript).toBe('console.log("नमस्कार")');
  });

  it("replaces alias कायम with const", () => {
    const { typescript } = transpile("कायम PI = 3.14");
    expect(typescript).toBe("const PI = 3.14");
  });

  it("replaces जर with if and नाहीतर with else", () => {
    const source = "जर (x) {\n  दाखवा(x)\n} नाहीतर {\n  दाखवा(0)\n}";
    const { typescript } = transpile(source);
    expect(typescript).toContain("if");
    expect(typescript).toContain("else");
    expect(typescript).not.toContain("जर");
    expect(typescript).not.toContain("नाहीतर");
  });

  it("replaces काम with function and परत with return", () => {
    const { typescript } = transpile("काम स्वागत() { परत 1 }");
    expect(typescript).toBe("function स्वागत() { return 1 }");
  });

  it("replaces समकाल with async and प्रतीक्षा with await", () => {
    const { typescript } = transpile("समकाल काम fetch() { परत प्रतीक्षा getData() }");
    expect(typescript).toContain("async");
    expect(typescript).toContain("await");
    expect(typescript).not.toContain("समकाल");
    expect(typescript).not.toContain("प्रतीक्षा");
  });

  it("replaces alias असिन्क्रॉन with async", () => {
    const { typescript } = transpile("असिन्क्रॉन काम load() {}");
    expect(typescript).toContain("async");
    expect(typescript).not.toContain("असिन्क्रॉन");
  });

  it("replaces चूक with console.error", () => {
    const { typescript } = transpile('चूक("अडचण")');
    expect(typescript).toBe('console.error("अडचण")');
  });

  it("replaces सूचना with console.warn", () => {
    const { typescript } = transpile('सूचना("इशारा")');
    expect(typescript).toBe('console.warn("इशारा")');
  });

  it("replaces माहिती with console.info", () => {
    const { typescript } = transpile('माहिती("संदेश")');
    expect(typescript).toBe('console.info("संदेश")');
  });

  it("replaces प्रकार with class", () => {
    const { typescript } = transpile("प्रकार प्राणी {}");
    expect(typescript).toBe("class प्राणी {}");
  });

  it("replaces TypeScript-only keywords", () => {
    expect(transpile("प्रकारघोषणा ID = number").typescript).toContain("type");
    expect(transpile("अंतरफलक IUser {}").typescript).toContain("interface");
    expect(transpile("सार्वजनिक x = 1").typescript).toContain("public");
    expect(transpile("खाजगी y = 2").typescript).toContain("private");
    expect(transpile("फक्तवाचा z = 3").typescript).toContain("readonly");
  });
});

describe("transpile() — multi-word phrases", () => {
  it("replaces 'स्थिर नाव' (as a phrase) with const", () => {
    const { typescript } = transpile("स्थिर नाव PI = 3.14");
    expect(typescript).toBe("const PI = 3.14");
  });

  it("'स्थिर' alone is not a keyword — only the phrase 'स्थिर नाव' maps to const", () => {
    // Without the trailing 'नाव', स्थिर is an ordinary Devanagari token.
    const { typescript } = transpile("स्थिर x = 1");
    expect(typescript).toBe("स्थिर x = 1");
  });

  it("replaces 'जुने नाव' with var", () => {
    const { typescript } = transpile("जुने नाव x = 0");
    expect(typescript).toBe("var x = 0");
  });

  it("replaces 'मूळ द्या' with 'export default' before 'मूळ'→default or 'द्या'→export", () => {
    const { typescript } = transpile("मूळ द्या काम greet() {}");
    expect(typescript).toContain("export default");
    expect(typescript).not.toContain("default काम");
  });

  it("replaces standalone 'मूळ' with default", () => {
    const { typescript } = transpile("निवडा (x) { मूळ: दाखवा(x) }");
    expect(typescript).toContain("default:");
    expect(typescript).not.toContain("मूळ:");
  });

  it("replaces standalone 'द्या' with export", () => {
    const { typescript } = transpile("द्या काम greet() {}");
    expect(typescript).toContain("export");
    expect(typescript).not.toContain("द्या");
  });
});

describe("transpile() — word-boundary safety", () => {
  it("does not replace a keyword that is a substring of a longer Devanagari identifier", () => {
    // "जरकेव्हातरी" starts with "जर" but must not be replaced.
    const { typescript } = transpile("जरकेव्हातरी");
    expect(typescript).toBe("जरकेव्हातरी");
  });

  it("does not replace नाव inside a longer identifier", () => {
    // "नावाने" contains "नाव" but is a longer word — must remain unchanged.
    const { typescript } = transpile("नावाने");
    expect(typescript).toBe("नावाने");
  });

  it("preserves the original source in the result", () => {
    const source = 'नाव x = 1';
    const result = transpile(source);
    expect(result.original).toBe(source);
  });
});

describe("transpile() — full program", () => {
  it("transpiles the hello.ml program correctly", () => {
    const source = [
      'नाव व्यक्ती = "अमोल"',
      'दाखवा("जय महाराष्ट्र")',
      "जर (व्यक्ती) {",
      '  दाखवा("नमस्कार " + व्यक्ती)',
      "}",
    ].join("\n");

    const { typescript } = transpile(source);

    expect(typescript).toContain("let");
    expect(typescript).toContain("console.log");
    expect(typescript).toContain("if");
    expect(typescript).not.toContain("नाव");
    expect(typescript).not.toContain("दाखवा");
    expect(typescript).not.toContain("जर");
  });

  it("transpiles the age_check program correctly", () => {
    const source = [
      "नाव वय = 25",
      "जर (वय > 18) {",
      '  दाखवा("प्रौढ")',
      "}",
      "नाहीतर {",
      '  दाखवा("लहान")',
      "}",
    ].join("\n");

    const { typescript } = transpile(source);

    expect(typescript).toBe(
      [
        "let वय = 25",
        "if (वय > 18) {",
        '  console.log("प्रौढ")',
        "}",
        "else {",
        '  console.log("लहान")',
        "}",
      ].join("\n")
    );
  });

  it("covers every key in keywordMap", () => {
    for (const [marathi, ts] of Object.entries(keywordMap)) {
      const { typescript } = transpile(marathi);
      expect(typescript).toBe(ts);
    }
  });
});

describe("keywordMap", () => {
  it("exports a non-empty record", () => {
    expect(Object.keys(keywordMap).length).toBeGreaterThan(0);
  });

  it("maps नाव to let", () => {
    expect(keywordMap["नाव"]).toBe("let");
  });

  it("maps स्थिर नाव to const", () => {
    expect(keywordMap["स्थिर नाव"]).toBe("const");
  });

  it("maps कायम to const (alias)", () => {
    expect(keywordMap["कायम"]).toBe("const");
  });

  it("maps जुने नाव to var", () => {
    expect(keywordMap["जुने नाव"]).toBe("var");
  });

  it("maps दाखवा to console.log", () => {
    expect(keywordMap["दाखवा"]).toBe("console.log");
  });

  it("maps सांगा to console.log (alias)", () => {
    expect(keywordMap["सांगा"]).toBe("console.log");
  });

  it("maps सांग to console.log (alias)", () => {
    expect(keywordMap["सांग"]).toBe("console.log");
  });

  it("maps छापा to console.log (alias)", () => {
    expect(keywordMap["छापा"]).toBe("console.log");
  });

  it("maps मूळ द्या to export default", () => {
    expect(keywordMap["मूळ द्या"]).toBe("export default");
  });

  it("maps समकाल to async", () => {
    expect(keywordMap["समकाल"]).toBe("async");
  });

  it("maps असिन्क्रॉन to async (alias)", () => {
    expect(keywordMap["असिन्क्रॉन"]).toBe("async");
  });

  it("maps प्रकार to class", () => {
    expect(keywordMap["प्रकार"]).toBe("class");
  });

  it("maps प्रकारघोषणा to type", () => {
    expect(keywordMap["प्रकारघोषणा"]).toBe("type");
  });
});
