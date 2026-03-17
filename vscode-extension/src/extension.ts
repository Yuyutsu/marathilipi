import * as vscode from "vscode";

// ── Keyword metadata ──────────────────────────────────────────────────────────

/**
 * Structured keyword entry mirroring `KeywordEntry` from dictionary.ts.
 * Duplicated here so the extension has zero dependency on the transpiler
 * package at runtime (the extension bundle is separate from the CLI).
 */
interface KeywordEntry {
  patterns: string[];
  replace: string;
  description: string;
  kind: vscode.CompletionItemKind;
  romanizedPrefixes?: string[];
}

/**
 * Canonical keyword dictionary for the VS Code extension.
 *
 * Each entry groups one or more Marathi aliases that share a TypeScript
 * replacement, a description, and optional romanized prefix hints that
 * allow Latin-script triggers (e.g. typing "sth" surfaces "स्थिर नाव").
 */
const DICTIONARY: KeywordEntry[] = [
  // ── Variable declarations ────────────────────────────────────────────────
  {
    patterns: ["स्थिर नाव"],
    replace: "const",
    description: "Declares a constant variable (const)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["sth", "sthir nav", "sthnav"],
  },
  {
    patterns: ["जुने नाव"],
    replace: "var",
    description: "Declares a var-scoped variable (var)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["jun", "june nav", "jnav"],
  },
  {
    patterns: ["नाव"],
    replace: "let",
    description: "Declares a mutable variable (let)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["nav"],
  },
  {
    patterns: ["कायम"],
    replace: "const",
    description: "Declares a constant — alias for const (const)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["kay", "kayam"],
  },

  // ── Control flow ──────────────────────────────────────────────────────────
  {
    patterns: ["जर"],
    replace: "if",
    description: "Conditional statement (if)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["jar"],
  },
  {
    patterns: ["नाहीतर"],
    replace: "else",
    description: "Alternate branch (else)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["nah", "nahitar"],
  },
  {
    patterns: ["निवडा"],
    replace: "switch",
    description: "Switch statement (switch)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["niv", "nivda"],
  },
  {
    patterns: ["प्रकरण"],
    replace: "case",
    description: "Case clause in switch (case)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["pra", "prakaran"],
  },
  {
    patterns: ["मूळ द्या"],
    replace: "export default",
    description: "Default export (export default)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["mul dya", "muldya"],
  },
  {
    patterns: ["मूळ"],
    replace: "default",
    description: "Default clause in switch (default)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["mul"],
  },
  {
    patterns: ["थांब"],
    replace: "break",
    description: "Break out of a loop (break)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["tha", "thanb"],
  },
  {
    patterns: ["पुढे"],
    replace: "continue",
    description: "Skip to next iteration (continue)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["pud", "pudhe"],
  },

  // ── Loops ─────────────────────────────────────────────────────────────────
  {
    patterns: ["पुन्हा"],
    replace: "for",
    description: "For loop (for)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["pun", "punha"],
  },
  {
    patterns: ["जोपर्यंत"],
    replace: "while",
    description: "While loop (while)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["jop", "joparyant"],
  },
  {
    patterns: ["करा"],
    replace: "do",
    description: "Do-while loop (do)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["kar", "kara"],
  },

  // ── Functions ─────────────────────────────────────────────────────────────
  {
    patterns: ["काम"],
    replace: "function",
    description: "Declares a function (function)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["kam", "kama"],
  },
  {
    patterns: ["परत"],
    replace: "return",
    description: "Returns a value (return)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["par", "parat"],
  },
  {
    patterns: ["वेढा"],
    replace: "yield",
    description: "Yields a value from a generator (yield)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["vedha"],
  },

  // ── Async ─────────────────────────────────────────────────────────────────
  {
    patterns: ["समकाल", "असिन्क्रॉन"],
    replace: "async",
    description: "Declares an asynchronous function (async)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["sam", "samakal", "asin"],
  },
  {
    patterns: ["प्रतीक्षा"],
    replace: "await",
    description: "Awaits a Promise (await)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["prat", "pratixa"],
  },

  // ── Classes & objects ─────────────────────────────────────────────────────
  {
    patterns: ["प्रकार"],
    replace: "class",
    description: "Declares a class (class)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["prk", "prakar"],
  },
  {
    patterns: ["वाढवा"],
    replace: "extends",
    description: "Extends a class (extends)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["vad", "vadhva"],
  },
  {
    patterns: ["नवीन"],
    replace: "new",
    description: "Creates a new instance (new)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["nvin", "navin"],
  },
  {
    patterns: ["हा"],
    replace: "this",
    description: "Refers to the current object (this)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["ha"],
  },
  {
    patterns: ["पालक"],
    replace: "super",
    description: "Refers to the parent class (super)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["pal", "palak"],
  },
  {
    patterns: ["निर्माता"],
    replace: "constructor",
    description: "Class constructor method (constructor)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["nir", "nirmata"],
  },

  // ── Imports / exports ─────────────────────────────────────────────────────
  {
    patterns: ["आणा"],
    replace: "import",
    description: "Import a module (import)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["ana", "aana"],
  },
  {
    patterns: ["पासून"],
    replace: "from",
    description: "Import source (from)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["pas", "pasun"],
  },
  {
    patterns: ["द्या"],
    replace: "export",
    description: "Export a value (export)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["dya"],
  },

  // ── Error handling ────────────────────────────────────────────────────────
  {
    patterns: ["प्रयत्न"],
    replace: "try",
    description: "Try block for error handling (try)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["pry", "prayatna"],
  },
  {
    patterns: ["पकडा"],
    replace: "catch",
    description: "Catch block to handle errors (catch)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["pak", "pakda"],
  },
  {
    patterns: ["शेवटी"],
    replace: "finally",
    description: "Finally block that always runs (finally)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["she", "shevati"],
  },
  {
    patterns: ["फेका"],
    replace: "throw",
    description: "Throws an error (throw)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["fek", "feka"],
  },

  // ── Console / output ──────────────────────────────────────────────────────
  {
    patterns: ["दाखवा", "सांगा", "सांग", "छापा"],
    replace: "console.log",
    description: "Print to console (console.log)",
    kind: vscode.CompletionItemKind.Function,
    romanizedPrefixes: ["dak", "dakhva", "san", "sanga", "chap", "chhapa"],
  },
  {
    patterns: ["चूक"],
    replace: "console.error",
    description: "Print error to console (console.error)",
    kind: vscode.CompletionItemKind.Function,
    romanizedPrefixes: ["chu", "chuk"],
  },
  {
    patterns: ["सूचना"],
    replace: "console.warn",
    description: "Print warning to console (console.warn)",
    kind: vscode.CompletionItemKind.Function,
    romanizedPrefixes: ["suc", "suchna"],
  },
  {
    patterns: ["माहिती"],
    replace: "console.info",
    description: "Print info to console (console.info)",
    kind: vscode.CompletionItemKind.Function,
    romanizedPrefixes: ["mah", "mahiti"],
  },

  // ── Operators / misc ──────────────────────────────────────────────────────
  {
    patterns: ["हटवा"],
    replace: "delete",
    description: "Deletes an object property (delete)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["hat", "hatva"],
  },
  {
    patterns: ["मध्ये"],
    replace: "in",
    description: "Checks if a property exists in an object (in)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["mad", "madhye"],
  },
  {
    patterns: ["उदाहरण"],
    replace: "instanceof",
    description: "Checks if value is instance of a class (instanceof)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["uda", "udaharan"],
  },

  // ── TypeScript-specific keywords ──────────────────────────────────────────
  {
    patterns: ["प्रकारघोषणा"],
    replace: "type",
    description: "Type alias declaration (type)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["prkg", "prakarghosha"],
  },
  {
    patterns: ["अंतरफलक"],
    replace: "interface",
    description: "Declares an interface (interface)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["ant", "antarfalak"],
  },
  {
    patterns: ["नामविश्व"],
    replace: "namespace",
    description: "Declares a namespace (namespace)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["nam", "namvishva"],
  },
  {
    patterns: ["जाहीर"],
    replace: "declare",
    description: "Ambient type declaration (declare)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["jah", "jahir"],
  },
  {
    patterns: ["अमूर्त"],
    replace: "abstract",
    description: "Abstract class or method (abstract)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["amu", "amurt"],
  },
  {
    patterns: ["सार्वजनिक"],
    replace: "public",
    description: "Public access modifier (public)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["sar", "sarvajanik"],
  },
  {
    patterns: ["खाजगी"],
    replace: "private",
    description: "Private access modifier (private)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["kha", "khajagi"],
  },
  {
    patterns: ["संरक्षित"],
    replace: "protected",
    description: "Protected access modifier (protected)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["snr", "sanrakshit"],
  },
  {
    patterns: ["स्थिरसदस्य"],
    replace: "static",
    description: "Static class member (static)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["sths", "sthirsadasya"],
  },
  {
    patterns: ["फक्तवाचा"],
    replace: "readonly",
    description: "Readonly property modifier (readonly)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["fak", "faktvacha"],
  },
  {
    patterns: ["की"],
    replace: "keyof",
    description: "Key type operator (keyof)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["ki"],
  },
  {
    patterns: ["अनुमान"],
    replace: "infer",
    description: "Type inference in conditional types (infer)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["anu", "anuman"],
  },
  {
    patterns: ["संतोष"],
    replace: "satisfies",
    description: "Type satisfaction check (satisfies)",
    kind: vscode.CompletionItemKind.Keyword,
    romanizedPrefixes: ["snt", "santosh"],
  },
];

// ── Derived lookup tables ─────────────────────────────────────────────────────

/**
 * Flat map of every individual Marathi pattern → its entry.
 * Used for O(1) hover lookups.
 */
const PATTERN_TO_ENTRY = new Map<string, KeywordEntry>(
  DICTIONARY.flatMap((entry) => entry.patterns.map((p) => [p, entry]))
);

/** Set of all known Marathi patterns (for fast diagnostic lookups). */
const KNOWN_KEYWORDS = new Set(PATTERN_TO_ENTRY.keys());

/**
 * All completion items, pre-built at activation time for performance.
 *
 * For each entry we create one item per pattern (so all aliases are
 * individually suggest-able) plus one item per romanized prefix (so
 * Latin-script shorthands also surface the Marathi keyword).
 */
function buildCompletionItems(): vscode.CompletionItem[] {
  const items: vscode.CompletionItem[] = [];

  for (const entry of DICTIONARY) {
    for (const pattern of entry.patterns) {
      const item = new vscode.CompletionItem(pattern, entry.kind);
      item.detail = `→ ${entry.replace}`;
      item.documentation = new vscode.MarkdownString(entry.description);
      // filterText = the pattern itself so Devanagari typing filters correctly
      item.filterText = pattern;
      // insertText is always the primary (first) Marathi pattern
      item.insertText = entry.patterns[0];
      items.push(item);
    }

    // Romanized prefix items — label is the primary Marathi phrase, but they
    // are only triggered / matched when the user types the Latin shorthand.
    if (entry.romanizedPrefixes) {
      for (const prefix of entry.romanizedPrefixes) {
        const primary = entry.patterns[0];
        const item = new vscode.CompletionItem(primary, entry.kind);
        item.detail = `→ ${entry.replace}`;
        item.documentation = new vscode.MarkdownString(entry.description);
        // filterText is the romanized prefix so VS Code shows this item when
        // the user types the Latin shorthand (e.g. "sth", "kay").
        item.filterText = prefix;
        item.insertText = primary;
        // Assign a sort text that places romanized items after Devanagari ones
        item.sortText = `z_${prefix}`;
        items.push(item);
      }
    }
  }

  return items;
}

const ALL_COMPLETION_ITEMS = buildCompletionItems();

// Devanagari Unicode range: U+0900–U+097F
const DEVANAGARI_RE = /[\u0900-\u097F]/;

// ── Extension activation ───────────────────────────────────────────────────────

export function activate(context: vscode.ExtensionContext): void {
  const selector: vscode.DocumentSelector = { language: "marathilipi" };

  // Diagnostics collection
  const diagnostics = vscode.languages.createDiagnosticCollection("marathilipi");
  context.subscriptions.push(diagnostics);

  // Run diagnostics on the active editor at startup and on every change/save
  if (vscode.window.activeTextEditor) {
    updateDiagnostics(vscode.window.activeTextEditor.document, diagnostics);
  }

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor) {
        updateDiagnostics(editor.document, diagnostics);
      }
    }),
    vscode.workspace.onDidChangeTextDocument((event) => {
      updateDiagnostics(event.document, diagnostics);
    }),
    vscode.workspace.onDidCloseTextDocument((doc) => {
      diagnostics.delete(doc.uri);
    }),
  );

  // Completion provider
  // Triggered on Devanagari characters AND common Latin prefix starters so
  // both typing modes are covered.
  const completionProvider = vscode.languages.registerCompletionItemProvider(
    selector,
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
      ): vscode.CompletionItem[] {
        const linePrefix = document
          .lineAt(position)
          .text.substring(0, position.character);

        // Offer all items when typing Devanagari OR a Latin shorthand prefix.
        // VS Code's built-in fuzzy filter then narrows the list based on
        // `filterText` for each item.
        const hasDevanagari = DEVANAGARI_RE.test(linePrefix);
        // Match Latin word (at least 2 chars) at the end of the line prefix
        const latinPrefix = linePrefix.match(/[a-zA-Z]{2,}$/);
        if (!hasDevanagari && !latinPrefix) {
          return [];
        }

        return ALL_COMPLETION_ITEMS;
      },
    },
    // Devanagari trigger characters
    "\u0928", // न
    "\u091C", // ज
    "\u0915", // क
    "\u092A", // प
    "\u0938", // स
    "\u0926", // द
    "\u091A", // च
    "\u0935", // व
    "\u0906", // आ
    "\u092E", // म
    "\u0939", // ह
    "\u0936", // श
    "\u092B", // फ
    "\u0925", // थ
    "\u091F", // ट
  );

  // Hover provider — supports single-word and multi-word phrase lookup
  const hoverProvider = vscode.languages.registerHoverProvider(selector, {
    provideHover(
      document: vscode.TextDocument,
      position: vscode.Position,
    ): vscode.Hover | undefined {
      // Try multi-word phrase first (up to 3 words), then single word
      const line = document.lineAt(position).text;
      const col = position.character;

      // Greedily try to match the longest phrase centred on the cursor
      for (const [pattern, entry] of PATTERN_TO_ENTRY) {
        if (!pattern.includes(" ")) continue; // single words handled below
        const idx = line.indexOf(pattern);
        if (idx !== -1 && idx <= col && col <= idx + pattern.length) {
          const start = new vscode.Position(position.line, idx);
          const end = new vscode.Position(
            position.line,
            idx + pattern.length,
          );
          const range = new vscode.Range(start, end);
          return buildHover(pattern, entry, range);
        }
      }

      // Fall back to single-word lookup
      const range = document.getWordRangeAtPosition(
        position,
        /[\u0900-\u097F\w]+/,
      );
      if (!range) return undefined;

      const word = document.getText(range);
      const entry = PATTERN_TO_ENTRY.get(word);
      if (!entry) return undefined;

      return buildHover(word, entry, range);
    },
  });

  context.subscriptions.push(completionProvider, hoverProvider);
}

function buildHover(
  label: string,
  entry: KeywordEntry,
  range: vscode.Range,
): vscode.Hover {
  const md = new vscode.MarkdownString();
  md.appendMarkdown(`**${label}** → \`${entry.replace}\`\n\n`);
  md.appendMarkdown(entry.description);
  return new vscode.Hover(md, range);
}

// ── Diagnostics ────────────────────────────────────────────────────────────────

/**
 * Scan the document for unrecognised Devanagari tokens and report warnings.
 *
 * A token is flagged when it consists entirely of Devanagari characters but
 * does not appear as a known keyword pattern.  Multi-word phrase components
 * (e.g. the word "नाव" inside "स्थिर नाव") that appear isolated on the line
 * are still checked against the flat pattern set — if "नाव" is a valid
 * single-word keyword it will not be flagged.
 */
function updateDiagnostics(
  document: vscode.TextDocument,
  collection: vscode.DiagnosticCollection,
): void {
  if (document.languageId !== "marathilipi") {
    return;
  }

  const diagnosticList: vscode.Diagnostic[] = [];
  const tokenRe = /[\u0900-\u097F][\u0900-\u097F\u0951-\u0954]*/g;

  for (let i = 0; i < document.lineCount; i++) {
    const line = document.lineAt(i);
    const text = line.text;

    // Skip comment lines (# or //)
    const stripped = text.trimStart();
    if (stripped.startsWith("#") || stripped.startsWith("//")) {
      continue;
    }

    let match: RegExpExecArray | null;
    tokenRe.lastIndex = 0;
    while ((match = tokenRe.exec(text)) !== null) {
      const token = match[0];
      if (!KNOWN_KEYWORDS.has(token)) {
        const start = new vscode.Position(i, match.index);
        const end = new vscode.Position(i, match.index + token.length);
        const range = new vscode.Range(start, end);
        const diagnostic = new vscode.Diagnostic(
          range,
          `अरे! "${token}" ओळखले गेले नाही — Unknown MarathiLipi keyword`,
          vscode.DiagnosticSeverity.Warning,
        );
        diagnostic.source = "marathilipi";
        diagnosticList.push(diagnostic);
      }
    }
  }

  collection.set(document.uri, diagnosticList);
}

export function deactivate(): void {
  // Nothing to clean up — subscriptions are disposed automatically
}

