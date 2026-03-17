export const content = {
  variables: {
    title: "Variables",
    desc: "MarathiLipi supports all three variable declaration keywords from TypeScript. Use these keywords to declare variables with different scoping and mutability rules.",
    letDesc:
      'The "let" keyword declares a block-scoped variable that can be reassigned.',
    constDesc:
      'The "const" keyword declares a block-scoped variable that cannot be reassigned after initialization.',
    varDesc:
      'The "var" keyword declares a function-scoped variable. Prefer "let" or "const" in modern code.',
  },
} as const;
