/**
 * main.js
 *
 * Bootstraps the MarathiLipi Playground:
 *   1. Waits for Monaco Editor to load via the AMD loader.
 *   2. Registers the "marathilipi" language + theme (language.js).
 *   3. Creates the editor with the default example.
 *   4. Wires up Run, Clear, Copy buttons and Ctrl+Enter shortcut.
 *   5. Implements a drag-to-resize handle between the two panes.
 */

// ── Default example loaded into the editor on first open ──────────────────
const DEFAULT_CODE = `नाव व्यक्ती = "अमोल"

दाखवा("जय महाराष्ट्र")

जर (व्यक्ती) {
  दाखवा("नमस्कार " + व्यक्ती)
}`;

// ── State ──────────────────────────────────────────────────────────────────
let editor        = null;
let runCount      = 0;
let lineCount     = 0;

// ── Helpers ────────────────────────────────────────────────────────────────

function setStatus(msg) {
  const el = document.getElementById("status-msg");
  if (el) el.textContent = msg;
}

function updateLineCount() {
  const el = document.getElementById("line-count");
  if (el) el.textContent = lineCount > 0 ? `${lineCount} line${lineCount !== 1 ? "s" : ""}` : "";
}

function showToast(msg, duration = 2000) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}

function appendConsole(html, cssClass) {
  const panel = document.getElementById("console-output");
  if (!panel) return;

  // Remove empty-state placeholder if present
  const empty = panel.querySelector(".console-empty");
  if (empty) empty.remove();

  const el = document.createElement("div");
  el.className = "console-line " + (cssClass || "console-log");
  el.textContent = html;
  panel.appendChild(el);
  lineCount++;
  updateLineCount();
  panel.scrollTop = panel.scrollHeight;
}

function appendSeparator() {
  const panel = document.getElementById("console-output");
  if (!panel) return;
  const hr = document.createElement("hr");
  hr.className = "console-separator";
  panel.appendChild(hr);
}

function appendMeta(msg) {
  const panel = document.getElementById("console-output");
  if (!panel) return;
  const el = document.createElement("div");
  el.className = "console-line console-meta";
  el.textContent = msg;
  panel.appendChild(el);
}

// ── Run ────────────────────────────────────────────────────────────────────

function runCode() {
  if (!editor) return;

  const source = editor.getValue();
  if (!source.trim()) {
    appendConsole("⚠ Editor is empty.", "console-warn");
    return;
  }

  // Visual separator between runs (after the first one)
  if (runCount > 0) appendSeparator();
  runCount++;

  const timestamp = new Date().toLocaleTimeString();
  appendMeta(`▶ Run #${runCount}  ${timestamp}`);

  let jsCode;
  try {
    jsCode = window.transpileMarathi(source);
  } catch (transpileErr) {
    appendConsole("Transpile error: " + transpileErr.message, "console-error");
    setStatus("⚠ Transpile error");
    return;
  }

  // Capture console output
  window.setupConsoleCapture();

  try {
    // eslint-disable-next-line no-new-func
    new Function(jsCode)();
    setStatus(`✓ Ran successfully at ${timestamp}`);
  } catch (runtimeErr) {
    appendConsole("Runtime error: " + runtimeErr.message, "console-error");
    setStatus("⚠ Runtime error");
  } finally {
    window.restoreConsole();
  }
}

// ── Clear console ──────────────────────────────────────────────────────────

function clearConsole() {
  const panel = document.getElementById("console-output");
  if (!panel) return;
  panel.innerHTML = '<div class="console-empty">Console cleared. Press Run (or Ctrl+Enter) to execute.</div>';
  lineCount = 0;
  updateLineCount();
  setStatus("Console cleared");
}

// ── Copy output ────────────────────────────────────────────────────────────

function copyOutput() {
  const panel = document.getElementById("console-output");
  if (!panel) return;
  const text = Array.from(panel.querySelectorAll(".console-line"))
    .map(el => el.textContent)
    .join("\n");
  if (!text.trim()) {
    showToast("Nothing to copy.");
    return;
  }
  navigator.clipboard.writeText(text).then(
    () => showToast("✓ Output copied!"),
    () => showToast("⚠ Copy failed — check browser permissions.")
  );
}

// ── Resizable split pane ───────────────────────────────────────────────────

function setupResizeHandle() {
  const handle      = document.getElementById("resize-handle");
  const editorPane  = document.getElementById("editor-pane");
  const main        = document.getElementById("main");
  if (!handle || !editorPane || !main) return;

  let dragging = false;
  let startX   = 0;
  let startW   = 0;

  handle.addEventListener("mousedown", (e) => {
    dragging = true;
    startX   = e.clientX;
    startW   = editorPane.getBoundingClientRect().width;
    handle.classList.add("dragging");
    document.body.style.cursor    = "col-resize";
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const dx       = e.clientX - startX;
    const totalW   = main.getBoundingClientRect().width;
    const newW     = Math.min(Math.max(startW + dx, 200), totalW - 200);
    editorPane.style.width = newW + "px";
    if (editor) editor.layout();
  });

  document.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
    handle.classList.remove("dragging");
    document.body.style.cursor     = "";
    document.body.style.userSelect = "";
  });
}

// ── Monaco bootstrap ───────────────────────────────────────────────────────

require.config({
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.47.0/min/vs",
  },
});

require(["vs/editor/editor.main"], function (monaco) {
  // Register custom language + theme
  window.registerMarathiLipiLanguage(monaco);

  // Create editor
  editor = monaco.editor.create(
    document.getElementById("editor-container"),
    {
      value:             DEFAULT_CODE,
      language:          "marathilipi",
      theme:             "marathilipi-dark",
      fontSize:          14,
      automaticLayout:   true,
      minimap:           { enabled: false },
      scrollBeyondLastLine: false,
      lineNumbers:       "on",
      roundedSelection:  false,
      wordWrap:          "on",
      tabSize:           2,
      fontFamily:        "'Cascadia Code', 'Fira Code', 'JetBrains Mono', Consolas, monospace",
      fontLigatures:     true,
    }
  );

  // Ctrl+Enter → Run
  editor.addCommand(
    monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
    runCode
  );

  // Toolbar buttons
  document.getElementById("btn-run").addEventListener("click",  runCode);
  document.getElementById("btn-clear").addEventListener("click", clearConsole);
  document.getElementById("btn-copy").addEventListener("click",  copyOutput);

  // Status bar cursor position
  editor.onDidChangeCursorPosition((e) => {
    const pos = e.position;
    const el  = document.getElementById("cursor-pos");
    if (el) el.textContent = `Ln ${pos.lineNumber}, Col ${pos.column}`;
  });

  // Resize handle
  setupResizeHandle();

  setStatus("Ready");
});
