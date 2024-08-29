import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'http://shire.run/',
  markdown: { shikiConfig: { theme: 'css-variables' } },
  integrations: [tailwind(), svelte(), mdx()]
});
