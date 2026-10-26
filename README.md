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
| `npm run mappa`   | Ridisegna la mappa del locale (OpenStreetMap)   |

## Pagine

Il sito è in tre lingue: italiano (senza prefisso), francese (`/fr`) e inglese (`/en`). Ogni file in
`src/pages/[...lingua]/` crea da solo le tre versioni. Alla prima visita il sito si apre nella lingua
del dispositivo; il selettore IT / FR / EN nell'header permette di cambiarla. Dettagli in
`src/i18n/README.md`.

| Indirizzo                         | File                                  | Contenuto                                   |
| --------------------------------- | ------------------------------------- | ------------------------------------------- |
| `/`, `/fr`, `/en`                 | `src/pages/[...lingua]/index.astro`   | Home con tutte le sezioni                   |
| `/privacy`, `/fr/privacy`, `/en/…` | `src/pages/[...lingua]/privacy.astro` | Informativa privacy                         |
| `/cookie`, `/fr/cookie`, `/en/…`   | `src/pages/[...lingua]/cookie.astro`  | Informativa cookie                          |
| 404                               | `src/pages/[...lingua]/404.astro`     | Pagina mostrata per gli indirizzi sbagliati |

## Struttura

Ogni cartella con un `README.md` spiega cosa contiene e come modificarla.

```
public/                     file serviti così come sono (icone, robots.txt, immagine per i social)
scripts/genera-mappa.mjs    disegna la mappa del locale (npm run mappa)
src/
  data/                     ★ DATI: quasi tutte le modifiche si fanno qui o in i18n/
    site.ts                   nome, indirizzo, orari, contatti, social, P.IVA
    menu.ts                   menù del giorno (in tre lingue)
    navigation.ts             link di header e footer
    legal.ts                  testi di Privacy e Cookie (in tre lingue)
  i18n/                     ★ TESTI DEL SITO: it.ts, fr.ts, en.ts + lingua automatica (vedi README)
  sections/                 sezioni della home, una cartella ciascuna (componente + README)
    hero/                     foto iniziale e titolo
    chi-siamo/                presentazione con foto ad arco
    cosa-trovi/               cucina stagionale
    menu/                     menù del giorno
    orari-posizione/          orari, indirizzo e mappa
    contatti/                 telefono, email, Instagram
  components/
    layout/                   header e footer (presenti in ogni pagina), banner cookie (disattivato)
    legal/                    modello delle pagine Privacy e Cookie
    seo/                      meta tag e dati strutturati per Google
    ui/                       pezzi riutilizzabili: freccia, pulsante, logo…
  layouts/BaseLayout.astro  struttura comune a tutte le pagine
  pages/[...lingua]/        una pagina per file, ognuna in tre lingue
  assets/images/            foto e logo (Astro le ottimizza in automatico)
  styles/global.css         design token: colori, font, margini
  styles/animazioni.css     animazioni e transizioni (vedi src/styles/README.md)
  scripts/animazioni.ts     fa partire le animazioni allo scroll
  scripts/passaggio-hero.ts passaggio automatico dalla prima schermata a "Chi siamo"
```

## Modifiche frequenti

| Voglio cambiare…                  | Dove                                                      |
| --------------------------------- | --------------------------------------------------------- |
| Il menù del giorno                | `src/data/menu.ts`                                        |
| Orari, indirizzo, telefono, email | `src/data/site.ts`                                        |
| Un testo del sito                 | `src/i18n/it.ts`, e la stessa voce in `fr.ts` ed `en.ts`  |
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

- [x] Impostare il dominio definitivo in `astro.config.mjs` (`site`) e in `public/robots.txt`
- [ ] Collegare il dominio all'hosting e reindirizzare la versione senza www (vedi sotto)
- [ ] Completare i campi `TODO` in `src/data/site.ts` (contatti, social)
- [ ] Verificare gli orari in `src/data/site.ts` (ora sono quelli del design)
- [ ] Inserire il menù reale in `src/data/menu.ts`
- [ ] Far rileggere a un consulente le informative in `src/data/legal.ts` (bozza già scritta)
- [ ] Collegare il sito alla scheda Google Business e registrarlo su Google Search Console

## Pubblicazione

Il sito è statico: si può pubblicare gratis su Cloudflare Pages, Netlify o Vercel collegando questo
repository. Impostazioni di build: comando `npm run build`, cartella di output `dist`.

### Dominio

L'indirizzo ufficiale è **https://www.portofinoboutiquecafe.it** (con www). Se lo cambi, aggiornalo
in `astro.config.mjs` (`site`) e in `public/robots.txt`.

Anche `portofinoboutiquecafe.it` (senza www) deve funzionare, ma con un reindirizzamento permanente
(301) verso la versione con www: così Google vede un solo sito. Il reindirizzamento si imposta
sull'hosting, non nel codice. Con Cloudflare:

1. In Cloudflare Pages, nel progetto, aggiungi come dominio personalizzato
   `www.portofinoboutiquecafe.it`.
2. Nelle impostazioni DNS del dominio crea un record per `portofinoboutiquecafe.it` (senza www) con
   proxy attivo (nuvola arancione), così le richieste passano da Cloudflare.
3. In **Rules → Redirect Rules** crea una regola dal modello "Redirect from root to WWW": tutte le
   richieste a `portofinoboutiquecafe.it` vanno a `https://www.portofinoboutiquecafe.it`, con codice
   301 e mantenendo percorso e parametri.

Per controllare: aprendo `portofinoboutiquecafe.it/privacy` devi finire su
`https://www.portofinoboutiquecafe.it/privacy`.
