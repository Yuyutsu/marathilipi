import * as vscode from "vscode";

// ── Keyword metadata ──────────────────────────────────────────────────────────

interface KeywordInfo {
  typescript: string;
  description: string;
  kind: vscode.CompletionItemKind;
}

const KEYWORD_MAP: Record<string, KeywordInfo> = {
  // Variable declarations
  "नाव": { typescript: "let", description: "Declares a mutable variable (let)", kind: vscode.CompletionItemKind.Keyword },
  "स्थिर नाव": { typescript: "const", description: "Declares a constant variable (const)", kind: vscode.CompletionItemKind.Keyword },
  "जुने नाव": { typescript: "var", description: "Declares a variable with var scope (var)", kind: vscode.CompletionItemKind.Keyword },
  "कायम": { typescript: "const", description: "Declares a constant (const)", kind: vscode.CompletionItemKind.Keyword },
  "चल": { typescript: "let", description: "Declares a variable (let)", kind: vscode.CompletionItemKind.Keyword },
  "स्थिर": { typescript: "const", description: "Declares a constant (const)", kind: vscode.CompletionItemKind.Keyword },

  // Control flow
  "जर": { typescript: "if", description: "Conditional statement (if)", kind: vscode.CompletionItemKind.Keyword },
  "नाहीतर": { typescript: "else", description: "Alternate branch (else)", kind: vscode.CompletionItemKind.Keyword },
  "निवडा": { typescript: "switch", description: "Switch statement (switch)", kind: vscode.CompletionItemKind.Keyword },
  "प्रकरण": { typescript: "case", description: "Case clause in switch (case)", kind: vscode.CompletionItemKind.Keyword },
  "मूळ": { typescript: "default", description: "Default clause (default)", kind: vscode.CompletionItemKind.Keyword },
  "थांब": { typescript: "break", description: "Break out of a loop (break)", kind: vscode.CompletionItemKind.Keyword },
  "पुढे": { typescript: "continue", description: "Skip to next iteration (continue)", kind: vscode.CompletionItemKind.Keyword },

  // Loops
  "पुन्हा": { typescript: "for", description: "For loop (for)", kind: vscode.CompletionItemKind.Keyword },
  "जोपर्यंत": { typescript: "while", description: "While loop (while)", kind: vscode.CompletionItemKind.Keyword },
  "करा": { typescript: "do", description: "Do-while loop (do)", kind: vscode.CompletionItemKind.Keyword },

  // Functions
  "काम": { typescript: "function", description: "Declares a function (function)", kind: vscode.CompletionItemKind.Keyword },
  "कार्य": { typescript: "function", description: "Declares a function (function)", kind: vscode.CompletionItemKind.Keyword },
  "परत": { typescript: "return", description: "Returns a value from a function (return)", kind: vscode.CompletionItemKind.Keyword },
  "वेढा": { typescript: "yield", description: "Yields a value from a generator (yield)", kind: vscode.CompletionItemKind.Keyword },

  // Async
  "समकाल": { typescript: "async", description: "Declares an asynchronous function (async)", kind: vscode.CompletionItemKind.Keyword },
  "असिन्क्रॉन": { typescript: "async", description: "Declares an asynchronous function (async)", kind: vscode.CompletionItemKind.Keyword },
  "प्रतीक्षा": { typescript: "await", description: "Awaits a Promise (await)", kind: vscode.CompletionItemKind.Keyword },

  // Classes
  "प्रकार": { typescript: "class", description: "Declares a class (class)", kind: vscode.CompletionItemKind.Keyword },
  "वर्ग": { typescript: "class", description: "Declares a class (class)", kind: vscode.CompletionItemKind.Keyword },
  "वाढवा": { typescript: "extends", description: "Extends a class (extends)", kind: vscode.CompletionItemKind.Keyword },
  "नवीन": { typescript: "new", description: "Creates a new instance (new)", kind: vscode.CompletionItemKind.Keyword },
  "हा": { typescript: "this", description: "Refers to the current object (this)", kind: vscode.CompletionItemKind.Keyword },
  "पालक": { typescript: "super", description: "Refers to the parent class (super)", kind: vscode.CompletionItemKind.Keyword },
  "निर्माता": { typescript: "constructor", description: "Class constructor method (constructor)", kind: vscode.CompletionItemKind.Keyword },

  // Imports / exports
  "मूळ द्या": { typescript: "export default", description: "Default export (export default)", kind: vscode.CompletionItemKind.Keyword },
  "आणा": { typescript: "import", description: "Import a module (import)", kind: vscode.CompletionItemKind.Keyword },
  "पासून": { typescript: "from", description: "Import source (from)", kind: vscode.CompletionItemKind.Keyword },
  "द्या": { typescript: "export", description: "Export a value (export)", kind: vscode.CompletionItemKind.Keyword },

  // Error handling
  "प्रयत्न": { typescript: "try", description: "Try block for error handling (try)", kind: vscode.CompletionItemKind.Keyword },
  "पकडा": { typescript: "catch", description: "Catch block to handle errors (catch)", kind: vscode.CompletionItemKind.Keyword },
  "शेवटी": { typescript: "finally", description: "Finally block that always runs (finally)", kind: vscode.CompletionItemKind.Keyword },
  "फेका": { typescript: "throw", description: "Throws an error (throw)", kind: vscode.CompletionItemKind.Keyword },

  // Console / output
  "दाखवा": { typescript: "console.log", description: "Print to console (console.log)", kind: vscode.CompletionItemKind.Function },
  "सांगा": { typescript: "console.log", description: "Print to console (console.log)", kind: vscode.CompletionItemKind.Function },
  "सांग": { typescript: "console.log", description: "Print to console (console.log)", kind: vscode.CompletionItemKind.Function },
  "छापा": { typescript: "console.log", description: "Print to console (console.log)", kind: vscode.CompletionItemKind.Function },
  "चूक": { typescript: "console.error", description: "Print error to console (console.error)", kind: vscode.CompletionItemKind.Function },
  "सूचना": { typescript: "console.warn", description: "Print warning to console (console.warn)", kind: vscode.CompletionItemKind.Function },
  "माहिती": { typescript: "console.info", description: "Print info to console (console.info)", kind: vscode.CompletionItemKind.Function },

  // Operators / misc
  "हटवा": { typescript: "delete", description: "Deletes an object property (delete)", kind: vscode.CompletionItemKind.Keyword },
  "मध्ये": { typescript: "in", description: "Checks if property exists in object (in)", kind: vscode.CompletionItemKind.Keyword },
  "उदाहरण": { typescript: "instanceof", description: "Checks if value is instance of class (instanceof)", kind: vscode.CompletionItemKind.Keyword },

  // TypeScript-specific
  "प्रकारघोषणा": { typescript: "type", description: "Type alias declaration (type)", kind: vscode.CompletionItemKind.Keyword },
  "अंतरफलक": { typescript: "interface", description: "Declares an interface (interface)", kind: vscode.CompletionItemKind.Keyword },
  "नामविश्व": { typescript: "namespace", description: "Declares a namespace (namespace)", kind: vscode.CompletionItemKind.Keyword },
  "जाहीर": { typescript: "declare", description: "Ambient type declaration (declare)", kind: vscode.CompletionItemKind.Keyword },
  "अमूर्त": { typescript: "abstract", description: "Abstract class or method (abstract)", kind: vscode.CompletionItemKind.Keyword },
  "सार्वजनिक": { typescript: "public", description: "Public access modifier (public)", kind: vscode.CompletionItemKind.Keyword },
  "खाजगी": { typescript: "private", description: "Private access modifier (private)", kind: vscode.CompletionItemKind.Keyword },
  "संरक्षित": { typescript: "protected", description: "Protected access modifier (protected)", kind: vscode.CompletionItemKind.Keyword },
  "स्थिरसदस्य": { typescript: "static", description: "Static class member (static)", kind: vscode.CompletionItemKind.Keyword },
  "फक्तवाचा": { typescript: "readonly", description: "Readonly property modifier (readonly)", kind: vscode.CompletionItemKind.Keyword },
  "की": { typescript: "keyof", description: "Key type operator (keyof)", kind: vscode.CompletionItemKind.Keyword },
  "अनुमान": { typescript: "infer", description: "Type inference in conditional types (infer)", kind: vscode.CompletionItemKind.Keyword },
  "संतोष": { typescript: "satisfies", description: "Type satisfaction check (satisfies)", kind: vscode.CompletionItemKind.Keyword },
};

// All known Marathi keywords (single-word only — for fast token lookup)
const KNOWN_KEYWORDS = new Set(Object.keys(KEYWORD_MAP));

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

  // Completion provider — triggered by Devanagari characters
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

        // Only suggest when the user is typing a Devanagari word
        if (!DEVANAGARI_RE.test(linePrefix)) {
          return [];
        }

        return Object.entries(KEYWORD_MAP).map(([marathi, info]) => {
          const item = new vscode.CompletionItem(marathi, info.kind);
          item.detail = `→ ${info.typescript}`;
          item.documentation = new vscode.MarkdownString(info.description);
          return item;
        });
      },
    },
    // Trigger characters: common Devanagari starting characters
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

  // Hover provider
  const hoverProvider = vscode.languages.registerHoverProvider(selector, {
    provideHover(
      document: vscode.TextDocument,
      position: vscode.Position,
    ): vscode.Hover | undefined {
      const range = document.getWordRangeAtPosition(
        position,
        /[\u0900-\u097F\w]+/,
      );
      if (!range) {
        return undefined;
      }

      const word = document.getText(range);
      const info = KEYWORD_MAP[word];
      if (!info) {
        return undefined;
      }

      const md = new vscode.MarkdownString();
      md.appendMarkdown(`**${word}** → \`${info.typescript}\`\n\n`);
      md.appendMarkdown(info.description);
      return new vscode.Hover(md, range);
    },
  });

  context.subscriptions.push(completionProvider, hoverProvider);
}

// ── Diagnostics ────────────────────────────────────────────────────────────────

/**
 * Scan the document for unknown Devanagari tokens and report warnings.
 * A token is considered unknown when it consists entirely of Devanagari
 * characters but does not appear in KEYWORD_MAP.
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
