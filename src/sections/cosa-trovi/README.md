# Sezione Cosa trovi da noi

Introduzione alla cucina. File: `CosaTrovi.astro`. Ancora: `#cosa-trovi`.

**Design Figma:** gruppo `234:5` della Home desktop e terza schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- Etichetta oro "bar - cucina - abbigliamento".
- "Cosa trovi da noi" e titolo grande "A pranzo, scopri i sapori di stagione".
- Testo sul menù stagionale.
- Foto a tutta larghezza (`src/assets/images/pranzo-pasta.jpg`): alta 160px su mobile e 461px su desktop.

## Come modificarla

- **Testi**: in `src/i18n/` (voce `cosaTrovi`), in italiano, francese e inglese.
- **Foto**: sostituisci `pranzo-pasta.jpg`. Viene ritagliata a una striscia orizzontale; su desktop
  si vede la fascia al 56% dell'altezza (`lg:object-[center_56%]`), da regolare se il soggetto
  è più in alto o più in basso.

## Nota

Subito dopo questa sezione c'è il menù del giorno (`src/sections/menu`): insieme formano la
parte "cucina" della home.
