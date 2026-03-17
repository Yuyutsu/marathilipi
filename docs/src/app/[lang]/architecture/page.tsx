import { t, type Lang } from "@/i18n/content";
export { generateStaticParams } from "@/i18n/params";

export default async function ArchitecturePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);
  const arch = content.architecture;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {arch.title}
      </h1>
      <p className="text-lg text-zinc-400 mb-12">{arch.subtitle}</p>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">
          {arch.overviewTitle}
        </h2>
        <p className="text-zinc-400 leading-relaxed">{arch.overviewDesc}</p>
      </section>

      {/* Transpilation Flow */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          {arch.flowTitle}
        </h2>
        <div className="space-y-0">
          {arch.flowSteps.map((step, i) => (
            <div key={i} className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sm font-bold text-blue-400 shrink-0">
                  {i + 1}
                </div>
                {i < arch.flowSteps.length - 1 && (
                  <div className="w-px h-12 bg-zinc-800" />
                )}
              </div>
              <div className="pt-1.5 pb-8">
                <h3 className="text-base font-semibold text-white">
                  {step.label}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Keyword Resolution */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">
          {arch.keywordTitle}
        </h2>
        <p className="text-zinc-400 leading-relaxed">{arch.keywordDesc}</p>
      </section>

      {/* Alias Support */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">
          {arch.aliasTitle}
        </h2>
        <p className="text-zinc-400 leading-relaxed">{arch.aliasDesc}</p>
      </section>
    </div>
  );
}
