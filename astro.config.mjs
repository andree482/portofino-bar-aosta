// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: sostituire con il dominio definitivo (serve per sitemap, canonical e Open Graph)
  site: "https://www.portofinobaraosta.it",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
