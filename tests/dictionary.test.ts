/**
 * dictionary.test.ts
 *
 * Unit tests for the MarathiLipi structured keyword dictionary.
 */

import {
  dictionary,
  sortedPatterns,
  wordCount,
  comparePatterns,
  type KeywordEntry,
} from "../src/core/dictionary";
import { keywordMap } from "../src/core/keywordMap";

// ── Structure validation ───────────────────────────────────────────────────────

describe("dictionary — structure", () => {
  it("exports a non-empty array", () => {
    expect(Array.isArray(dictionary)).toBe(true);
    expect(dictionary.length).toBeGreaterThan(0);
  });

  it("every entry has at least one pattern", () => {
    for (const entry of dictionary) {
      expect(Array.isArray(entry.patterns)).toBe(true);
      expect(entry.patterns.length).toBeGreaterThan(0);
    }
  });

  it("every entry has a non-empty replace string", () => {
    for (const entry of dictionary) {
      expect(typeof entry.replace).toBe("string");
      expect(entry.replace.trim().length).toBeGreaterThan(0);
    }
  });

  it("every entry has a non-empty description", () => {
    for (const entry of dictionary) {
      expect(typeof entry.description).toBe("string");
      expect(entry.description.trim().length).toBeGreaterThan(0);
    }
  });

  it("romanizedPrefixes, when present, is a non-empty array of strings", () => {
    for (const entry of dictionary) {
      if (entry.romanizedPrefixes !== undefined) {
        expect(Array.isArray(entry.romanizedPrefixes)).toBe(true);
        expect(entry.romanizedPrefixes.length).toBeGreaterThan(0);
        for (const prefix of entry.romanizedPrefixes) {
          expect(typeof prefix).toBe("string");
          expect(prefix.trim().length).toBeGreaterThan(0);
        }
      }
    }
  });
});

// ── Alias grouping ─────────────────────────────────────────────────────────────

describe("dictionary — alias grouping", () => {
  function findEntry(pattern: string): KeywordEntry | undefined {
    return dictionary.find((e) => e.patterns.includes(pattern));
  }

  it("groups console.log aliases (दाखवा, सांगा, सांग, छापा) in one entry", () => {
    const entry = findEntry("दाखवा");
    expect(entry).toBeDefined();
    expect(entry!.patterns).toContain("सांगा");
    expect(entry!.patterns).toContain("सांग");
    expect(entry!.patterns).toContain("छापा");
    expect(entry!.replace).toBe("console.log");
  });

  it("groups async aliases (समकाल, असिन्क्रॉन) in one entry", () => {
    const entry = findEntry("समकाल");
    expect(entry).toBeDefined();
    expect(entry!.patterns).toContain("असिन्क्रॉन");
    expect(entry!.replace).toBe("async");
  });

  it("const alias कायम is a separate entry from the phrase 'स्थिर नाव'", () => {
    const kayam = findEntry("कायम");
    const phrase = findEntry("स्थिर नाव");
    expect(kayam).toBeDefined();
    expect(phrase).toBeDefined();
    // They are different entries (different objects)
    expect(kayam).not.toBe(phrase);
    // But both map to const
    expect(kayam!.replace).toBe("const");
    expect(phrase!.replace).toBe("const");
  });

  it("'मूळ द्या' and standalone 'मूळ' are separate entries", () => {
    const phrase = findEntry("मूळ द्या");
    const single = findEntry("मूळ");
    expect(phrase).toBeDefined();
    expect(single).toBeDefined();
    expect(phrase).not.toBe(single);
    expect(phrase!.replace).toBe("export default");
    expect(single!.replace).toBe("default");
  });
});

// ── sortedPatterns ordering ────────────────────────────────────────────────────

describe("sortedPatterns — ordering", () => {
  it("exports a flat array of [pattern, replace] tuples", () => {
    expect(Array.isArray(sortedPatterns)).toBe(true);
    for (const pair of sortedPatterns) {
      expect(pair).toHaveLength(2);
      expect(typeof pair[0]).toBe("string");
      expect(typeof pair[1]).toBe("string");
    }
  });

  it("contains every pattern from the dictionary exactly once", () => {
    const allPatterns = dictionary.flatMap((e) => e.patterns);
    const sortedSet = new Set(sortedPatterns.map(([p]) => p));
    for (const p of allPatterns) {
      expect(sortedSet.has(p)).toBe(true);
    }
    expect(sortedSet.size).toBe(allPatterns.length);
  });

  it("places multi-word phrases before single-word patterns", () => {
    const multiWords = sortedPatterns
      .map(([p]) => p)
      .filter((p) => p.trim().includes(" "));
    const singleWords = sortedPatterns
      .map(([p]) => p)
      .filter((p) => !p.trim().includes(" "));

    // The last multi-word phrase should appear before the first single-word
    if (multiWords.length > 0 && singleWords.length > 0) {
      const lastMultiIdx = sortedPatterns.findIndex(
        ([p]) => p === multiWords[multiWords.length - 1]
      );
      const firstSingleIdx = sortedPatterns.findIndex(
        ([p]) => p === singleWords[0]
      );
      expect(lastMultiIdx).toBeLessThan(firstSingleIdx);
    }
  });

  it("places 'मूळ द्या' before standalone 'मूळ'", () => {
    const phraseIdx = sortedPatterns.findIndex(([p]) => p === "मूळ द्या");
    const singleIdx = sortedPatterns.findIndex(([p]) => p === "मूळ");
    expect(phraseIdx).toBeGreaterThanOrEqual(0);
    expect(singleIdx).toBeGreaterThanOrEqual(0);
    expect(phraseIdx).toBeLessThan(singleIdx);
  });

  it("places 'स्थिर नाव' before standalone 'नाव'", () => {
    const phraseIdx = sortedPatterns.findIndex(([p]) => p === "स्थिर नाव");
    const singleIdx = sortedPatterns.findIndex(([p]) => p === "नाव");
    expect(phraseIdx).toBeGreaterThanOrEqual(0);
    expect(singleIdx).toBeGreaterThanOrEqual(0);
    expect(phraseIdx).toBeLessThan(singleIdx);
  });

  it("places 'जुने नाव' before standalone 'नाव'", () => {
    const phraseIdx = sortedPatterns.findIndex(([p]) => p === "जुने नाव");
    const singleIdx = sortedPatterns.findIndex(([p]) => p === "नाव");
    expect(phraseIdx).toBeGreaterThanOrEqual(0);
    expect(singleIdx).toBeGreaterThanOrEqual(0);
    expect(phraseIdx).toBeLessThan(singleIdx);
  });
});

// ── wordCount / comparePatterns helpers ──────────────────────────────────────

describe("wordCount()", () => {
  it("returns 1 for a single-word pattern", () => {
    expect(wordCount("नाव")).toBe(1);
    expect(wordCount("जर")).toBe(1);
  });

  it("returns 2 for a two-word phrase", () => {
    expect(wordCount("स्थिर नाव")).toBe(2);
    expect(wordCount("मूळ द्या")).toBe(2);
  });

  it("ignores leading/trailing whitespace", () => {
    expect(wordCount("  नाव  ")).toBe(1);
    expect(wordCount("  स्थिर नाव  ")).toBe(2);
  });

  it("collapses internal extra spaces", () => {
    expect(wordCount("स्थिर  नाव")).toBe(2);
  });
});

describe("comparePatterns()", () => {
  it("places higher word-count first", () => {
    expect(comparePatterns("नाव", "स्थिर नाव")).toBeGreaterThan(0);
    expect(comparePatterns("स्थिर नाव", "नाव")).toBeLessThan(0);
  });

  it("breaks ties by string length (longer first)", () => {
    // Same word count, different lengths
    expect(comparePatterns("जर", "नाहीतर")).toBeGreaterThan(0);
    expect(comparePatterns("नाहीतर", "जर")).toBeLessThan(0);
  });

  it("returns 0 for identical patterns", () => {
    expect(comparePatterns("नाव", "नाव")).toBe(0);
  });
});

// ── Consistency with keywordMap ────────────────────────────────────────────────

describe("dictionary → keywordMap consistency", () => {
  it("keywordMap contains every pattern from the dictionary", () => {
    for (const { patterns, replace } of dictionary) {
      for (const pattern of patterns) {
        expect(keywordMap[pattern]).toBe(replace);
      }
    }
  });

  it("keywordMap has no extra keys absent from the dictionary", () => {
    const allPatterns = new Set(dictionary.flatMap((e) => e.patterns));
    for (const key of Object.keys(keywordMap)) {
      expect(allPatterns.has(key)).toBe(true);
    }
  });
});

// ── Transpiler integration — edge cases ────────────────────────────────────────

import { transpile } from "../src/core/transpiler";

describe("transpiler — edge cases from dictionary spec", () => {
  it("transpiles the spec example: स्थिर नाव x = 10 / सांगा(x)", () => {
    const source = ["स्थिर नाव x = 10", "सांगा(x)"].join("\n");
    const { typescript } = transpile(source);
    expect(typescript).toBe(["const x = 10", "console.log(x)"].join("\n"));
  });

  it("handles extra whitespace inside a multi-word phrase", () => {
    // Two spaces between the words should still match
    const { typescript } = transpile("स्थिर  नाव y = 5");
    expect(typescript).toBe("const y = 5");
  });

  it("handles leading/trailing whitespace around the phrase on a line", () => {
    const { typescript } = transpile("  स्थिर नाव z = 0  ");
    expect(typescript).toBe("  const z = 0  ");
  });

  it("does not double-replace: console.log alias stays after first pass", () => {
    // सांगा → console.log; console.log should not be replaced again
    const { typescript } = transpile('सांगा("test")');
    expect(typescript).toBe('console.log("test")');
    expect(typescript.split("console.log").length - 1).toBe(1);
  });

  it("handles all four console.log aliases independently", () => {
    const d = transpile('दाखवा("a")').typescript;
    const s = transpile('सांगा("a")').typescript;
    const sg = transpile('सांग("a")').typescript;
    const c = transpile('छापा("a")').typescript;
    expect(d).toBe('console.log("a")');
    expect(s).toBe('console.log("a")');
    expect(sg).toBe('console.log("a")');
    expect(c).toBe('console.log("a")');
  });

  it("does not corrupt punctuation next to keywords", () => {
    const { typescript } = transpile("जर(x){परत x}");
    expect(typescript).toBe("if(x){return x}");
  });

  it("correctly transpiles a class with extends", () => {
    const { typescript } = transpile("प्रकार Dog वाढवा Animal {}");
    expect(typescript).toBe("class Dog extends Animal {}");
  });

  it("correctly transpiles try-catch", () => {
    const { typescript } = transpile("प्रयत्न { } पकडा (e) { }");
    expect(typescript).toBe("try { } catch (e) { }");
  });

  it("correctly transpiles export default", () => {
    const { typescript } = transpile("मूळ द्या काम main() {}");
    expect(typescript).toBe("export default function main() {}");
  });

  it("handles a realistic multi-statement program", () => {
    const source = [
      "स्थिर नाव MAX = 100",
      "नाव count = 0",
      "जोपर्यंत (count < MAX) {",
      "  दाखवा(count)",
      "  count++",
      "}",
    ].join("\n");
    const { typescript } = transpile(source);
    expect(typescript).toContain("const MAX = 100");
    expect(typescript).toContain("let count = 0");
    expect(typescript).toContain("while (count < MAX)");
    expect(typescript).toContain("console.log(count)");
  });
});
