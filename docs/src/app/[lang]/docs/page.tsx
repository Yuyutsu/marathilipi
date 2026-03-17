import Link from "next/link";
import { t, type Lang } from "@/i18n/content";
export { generateStaticParams } from "@/i18n/params";

const sections = [
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

export default async function DocsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {content.docs.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-8">{content.docs.subtitle}</p>
      <p className="text-zinc-400 mb-10 leading-relaxed">
        {content.docs.overviewDesc}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map(({ key, path }) => (
          <Link
            key={key}
            href={`/${lang}/docs/${path}`}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all group"
          >
            <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
              {content.sidebar[key]}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
