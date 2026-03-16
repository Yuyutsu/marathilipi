/**
 * language.js
 *
 * Registers a custom Monaco language called "marathilipi" and configures:
 *   - Syntax highlighting (tokenizer)
 *   - Language configuration (brackets, comments, auto-closing pairs)
 *
 * Must be called AFTER Monaco is loaded and AFTER transpiler-browser.js
 * has set window.marathiKeywords.
 */

function registerMarathiLipiLanguage(monaco) {
  // ── Language registration ──────────────────────────────────────────────
  monaco.languages.register({ id: "marathilipi" });

  // ── Language configuration (brackets, comments) ────────────────────────
  monaco.languages.setLanguageConfiguration("marathilipi", {
    comments: {
      lineComment: "//",
      blockComment: ["/*", "*/"],
    },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"', notIn: ["string"] },
      { open: "'", close: "'", notIn: ["string"] },
    ],
    surroundingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
    indentationRules: {
      increaseIndentPattern: /^.*\{[^}]*$/,
      decreaseIndentPattern: /^\s*\}/,
    },
  });

  // ── Tokenizer / syntax highlighting ────────────────────────────────────
  monaco.languages.setMonarchTokensProvider("marathilipi", {
    // All Marathi keywords that get special token colours
    keywords: [
      // Variable declarations
      "नाव", "स्थिर नाव", "जुने नाव", "कायम",
      // Control flow
      "जर", "नाहीतर", "निवडा", "प्रकरण", "मूळ",
      "पुन्हा", "जोपर्यंत", "करा", "थांब", "पुढे",
      // Functions
      "काम", "परत", "वेढा",
      // Async
      "समकाल", "असिन्क्रॉन", "प्रतीक्षा",
      // Classes
      "प्रकार", "वाढवा", "नवीन", "हा", "पालक", "निर्माता",
      // Imports / exports
      "आणा", "पासून", "द्या", "मूळ द्या",
      // Error handling
      "प्रयत्न", "पकडा", "शेवटी", "फेका",
      // Console (treated as built-in)
      "दाखवा", "सांगा", "छापा", "चूक", "सूचना", "माहिती",
    ],

    typeKeywords: [
      "प्रकारघोषणा", "अंतरफलक", "नामविश्व", "जाहीर",
      "अमूर्त", "सार्वजनिक", "खाजगी", "संरक्षित",
      "स्थिरसदस्य", "फक्तवाचा", "की", "अनुमान", "संतोष",
    ],

    operators: [
      "=", ">", "<", "!", "~", "?", ":",
      "==", "<=", ">=", "!=", "&&", "||", "++", "--",
      "+", "-", "*", "/", "&", "|", "^", "%",
      "<<", ">>", ">>>", "+=", "-=", "*=", "/=", "&=",
      "|=", "^=", "%=", "<<=", ">>=", ">>>=",
    ],

    symbols: /[=><!~?:&|+\-*\/^%]+/,

    tokenizer: {
      root: [
        // Identifiers and keywords (Devanagari range: \u0900-\u097F)
        [/[\u0900-\u097F][\u0900-\u097F\w]*/, {
          cases: {
            "@keywords":     "keyword",
            "@typeKeywords": "keyword.type",
            "@default":      "identifier",
          },
        }],

        // Latin identifiers
        [/[a-zA-Z_]\w*/, { cases: { "@default": "identifier" } }],

        // Whitespace
        { include: "@whitespace" },

        // Delimiters and operators
        [/[{}()\[\]]/, "@brackets"],
        [/[<>](?!@symbols)/, "@brackets"],
        [/@symbols/, {
          cases: {
            "@operators": "operator",
            "@default":   "",
          },
        }],

        // Numbers
        [/\d+\.?\d*/, "number"],

        // Strings (double-quoted)
        [/"([^"\\]|\\.)*$/, "string.invalid"],
        [/"/, { token: "string.quote", next: "@string_dq" }],

        // Strings (single-quoted)
        [/'([^'\\]|\\.)*$/, "string.invalid"],
        [/'/, { token: "string.quote", next: "@string_sq" }],

        // Template literals
        [/`/, { token: "string.quote", next: "@string_template" }],
      ],

      string_dq: [
        [/[^\\"]+/, "string"],
        [/\\./, "string.escape"],
        [/"/, { token: "string.quote", next: "@pop" }],
      ],

      string_sq: [
        [/[^\\']+/, "string"],
        [/\\./, "string.escape"],
        [/'/, { token: "string.quote", next: "@pop" }],
      ],

      string_template: [
        [/[^\\`$]+/, "string"],
        [/\\./, "string.escape"],
        [/\$\{/, { token: "delimiter.bracket", next: "@templateExpression" }],
        [/`/, { token: "string.quote", next: "@pop" }],
      ],

      templateExpression: [
        [/\}/, { token: "delimiter.bracket", next: "@pop" }],
        { include: "root" },
      ],

      whitespace: [
        [/[ \t\r\n]+/, "white"],
        [/\/\*/, "comment", "@comment"],
        [/\/\/.*$/, "comment"],
      ],

      comment: [
        [/[^/*]+/, "comment"],
        [/\/\*/, "comment", "@push"],
        ["\\*/", "comment", "@pop"],
        [/[/*]/, "comment"],
      ],
    },
  });

  // ── Theme overrides for Marathi tokens ────────────────────────────────
  // These rules blend in with the existing vs-dark palette.
  monaco.editor.defineTheme("marathilipi-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "keyword",      foreground: "569cd6", fontStyle: "bold" },
      { token: "keyword.type", foreground: "4ec9b0", fontStyle: "bold" },
      { token: "identifier",   foreground: "9cdcfe" },
      { token: "number",       foreground: "b5cea8" },
      { token: "string",       foreground: "ce9178" },
      { token: "string.quote", foreground: "ce9178" },
      { token: "string.escape",foreground: "d7ba7d" },
      { token: "comment",      foreground: "6a9955", fontStyle: "italic" },
      { token: "operator",     foreground: "d4d4d4" },
      { token: "delimiter",    foreground: "d4d4d4" },
    ],
    colors: {
      "editor.background":          "#1e1e1e",
      "editor.foreground":          "#d4d4d4",
      "editorLineNumber.foreground":"#858585",
      "editor.selectionBackground": "#264f78",
      "editor.lineHighlightBackground": "#2a2d2e",
    },
  });
}

window.registerMarathiLipiLanguage = registerMarathiLipiLanguage;
