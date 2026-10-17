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

## Titolo e descrizione di una pagina

Si passano a `BaseLayout`:

```astro
<BaseLayout title="Privacy" description="Informativa sul trattamento dei dati…">
```

Il titolo diventa "Privacy | Portofino Boutique Café – Bar ad Aosta". Senza `title` resta solo
il nome del locale (come in home).

## Anteprima social

L'immagine è `public/og-image.jpg` (1200×630, foto della sala con il logo).

## Verificare

- Dati strutturati: <https://search.google.com/test/rich-results>
- Anteprima social: incolla il link in una chat WhatsApp o su <https://www.opengraph.xyz>
