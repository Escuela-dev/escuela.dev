import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { getPostSlugParts } from '../../utils/blog';
import { generateOgImageForPost } from '../../utils/generateOgImage';
// import generateOgImage from '@utils/generateOgImage';
// import type { APIRoute } from "astro/dist/@types/astro";
// import type { APIRoute } from 'astro';

// export const get = async ({ params }) => ({
//   body: await generateOgImage(params.ogTitle),
// });
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPost(props as CollectionEntry<'blog'>), {
    headers: { 'Content-Type': 'image/png' },
  });

const postImportResult = await getCollection('blog', ({ data }) => !data.draft);
// const posts = Object.values(postImportResult);

export function getStaticPaths() {
  const a = postImportResult
    .filter(({ data }) => data.ogImage)
    .map((post) => {
      const [lang, ...slugNoLang] = getPostSlugParts(post);
      return {
        params: { lang, ogTitle: slugNoLang.join('/') || undefined },
        props: post,
      };
    });
  // console.dir({ postImportResult }, { depth: 2 });
  // console.dir({ a }, { depth: 3 });

  return a;
}
