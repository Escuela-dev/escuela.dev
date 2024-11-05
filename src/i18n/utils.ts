import { getRelativeLocaleUrl as originalGetRelativeLocaleUrl } from "astro:i18n";

import { strings, defaultLang } from "./i18n.config";

type Language = keyof typeof strings;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in strings) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof strings)[typeof defaultLang]) {
    const translatedString = strings[lang][key] || strings[defaultLang][key];

    return translatedString;

    // TODO: make it work for indentation in the template strings
    // return strings[lang][key].replace(/\n\s+/g, "\n") || strings[defaultLang][key].replace(/\n\s+/g, "\n");
  };
}

export const getRelativeLocaleUrl = (lang: string, path: string) =>
  originalGetRelativeLocaleUrl(
    lang,
    path.replace("/en", "").replace("/es", ""),
  );
