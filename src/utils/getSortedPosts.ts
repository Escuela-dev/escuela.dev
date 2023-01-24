import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "../types";

const getSortedPosts = (posts: MarkdownInstance<Frontmatter>[]) =>
  posts
    .filter(({ frontmatter }) => !frontmatter.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.frontmatter.publishDate).getTime() / 1000) -
        Math.floor(new Date(a.frontmatter.publishDate).getTime() / 1000)
    );

export default getSortedPosts;
