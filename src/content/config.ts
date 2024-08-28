import { defineCollection, z } from "astro:content";

export const packagesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const snippetsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const usecasesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  packages: packagesCollection,
  snippets: snippetsCollection,
  usecases: usecasesCollection,
};
