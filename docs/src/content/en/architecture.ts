export const content = {
  architecture: {
    title: "Architecture",
    subtitle: "How MarathiLipi works under the hood.",
    overviewTitle: "Overview",
    overviewDesc:
      "MarathiLipi is a transpiler layer that converts Marathi-language source code into valid TypeScript. It is not a new programming language or runtime. It leverages the full power of the TypeScript compiler and the Node.js ecosystem.",
    flowTitle: "Transpilation Flow",
    flowSteps: [
      { label: ".ml file", desc: "MarathiLipi source code written in Marathi syntax" },
      { label: "MarathiLipi Transpiler", desc: "Keyword substitution with longest-match-first strategy" },
      { label: "TypeScript", desc: "Valid TypeScript output with all Marathi keywords replaced" },
      { label: "TypeScript Compiler", desc: "Standard tsc compilation to JavaScript" },
      { label: "JavaScript", desc: "Executable JavaScript code" },
      { label: "Node.js", desc: "Execution in the Node.js runtime" },
    ],
    keywordTitle: "Keyword Resolution",
    keywordDesc:
      "The transpiler uses a longest-match-first strategy. Multi-word phrases are matched before their component words. For example, the phrase '\u0938\u094D\u0925\u093F\u0930 \u0928\u093E\u0935' is matched as a complete phrase (const) before the individual word '\u0928\u093E\u0935' (let).",
    aliasTitle: "Alias Support",
    aliasDesc:
      "Multiple Marathi keywords can map to the same TypeScript keyword. For example, \u0926\u093E\u0916\u0935\u093E, \u0938\u093E\u0902\u0917\u093E, \u0938\u093E\u0902\u0917, and \u091B\u093E\u092A\u093E all map to console.log.",
  },
} as const;
