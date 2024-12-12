import { getRelativeLocaleUrl as originalGetRelativeLocaleUrl } from 'astro:i18n';

import { strings, defaultLang, languages } from './i18n.config';

export type Language = keyof typeof strings;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function getOtherOGLocales(lang: Language) {
  return Object.keys(languages)
    .filter((l) => l !== lang)
    .map((l) => getOGLocale(l as Language));
}

export function getOGLocale(lang: Language, separator: string = '_') {
  if (lang === 'en') return `en${separator}US`;
  if (lang === 'es') return `es${separator}ES`;
  return lang;
}

export function useTranslations(lang: Language) {
  return function t(key: string) {
    const keys = key.split('.');
    // @ts-expect-error - type error
    const translatedString: string =
      keys.reduce((obj, key) => obj?.[key], strings[lang]) ||
      // @ts-expect-error - type error
      keys.reduce((obj, key) => obj?.[key], strings[defaultLang] as Record<string, string>);

    if (!translatedString && translatedString !== '') {
      throw new Error(`Missing translation for key ${key}`);
    }
    return translatedString;
  };
}

export const getRelativeLocaleUrl = (lang: string, path: string) =>
  originalGetRelativeLocaleUrl(lang, path.replace('/en', '').replace('/es', ''));

/**
 * Helper to get corresponding path list for all locales
 * @param url - The current URL object
 * @returns - The list of locale paths
 */
export function getLocalePaths(url: URL): LocalePath[] {
  return Object.keys(languages).map((lang) => {
    return {
      lang: lang as Lang,
      path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, '')),
    };
  });
}

type LocalePath = {
  lang: Lang;
  path: string;
};

export type Lang = keyof typeof languages;
