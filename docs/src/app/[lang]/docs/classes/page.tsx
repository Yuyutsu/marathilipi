import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
import KeywordTable from "@/components/KeywordTable";
import DocSection from "@/components/DocSection";
export { generateStaticParams } from "@/i18n/params";

export default async function ClassesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const c = content.classes;
  const d = content.docs;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {c.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">{c.desc}</p>

      <KeywordTable
        heading={d.keywordTable}
        marathilipiCol={d.marathilipiCol}
        typescriptCol={d.typescriptCol}
        rows={[
          { ml: "प्रकार", ts: "class" },
          { ml: "वाढवा", ts: "extends" },
          { ml: "नवीन", ts: "new" },
          { ml: "हा", ts: "this" },
          { ml: "पालक", ts: "super" },
          { ml: "निर्माता", ts: "constructor" },
          { ml: "सार्वजनिक", ts: "public" },
          { ml: "खाजगी", ts: "private" },
          { ml: "संरक्षित", ts: "protected" },
          { ml: "स्थिरसदस्य", ts: "static" },
        ]}
      />

      <DocSection title={c.classTitle} description={c.classDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`प्रकार व्यक्ती {\n  निर्माता(सार्वजनिक नाव_फील्ड: string) {}\n\n  काम अभिवादन() {\n    दाखवा("नमस्कार " + हा.नाव_फील्ड)\n  }\n}\n\nनाव राज = नवीन व्यक्ती("राज")\nराज.अभिवादन()`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`class व्यक्ती {\n  constructor(public नाव_फील्ड: string) {}\n\n  अभिवादन() {\n    console.log("नमस्कार " + this.नाव_फील्ड)\n  }\n}\n\nlet राज = new व्यक्ती("राज")\nराज.अभिवादन()`}
          />
        </div>
      </DocSection>

      <DocSection title={c.extendsTitle} description={c.extendsDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`प्रकार विद्यार्थी वाढवा व्यक्ती {\n  निर्माता(नाव_फील्ड: string, खाजगी वर्ग: number) {\n    पालक(नाव_फील्ड)\n  }\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`class विद्यार्थी extends व्यक्ती {\n  constructor(नाव_फील्ड: string, private वर्ग: number) {\n    super(नाव_फील्ड)\n  }\n}`}
          />
        </div>
      </DocSection>

      <DocSection title={c.modifiersTitle} description={c.modifiersDesc}>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            title="MarathiLipi"
            code={`प्रकार खाते {\n  सार्वजनिक मालक: string\n  खाजगी शिल्लक: number\n  संरक्षित प्रकार_खाते: string\n}`}
          />
          <CodeBlock
            title={d.equivalentTs}
            code={`class खाते {\n  public मालक: string\n  private शिल्लक: number\n  protected प्रकार_खाते: string\n}`}
          />
        </div>
      </DocSection>
    </div>
  );
}
