# MarathiLipi Language Support

> **VS Code extension** — Syntax highlighting for MarathiLipi (`.ml` files).

MarathiLipi is a programming language that allows developers to write TypeScript
using **Marathi (Devanagari) keywords**.  This extension provides:

- ✅ Full syntax highlighting for all MarathiLipi keywords
- ✅ Automatic language detection for `.ml` files
- ✅ Bracket matching (`{}`, `[]`, `()`)
- ✅ Auto-closing pairs for brackets and quotes
- ✅ Comment support (`//` and `/* */`)
- ✅ Indentation rules

---

## Example

```ml
नाव वय = 25

जर (वय > 18) {
  दाखवा("प्रौढ")
}
```

```ml
काम बेरीज(अ, ब) {
  परत अ + ब
}

नाव निकाल = बेरीज(10, 20)
दाखवा(निकाल)
```

---

## Supported Keywords

### Variable Declarations

| MarathiLipi | TypeScript |
|-------------|------------|
| `नाव`       | `let`      |
| `स्थिर नाव` | `const`    |
| `जुने नाव`  | `var`      |
| `कायम`      | `const`    |

### Control Flow

| MarathiLipi | TypeScript |
|-------------|------------|
| `जर`        | `if`       |
| `नाहीतर`    | `else`     |
| `निवडा`     | `switch`   |
| `प्रकरण`    | `case`     |
| `मूळ`       | `default`  |

### Loops

| MarathiLipi  | TypeScript |
|--------------|------------|
| `पुन्हा`    | `for`      |
| `जोपर्यंत`  | `while`    |
| `करा`        | `do`       |
| `थांब`       | `break`    |
| `पुढे`       | `continue` |

### Functions

| MarathiLipi  | TypeScript |
|--------------|------------|
| `काम`        | `function` |
| `परत`        | `return`   |
| `समकाल`      | `async`    |
| `प्रतीक्षा` | `await`    |

### Classes

| MarathiLipi  | TypeScript    |
|--------------|---------------|
| `प्रकार`     | `class`       |
| `वाढवा`      | `extends`     |
| `नवीन`       | `new`         |
| `हा`          | `this`        |
| `पालक`       | `super`       |
| `निर्माता`   | `constructor` |

### Imports / Exports

| MarathiLipi  | TypeScript       |
|--------------|------------------|
| `आणा`        | `import`         |
| `पासून`      | `from`           |
| `द्या`       | `export`         |
| `मूळ द्या`   | `export default` |

### Error Handling

| MarathiLipi | TypeScript |
|-------------|------------|
| `प्रयत्न`  | `try`      |
| `पकडा`      | `catch`    |
| `शेवटी`     | `finally`  |
| `फेका`      | `throw`    |

### Console

| MarathiLipi | TypeScript      |
|-------------|-----------------|
| `दाखवा`     | `console.log`   |
| `सांगा`     | `console.log`   |
| `छापा`      | `console.log`   |
| `चूक`       | `console.error` |
| `सूचना`     | `console.warn`  |
| `माहिती`    | `console.info`  |

---

## Installation

### From VSIX (local install)

```bash
# Build the extension package
cd vscode-extension
npm install
npm run package   # produces marathilipi-language-0.1.0.vsix

# Install in VS Code
code --install-extension marathilipi-language-0.1.0.vsix
```

### Development (load unpacked)

1. Open the `vscode-extension/` folder in VS Code.
2. Press **F5** — this opens a new Extension Development Host window.
3. Open any `.ml` file to see syntax highlighting.

---

## File Extension

This extension activates automatically for any file with the `.ml` extension.

---

## Running MarathiLipi Code

Use the **CLI** or the **browser playground** to execute `.ml` files:

```bash
# CLI
npm install -g marathilipi
marathilipi run hello.ml

# Browser playground
open playground/index.html
```

---

## License

MIT
