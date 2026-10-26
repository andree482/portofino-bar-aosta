# Sezione Il menù

Il menù del locale. File: `Menu.astro`. Ancora: `#menu` (ci portano "Scopri il menù di oggi" e il
link "Menù" del footer).

**Design Figma:** gruppo `234:6` della Home desktop e quarta schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- Il titolo "Il menù".
- Le categorie (Primi, Secondi, Contorni, Dolci) con i piatti, separati da linee bianche.
- Pulsante **Prenota un tavolo →**.
- Solo mobile: indicatore "Scopri il menù ↓" in alto.

> Nel design accanto al titolo c'era la data (19-11-2026): è stata tolta perché il menù è fisso.

## Aggiornare il menù

Apri `src/data/menu.ts`. Ogni nome si scrive in italiano, francese e inglese:

```ts
export const menu = [
  {
    name: { it: "Primi", fr: "Premiers plats", en: "First courses" },
    items: [
      {
        name: {
          it: "Crespella alla valdostana con Fontina DOP",
          fr: "Crêpe à la valdôtaine à la Fontina AOP",
          en: "Aosta Valley crêpe with Fontina PDO",
        },
        price: "€ 12,00", // il prezzo è facoltativo
      },
    ],
  },
  // ...
];
```

- Se manca la traduzione (`fr` o `en`), in quella lingua si vede il nome italiano.
- I nomi delle categorie su desktop sono molto grandi (56px, maiuscolo) in una colonna di 498px:
  meglio parole brevi, al massimo 12-13 lettere (per questo "Contorni" in francese è "Garnitures").
- Gli altri testi della sezione ("Il menù", "Prenota un tavolo") sono in `src/i18n/` (voce `menu`).
- Sul sito ci sono **2 piatti per categoria** (i più rappresentativi del menù della cucina), con il
  prezzo del menù cartaceo: se un prezzo cambia in sala, ricordati di cambiarlo anche qui.
- Puoi aggiungere o togliere piatti e categorie liberamente.
- Su desktop le categorie si dispongono in **due colonne**: la prima metà a sinistra, la seconda a
  destra (con 4 categorie: Primi e Secondi a sinistra, Contorni e Dolci a destra).
- Il menù è **testo vero**, non un'immagine o un PDF: Google lo legge e lo può mostrare nelle ricerche.

## Pulsante "Prenota un tavolo"

Il link si imposta in `src/data/site.ts` (`bookingUrl`): se c'è il telefono avvia la chiamata,
altrimenti porta alla sezione Contatti.

Su mobile, come nel Figma, il testo parte a 28px dal bordo e la freccia è sottile (1px, lunga
23px) e staccata di 20px; su desktop testo e freccia (più spessa) sono centrati.

## Disposizione

| Mobile                         | Desktop                                         |
| ------------------------------ | ----------------------------------------------- |
| Categorie in colonna           | Categorie su due colonne                        |
| Una linea sotto ogni categoria | Linee sotto il titolo e tra un piatto e l'altro |
