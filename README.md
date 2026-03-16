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
  Transpiler       ← keyword replacement (src/core/keywordMap.ts)
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
npm install -g marathilipi
```

### Development (from source)

```bash
git clone https://github.com/Yuyutsu/marathilipi.git
cd marathilipi
npm install
npm run build
npm link
```

---

## CLI Usage

```bash
marathilipi hello.ml
marathilipi run hello.ml

# Print generated TypeScript before execution
marathilipi run --verbose hello.ml
```

**Quick example**

```ml
नाव वय = 25

जर (वय > 18) {
  दाखवा("प्रौढ")
}
```

---

## Syntax Examples

Each example shows MarathiLipi source on the left and the TypeScript it
produces on the right.

---

### Hello World

**MarathiLipi**
```ml
दाखवा("जय महाराष्ट्र")
```

**TypeScript**
```typescript
console.log("जय महाराष्ट्र")
```

---

### Variables

**MarathiLipi**
```ml
नाव व्यक्ती   = "अमोल"   // let
स्थिर नाव PI  = 3.14      // const (two-word phrase)
कायम MAX       = 100       // const (alias)
जुने नाव x    = 0         // var   (two-word phrase)
```

**TypeScript**
```typescript
let व्यक्ती   = "अमोल"
const PI       = 3.14
const MAX      = 100
var x          = 0
```

---

### If / Else

**MarathiLipi**
```ml
नाव वय = 25

जर (वय > 18) {
  दाखवा("प्रौढ")
} नाहीतर {
  दाखवा("लहान")
}
```

**TypeScript**
```typescript
let वय = 25

if (वय > 18) {
  console.log("प्रौढ")
} else {
  console.log("लहान")
}
```

---

### Switch / Case

**MarathiLipi**
```ml
निवडा (वय) {
  प्रकरण 18:
    दाखवा("अठरा")
    थांब
  मूळ:
    दाखवा("इतर")
}
```

**TypeScript**
```typescript
switch (वय) {
  case 18:
    console.log("अठरा")
    break
  default:
    console.log("इतर")
}
```

---

### Functions

**MarathiLipi**
```ml
काम स्वागत(व्यक्ती) {
  परत "नमस्कार " + व्यक्ती
}
```

**TypeScript**
```typescript
function स्वागत(व्यक्ती) {
  return "नमस्कार " + व्यक्ती
}
```

---

### Loops

**MarathiLipi**
```ml
पुन्हा (नाव i = 0; i < 5; i++) {
  दाखवा(i)
}
```

**TypeScript**
```typescript
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

---

### Async / Await

**MarathiLipi**
```ml
समकाल काम डेटाआणा() {
  नाव परिणाम = प्रतीक्षा fetch("/api")
  दाखवा(परिणाम)
}
```

**TypeScript**
```typescript
async function डेटाआणा() {
  let परिणाम = await fetch("/api")
  console.log(परिणाम)
}
```

---

### Classes

**MarathiLipi**
```ml
प्रकार प्राणी {
  निर्माता(व्यक्ती) {
    हा.व्यक्ती = व्यक्ती
  }
}
```

**TypeScript**
```typescript
class प्राणी {
  constructor(व्यक्ती) {
    this.व्यक्ती = व्यक्ती
  }
}
```

---

### Error Handling

**MarathiLipi**
```ml
प्रयत्न {
  दाखवा("धोकादायक कोड")
} पकडा (अडचण) {
  चूक(अडचण.message)
} शेवटी {
  दाखवा("शेवट")
}
```

**TypeScript**
```typescript
try {
  console.log("धोकादायक कोड")
} catch (अडचण) {
  console.error(अडचण.message)
} finally {
  console.log("शेवट")
}
```

---

### Imports / Exports

**MarathiLipi**
```ml
आणा { add } पासून "./utils"
द्या काम greet() {}
मूळ द्या काम main() {}
```

**TypeScript**
```typescript
import { add } from "./utils"
export function greet() {}
export default function main() {}
```

---

### TypeScript Types

**MarathiLipi**
```ml
अंतरफलक IUser {
  वय: number
}

प्रकारघोषणा ID = string | number
```

**TypeScript**
```typescript
interface IUser {
  वय: number
}

type ID = string | number
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

