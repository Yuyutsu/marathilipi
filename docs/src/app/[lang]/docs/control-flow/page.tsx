import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
import KeywordTable from "@/components/KeywordTable";
import DocSection from "@/components/DocSection";
export { generateStaticParams } from "@/i18n/params";

export default async function ControlFlowPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const cf = content.controlFlow;
  const d = content.docs;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {cf.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">{cf.desc}</p>

      <KeywordTable
        heading={d.keywordTable}
        marathilipiCol={d.marathilipiCol}
        typescriptCol={d.typescriptCol}
        rows={[
          { ml: "जर", ts: "if" },
          { ml: "नाहीतर", ts: "else" },
          { ml: "निवडा", ts: "switch" },
          { ml: "प्रकरण", ts: "case" },
          { ml: "मूळ", ts: "default" },
        ]}
      />

      <DocSection title={cf.ifElseTitle} description={cf.ifElseDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`नाव वय = 25\n\nजर (वय > 18) {\n  दाखवा("प्रौढ")\n}\nनाहीतर {\n  दाखवा("लहान")\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`let वय = 25\n\nif (वय > 18) {\n  console.log("प्रौढ")\n}\nelse {\n  console.log("लहान")\n}`}
          />
        </div>
      </DocSection>

      <DocSection title={cf.switchTitle} description={cf.switchDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`नाव दिवस = "सोमवार"\n\nनिवडा (दिवस) {\n  प्रकरण "सोमवार":\n    दाखवा("आठवड्याची सुरुवात")\n    थांब\n  मूळ:\n    दाखवा("इतर दिवस")\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`let दिवस = "सोमवार"\n\nswitch (दिवस) {\n  case "सोमवार":\n    console.log("आठवड्याची सुरुवात")\n    break\n  default:\n    console.log("इतर दिवस")\n}`}
          />
        </div>
      </DocSection>
    </div>
  );
}
