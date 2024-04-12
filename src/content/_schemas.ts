import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    publishDate: z.string().optional(),
    title: z.string(),
    blogSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
