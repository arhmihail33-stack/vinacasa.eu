import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Arhanghel'),
    image: z.string().optional(),
  }),
});

const produse = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/produse' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    season: z.string(),
    available: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const cercetareLog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/cercetare-log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    domain: z.string(),
    summary: z.string(),
  }),
});

export const collections = { blog, produse, cercetareLog };
