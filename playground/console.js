/**
 * console.js
 *
 * Intercepts console.log / console.error / console.warn / console.info and
 * redirects their output to the playground output panel (#console-output).
 *
 * Usage:
 *   setupConsoleCapture();   // call once before running user code
 *   restoreConsole();        // called automatically; also exposed globally
 */

(function () {
  const _orig = {
    log:   console.log.bind(console),
    error: console.error.bind(console),
    warn:  console.warn.bind(console),
    info:  console.info.bind(console),
  };

  /**
   * Format one console argument to a display string.
   * Objects / arrays are pretty-printed with JSON.stringify.
   */
  function formatArg(arg) {
    if (arg === null)      return "null";
    if (arg === undefined) return "undefined";
    if (typeof arg === "object") {
      try { return JSON.stringify(arg, null, 2); }
      catch (_) { return String(arg); }
    }
    return String(arg);
  }

  /**
   * Append a line to the output panel.
   * @param {string[]} args  - console arguments
   * @param {"log"|"error"|"warn"|"info"} level
   */
  function appendLine(args, level) {
    const panel = document.getElementById("console-output");
    if (!panel) return;

    const line = document.createElement("div");
    line.className = `console-line console-${level}`;
    line.textContent = args.map(formatArg).join(" ");
    panel.appendChild(line);
    panel.scrollTop = panel.scrollHeight;
  }

  /** Install the capture hooks. */
  function setupConsoleCapture() {
    console.log = function (...args) {
      _orig.log(...args);
      appendLine(args, "log");
    };
    console.error = function (...args) {
      _orig.error(...args);
      appendLine(args, "error");
    };
    console.warn = function (...args) {
      _orig.warn(...args);
      appendLine(args, "warn");
    };
    console.info = function (...args) {
      _orig.info(...args);
      appendLine(args, "info");
    };
  }

  /** Restore original console methods. */
  function restoreConsole() {
    console.log   = _orig.log;
    console.error = _orig.error;
    console.warn  = _orig.warn;
    console.info  = _orig.info;
  }

  window.setupConsoleCapture = setupConsoleCapture;
  window.restoreConsole      = restoreConsole;
})();
