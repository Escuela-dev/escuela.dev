import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogSchema } from './content/_schemas';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: blogSchema,
});

export const collections = { blog };
