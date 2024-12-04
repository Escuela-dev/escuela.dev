import { reference, z } from 'astro:content';

export const BlogNames = z.enum([
  'JavaScript',
  'TypeScript',
  'Developer Tools',
  'React',
  'NodeJS',
  'TailwindCSS',
  'NextJS',
  'Svelte',
  'VScode',
  'Astro',
  'Others',
]);
export const BlogSlugs = z.enum([
  'javascript',
  'typescript',
  'developer-tools',
  'coding',
  'react',
  'development',
  'nodejs',
  'tailwindcss',
  'nextjs',
  'svelte',
  'vscode',
  'astro',
  'youtube',
  'tutorial',
  'leetcode',
  'interviews',
  'career',
  'salary',
  'learning',
  'negotiation',
  'others',
]);

export const tagSchema = z
  .object({
    name: BlogNames,
    slug: BlogSlugs,
  })
  .strict();

export const blogSchema = z
  .object({
    author: z.string().optional(),
    publishDate: z.string().optional(),
    title: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).max(5).default(['others']),
    // tags: z.array(tagSchema).max(5),
    heroImage: z.string(),
    ogImage: z.string().optional(),
    imageCaption: z.string().optional(),
    imagePromptfile: z.string().optional(),
    description: z.string(),
    // Reference an array of related posts from the `blog` collection by `slug`
    // relatedPosts: z.array(reference('blog')),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;

export type Tag = z.infer<typeof tagSchema>;
