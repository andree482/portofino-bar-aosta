# SEO

Componenti invisibili che aiutano Google e i social a capire e mostrare il sito.
Sono inclusi automaticamente in ogni pagina da `src/layouts/BaseLayout.astro`.

| File                        | Cosa fa                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| `Seo.astro`                 | Titolo, descrizione, indirizzo canonico e anteprima per WhatsApp, Facebook e altri social. |
| `LocalBusinessSchema.astro` | Dati strutturati `BarOrPub` (schema.org): nome, indirizzo, orari, telefono, posizione.     |

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

## Verificare

- Dati strutturati: <https://search.google.com/test/rich-results>
- Anteprima social: incolla il link in una chat WhatsApp o su <https://www.opengraph.xyz>
