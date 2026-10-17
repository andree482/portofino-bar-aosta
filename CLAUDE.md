## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Progetto

Sito vetrina del bar Portofino (Aosta). Obiettivo principale: visibilità e SEO locale.

- Stack: Astro (output statico) + Tailwind CSS v4 (`@tailwindcss/vite`), nessun framework JS lato client.
- Tutti i dati del locale (nome, indirizzo, orari, contatti, social) stanno in `src/data/site.ts`; non duplicarli nei componenti.
- Il menu sta in `src/data/menu.ts` e va renderizzato come testo HTML, mai come PDF o immagine.
- SEO: `src/components/seo/Seo.astro` (meta, Open Graph) e `LocalBusinessSchema.astro` (JSON-LD `BarOrPub`), inclusi da `BaseLayout.astro`.
- Design token (colori, font) in `@theme` dentro `src/styles/global.css`; il design di riferimento arriva da Figma.
- Testi del sito in italiano.
