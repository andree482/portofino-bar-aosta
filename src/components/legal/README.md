# Pagine legali (Privacy e Cookie)

Modello comune alle pagine `/privacy` e `/cookie`. File: `LegalPage.astro`.

**Design Figma:** "Privacy e Cookie pc" (nodo `191:39`) e "Privacy mobile" (nodo `201:405`).
La pagina Cookie non ha un design suo: usa lo stesso modello della Privacy.

## Cosa mostra

- Link **← Torna al sito**.
- "INFORMAZIONI", titolo grande (Privacy / Cookie) e data di aggiornamento.
- **In questa pagina**: indice con i link alle sezioni.
- Sezioni numerate (0.1, 0.2, …).
- Pulsante che porta all'altra informativa: dalla Privacy alla Cookie e viceversa. Su desktop
  sta sotto l'indice, su mobile in fondo alla pagina.
- Solo pagina Cookie: pulsante **Modifica le preferenze cookie** in fondo alle sezioni, che riapre
  il banner cookie (si attiva con `preferenzeCookie: true` in `src/data/legal.ts`).

> Nel design il pulsante si chiamava "Preferenze e Cookie" e apriva il banner cookie. Ora è un
> collegamento tra le due informative; per riaprire il banner c'è il pulsante qui sopra.

> Nel design il testo delle sezioni è a 37px su desktop, pensato per una riga di segnaposto. Con
> le informative vere (testi lunghi) l'ho portato a 24px per renderlo leggibile.

## Modificare i testi

Tutto in `src/data/legal.ts` (`privacyPage` e `cookiePage`), con una versione per lingua
(`it`, `fr`, `en`). Il testo che fa fede è quello italiano; francese e inglese ne sono la traduzione.

```ts
{
  id: "chi-tratta-i-dati",          // parte del link: /privacy#chi-tratta-i-dati
  title: "Chi tratta i dati",
  body: ["Primo paragrafo…", "Secondo paragrafo…"],
}
```

- Puoi aggiungere o togliere sezioni: numeri e indice si aggiornano da soli. Fallo in tutte e tre
  le lingue, con lo stesso `id` (così i link `#…` funzionano anche cambiando lingua).
- Le scritte fisse della pagina ("Torna al sito", "In questa pagina"…) sono in `src/i18n/`
  (voce `legale`).
- Ragione sociale, indirizzo, P.IVA ed email del titolare arrivano da `src/data/site.ts`:
  compilandoli lì compaiono anche nelle informative.
- Quando cambi un testo, aggiorna anche `updatedAt` (la data "Aggiornata il …").

## I testi attuali

Sono scritti in base a come funziona oggi il sito: nessun modulo di contatto, statistiche con
Google Analytics solo dopo il consenso nel banner cookie, font e immagini ospitati sul sito,
hosting su Cloudflare. Nel browser restano la lingua scelta con il selettore IT / FR / EN (voce
`lingua`) e la scelta sui cookie (voce `portofino-cookie-consent`): non richiedono consenso.
I dati di Google sono nella costante `google`, in cima a `legal.ts`.

**Vanno aggiornati se:**

- cambi hosting (nome del fornitore in `hosting`, in cima a `legal.ts`);
- aggiungi statistiche, mappe o video incorporati, un modulo di contatto o una newsletter.

> Sono una buona base, ma non sostituiscono una consulenza legale: prima della pubblicazione
> conviene farli rileggere a un consulente.

## Pagine che usano questo modello

| Pagina                                   | File                                 |
| ---------------------------------------- | ------------------------------------ |
| `/privacy`, `/fr/privacy`, `/en/privacy` | `src/pages/[...lingua]/privacy.astro` |
| `/cookie`, `/fr/cookie`, `/en/cookie`    | `src/pages/[...lingua]/cookie.astro`  |
