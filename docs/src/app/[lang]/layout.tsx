import { notFound } from "next/navigation";
import { isValidLang, type Lang } from "@/i18n/content";
import Header from "@/components/Header";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang as Lang} />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>MarathiLipi. Open source under MIT License.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Yuyutsu/marathilipi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/marathilipi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              npm
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
