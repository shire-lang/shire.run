import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

import { bundledLanguages } from 'shiki'
import shireLang from './src/shire.tmLanguage.json' assert { type: 'json' }

// https://astro.build/config
export default defineConfig({
  site: "http://shire.run/",
  markdown: {
    shikiConfig: {
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
  },
  integrations: [tailwind(), svelte(), mdx()],
});
