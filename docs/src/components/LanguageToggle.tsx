"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/i18n/content";

export default function LanguageToggle({ lang }: { lang: Lang }) {
  const pathname = usePathname();

  function switchedPath(target: Lang): string {
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "mr") {
      segments[1] = target;
    }
    return segments.join("/") || "/";
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-zinc-700 text-sm">
      <Link
        href={switchedPath("mr")}
        className={`px-3 py-1.5 rounded-l-md transition-colors ${
          lang === "mr"
            ? "bg-zinc-700 text-white"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        मराठी
      </Link>
      <Link
        href={switchedPath("en")}
        className={`px-3 py-1.5 rounded-r-md transition-colors ${
          lang === "en"
            ? "bg-zinc-700 text-white"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        English
      </Link>
    </div>
  );
}
