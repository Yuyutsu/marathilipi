import type { Lang } from "./content";

export const supportedLangs: Lang[] = ["en", "mr"];

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}
