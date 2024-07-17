import {
  strings,
  defaultLang,
  showDefaultLang,
  languages,
} from "./i18n.config";

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
  };
}

export function useTranslatedPath(defaultLanguage: Language) {
  return function translatePath(
    path: string,
    currentLanguage: string = defaultLanguage,
  ) {
    // Check if the provided language is included in the available languages
    if (Object.keys(languages).includes(currentLanguage)) {
      // Remove default language prefix from the path
      path = path.replace(`/${defaultLanguage}`, "");
    }
    // Determine if the path should include the language prefix
    const shouldOmitLanguagePrefix =
      !showDefaultLang && currentLanguage === defaultLang;

    // Return the translated path with or without the language prefix based on conditions
    return shouldOmitLanguagePrefix
      ? path || "/"
      : `/${currentLanguage}${path}`;
  };
}
