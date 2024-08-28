import { defineCollection, z } from "astro:content";

export const extensionCollection = defineCollection({
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
  extension: extensionCollection,
};
