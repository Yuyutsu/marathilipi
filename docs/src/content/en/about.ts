export const content = {
  about: {
    title: "About MarathiLipi",
    subtitle:
      "Making programming accessible in Marathi.",
    missionTitle: "Mission",
    missionDesc:
      "MarathiLipi aims to lower the barrier to programming for Marathi-speaking developers by providing a familiar linguistic interface to the TypeScript ecosystem. Code written in MarathiLipi transpiles to standard TypeScript, ensuring full compatibility with existing tools and libraries.",
    principlesTitle: "Principles",
    principles: [
      {
        title: "Accessibility",
        desc: "Enable developers to learn and write code in their native language.",
      },
      {
        title: "Compatibility",
        desc: "Produce standard TypeScript that works with all existing tools.",
      },
      {
        title: "Transparency",
        desc: "The generated TypeScript is always visible and readable.",
      },
      {
        title: "Minimalism",
        desc: "Only keywords are translated. Identifiers, strings, and logic remain unchanged.",
      },
    ],
    techTitle: "Technology",
    techDesc:
      "MarathiLipi is built with TypeScript and uses the official TypeScript compiler API for code generation and execution. The CLI, web playground, and VS Code extension provide a complete development experience.",
    openSourceTitle: "Open Source",
    openSourceDesc:
      "MarathiLipi is open source and available on GitHub under the MIT license.",
  },
} as const;
