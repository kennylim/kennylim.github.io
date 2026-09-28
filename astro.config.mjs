// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Set to your Pages URL, e.g. "https://kenlim.github.io" (project pages need the repo name appended)
  site: "https://USERNAME.github.io",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});