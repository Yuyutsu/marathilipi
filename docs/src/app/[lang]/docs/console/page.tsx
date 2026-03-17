import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
import KeywordTable from "@/components/KeywordTable";
import DocSection from "@/components/DocSection";
export { generateStaticParams } from "@/i18n/params";

export default async function ConsolePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const cp = content.consolePage;
  const d = content.docs;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {cp.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">{cp.desc}</p>

      <KeywordTable
        heading={d.keywordTable}
        marathilipiCol={d.marathilipiCol}
        typescriptCol={d.typescriptCol}
        rows={[
          { ml: "दाखवा / सांगा / सांग / छापा", ts: "console.log" },
          { ml: "चूक", ts: "console.error" },
          { ml: "सूचना", ts: "console.warn" },
          { ml: "माहिती", ts: "console.info" },
        ]}
      />

      <DocSection title={cp.logTitle} description={cp.logDesc}>
        <p className="text-sm text-zinc-500 mb-4">{cp.aliasNote}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`दाखवा("पहिला संदेश")\nसांगा("दुसरा संदेश")\nसांग("तिसरा संदेश")\nछापा("चौथा संदेश")`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`console.log("पहिला संदेश")\nconsole.log("दुसरा संदेश")\nconsole.log("तिसरा संदेश")\nconsole.log("चौथा संदेश")`}
          />
        </div>
      </DocSection>

      <DocSection title={cp.errorTitle} description={cp.errorDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock title="MarathiLipi" code={`चूक("त्रुटी आली!")`} />
          <CodeBlock
            title={d.equivalentTs}
            code={`console.error("त्रुटी आली!")`}
          />
        </div>
      </DocSection>

      <DocSection title={cp.warnTitle} description={cp.warnDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock title="MarathiLipi" code={`सूचना("सावधान!")`} />
          <CodeBlock
            title={d.equivalentTs}
            code={`console.warn("सावधान!")`}
          />
        </div>
      </DocSection>

      <DocSection title={cp.infoTitle} description={cp.infoDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock title="MarathiLipi" code={`माहिती("आवृत्ती 1.0")`} />
          <CodeBlock
            title={d.equivalentTs}
            code={`console.info("आवृत्ती 1.0")`}
          />
        </div>
      </DocSection>
    </div>
  );
}
