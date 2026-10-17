# Sezione Il menù

Menù del giorno. File: `Menu.astro`. Ancora: `#menu` (ci portano "Scopri il menù di oggi" e il
link "Menù" del footer).

**Design Figma:** gruppo `234:6` della Home desktop e quarta schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- "Il menù" con la data del giorno.
- Le categorie (Primi, Secondi, Contorni, Dolci) con i piatti, separati da linee bianche.
- Pulsante **Prenota un tavolo →**.
- Solo mobile: indicatore "Scopri il menù ↓" in alto.

## Aggiornare il menù (la cosa che farai più spesso)

Apri `src/data/menu.ts`:

```ts
export const menuDate = "2026-11-19"; // anno-mese-giorno → sul sito: 19-11-2026

export const menu = [
  {
    name: "Primi",
    items: [
      { name: "Mezze maniche al pomodoro e basilico" },
      { name: "Risotto alle verdure", price: "€ 9,00" }, // il prezzo è facoltativo
    ],
  },
  // ...
];
```

- Puoi aggiungere o togliere piatti e categorie liberamente.
- Su desktop le categorie si dispongono in **due colonne**: la prima metà a sinistra, la seconda a
  destra (con 4 categorie: Primi e Secondi a sinistra, Contorni e Dolci a destra).
- Il menù è **testo vero**, non un'immagine o un PDF: Google lo legge e lo può mostrare nelle ricerche.

## Pulsante "Prenota un tavolo"

Il link si imposta in `src/data/site.ts` (`bookingUrl`): se c'è il telefono avvia la chiamata,
altrimenti porta alla sezione Contatti.

## Disposizione

| Mobile                                     | Desktop                                            |
| ------------------------------------------ | -------------------------------------------------- |
| Data sotto il titolo, categorie in colonna | Data a destra del titolo, categorie su due colonne |
| Una linea sotto ogni categoria             | Linee sotto il titolo e tra un piatto e l'altro    |
