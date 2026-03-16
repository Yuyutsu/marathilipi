/**
 * transpiler.test.ts
 *
 * Unit tests for the MarathiLipi transpiler.
 */

import { transpile } from "../src/core/transpiler";
import { keywordMap } from "../src/core/keywordMap";

describe("transpile()", () => {
  it("replaces a single Marathi keyword with its TypeScript equivalent", () => {
    const { typescript } = transpile('चल नाव = "अमोल"');
    expect(typescript).toBe('let नाव = "अमोल"');
  });

  it("replaces console.log alias सांग", () => {
    const { typescript } = transpile('सांग("नमस्कार")');
    expect(typescript).toBe('console.log("नमस्कार")');
  });

  it("replaces multiple keywords in a multi-line source", () => {
    const source = [
      'चल नाव = "अमोल"',
      'सांग("जय महाराष्ट्र")',
      "जर (नाव) {",
      '  सांग("नमस्कार " + नाव)',
      "}",
    ].join("\n");

    const { typescript } = transpile(source);

    expect(typescript).toContain("let");
    expect(typescript).toContain("console.log");
    expect(typescript).toContain("if");
    expect(typescript).not.toContain("चल");
    expect(typescript).not.toContain("सांग");
    expect(typescript).not.toContain("जर");
  });

  it("does not replace a keyword when it is a substring of a longer identifier", () => {
    // "जरकेव्हातरी" starts with "जर" but should not be replaced.
    const { typescript } = transpile("जरकेव्हातरी");
    expect(typescript).toBe("जरकेव्हातरी");
  });

  it("preserves the original source in the result", () => {
    const source = 'चल x = 1';
    const result = transpile(source);
    expect(result.original).toBe(source);
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

  it("maps चल to let", () => {
    expect(keywordMap["चल"]).toBe("let");
  });

  it("maps स्थिर to const", () => {
    expect(keywordMap["स्थिर"]).toBe("const");
  });

  it("maps सांग to console.log", () => {
    expect(keywordMap["सांग"]).toBe("console.log");
  });
});
