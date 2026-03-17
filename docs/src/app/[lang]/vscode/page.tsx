import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
export { generateStaticParams } from "@/i18n/params";

export default async function VSCodePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const vs = content.vscode;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {vs.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-12">{vs.subtitle}</p>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">
          {vs.installTitle}
        </h2>
        <p className="text-zinc-400 mb-4">{vs.installDesc}</p>
        <CodeBlock
          title="Terminal"
          code="code --install-extension marathilipi-language"
        />
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          {vs.featuresTitle}
        </h2>
        <div className="space-y-8">
          <FeatureBlock title={vs.syntaxTitle} description={vs.syntaxDesc} />
          <FeatureBlock
            title={vs.autocompleteTitle}
            description={vs.autocompleteDesc}
          />
          <FeatureBlock title={vs.snippetsTitle} description={vs.snippetsDesc} />
          <FeatureBlock
            title={vs.fileAssocTitle}
            description={vs.fileAssocDesc}
          />
        </div>
      </section>
    </div>
  );
}

function FeatureBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}
