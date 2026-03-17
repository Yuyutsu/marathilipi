"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t, type Lang } from "@/i18n/content";

const docSections = [
  { key: "variables", path: "variables" },
  { key: "controlFlow", path: "control-flow" },
  { key: "loops", path: "loops" },
  { key: "functions", path: "functions" },
  { key: "classes", path: "classes" },
  { key: "asyncAwait", path: "async-await" },
  { key: "modules", path: "modules" },
  { key: "errorHandling", path: "error-handling" },
  { key: "console", path: "console" },
] as const;

export default function Sidebar({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const content = t(lang);

  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-zinc-800 bg-zinc-950 overflow-y-auto">
      <nav className="p-4 space-y-6">
        <div>
          <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
            {content.sidebar.languageReference}
          </h3>
          <ul className="space-y-0.5">
            {docSections.map(({ key, path }) => {
              const href = `/${lang}/docs/${path}`;
              const isActive = pathname === href;
              return (
                <li key={key}>
                  <Link
                    href={href}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive
                        ? "bg-zinc-800 text-white font-medium"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                    }`}
                  >
                    {content.sidebar[key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
