import { defineCollection, z } from "astro:content";

export const suitesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    featured: z.boolean().optional(),
    installCmd: z.string().optional(),
  }),
});

export const snippetsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const usecasesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  suites: suitesCollection,
  snippets: snippetsCollection,
  usecases: usecasesCollection,
};
