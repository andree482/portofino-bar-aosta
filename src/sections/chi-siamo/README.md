# Sezione Chi siamo

Presentazione del locale. File: `ChiSiamo.astro`. Ancora: `#chi-siamo`.

**Design Figma:** "Sezione 2 pc" della Home desktop (nodo `221:3`) e seconda schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- Etichetta "IL MONDO PORTOFINO" e titolo "Un posto, tante cose da vivere."
- Foto ad arco (`src/assets/images/chi-siamo-caffe.jpg`).
- Testo di presentazione, una linea corta e "BAR / CUCINA / ABBIGLIAMENTO".
- Indicatore **Cosa trovi da noi ↓**, che porta alla sezione successiva. Su mobile sta allineato
  a "BAR / CUCINA / ABBIGLIAMENTO", a 18px dal bordo destro, con la freccia lunga 39px.
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
  l'arco taglia i lati.
  - Mobile: come nel Figma la foto è ingrandita (larga il 263.8% dell'arco) e spostata con
    `left-[-60.88%]` e `top-[-27%]`. Con una foto nuova regola questi due valori.
  - Desktop: la foto riempie l'arco; il punto di ritaglio è `lg:object-[51%_center]`.
  - Nel Figma la foto mobile è leggermente schiacciata in altezza: qui non viene deformata,
    quindi l'inquadratura in verticale è la più vicina possibile, non identica.
- **Cornici**: sono due `<div>` con bordo blu di 3px e angoli superiori arrotondati.

## Nota

Nel design c'è scritto "ABBIGLAMENTO": ho corretto il refuso in "ABBIGLIAMENTO".
