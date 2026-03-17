import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
import KeywordTable from "@/components/KeywordTable";
import DocSection from "@/components/DocSection";
export { generateStaticParams } from "@/i18n/params";

export default async function LoopsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const l = content.loops;
  const d = content.docs;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {l.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">{l.desc}</p>

      <KeywordTable
        heading={d.keywordTable}
        marathilipiCol={d.marathilipiCol}
        typescriptCol={d.typescriptCol}
        rows={[
          { ml: "पुन्हा", ts: "for" },
          { ml: "जोपर्यंत", ts: "while" },
          { ml: "करा", ts: "do" },
          { ml: "थांब", ts: "break" },
          { ml: "पुढे", ts: "continue" },
        ]}
      />

      <DocSection title={l.forTitle} description={l.forDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`पुन्हा (नाव i = 0; i < 5; i++) {\n  दाखवा(i)\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`for (let i = 0; i < 5; i++) {\n  console.log(i)\n}`}
          />
        </div>
      </DocSection>

      <DocSection title={l.whileTitle} description={l.whileDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`नाव i = 0\nजोपर्यंत (i < 3) {\n  दाखवा(i)\n  i++\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`let i = 0\nwhile (i < 3) {\n  console.log(i)\n  i++\n}`}
          />
        </div>
      </DocSection>

      <DocSection title={l.doWhileTitle} description={l.doWhileDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`नाव i = 0\nकरा {\n  दाखवा(i)\n  i++\n} जोपर्यंत (i < 3)`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`let i = 0\ndo {\n  console.log(i)\n  i++\n} while (i < 3)`}
          />
        </div>
      </DocSection>

      <DocSection title={l.breakContinueTitle} description={l.breakContinueDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`पुन्हा (नाव i = 0; i < 10; i++) {\n  जर (i === 5) थांब\n  जर (i % 2 === 0) पुढे\n  दाखवा(i)\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`for (let i = 0; i < 10; i++) {\n  if (i === 5) break\n  if (i % 2 === 0) continue\n  console.log(i)\n}`}
          />
        </div>
      </DocSection>
    </div>
  );
}
