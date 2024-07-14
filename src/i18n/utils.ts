import { strings, defaultLang, showDefaultLang } from "./i18n.config";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in strings) return lang as keyof typeof strings;
  return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof strings) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
