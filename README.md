# Portofino – Boutique Café ad Aosta

Sito web del bar Portofino ad Aosta, costruito con [Astro](https://astro.build) e [Tailwind CSS](https://tailwindcss.com).
Genera pagine statiche, veloci e leggibili dai motori di ricerca.

**Design di riferimento:** file Figma "PORTOFINO BAR DESIGN SITO" (tavole Home desktop 1440px e mobile 390px).

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

## Pagine

| Indirizzo  | File                      | Contenuto                                   |
| ---------- | ------------------------- | ------------------------------------------- |
| `/`        | `src/pages/index.astro`   | Home con tutte le sezioni                   |
| `/privacy` | `src/pages/privacy.astro` | Informativa privacy                         |
| `/cookie`  | `src/pages/cookie.astro`  | Informativa cookie                          |
| 404        | `src/pages/404.astro`     | Pagina mostrata per gli indirizzi sbagliati |

## Struttura

Ogni cartella con un `README.md` spiega cosa contiene e come modificarla.

```
public/                     file serviti così come sono (icone, robots.txt, immagine per i social)
src/
  data/                     ★ TESTI E DATI: quasi tutte le modifiche si fanno qui
    site.ts                   nome, indirizzo, orari, contatti, social, P.IVA
    menu.ts                   menù del giorno
    navigation.ts             voci di menu di header e footer
    legal.ts                  testi di Privacy e Cookie
  sections/                 sezioni della home, una cartella ciascuna (componente + README)
    hero/                     foto iniziale e titolo
    chi-siamo/                presentazione con foto ad arco
    cosa-trovi/               cucina stagionale
    menu/                     menù del giorno
    orari-posizione/          orari, indirizzo e mappa
    contatti/                 telefono, email, Instagram
  components/
    layout/                   header, footer e banner cookie (presenti in ogni pagina)
    legal/                    modello delle pagine Privacy e Cookie
    seo/                      meta tag e dati strutturati per Google
    ui/                       pezzi riutilizzabili: freccia, pulsante, logo…
  layouts/BaseLayout.astro  struttura comune a tutte le pagine
  pages/                    una pagina per file
  assets/images/            foto e logo (Astro le ottimizza in automatico)
  styles/global.css         design token: colori, font, margini
```

## Modifiche frequenti

| Voglio cambiare…                  | Dove                                                      |
| --------------------------------- | --------------------------------------------------------- |
| Il menù del giorno                | `src/data/menu.ts`                                        |
| Orari, indirizzo, telefono, email | `src/data/site.ts`                                        |
| Un testo della home               | il file della sezione in `src/sections/…`                 |
| Una foto                          | sostituisci il file in `src/assets/images/` (stesso nome) |
| Un colore in tutto il sito        | `src/styles/global.css` (`@theme`)                        |

## Design token

Definiti in `src/styles/global.css` e usati come classi Tailwind:

| Token         | Valore           | Classe d'esempio          |
| ------------- | ---------------- | ------------------------- |
| Blu Portofino | `#072768`        | `bg-navy`, `text-navy`    |
| Crema         | `#f7efe8`        | `bg-cream`, `text-cream`  |
| Oro           | `#ddb892`        | `text-gold`               |
| Marrone       | `#996f51`        | `text-brown`              |
| Titoli        | DM Serif Display | `font-serif`              |
| Testi         | Inclusive Sans   | `font-sans` (predefinito) |

Le misure sono quelle di Figma: il valore senza prefisso è il mobile (390px), quello con `lg:` il
desktop (da 1024px). Esempio: `text-[35px] lg:text-[65px]`.

I font sono ospitati sul sito stesso (pacchetti `@fontsource`), non su Google Fonts: è meglio per la
privacy (GDPR) e per la velocità.

## Prima della pubblicazione

- [ ] Impostare il dominio definitivo in `astro.config.mjs` (`site`) e in `public/robots.txt`
- [ ] Completare i campi `TODO` in `src/data/site.ts` (indirizzo, P.IVA, contatti, social, coordinate)
- [ ] Verificare gli orari in `src/data/site.ts` (ora sono quelli del design)
- [ ] Inserire il menù reale in `src/data/menu.ts`
- [ ] Sostituire `src/assets/images/mappa-segnaposto.jpg` con la mappa reale del locale
- [ ] Scrivere i testi di Privacy e Cookie in `src/data/legal.ts`
- [ ] Collegare il sito alla scheda Google Business e registrarlo su Google Search Console

## Pubblicazione

Il sito è statico: si può pubblicare gratis su Cloudflare Pages, Netlify o Vercel collegando questo
repository. Impostazioni di build: comando `npm run build`, cartella di output `dist`.
