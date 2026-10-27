# Sezione Chi siamo

Presentazione del locale. File: `ChiSiamo.astro`. Ancora: `#chi-siamo`.

**Design Figma:** "Sezione 2 pc" della Home desktop (nodo `221:3`) e seconda schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- Etichetta "IL MONDO PORTOFINO" e titolo "Un posto, tante cose da vivere."
- Foto ad arco (`src/assets/images/chi-siamo-caffe.jpg`).
- Testo di presentazione, una linea corta e "BAR / CUCINA / ABBIGLIAMENTO".
- Indicatore **Cosa trovi da noi ↓**, che porta alla sezione successiva. Su mobile sta allineato
  a "BAR / CUCINA / ABBIGLIAMENTO", a 18px dal bordo destro: linea 15px sotto l'inizio del testo e
  freccia lunga 39px, come nel Figma.
- Solo desktop: due cornici blu decorative, una ad arco attorno alla foto e una larga che
  arriva al lato destro.

## Disposizione

| Mobile                                   | Desktop                                  |
| ---------------------------------------- | ---------------------------------------- |
| Titolo → foto → testo, uno sotto l'altro | Foto a sinistra, titolo e testo a destra |

Lo fa una griglia CSS: su desktop la foto occupa la prima colonna e due righe, titolo e testo
stanno nella seconda colonna.

## Come modificarla

- **Testi**: in `src/i18n/` (voce `chiSiamo`), in italiano, francese e inglese.
- **Foto**: sostituisci `chi-siamo-caffe.jpg`. Meglio una foto con il soggetto al centro, perché
  l'arco taglia i lati.
  - Ritaglio e proporzioni sono **identici al Figma**: la foto è alta quanto l'arco e allungata
    in orizzontale rispetto all'originale (per questo il bordo del tavolo risulta più inclinato).
  - Mobile: larga il 263.8% dell'arco, spostata a sinistra del 60.88%.
  - Desktop: larga il 252.04% dell'arco, spostata a sinistra del 57.05%.
  - Se cambi foto, conviene tornare a un ritaglio normale: togli dall'immagine le classi
    `absolute`, `top-…`, `left-…`, `h-full`, `w-…` e usa `size-full object-cover`.
- **Cornici**: sono due `<div>` con bordo blu di 3px e angoli superiori arrotondati.
  - Quando arrivano nello schermo **si costruiscono come una casa**: due linee salgono dal basso
    come muri e si incontrano in cima, chiudendo l'arco. Prima l'arco attorno alla foto, poi la
    cornice larga. Lo fa `src/scripts/cornici.ts` (attributi `data-reveal="build"` e `data-cornice`).
  - **Velocità e ordine**: nello `style` di ogni cornice, `--cornice-durata` (quanto dura il
    disegno) e `--reveal-delay` (dopo quanto parte).
  - Senza JavaScript, o con "riduci movimento", le cornici si vedono subito complete.

## Nota

Nel design c'è scritto "ABBIGLAMENTO": ho corretto il refuso in "ABBIGLIAMENTO".
