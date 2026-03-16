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
सांग("जय महाराष्ट्र")
```

### Variables

```
चल नाव = "अमोल"
स्थिर वय = 25
```

### If / Else

```
जर (नाव) {
  सांग("नमस्कार " + नाव)
} नाहीतर {
  सांग("कोण आहेस?")
}
```

### Functions

```
कार्य स्वागत(नाव) {
  परत "नमस्कार " + नाव
}
```

### Loops

```
साठी (चल i = 0; i < 5; i++) {
  सांग(i)
}
```

---

## How MarathiLipi Works

1. **CLI** (`src/cli/cli.ts`) parses command-line arguments and delegates to the Runner.
2. **Runner** (`src/core/runner.ts`) reads the `.ml` file, calls the Transpiler, and then uses `ts.transpileModule()` to compile TypeScript to JavaScript which is executed in a sandboxed VM context.
3. **Transpiler** (`src/core/transpiler.ts`) iterates over the keyword map and replaces each Marathi keyword with its TypeScript equivalent using word-boundary-aware regular expressions.
4. **Keyword Map** (`src/core/keywordMap.ts`) is the **single source of truth** for all translations.

---

## Keyword Reference

| Marathi      | TypeScript    |
|--------------|---------------|
| चल           | let           |
| स्थिर        | const         |
| कार्य        | function      |
| परत          | return        |
| जर           | if            |
| नाहीतर       | else          |
| जोपर्यंत     | while         |
| साठी         | for           |
| वर्ग         | class         |
| सांग         | console.log   |
| आयात         | import        |
| निर्यात      | export        |
| खरे          | true          |
| खोटे         | false         |

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
│   └── hello.ml            # example MarathiLipi program
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
