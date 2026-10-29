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
  {
    label: { it: "Martedì - Domenica", fr: "Mardi - Dimanche", en: "Tuesday - Sunday" },
    days: ["Tuesday", /* ... */ "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  { label: { it: "Lunedì", fr: "Lundi", en: "Monday" }, days: ["Monday"] }, // senza orari = "Chiuso"
],
```

- `label` è il testo mostrato sul sito, nelle tre lingue.
- `days` sono i giorni in inglese per Google.
- Una riga senza `opens`/`closes` viene mostrata come **Chiuso**.

Gli altri testi della sezione (titoli, "Gli orari potranno variare", "Ottieni indicazioni"…) sono
in `src/i18n/` (voce `orari`), in italiano, francese e inglese.

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

Su mobile e su desktop c'è la stessa foto: `orari-aperitivo.jpg` (bancone con caffè, spritz e
olive), più completa di quella con il solo caffè prevista dal Figma mobile.

Il riquadro ha le proporzioni del Figma desktop (572 × 256) anche su mobile, così la scena si
vede tutta. Il ritaglio è **identico al Figma**, dove la foto è leggermente deformata (allungata
in orizzontale rispetto all'originale): 105.67% × 111.6% del riquadro, spostata del 5.67% a
sinistra e del 5.8% in alto.

Se cambi foto, conviene tornare a un ritaglio normale: togli le classi `absolute`, `top-…`,
`left-…`, `h-…`, `w-…` dall'immagine e usa `size-full object-cover`.

## Titolo

Il titolo ("Ti aspettiamo qui!") in `src/i18n/` è un elenco di righe: su mobile e tablet ogni
riga va a capo come nel Figma ("Ti aspettiamo / qui!"), su desktop sta tutto su una riga.

## Nota

Nel design c'erano due refusi ("Domenca", "Ottieni ndicazioni"): li ho corretti.
