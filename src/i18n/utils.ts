import {
  strings,
  defaultLang,
  showDefaultLang,
  languages,
} from "./i18n.config";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in strings) return lang as keyof typeof strings;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof strings) {
  return function t(key: keyof (typeof strings)[typeof defaultLang]) {
    const translatedString = strings[lang][key] || strings[defaultLang][key];
    return translatedString;
  };
}

export function useTranslatedPath(lang: keyof typeof strings) {
  return function translatePath(path: string, l: string = lang) {
    if (Object.keys(languages).includes(l)) {
      path = path.replace(`/${lang}`, "");
    }
    return !showDefaultLang && l === defaultLang ? path || "/" : `/${l}${path}`;
  };
}
