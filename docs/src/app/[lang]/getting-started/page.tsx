import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
export { generateStaticParams } from "@/i18n/params";

export default async function GettingStartedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const gs = content.gettingStarted;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {gs.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-12">{gs.subtitle}</p>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">{gs.installTitle}</h2>
        <p className="text-zinc-400 mb-4">{gs.installDesc}</p>
        <CodeBlock code="npm install -g marathilipi" title="Terminal" />
      </section>

      {/* First Program */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">
          {gs.firstProgTitle}
        </h2>
        <p className="text-zinc-400 mb-4">{gs.firstProgDesc}</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <CodeBlock
            title="hello.ml"
            code={`चल नाव = "राजसाहेब"\nसांगा("नमस्कार " + नाव)`}
          />
          <CodeBlock
            title="TypeScript"
            code={`let नाव = "राजसाहेब"\nconsole.log("नमस्कार " + नाव)`}
          />
        </div>
      </section>

      {/* Running */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">{gs.runTitle}</h2>
        <p className="text-zinc-400 mb-4">{gs.runDesc}</p>
        <CodeBlock code="marathilipi run hello.ml" title="Terminal" />
        <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
          <p className="text-xs text-zinc-500 mb-1">{gs.outputTitle}</p>
          <pre className="text-sm text-green-400">नमस्कार राजसाहेब</pre>
        </div>
      </section>

      {/* CLI Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">{gs.cliTitle}</h2>
        <p className="text-zinc-400 mb-4">{gs.cliDesc}</p>
        <CodeBlock
          title="Terminal"
          code={`marathilipi hello.ml\nmarathilipi run hello.ml`}
        />
        <p className="text-zinc-400 mt-6 mb-4">{gs.cliVerboseDesc}</p>
        <CodeBlock
          title="Terminal"
          code="marathilipi run --verbose hello.ml"
        />
      </section>
    </div>
  );
}
