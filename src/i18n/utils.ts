import { getRelativeLocaleUrl as originalGetRelativeLocaleUrl } from "astro:i18n";

import { strings, defaultLang, languages } from "./i18n.config";

type Language = keyof typeof strings;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Language;
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

export const getRelativeLocaleUrl = (lang: string, path: string) => {
  // Remove any existing language prefixes
  const cleanPath = path.replace(/^\/(en|es)\/?/, "/");

  // For the default language (es), just return the clean path
  if (lang === defaultLang) {
    return cleanPath === "/" ? cleanPath : cleanPath.replace(/\/$/, "");
  }

  // For other languages (en), add the language prefix
  return `/en${cleanPath === "/" ? "" : cleanPath}`.replace(/\/$/, "");
};
