/**
 * dictionary.ts
 *
 * Structured keyword mapping for MarathiLipi → TypeScript.
 *
 * Each entry groups one or more Marathi patterns (including aliases) that all
 * map to the same TypeScript replacement.  The transpiler reads this list and
 * automatically applies longer / higher-word-count patterns first, ensuring
 * that multi-word phrases (e.g. "स्थिर नाव") are matched before any of their
 * component single words.
 *
 * Adding a new keyword:
 *   1. Create a new entry (or add to an existing entry's `patterns` array).
 *   2. Optionally add `romanizedPrefixes` so the VS Code autocomplete can
 *      surface the keyword when the user types a Latin-script shorthand.
 *   3. No other file needs to change.
 */

export interface KeywordEntry {
  /** One or more Marathi keyword variants / aliases that share a mapping. */
  patterns: string[];
  /** The TypeScript token this maps to. */
  replace: string;
  /** Short human-readable description shown in hover / autocomplete. */
  description: string;
  /**
   * Optional Latin-script shorthands used as autocomplete `filterText`.
   * Enables suggestions like "sth" → "स्थिर नाव" or "kay" → "कायम".
   */
  romanizedPrefixes?: string[];
}

export const dictionary: KeywordEntry[] = [
  // ── Variable declarations ─────────────────────────────────────────────────
  {
    patterns: ["स्थिर नाव"],
    replace: "const",
    description: "Declares a constant variable (const)",
    romanizedPrefixes: ["sth", "sthir nav", "sthnav"],
  },
  {
    patterns: ["जुने नाव"],
    replace: "var",
    description: "Declares a var-scoped variable (var)",
    romanizedPrefixes: ["jun", "june nav", "jnav"],
  },
  {
    patterns: ["नाव"],
    replace: "let",
    description: "Declares a mutable variable (let)",
    romanizedPrefixes: ["nav"],
  },
  {
    patterns: ["कायम"],
    replace: "const",
    description: "Declares a constant — alias for const (const)",
    romanizedPrefixes: ["kay", "kayam"],
  },

  // ── Control flow ──────────────────────────────────────────────────────────
  {
    patterns: ["जर"],
    replace: "if",
    description: "Conditional statement (if)",
    romanizedPrefixes: ["jar"],
  },
  {
    patterns: ["नाहीतर"],
    replace: "else",
    description: "Alternate branch (else)",
    romanizedPrefixes: ["nah", "nahitar"],
  },
  {
    patterns: ["निवडा"],
    replace: "switch",
    description: "Switch statement (switch)",
    romanizedPrefixes: ["niv", "nivda"],
  },
  {
    patterns: ["प्रकरण"],
    replace: "case",
    description: "Case clause in switch (case)",
    romanizedPrefixes: ["pra", "prakaran"],
  },
  {
    // "मूळ द्या" must appear BEFORE "मूळ" so the phrase wins.
    patterns: ["मूळ द्या"],
    replace: "export default",
    description: "Default export (export default)",
    romanizedPrefixes: ["mul dya", "muldya"],
  },
  {
    patterns: ["मूळ"],
    replace: "default",
    description: "Default clause in switch (default)",
    romanizedPrefixes: ["mul"],
  },
  {
    patterns: ["थांब"],
    replace: "break",
    description: "Break out of a loop (break)",
    romanizedPrefixes: ["tha", "thanb"],
  },
  {
    patterns: ["पुढे"],
    replace: "continue",
    description: "Skip to next iteration (continue)",
    romanizedPrefixes: ["pud", "pudhe"],
  },

  // ── Loops ─────────────────────────────────────────────────────────────────
  {
    patterns: ["पुन्हा"],
    replace: "for",
    description: "For loop (for)",
    romanizedPrefixes: ["pun", "punha"],
  },
  {
    patterns: ["जोपर्यंत"],
    replace: "while",
    description: "While loop (while)",
    romanizedPrefixes: ["jop", "joparyant"],
  },
  {
    patterns: ["करा"],
    replace: "do",
    description: "Do-while loop (do)",
    romanizedPrefixes: ["kar", "kara"],
  },

  // ── Functions ─────────────────────────────────────────────────────────────
  {
    patterns: ["काम"],
    replace: "function",
    description: "Declares a function (function)",
    romanizedPrefixes: ["kam", "kama"],
  },
  {
    patterns: ["परत"],
    replace: "return",
    description: "Returns a value (return)",
    romanizedPrefixes: ["par", "parat"],
  },
  {
    patterns: ["वेढा"],
    replace: "yield",
    description: "Yields a value from a generator (yield)",
    romanizedPrefixes: ["vedha"],
  },

  // ── Async ─────────────────────────────────────────────────────────────────
  {
    patterns: ["समकाल", "असिन्क्रॉन"],
    replace: "async",
    description: "Declares an asynchronous function (async)",
    romanizedPrefixes: ["sam", "samakal", "asin"],
  },
  {
    patterns: ["प्रतीक्षा"],
    replace: "await",
    description: "Awaits a Promise (await)",
    romanizedPrefixes: ["prat", "pratixa"],
  },

  // ── Classes & objects ─────────────────────────────────────────────────────
  {
    patterns: ["प्रकार"],
    replace: "class",
    description: "Declares a class (class)",
    romanizedPrefixes: ["prk", "prakar"],
  },
  {
    patterns: ["वाढवा"],
    replace: "extends",
    description: "Extends a class (extends)",
    romanizedPrefixes: ["vad", "vadhva"],
  },
  {
    patterns: ["नवीन"],
    replace: "new",
    description: "Creates a new instance (new)",
    romanizedPrefixes: ["nvin", "navin"],
  },
  {
    patterns: ["हा"],
    replace: "this",
    description: "Refers to the current object (this)",
    romanizedPrefixes: ["ha"],
  },
  {
    patterns: ["पालक"],
    replace: "super",
    description: "Refers to the parent class (super)",
    romanizedPrefixes: ["pal", "palak"],
  },
  {
    patterns: ["निर्माता"],
    replace: "constructor",
    description: "Class constructor method (constructor)",
    romanizedPrefixes: ["nir", "nirmata"],
  },

  // ── Imports / exports ─────────────────────────────────────────────────────
  {
    patterns: ["आणा"],
    replace: "import",
    description: "Import a module (import)",
    romanizedPrefixes: ["ana", "aana"],
  },
  {
    patterns: ["पासून"],
    replace: "from",
    description: "Import source (from)",
    romanizedPrefixes: ["pas", "pasun"],
  },
  {
    patterns: ["द्या"],
    replace: "export",
    description: "Export a value (export)",
    romanizedPrefixes: ["dya"],
  },

  // ── Error handling ────────────────────────────────────────────────────────
  {
    patterns: ["प्रयत्न"],
    replace: "try",
    description: "Try block for error handling (try)",
    romanizedPrefixes: ["pry", "prayatna"],
  },
  {
    patterns: ["पकडा"],
    replace: "catch",
    description: "Catch block to handle errors (catch)",
    romanizedPrefixes: ["pak", "pakda"],
  },
  {
    patterns: ["शेवटी"],
    replace: "finally",
    description: "Finally block that always runs (finally)",
    romanizedPrefixes: ["she", "shevati"],
  },
  {
    patterns: ["फेका"],
    replace: "throw",
    description: "Throws an error (throw)",
    romanizedPrefixes: ["fek", "feka"],
  },

  // ── Console / output ──────────────────────────────────────────────────────
  {
    patterns: ["दाखवा", "सांगा", "सांग", "छापा"],
    replace: "console.log",
    description: "Print to console (console.log)",
    romanizedPrefixes: ["dak", "dakhva", "san", "sanga", "chap", "chhapa"],
  },
  {
    patterns: ["चूक"],
    replace: "console.error",
    description: "Print error to console (console.error)",
    romanizedPrefixes: ["chu", "chuk"],
  },
  {
    patterns: ["सूचना"],
    replace: "console.warn",
    description: "Print warning to console (console.warn)",
    romanizedPrefixes: ["suc", "suchna"],
  },
  {
    patterns: ["माहिती"],
    replace: "console.info",
    description: "Print info to console (console.info)",
    romanizedPrefixes: ["mah", "mahiti"],
  },

  // ── Operators / misc ──────────────────────────────────────────────────────
  {
    patterns: ["हटवा"],
    replace: "delete",
    description: "Deletes an object property (delete)",
    romanizedPrefixes: ["hat", "hatva"],
  },
  {
    patterns: ["मध्ये"],
    replace: "in",
    description: "Checks if a property exists in an object (in)",
    romanizedPrefixes: ["mad", "madhye"],
  },
  {
    patterns: ["उदाहरण"],
    replace: "instanceof",
    description: "Checks if value is instance of a class (instanceof)",
    romanizedPrefixes: ["uda", "udaharan"],
  },

  // ── TypeScript-specific keywords ──────────────────────────────────────────
  {
    patterns: ["प्रकारघोषणा"],
    replace: "type",
    description: "Type alias declaration (type)",
    romanizedPrefixes: ["prkg", "prakarghosha"],
  },
  {
    patterns: ["अंतरफलक"],
    replace: "interface",
    description: "Declares an interface (interface)",
    romanizedPrefixes: ["ant", "antarfalak"],
  },
  {
    patterns: ["नामविश्व"],
    replace: "namespace",
    description: "Declares a namespace (namespace)",
    romanizedPrefixes: ["nam", "namvishva"],
  },
  {
    patterns: ["जाहीर"],
    replace: "declare",
    description: "Ambient type declaration (declare)",
    romanizedPrefixes: ["jah", "jahir"],
  },
  {
    patterns: ["अमूर्त"],
    replace: "abstract",
    description: "Abstract class or method (abstract)",
    romanizedPrefixes: ["amu", "amurt"],
  },
  {
    patterns: ["सार्वजनिक"],
    replace: "public",
    description: "Public access modifier (public)",
    romanizedPrefixes: ["sar", "sarvajanik"],
  },
  {
    patterns: ["खाजगी"],
    replace: "private",
    description: "Private access modifier (private)",
    romanizedPrefixes: ["kha", "khajagi"],
  },
  {
    patterns: ["संरक्षित"],
    replace: "protected",
    description: "Protected access modifier (protected)",
    romanizedPrefixes: ["snr", "sanrakshit"],
  },
  {
    patterns: ["स्थिरसदस्य"],
    replace: "static",
    description: "Static class member (static)",
    romanizedPrefixes: ["sths", "sthirsadasya"],
  },
  {
    patterns: ["फक्तवाचा"],
    replace: "readonly",
    description: "Readonly property modifier (readonly)",
    romanizedPrefixes: ["fak", "faktvacha"],
  },
  {
    patterns: ["की"],
    replace: "keyof",
    description: "Key type operator (keyof)",
    romanizedPrefixes: ["ki"],
  },
  {
    patterns: ["अनुमान"],
    replace: "infer",
    description: "Type inference in conditional types (infer)",
    romanizedPrefixes: ["anu", "anuman"],
  },
  {
    patterns: ["संतोष"],
    replace: "satisfies",
    description: "Type satisfaction check (satisfies)",
    romanizedPrefixes: ["snt", "santosh"],
  },
];

// ── Derived helpers ───────────────────────────────────────────────────────────

/**
 * Returns the word count (number of space-separated tokens) in a pattern.
 * Used for sorting: higher word-count patterns are matched first.
 */
export function wordCount(pattern: string): number {
  return pattern.trim().split(/\s+/).length;
}

/**
 * Compare two patterns for sort order.
 * Primary key:  word count descending  (multi-word phrases first)
 * Secondary key: string length descending (longer single-words first)
 */
export function comparePatterns(a: string, b: string): number {
  const wcDiff = wordCount(b) - wordCount(a);
  if (wcDiff !== 0) return wcDiff;
  return b.length - a.length;
}

/**
 * A flat list of `[pattern, replace]` pairs sorted by the policy above.
 * Consumed by the transpiler for sequential regex replacement.
 */
export const sortedPatterns: Array<[pattern: string, replace: string]> =
  dictionary
    .flatMap(({ patterns, replace }) => patterns.map((p) => [p, replace] as [string, string]))
    .sort(([a], [b]) => comparePatterns(a, b));
