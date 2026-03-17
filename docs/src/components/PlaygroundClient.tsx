"use client";

import { useState, useCallback } from "react";
import { t, type Lang } from "@/i18n/content";
import { browserTranspile } from "@/lib/transpiler";

const DEFAULT_CODE = `\u0928\u093E\u0935 \u0938\u093E\u0939\u0947\u092C = "\u0930\u093E\u091C\u0938\u093E\u0939\u0947\u092C"
\u0938\u093E\u0902\u0917\u093E("\u091C\u092F \u092E\u0939\u093E\u0930\u093E\u0937\u094D\u091F\u094D\u0930 " + \u0938\u093E\u0939\u0947\u092C)`;

export default function PlaygroundClient({ lang }: { lang: Lang }) {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const content = t(lang);
  const pg = content.playground;

  const handleRun = useCallback(() => {
    const jsCode = browserTranspile(code);
    const logs: string[] = [];
    const savedLog = console.log;
    const savedError = console.error;
    const savedWarn = console.warn;
    const savedInfo = console.info;
    console.log = (...a: unknown[]) => { logs.push(a.map(String).join(" ")); };
    console.error = (...a: unknown[]) => { logs.push("[ERROR] " + a.map(String).join(" ")); };
    console.warn = (...a: unknown[]) => { logs.push("[WARN] " + a.map(String).join(" ")); };
    console.info = (...a: unknown[]) => { logs.push("[INFO] " + a.map(String).join(" ")); };
    try {
      new Function(jsCode)();
    } catch (e) {
      logs.push("[ERROR] " + String(e));
    } finally {
      console.log = savedLog;
      console.error = savedError;
      console.warn = savedWarn;
      console.info = savedInfo;
    }
    setOutput(logs.join("\n"));
  }, [code]);

  const handleCopy = useCallback(() => {
    if (!output.trim()) return;
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [output]);

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 4rem)" }}>
      <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">{pg.title}</h1>
          <p className="text-sm text-zinc-500">{pg.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={handleRun} className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-500 transition-colors">{pg.run}</button>
          <button onClick={handleCopy} className="px-4 py-2 rounded-md border border-zinc-700 text-zinc-300 text-sm font-medium hover:bg-zinc-800 transition-colors">{copied ? pg.copied : pg.copy}</button>
        </div>
      </div>
      <div className="flex-1 grid md:grid-cols-2 divide-x divide-zinc-800 overflow-hidden">
        <div className="flex flex-col overflow-hidden">
          <div className="px-4 py-2 text-xs font-medium text-zinc-500 border-b border-zinc-800 bg-zinc-900">{pg.editorLabel}</div>
          <textarea value={code} onChange={(e) => setCode(e.target.value)} spellCheck={false} className="flex-1 w-full p-4 bg-zinc-950 text-zinc-100 font-mono text-sm leading-relaxed resize-none outline-none" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="px-4 py-2 text-xs font-medium text-zinc-500 border-b border-zinc-800 bg-zinc-900">{pg.outputLabel}</div>
          {output ? (
            <pre className="flex-1 p-4 bg-zinc-950 text-green-400 font-mono text-sm leading-relaxed overflow-auto">{output}</pre>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-zinc-950 text-zinc-600 text-sm">{pg.consoleEmpty}</div>
          )}
        </div>
      </div>
    </div>
  );
}
