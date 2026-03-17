import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
import KeywordTable from "@/components/KeywordTable";
import DocSection from "@/components/DocSection";
export { generateStaticParams } from "@/i18n/params";

export default async function ModulesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const m = content.modules;
  const d = content.docs;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {m.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">{m.desc}</p>

      <KeywordTable
        heading={d.keywordTable}
        marathilipiCol={d.marathilipiCol}
        typescriptCol={d.typescriptCol}
        rows={[
          { ml: "आणा", ts: "import" },
          { ml: "पासून", ts: "from" },
          { ml: "द्या", ts: "export" },
          { ml: "मूळ द्या", ts: "export default" },
        ]}
      />

      <DocSection title={m.importTitle} description={m.importDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`आणा { बेरीज } पासून "./utils"`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`import { बेरीज } from "./utils"`}
          />
        </div>
      </DocSection>

      <DocSection title={m.exportTitle} description={m.exportDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`द्या काम बेरीज(a: number, b: number) {\n  परत a + b\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`export function बेरीज(a: number, b: number) {\n  return a + b\n}`}
          />
        </div>
      </DocSection>

      <DocSection title={m.defaultExportTitle} description={m.defaultExportDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`मूळ द्या काम मुख्य() {\n  दाखवा("मुख्य कार्य")\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`export default function मुख्य() {\n  console.log("मुख्य कार्य")\n}`}
          />
        </div>
      </DocSection>
    </div>
  );
}
