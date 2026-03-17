import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
import KeywordTable from "@/components/KeywordTable";
import DocSection from "@/components/DocSection";
export { generateStaticParams } from "@/i18n/params";

export default async function VariablesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const v = content.variables;
  const d = content.docs;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {v.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">{v.desc}</p>

      <KeywordTable
        heading={d.keywordTable}
        marathilipiCol={d.marathilipiCol}
        typescriptCol={d.typescriptCol}
        rows={[
          { ml: "नाव", ts: "let" },
          { ml: "स्थिर नाव / कायम", ts: "const" },
          { ml: "जुने नाव", ts: "var" },
        ]}
      />

      <DocSection title="let — नाव" description={v.letDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`नाव वय = 25\nनाव शहर = "पुणे"`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`let वय = 25\nlet शहर = "पुणे"`}
          />
        </div>
      </DocSection>

      <DocSection title="const — स्थिर नाव / कायम" description={v.constDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`स्थिर नाव PI = 3.14\nकायम MAX = 100`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`const PI = 3.14\nconst MAX = 100`}
          />
        </div>
      </DocSection>

      <DocSection title="var — जुने नाव" description={v.varDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock title="MarathiLipi" code={`जुने नाव x = 10`} />
          <CodeBlock title={d.equivalentTs} code={`var x = 10`} />
        </div>
      </DocSection>
    </div>
  );
}
