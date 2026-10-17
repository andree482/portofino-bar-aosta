# Portofino – Bar ad Aosta

Sito web del bar Portofino ad Aosta, costruito con [Astro](https://astro.build) e [Tailwind CSS](https://tailwindcss.com).
Genera pagine statiche, veloci e leggibili dai motori di ricerca.

## Requisiti

- Node.js 22.12 o superiore

## Comandi

| Comando           | Cosa fa                                         |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Installa le dipendenze                          |
| `npm run dev`     | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build`   | Controlla i tipi e genera il sito in `dist/`    |
| `npm run preview` | Mostra in locale il sito generato               |
| `npm run format`  | Formatta il codice con Prettier                 |

## Struttura

```
public/                  file serviti così come sono (favicon, robots.txt, immagine OG)
src/
  assets/images/         immagini ottimizzate da Astro
  components/
    seo/                 meta tag, Open Graph e dati strutturati schema.org
    sections/            sezioni della home (Hero, Chi siamo, Menu, Orari e contatti)
    Header.astro
    Footer.astro
  data/
    site.ts              dati del locale: nome, indirizzo, orari, contatti, social
    menu.ts              listino del menu
  layouts/BaseLayout.astro
  pages/                 una pagina per file (index, 404)
  styles/global.css      Tailwind e design token (colori, font)
```

Indirizzo, orari, contatti e social si modificano solo in `src/data/site.ts`: da lì vengono letti
dalle pagine, dai meta tag e dai dati strutturati per Google.

## Prima della pubblicazione

- [ ] Impostare il dominio definitivo in `astro.config.mjs` (`site`) e in `public/robots.txt`
- [ ] Completare i campi `TODO` in `src/data/site.ts` (indirizzo, orari, P.IVA, contatti, social)
- [ ] Inserire il menu reale in `src/data/menu.ts`
- [ ] Aggiungere `public/og-image.jpg` (1200×630) per le anteprime social
- [ ] Sostituire favicon e design token con quelli del design Figma
- [ ] Collegare il sito alla scheda Google Business e registrarlo su Google Search Console

## Pubblicazione

Il sito è statico: si può pubblicare gratis su Cloudflare Pages, Netlify o Vercel collegando questo
repository. Impostazioni di build: comando `npm run build`, cartella di output `dist`.
