// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Dominio ufficiale, con www (serve per sitemap, canonical e Open Graph).
  // La versione senza www va reindirizzata qui dall'hosting: vedi README, "Pubblicazione".
  site: "https://www.portofinoboutiquecafe.it",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
