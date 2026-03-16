# MarathiLipi 🏆

> Write TypeScript using **Marathi (Devanagari)** keywords — transpiled and executed via the official TypeScript compiler.

---

## Introduction

MarathiLipi lets developers write code in Marathi. A small transpiler converts
Marathi keywords to valid TypeScript, which is then compiled and run using the
official TypeScript compiler API — no custom parser needed.

```
MarathiLipi (.ml)
      ↓
  Transpiler
      ↓
TypeScript Code
      ↓
TypeScript Compiler (ts.transpileModule)
      ↓
  JavaScript
      ↓
Node.js Runtime
```

---

## Installation

```bash
# Clone & install
git clone https://github.com/Yuyutsu/marathilipi.git
cd marathilipi
npm install

# Build
npm run build

# (Optional) Link globally
npm link
```

---

## CLI Usage

```bash
# Using the built binary
node dist/cli/cli.js examples/hello.ml

# Or after npm link / npx
marathilipi examples/hello.ml
marathilipi run examples/hello.ml

# Print generated TypeScript before execution
marathilipi run --verbose examples/hello.ml
```

---

## Syntax Examples

### Hello World

```
दाखवा("जय महाराष्ट्र")
```

### Variables

```
नाव व्यक्ती = "अमोल"
स्थिर नाव PI = 3.14
कायम MAX = 100
जुने नाव legacy = 0
```

### If / Else

```
नाव वय = 25

जर (वय > 18) {
  दाखवा("प्रौढ")
} नाहीतर {
  दाखवा("लहान")
}
```

### Functions

```
काम स्वागत(व्यक्ती) {
  परत "नमस्कार " + व्यक्ती
}
```

### Async / Await

```
समकाल काम डेटाआणा() {
  नाव परिणाम = प्रतीक्षा fetch("/api")
  दाखवा(परिणाम)
}
```

### Loops

```
पुन्हा (नाव i = 0; i < 5; i++) {
  दाखवा(i)
}
```

### Classes

```
प्रकार प्राणी {
  निर्माता(नाव) {
    हा.नाव = नाव
  }
}
```
```

---

## How MarathiLipi Works

1. **CLI** (`src/cli/cli.ts`) parses command-line arguments and delegates to the Runner.
2. **Runner** (`src/core/runner.ts`) reads the `.ml` file, calls the Transpiler, and then uses `ts.transpileModule()` to compile TypeScript to JavaScript which is executed in a sandboxed VM context.
3. **Transpiler** (`src/core/transpiler.ts`) iterates over the keyword map and replaces each Marathi keyword with its TypeScript equivalent using word-boundary-aware regular expressions.
4. **Keyword Map** (`src/core/keywordMap.ts`) is the **single source of truth** for all translations.

---

## Keyword Reference

Multi-word phrases (e.g. `स्थिर नाव`) are matched as complete phrases before their component words.
Rows with `/` list aliases that all map to the same TypeScript keyword.

| MarathiLipi                  | TypeScript       |
|------------------------------|------------------|
| नाव                          | let              |
| स्थिर नाव / कायम            | const            |
| जुने नाव                     | var              |
| जर                           | if               |
| नाहीतर                       | else             |
| निवडा                        | switch           |
| प्रकरण                       | case             |
| मूळ                          | default          |
| पुन्हा                       | for              |
| जोपर्यंत                     | while            |
| करा                          | do               |
| थांब                         | break            |
| पुढे                         | continue         |
| काम                          | function         |
| परत                          | return           |
| वेढा                         | yield            |
| समकाल / असिन्क्रॉन           | async            |
| प्रतीक्षा                    | await            |
| प्रकार                       | class            |
| वाढवा                        | extends          |
| नवीन                         | new              |
| हा                           | this             |
| पालक                         | super            |
| निर्माता                     | constructor      |
| आणा                          | import           |
| पासून                        | from             |
| द्या                         | export           |
| मूळ द्या                     | export default   |
| प्रयत्न                      | try              |
| पकडा                         | catch            |
| शेवटी                        | finally          |
| फेका                         | throw            |
| दाखवा / सांगा / छापा        | console.log      |
| चूक                          | console.error    |
| सूचना                        | console.warn     |
| माहिती                       | console.info     |
| हटवा                         | delete           |
| मध्ये                        | in               |
| उदाहरण                       | instanceof       |
| प्रकारघोषणा                  | type             |
| अंतरफलक                      | interface        |
| नामविश्व                     | namespace        |
| जाहीर                        | declare          |
| अमूर्त                       | abstract         |
| सार्वजनिक                    | public           |
| खाजगी                        | private          |
| संरक्षित                     | protected        |
| स्थिरसदस्य                   | static           |
| फक्तवाचा                     | readonly         |
| की                           | keyof            |
| अनुमान                       | infer            |
| संतोष                        | satisfies        |

---

## How to Add New Keywords

1. Open `src/core/keywordMap.ts`.
2. Add an entry:
   ```ts
   "मराठी_शब्द": "tsKeyword",
   ```
3. Rebuild: `npm run build`.

That's it — no other file needs to change.

---

## Project Structure

```
marathilipi/
├── src/
│   ├── cli/
│   │   └── cli.ts          # CLI entry point
│   ├── core/
│   │   ├── keywordMap.ts   # ← single source of truth for all keywords
│   │   ├── transpiler.ts   # Marathi → TypeScript conversion
│   │   ├── runner.ts       # orchestrates read → transpile → compile → run
│   │   └── types.ts        # shared type definitions
│   ├── utils/
│   │   └── fileUtils.ts    # file I/O helpers
│   └── index.ts            # public library API
├── examples/
│   ├── hello.ml            # hello world example
│   └── age_check.ml        # if/else example
├── tests/
│   └── transpiler.test.ts  # unit tests
├── package.json
├── tsconfig.json
└── README.md
```

---

## Running Tests

```bash
npm test
```

---

## Roadmap

- AST-level parsing
- VS Code extension with syntax highlighting
- Marathi error messages
- Web playground
- English → Marathi translator
