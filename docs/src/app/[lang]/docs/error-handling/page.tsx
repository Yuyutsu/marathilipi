import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
import KeywordTable from "@/components/KeywordTable";
import DocSection from "@/components/DocSection";
export { generateStaticParams } from "@/i18n/params";

export default async function ErrorHandlingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const eh = content.errorHandling;
  const d = content.docs;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {eh.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">{eh.desc}</p>

      <KeywordTable
        heading={d.keywordTable}
        marathilipiCol={d.marathilipiCol}
        typescriptCol={d.typescriptCol}
        rows={[
          { ml: "प्रयत्न", ts: "try" },
          { ml: "पकडा", ts: "catch" },
          { ml: "शेवटी", ts: "finally" },
          { ml: "फेका", ts: "throw" },
        ]}
      />

      <DocSection title={eh.tryTitle} description={eh.tryDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`प्रयत्न {\n  नाव डेटा = JSON.parse(इनपुट)\n  दाखवा(डेटा)\n}\nपकडा (त्रुटी) {\n  चूक("पार्सिंग अयशस्वी: " + त्रुटी)\n}\nशेवटी {\n  दाखवा("पूर्ण")\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`try {\n  let डेटा = JSON.parse(इनपुट)\n  console.log(डेटा)\n}\ncatch (त्रुटी) {\n  console.error("पार्सिंग अयशस्वी: " + त्रुटी)\n}\nfinally {\n  console.log("पूर्ण")\n}`}
          />
        </div>
      </DocSection>

      <DocSection title={eh.throwTitle} description={eh.throwDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`काम तपासा(मूल्य: number) {\n  जर (मूल्य < 0) {\n    फेका नवीन Error("ऋण मूल्य")\n  }\n  परत मूल्य\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`function तपासा(मूल्य: number) {\n  if (मूल्य < 0) {\n    throw new Error("ऋण मूल्य")\n  }\n  return मूल्य\n}`}
          />
        </div>
      </DocSection>
    </div>
  );
}
