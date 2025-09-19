import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import keystatic from "@keystatic/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://slims.hhofner.com",
  output: "hybrid",
  integrations: [tailwind(), sitemap(), mdx(), markdoc(), pagefind(), react(), keystatic()],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    }
  }
});