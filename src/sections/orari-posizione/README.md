# Sezione Orari e posizione

Orari di apertura, indirizzo e mappa. File: `OrariPosizione.astro`. Ancora: `#orari`.

**Design Figma:** gruppo `234:7` della Home desktop e quinta schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- Intestazione "Orari e posizione", titolo "Ci vediamo al Portofino" e sottotitolo.
- **Quando passare**: tabella degli orari, la nota "Gli orari potranno variare" e una foto.
- **Dove siamo**: indirizzo, mappa e pulsante **Ottieni indicazioni ↗**.

## Da dove prende i dati

Tutto da `src/data/site.ts`, così orari e indirizzo sono uguali anche nei dati per Google:

```ts
openingHours: [
  { label: "Martedì - Domenica", days: ["Tuesday", /* ... */ "Sunday"], opens: "08:00", closes: "21:00" },
  { label: "Lunedì", days: ["Monday"] }, // senza orari = "Chiuso"
],
```

- `label` è il testo mostrato sul sito.
- `days` sono i giorni in inglese per Google.
- Una riga senza `opens`/`closes` viene mostrata come **Chiuso**.

L'indirizzo è in `address`. Finché manca la via si vede solo "11100 Aosta".

## Mappa e indicazioni

- La mappa è un'**immagine** (`mappa-segnaposto.jpg`), non una mappa Google incorporata:
  così il sito resta veloce e non servono cookie di terze parti.
- **Attenzione:** l'immagine attuale è il segnaposto del design (c'è scritto "Mappa segnaposto").
  Va sostituita con uno screenshot della mappa reale attorno al locale.
- Su mobile la mappa è ritagliata al 34% dell'altezza (`object-[center_34%]`), come nel Figma.
- Il pulsante **Ottieni indicazioni ↗** ha la freccia inclinata come nel Figma: -56° su mobile,
  -41° su desktop, attaccata al testo.
- Mappa e pulsante aprono Google Maps (`directionsUrl` in `site.ts`): la scheda del locale se
  `mapsUrl` è compilato, altrimenti una ricerca per indirizzo.

## Foto

Come nel design, su mobile si vede `orari-caffe.jpg` e su desktop `orari-aperitivo.jpg`.
Su mobile la foto è ritagliata all'82% dell'altezza (`object-[center_82%]`), così si vede la
tazzina sul bancone come nel Figma.

## Nota

Nel design c'erano due refusi ("Domenca", "Ottieni ndicazioni"): li ho corretti. Su mobile ho
aggiunto l'indirizzo sotto "Dove siamo" (nel design c'è solo su desktop), perché è utile a chi
cerca il locale dal telefono.
