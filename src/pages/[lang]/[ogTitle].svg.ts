import { getCollection } from "astro:content";
import generateOgImage from "@utils/generateOgImage";
// import type { APIRoute } from "astro/dist/@types/astro";
// import type { APIRoute } from 'astro';

export const get = async ({ params }) => ({
  body: await generateOgImage(params.ogTitle),
});

const postImportResult = await getCollection("blog", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  const a =posts
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title, lang: data.blogSlug?.split("/")[0] },
    }));
  console.log(a);

  return a
}
