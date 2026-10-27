# SEO

Componenti invisibili che aiutano Google e i social a capire e mostrare il sito.
Sono inclusi automaticamente in ogni pagina da `src/layouts/BaseLayout.astro`.

| File                        | Cosa fa                                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| `Seo.astro`                 | Titolo, descrizione, indirizzo canonico e anteprima per WhatsApp, Facebook e altri social.        |
| `LocalBusinessSchema.astro` | Dati strutturati (schema.org): il locale (`BarOrPub` + `CafeOrCoffeeShop`) e il sito (`WebSite`). |
| `GoogleAnalytics.astro`     | Statistiche delle visite con Google Analytics, solo dopo il consenso nel banner cookie.           |

## Da dove prendono i dati

Tutto arriva da `src/data/site.ts`. Compilando lì indirizzo, telefono, orari e social,
Google li riceve automaticamente: **non serve toccare questi file**.

La descrizione del sito per Google, nelle tre lingue, è in `src/i18n/` (voce `seo.descrizione`).

## Tre lingue

Ogni pagina esiste in italiano, francese e inglese (vedi `src/i18n/README.md`). `Seo.astro`
aggiunge per ogni pagina:

- `<link rel="alternate" hreflang="…">` verso le versioni nelle altre lingue (`it`, `fr`, `en`),
  più `x-default` verso l'inglese per chi parla altre lingue;
- `og:locale` della lingua della pagina e `og:locale:alternate` per le altre.

La sitemap (`astro.config.mjs`) collega allo stesso modo le tre versioni di ogni pagina; le pagine
"non trovata" sono escluse.

## Nome del locale e sue varianti

`alternateNames` in `src/data/site.ts` elenca i modi in cui la gente scrive il nome
("Portofino Boutique Caffè", "Bar Portofino Aosta"…). Finiscono nei dati strutturati, così
Google e gli assistenti AI capiscono che sono tutti lo stesso locale. Il nodo `WebSite`
dice a Google che il nome del sito è "Portofino Boutique Café".

Il profilo Instagram (`social.instagram`) è collegato al locale con `sameAs`: Google e le AI
sanno che il sito e il profilo sono dello stesso bar.

## Assistenti AI (ChatGPT, Gemini, Claude, Perplexity…)

- `src/pages/llms.txt.ts` crea la pagina `/llms.txt`: una scheda in testo semplice con chi
  siamo, indirizzo, orari, contatti, Instagram e menù. Si aggiorna da sola con i dati di
  `src/data/` e i testi di `src/i18n/it.ts`.
- `public/robots.txt` nomina uno per uno i robot delle AI e li lascia leggere tutto il sito.

## Titolo e descrizione di una pagina

Si passano a `BaseLayout`:

```astro
<BaseLayout title="Privacy" description="Informativa sul trattamento dei dati…">
```

Il titolo diventa "Privacy | Portofino Boutique Café – Bar ad Aosta". Senza `title` resta solo
il nome del locale (come in home). Lo slogan (`tagline` in `src/data/site.ts`) è facoltativo: se è
vuoto il titolo è solo "Privacy | Portofino Boutique Café", senza trattino finale.

## Anteprima social

L'immagine è `public/og-image.jpg` (1200×630, foto della sala con il logo).

## Google Analytics

- **ID** (`G-…`): `googleAnalyticsId` in `src/data/site.ts`. Per spegnere le statistiche lascia
  `""` e aggiorna le informative in `src/data/legal.ts`.
- **Solo con consenso**: il codice di Google si carica solo se il visitatore ha scelto
  "Accetta tutti" (o ha attivato "Facoltativi") nel banner cookie
  (`src/components/layout/cookie-banner`). Se poi ritira il consenso, le statistiche si fermano e
  i cookie `_ga` vengono cancellati. Lo richiede la legge (linee guida del Garante Privacy).
- **Solo sul sito pubblicato**: in sviluppo (`astro dev`) non parte, così le prove in locale non
  finiscono nelle statistiche.
- Le visite di chi rifiuta i cookie non vengono contate: i numeri di Analytics saranno quindi
  più bassi delle visite reali.

## Verificare

- Dati strutturati: <https://search.google.com/test/rich-results>
- Anteprima social: incolla il link in una chat WhatsApp o su <https://www.opengraph.xyz>
