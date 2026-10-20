# Sezione Hero

Prima schermata della home. File: `Hero.astro`.

**Design Figma:** "Sezione 1" della Home desktop (nodo `221:2`) e parte alta della Home mobile (nodo `108:808`).

## Cosa mostra

- Foto della sala a tutto schermo, con l'header sopra.
- Titolo principale della pagina (`<h1>`): "Tutto in un posto. Tutto al momento giusto."
- Sottotitolo: "Colazione, pranzo, aperitivo, shopping. Benvenuto al Portofino Bar."
- Pulsante **Scopri il menù di oggi →**, che porta alla sezione Menù.
- Indicatore **scopri chi siamo ↓**, che porta alla sezione Chi siamo. Su mobile la freccia scende
  sotto "scopri" (25px dall'inizio della linea, lunga 48px); su desktop alla fine della linea.

## File usati

| File                                          | A cosa serve                                               |
| --------------------------------------------- | ---------------------------------------------------------- |
| `src/assets/images/hero-sala.jpg`             | Foto di sfondo (il blu a sinistra fa già parte della foto) |
| `src/assets/images/hero-sfumatura-mobile.svg` | Solo mobile: alone blu dietro al testo per la leggibilità  |

## Come modificarla

- **Testi**: direttamente in `Hero.astro`.
- **Foto**: sostituisci `hero-sala.jpg` con una nuova foto (meglio orizzontale, almeno 1500px di
  larghezza). Su mobile si vede la parte centrale: se serve, regola `object-[52%_center]`
  (52% = posizione orizzontale del ritaglio).
- Il titolo è l'unico `<h1>` della home: è importante per Google, quindi conviene che parli
  del locale.

## Comportamento

- Altezza: tutto lo schermo (almeno 720px su desktop).
- Su mobile il testo parte dall'alto; su desktop è centrato in verticale.
- La foto viene caricata subito, con priorità alta: è la prima cosa che si vede.
