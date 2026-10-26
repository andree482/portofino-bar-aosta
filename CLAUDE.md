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
- Design token (navy, cream, gold, brown, font-serif/sans, tracking-tightest/label, utility container-site) in `@theme` dentro `src/styles/global.css`.
- Design di riferimento: Figma file `wJvJc302BjUJObGwU5wGtj` ("PORTOFINO BAR DESIGN SITO"): Home desktop `31:3`, Home mobile `108:808`, menu mobile `155:1249`, Privacy `191:39`/`201:405`, cookie `191:164`/`201:278`. Misure: base = mobile 390px, `lg:` = desktop 1440px.
- Struttura: sezioni della home in `src/sections/<nome>/`, header/footer/banner in `src/components/layout/`, pezzi riutilizzabili in `src/components/ui/`.
- Ogni cartella di sezione/componente ha un `README.md` in italiano: aggiornalo quando cambi il componente. Il proprietario deve poter capire il codice da solo: commenti brevi in italiano, dati separati dai componenti.
- Banner cookie disattivato (nessun cookie facoltativo): se si aggiungono statistiche con cookie, mappe o video incorporati, va riattivato e va aggiornata l'informativa in `src/data/legal.ts`.
- Animazioni: attributo `data-reveal` (varianti in `src/styles/animazioni.css`, script in `src/scripts/animazioni.ts`); movimenti lenti e morbidi, sempre disattivati con `prefers-reduced-motion`. Documentazione in `src/styles/README.md`.
- Sito in tre lingue: italiano (principale, senza prefisso), francese (`/fr`), inglese (`/en`). Testi fissi in `src/i18n/it.ts`/`fr.ts`/`en.ts` (stesse voci, tipo `Testi`), dati tradotti come `{ it, fr, en }` (`Tradotto`) in `src/data/`. Pagine in `src/pages/[...lingua]/` con `getStaticPaths = percorsiLingue`; nei componenti `testi[linguaDa(Astro.url)]` e link interni con `percorso()`. Ogni testo nuovo va scritto in tutte e tre le lingue. Lingua automatica (lingua del dispositivo o scelta salvata in `localStorage.lingua`) nello script in cima a `BaseLayout.astro`; selettore IT/FR/EN in `src/components/layout/header/SelettoreLingua.astro`. Documentazione in `src/i18n/README.md`.
- Commenti e README in italiano.
