# Sezione Contatti

"Restiamo in contatto". File: `Contatti.astro`. Ancora: `#contatti` (voce "info" del menu).

**Design Figma:** gruppo `235:33` della Home desktop e sesta schermata della Home mobile (nodo `108:808`).

## Cosa mostra

- "info e contatti", titolo "Restiamo in contatto" e sottotitolo.
- Tre righe cliccabili con freccia ↗:
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
`[@Profilo]`) e non è cliccabile. Le frecce ↗ sono sempre bianche e stanno 10px (mobile) o
29px (desktop) prima della fine della linea, come nel Figma.

## Come modificarla

- **Aggiungere un contatto** (es. WhatsApp): aggiungi un elemento all'elenco `contacts` in cima
  a `Contatti.astro`, con `label`, `value` e `href`.
- **Testi**: direttamente in `Contatti.astro`.

## Nota

Nel design il sottotitolo era "Per un tavolo, un informazione o un asaluto": ho corretto in
"un'informazione o un saluto".
