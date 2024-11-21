import type { Language } from '@i18n/utils';
import { getCollection, type CollectionEntry } from 'astro:content';

export const getSortedPosts = (posts: CollectionEntry<'blog'>[], locale: 'en' | 'es') =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.publishDate!).getTime() / 1000) -
        Math.floor(new Date(a.data.publishDate!).getTime() / 1000),
    )
    .map((post) => {
      const [, ...slug] = post.slug.split('/');
      return {
        ...post,
        url: `/${locale}/posts/${slug.join('/')}/`,
        slug: slug.join('/'),
      };
    });

export const getPublishedPosts = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment) {
    return getCollection('blog');
  }
  return getCollection('blog', ({ data }) => !data.draft);
};

export const getPublishedPostsByLang = async (lang: Language) => {
  const data = await getPublishedPosts();
  return data.filter((post) => post.slug.split('/')[0] === lang);
};
