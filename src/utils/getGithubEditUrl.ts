import type { AstroGlobal } from 'astro';
// import { getLanguageFromURL } from '../util';

/**
 * Gets the URL to edit the page on GitHub
 */
export default function getGithubEditUrl(Astro: Readonly<AstroGlobal> | string) {
    if (typeof Astro === 'string') {
        return `https://github.com/Escuela-dev/escuela.dev/blob/master${Astro}`;
    }
    // const { content = {} } = Astro.props;
    // const currentPage = Astro.url.pathname;
    // // const lang = getLanguageFromURL(currentPage);
    // const filePath = `src/content/docs${currentPage.replace(/\/$/, '')}.mdx`;
    // return content.githubURL
    //     ? `${content.githubURL}${content.hasREADME ? 'README.md' : ''}`
    //     : `https://github.com/Escuela-dev/escuela.dev/blob/master/${filePath}`;
}
