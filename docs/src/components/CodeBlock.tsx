import React from "react";

interface CodeBlockProps {
  code: string;
  title?: string;
  language?: string;
}

export default function CodeBlock({ code, title }: CodeBlockProps) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden">
      {title && (
        <div className="px-4 py-2 text-xs font-medium text-zinc-400 border-b border-zinc-800 bg-zinc-900">
          {title}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-zinc-100">{code}</code>
      </pre>
    </div>
  );
}
