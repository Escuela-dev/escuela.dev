import type { AstroGlobal } from 'astro';
// import { getLanguageFromURL } from '../util';

/**
 * Gets the URL to edit the page on GitHub
 */
export default function getGithubEditUrl(url: Readonly<AstroGlobal> | string) {
  if (typeof url !== 'string') {
    return;
  }
  // Special handling for URLs containing brackets '[' that need encoding like `[slug].astro`
  // Splits URL into directory path and filename, encoding only the filename portion
  if (url.includes('[')) {
    const urlParts = url.split('/');
    // Get directory path up to last segment and append trailing slash
    const dirPath = `${urlParts.slice(0, -1).join('/')}/`;
    // Get and encode only the filename portion
    const fileName = encodeURIComponent(urlParts[urlParts.length - 1]);
    return `https://github.com/Escuela-dev/escuela.dev/blob/master${dirPath}${fileName}`;
  }

  return `https://github.com/Escuela-dev/escuela.dev/blob/master${url}`;
}
