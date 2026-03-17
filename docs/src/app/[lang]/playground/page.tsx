import { type Lang } from "@/i18n/content";
import PlaygroundClient from "@/components/PlaygroundClient";
export { generateStaticParams } from "@/i18n/params";

export default async function PlaygroundPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <PlaygroundClient lang={lang as Lang} />;
}
