import type { CollectionEntry } from "astro:content";

const getSortedPosts = (
  posts: CollectionEntry<"blog">[],
  locale: "en" | "es",
) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.publishDate!).getTime() / 1000) -
        Math.floor(new Date(a.data.publishDate!).getTime() / 1000),
    )
    .map((post) => {
      const [, ...slug] = post.slug.split("/");
      return {
        ...post,
        url: `/${locale}/posts/${slug.join("/")}/`,
        slug: slug.join("/"),
      };
    });

export default getSortedPosts;
