# Sezioni della home

Ogni cartella contiene una sezione della home (`*.astro`) e il suo `README.md`.
L'ordine in cui compaiono si decide in `src/pages/[...lingua]/index.astro` (una sola pagina per le
tre lingue). I testi delle sezioni sono in `src/i18n/`, in italiano, francese e inglese.

| Ordine | Cartella           | Ancora        | Sfondo |
| ------ | ------------------ | ------------- | ------ |
| 1      | `hero/`            | —             | foto   |
| 2      | `chi-siamo/`       | `#chi-siamo`  | crema  |
| 3      | `cosa-trovi/`      | `#cosa-trovi` | blu    |
| 4      | `menu/`            | `#menu`       | blu    |
| 5      | `orari-posizione/` | `#orari`      | crema  |
| 6      | `contatti/`        | `#contatti`   | blu    |

L'**ancora** è l'id della sezione: un link a `/#menu` porta direttamente al menù.

## Aggiungere una sezione

1. Crea una cartella, per esempio `src/sections/eventi/`, con `Eventi.astro` e un `README.md`.
2. Dai alla sezione un id: `<section id="eventi" class="bg-cream text-navy">`.
3. Dentro usa `<div class="container-site">` per avere gli stessi margini delle altre sezioni.
4. Importala in `src/pages/[...lingua]/index.astro` e mettila nel punto giusto.
5. Scrivi i testi in `src/i18n/it.ts`, `fr.ts` ed `en.ts` (vedi `src/i18n/README.md`).
6. Se serve, aggiungi la voce in `src/data/navigation.ts` e il suo testo in `src/i18n/` (voce `nav`).
