import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";
import astroExpressiveCode from "astro-expressive-code";

import { bundledLanguages } from "shiki";
import shireLang from "./src/shire.tmLanguage.json";

// https://astro.build/config
export default defineConfig({
  site: "http://shire.run/",
  integrations: [
    tailwind(),
    astroExpressiveCode({
      shiki: {
        theme: "css-variables",
        langs: [
          ...Object.keys(bundledLanguages),
          {
            id: "shire",
            scopeName: "source.shire",
            ...shireLang,
          },
        ],
      },
    }),
    svelte(),
    mdx(),
  ],
});
