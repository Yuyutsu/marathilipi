import React from "react";

interface KeywordTableProps {
  heading: string;
  marathilipiCol: string;
  typescriptCol: string;
  rows: { ml: string; ts: string }[];
}

export default function KeywordTable({
  heading,
  marathilipiCol,
  typescriptCol,
  rows,
}: KeywordTableProps) {
  return (
    <div className="my-6">
      <h3 className="text-lg font-semibold text-white mb-3">{heading}</h3>
      <div className="overflow-x-auto rounded-lg border border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900">
              <th className="px-4 py-3 text-left font-medium text-zinc-300">
                {marathilipiCol}
              </th>
              <th className="px-4 py-3 text-left font-medium text-zinc-300">
                {typescriptCol}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-zinc-800/50 last:border-0"
              >
                <td className="px-4 py-2.5 font-mono text-amber-400">
                  {row.ml}
                </td>
                <td className="px-4 py-2.5 font-mono text-blue-400">
                  {row.ts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
