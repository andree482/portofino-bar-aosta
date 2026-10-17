# Sezione Chi siamo

Presentazione del locale. File: `ChiSiamo.astro`. Ancora: `#chi-siamo`.

**Design Figma:** "Sezione 2 pc" della Home desktop (nodo `221:3`) e seconda schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- Etichetta "IL MONDO PORTOFINO" e titolo "Un posto, tante cose da vivere."
- Foto ad arco (`src/assets/images/chi-siamo-caffe.jpg`).
- Testo di presentazione, una linea corta e "BAR / CUCINA / ABBIGLIAMENTO".
- Indicatore **Cosa trovi da noi ↓**, che porta alla sezione successiva.
- Solo desktop: due cornici blu decorative, una ad arco attorno alla foto e una larga che
  arriva al lato destro.

## Disposizione

| Mobile                                   | Desktop                                  |
| ---------------------------------------- | ---------------------------------------- |
| Titolo → foto → testo, uno sotto l'altro | Foto a sinistra, titolo e testo a destra |

Lo fa una griglia CSS: su desktop la foto occupa la prima colonna e due righe, titolo e testo
stanno nella seconda colonna.

## Come modificarla

- **Testi**: direttamente in `ChiSiamo.astro`.
- **Foto**: sostituisci `chi-siamo-caffe.jpg`. Meglio una foto con il soggetto al centro, perché
  l'arco taglia i lati. Il punto di ritaglio si regola con `object-[70%_center]` (mobile) e
  `lg:object-[51%_center]` (desktop).
- **Cornici**: sono due `<div>` con bordo blu di 3px e angoli superiori arrotondati.

## Nota

Nel design c'è scritto "ABBIGLAMENTO": ho corretto il refuso in "ABBIGLIAMENTO".
