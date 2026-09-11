import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Jon Abbott'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

const spec = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/spec' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    navId: z.string(),
  }),
});

export const collections = { blog, spec };
