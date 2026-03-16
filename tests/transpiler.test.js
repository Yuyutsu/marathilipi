"use strict";
/**
 * transpiler.test.ts
 *
 * Unit tests for the MarathiLipi transpiler.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const transpiler_1 = require("../src/core/transpiler");
const keywordMap_1 = require("../src/core/keywordMap");
describe("transpile()", () => {
    it("replaces a single Marathi keyword with its TypeScript equivalent", () => {
        const { typescript } = (0, transpiler_1.transpile)('चल नाव = "अमोल"');
        expect(typescript).toBe('let नाव = "अमोल"');
    });
    it("replaces console.log alias सांग", () => {
        const { typescript } = (0, transpiler_1.transpile)('सांग("नमस्कार")');
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
        const { typescript } = (0, transpiler_1.transpile)(source);
        expect(typescript).toContain("let");
        expect(typescript).toContain("console.log");
        expect(typescript).toContain("if");
        expect(typescript).not.toContain("चल");
        expect(typescript).not.toContain("सांग");
        expect(typescript).not.toContain("जर");
    });
    it("does not replace a keyword when it is a substring of a longer identifier", () => {
        // "जरकेव्हातरी" starts with "जर" but should not be replaced.
        const { typescript } = (0, transpiler_1.transpile)("जरकेव्हातरी");
        expect(typescript).toBe("जरकेव्हातरी");
    });
    it("preserves the original source in the result", () => {
        const source = 'चल x = 1';
        const result = (0, transpiler_1.transpile)(source);
        expect(result.original).toBe(source);
    });
    it("covers every key in keywordMap", () => {
        for (const [marathi, ts] of Object.entries(keywordMap_1.keywordMap)) {
            const { typescript } = (0, transpiler_1.transpile)(marathi);
            expect(typescript).toBe(ts);
        }
    });
});
describe("keywordMap", () => {
    it("exports a non-empty record", () => {
        expect(Object.keys(keywordMap_1.keywordMap).length).toBeGreaterThan(0);
    });
    it("maps चल to let", () => {
        expect(keywordMap_1.keywordMap["चल"]).toBe("let");
    });
    it("maps स्थिर to const", () => {
        expect(keywordMap_1.keywordMap["स्थिर"]).toBe("const");
    });
    it("maps सांग to console.log", () => {
        expect(keywordMap_1.keywordMap["सांग"]).toBe("console.log");
    });
});
//# sourceMappingURL=transpiler.test.js.map