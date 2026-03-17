import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
import KeywordTable from "@/components/KeywordTable";
import DocSection from "@/components/DocSection";
export { generateStaticParams } from "@/i18n/params";

export default async function FunctionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const f = content.functions;
  const d = content.docs;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {f.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">{f.desc}</p>

      <KeywordTable
        heading={d.keywordTable}
        marathilipiCol={d.marathilipiCol}
        typescriptCol={d.typescriptCol}
        rows={[
          { ml: "काम", ts: "function" },
          { ml: "परत", ts: "return" },
          { ml: "वेढा", ts: "yield" },
        ]}
      />

      <DocSection title={f.declareTitle} description={f.declareDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`काम नमस्कार(नाव_पॅरामीटर: string) {\n  दाखवा("नमस्कार " + नाव_पॅरामीटर)\n}\n\nनमस्कार("राज")`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`function नमस्कार(नाव_पॅरामीटर: string) {\n  console.log("नमस्कार " + नाव_पॅरामीटर)\n}\n\nनमस्कार("राज")`}
          />
        </div>
      </DocSection>

      <DocSection title={f.returnTitle} description={f.returnDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`काम बेरीज(a: number, b: number) {\n  परत a + b\n}\n\nनाव निकाल = बेरीज(3, 4)\nदाखवा(निकाल)`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`function बेरीज(a: number, b: number) {\n  return a + b\n}\n\nlet निकाल = बेरीज(3, 4)\nconsole.log(निकाल)`}
          />
        </div>
      </DocSection>

      <DocSection title={f.yieldTitle} description={f.yieldDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`काम* संख्या() {\n  वेढा 1\n  वेढा 2\n  वेढा 3\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`function* संख्या() {\n  yield 1\n  yield 2\n  yield 3\n}`}
          />
        </div>
      </DocSection>
    </div>
  );
}
