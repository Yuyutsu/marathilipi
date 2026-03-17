import { t, type Lang } from "@/i18n/content";
import Sidebar from "@/components/Sidebar";

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <Sidebar lang={lang as Lang} />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
