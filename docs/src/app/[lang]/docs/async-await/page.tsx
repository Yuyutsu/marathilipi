import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
import KeywordTable from "@/components/KeywordTable";
import DocSection from "@/components/DocSection";
export { generateStaticParams } from "@/i18n/params";

export default async function AsyncAwaitPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const aa = content.asyncAwait;
  const d = content.docs;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {aa.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">{aa.desc}</p>

      <KeywordTable
        heading={d.keywordTable}
        marathilipiCol={d.marathilipiCol}
        typescriptCol={d.typescriptCol}
        rows={[
          { ml: "समकाल / असिन्क्रॉन", ts: "async" },
          { ml: "प्रतीक्षा", ts: "await" },
        ]}
      />

      <DocSection title={aa.asyncTitle} description={aa.asyncDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`समकाल काम डेटा_आणा() {\n  नाव प्रतिसाद = प्रतीक्षा fetch("/api/data")\n  नाव डेटा = प्रतीक्षा प्रतिसाद.json()\n  परत डेटा\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`async function डेटा_आणा() {\n  let प्रतिसाद = await fetch("/api/data")\n  let डेटा = await प्रतिसाद.json()\n  return डेटा\n}`}
          />
        </div>
      </DocSection>

      <DocSection title={aa.awaitTitle} description={aa.awaitDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`समकाल काम मुख्य() {\n  नाव निकाल = प्रतीक्षा डेटा_आणा()\n  दाखवा(निकाल)\n}\n\nमुख्य()`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`async function मुख्य() {\n  let निकाल = await डेटा_आणा()\n  console.log(निकाल)\n}\n\nमुख्य()`}
          />
        </div>
      </DocSection>
    </div>
  );
}
