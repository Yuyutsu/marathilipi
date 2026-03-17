import Link from "next/link";
import { t, type Lang } from "@/i18n/content";
import CodeBlock from "@/components/CodeBlock";
export { generateStaticParams } from "@/i18n/params";

const mlCode = `चल नाव = "राजसाहेब"
सांगा("नमस्कार " + नाव)`;

const tsCode = `let नाव = "राजसाहेब"
console.log("नमस्कार " + नाव)`;

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = t(lang as Lang);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              {content.tagline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              {content.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/getting-started`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                {content.getStarted}
              </Link>
              <Link
                href={`/${lang}/playground`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-white transition-colors"
              >
                {content.tryPlayground}
              </Link>
            </div>
          </div>

          {/* Code comparison */}
          <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            <CodeBlock title={content.heroCodeTitle} code={mlCode} />
            <CodeBlock title={content.heroTsTitle} code={tsCode} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title={lang === "mr" ? "मराठी वाक्यरचना" : "Marathi Syntax"}
              description={
                lang === "mr"
                  ? "मराठीत परिचित कीवर्ड्स वापरून TypeScript कोड लिहा."
                  : "Write TypeScript code using familiar keywords in Marathi."
              }
            />
            <FeatureCard
              title={lang === "mr" ? "पूर्ण सुसंगतता" : "Full Compatibility"}
              description={
                lang === "mr"
                  ? "मानक TypeScript मध्ये ट्रान्सपाइल होतो. सर्व विद्यमान लायब्ररी आणि साधनांसह कार्य करतो."
                  : "Transpiles to standard TypeScript. Works with all existing libraries and tools."
              }
            />
            <FeatureCard
              title={lang === "mr" ? "विकसक साधने" : "Developer Tools"}
              description={
                lang === "mr"
                  ? "CLI, वेब playground आणि VS Code विस्तारासह संपूर्ण विकास अनुभव."
                  : "Complete development experience with CLI, web playground, and VS Code extension."
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
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
