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
  // Pagine come file (privacy.html, non privacy/index.html): così Cloudflare serve /privacy
  // senza reindirizzare a /privacy/, e l'indirizzo coincide con quello indicato a Google.
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Le pagine "non trovata" (/404, /fr/404, /en/404) non vanno su Google
      filter: (page) => !/\/404\/?$/.test(page),
      // Collega le versioni italiana, francese e inglese di ogni pagina (vedi src/i18n/)
      i18n: {
        defaultLocale: "it",
        locales: { it: "it", fr: "fr", en: "en" },
      },
    }),
  ],
});
