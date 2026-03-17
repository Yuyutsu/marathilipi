import { en } from "@/content/en/index";
import { mr } from "@/content/mr/index";

export type Lang = "en" | "mr";

export function isValidLang(lang: string): lang is Lang {
  return lang === "en" || lang === "mr";
}

export const ui = {
  en,
  mr,
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
