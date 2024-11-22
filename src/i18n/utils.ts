import { getRelativeLocaleUrl as originalGetRelativeLocaleUrl } from "astro:i18n";

import { strings, defaultLang } from "./i18n.config";

type Language = keyof typeof strings;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in strings) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string) {
    const keys = key.split('.');
    // @ts-expect-error - type error
    const translatedString: string = keys.reduce((obj, key) => obj?.[key], strings[lang]) ||
    // @ts-expect-error - type error
                          keys.reduce((obj, key) => obj?.[key], strings[defaultLang] as Record<string, string>);

    if (!translatedString) {
      throw new Error(`Missing translation for key ${key}`);
    }
    return translatedString
  };
}

export const getRelativeLocaleUrl = (lang: string, path: string) =>
  originalGetRelativeLocaleUrl(
    lang,
    path.replace("/en", "").replace("/es", ""),
  );
