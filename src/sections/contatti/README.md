# Sezione Contatti

"Restiamo in contatto". File: `Contatti.astro`. Ancora: `#contatti` (voce "info" del menu).

**Design Figma:** gruppo `235:33` della Home desktop e sesta schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- "info e contatti" (solo su mobile, come nel Figma), titolo "Restiamo in contatto" e sottotitolo.
- Tre righe cliccabili (tutta la riga è il link):
  - **Numero**: avvia la chiamata (`tel:`).
  - **Email**: apre il programma di posta (`mailto:`).
  - **Instagram**: apre il profilo in una nuova scheda.
- Logo grande: a sinistra su desktop, sotto i contatti su mobile.

## Da dove prende i dati

`src/data/site.ts`:

```ts
contact: { phone: "+39 0165 000000", email: "info@..." },
social: { instagram: "https://www.instagram.com/...", instagramHandle: "@..." },
```

Finché un campo è vuoto, la riga mostra il segnaposto del design (`[Numero]`, `[Email]`,
`[@Profilo]`) e non è cliccabile.

## Aspetto dei valori

- Da 540px (tablet e desktop) l'etichetta è più stretta e il testo più piccolo del Figma, così numero ed email si leggono per intero.
- Niente frecce ↗ (tolte rispetto al Figma): il valore ha una **linea sotto** per far capire che
  è cliccabile. Al passaggio del mouse la linea diventa bianca piena e il testo più luminoso.
- Il valore arriva fino alla fine della linea. Se è troppo lungo (succede con email e Instagram,
  e col numero su mobile) finisce con "…": i puntini sono sempre allineati sul bordo destro, uno
  sotto l'altro. Il link funziona comunque con il valore completo, e passandoci sopra col mouse
  si vede intero (attributo `title`).

## Come modificarla

- **Aggiungere un contatto** (es. WhatsApp): aggiungi un elemento all'elenco `contacts` in cima
  a `Contatti.astro`, con `label`, `value` e `href`.
- **Testi**: in `src/i18n/` (voce `contatti`), in italiano, francese e inglese. Numero, email e
  Instagram sono in `src/data/site.ts`.

## Nota

Nel design il sottotitolo era "Per un tavolo, un informazione o un asaluto": ho corretto in
"un'informazione o un saluto".
