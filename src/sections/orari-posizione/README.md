# Sezione Orari e posizione

Orari di apertura, indirizzo e mappa. File: `OrariPosizione.astro`. Ancora: `#orari`.

**Design Figma:** gruppo `234:7` della Home desktop e quinta schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- Intestazione "Orari e posizione", titolo "Ci vediamo al Portofino" e sottotitolo.
- **Quando passare**: tabella degli orari, la nota "Gli orari potranno variare" e una foto.
- **Dove siamo**: indirizzo (solo desktop, come nel Figma), mappa e pulsante **Ottieni indicazioni ↗**.

## Da dove prende i dati

Tutto da `src/data/site.ts`, così orari e indirizzo sono uguali anche nei dati per Google:

```ts
openingHours: [
  { label: "Martedì - Domenica", days: ["Tuesday", /* ... */ "Sunday"], opens: "09:00", closes: "21:00" },
  { label: "Lunedì", days: ["Monday"] }, // senza orari = "Chiuso"
],
```

- `label` è il testo mostrato sul sito.
- `days` sono i giorni in inglese per Google.
- Una riga senza `opens`/`closes` viene mostrata come **Chiuso**.

L'indirizzo (`address`: Via Sant'Anselmo, 6/b – 11100 Aosta) e il link alla scheda Google Maps
(`mapsUrl`) sono in `site.ts`.

## Mappa

- È un'**immagine** (`src/assets/images/mappa-portofino.jpg`), non una mappa Google incorporata:
  così il sito resta veloce e non servono cookie di terze parti.
- È disegnata con lo stile del design (crema, beige, azzurro, segnaposto blu) partendo dai dati
  reali di **OpenStreetMap** attorno a Via Sant'Anselmo 6/b. Per questo sulla mappa c'è la scritta
  "© OpenStreetMap", obbligatoria per la licenza dei dati: non toglierla.
- Per rigenerarla (per esempio se il locale cambia indirizzo): aggiorna le coordinate in
  `scripts/genera-mappa.mjs` e lancia `npm run mappa`.
- Mappa e pulsante aprono la scheda Google Maps del locale in una nuova scheda.
- Il pulsante **Ottieni indicazioni ↗** ha la freccia inclinata come nel Figma: -56° su mobile,
  -41° su desktop, a pochi pixel dal testo.

## Foto

Come nel design, su mobile si vede `orari-caffe.jpg` e su desktop `orari-aperitivo.jpg`.

Ritaglio e proporzioni sono **identici al Figma**, dove la foto è leggermente deformata
(allungata in orizzontale rispetto all'originale):

- mobile: foto alta il 151.6% del riquadro, spostata in alto del 51.6%;
- desktop: foto 105.67% × 111.6% del riquadro, spostata del 5.67% a sinistra e del 5.8% in alto.

Se cambi foto, conviene tornare a un ritaglio normale: togli le classi `absolute`, `top-…`,
`left-…`, `h-…`, `w-…` dall'immagine e usa `size-full object-cover`.

## Nota

Nel design c'erano due refusi ("Domenca", "Ottieni ndicazioni"): li ho corretti.
