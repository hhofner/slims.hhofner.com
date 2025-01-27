import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://slims.hhofner.com",
  integrations: [tailwind(), sitemap(), mdx(), pagefind(), react()],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    }
  }
});