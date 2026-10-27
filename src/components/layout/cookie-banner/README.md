# Banner cookie

Finestra "Preferenze Cookie". File: `CookieBanner.astro`. È inclusa in ogni pagina da
`src/layouts/BaseLayout.astro`.

**Design Figma:** "Pop Up Pc" (nodo `191:164`) e "Cookie mobile" (nodo `201:278`).

## Perché c'è

Il sito usa **Google Analytics**, che installa cookie facoltativi (statistiche). Per le linee guida
del Garante Privacy serve il consenso del visitatore **prima** di caricarlo: il banner lo chiede e
`src/components/seo/GoogleAnalytics.astro` parte solo se il visitatore accetta.

Se un giorno si toglie Google Analytics (e non ci sono altri cookie facoltativi), il banner si può
togliere da `BaseLayout.astro`, aggiornando le informative in `src/data/legal.ts`.

## Testi

In `src/i18n/` (voce `cookie`), in italiano, francese e inglese.

## Riaprire la finestra

Qualsiasi elemento con l'attributo `data-cookie-preferences` riapre la finestra. Oggi c'è il
pulsante "Modifica le preferenze cookie" in fondo alla pagina Cookie (`LegalPage.astro`, attivato
da `preferenzeCookie: true` in `src/data/legal.ts`).

## Aggiungere altri strumenti con cookie

Mappe o video incorporati, pixel social… vanno caricati solo con il consenso, come Google
Analytics, e vanno descritti nell'informativa Cookie (`src/data/legal.ts`):

```js
window.addEventListener("cookie-consent", (event) => {
  if (event.detail.optional) {
    // carica qui lo script
  }
});
```

Per le visite successive si legge la scelta salvata:
`localStorage.getItem("portofino-cookie-consent")`.

## Come funziona

1. Alla **prima visita** si apre da sola: finestra al centro su desktop, pannello in basso su mobile.
2. Il visitatore sceglie:
   - **Accetta tutti**: cookie necessari e facoltativi.
   - **Rifiuta Facoltativi**: solo i necessari.
   - **Personalizza**: compare un interruttore accanto a "Facoltativi" e il pulsante "Salva le scelte".
   - **Esc** (chiusura senza scelta): vale come rifiuto dei facoltativi, come chiedono le linee
     guida del Garante Privacy.
3. La scelta viene salvata **nel browser** (`localStorage`, chiave `portofino-cookie-consent`) e
   la finestra non si riapre più da sola.
   Con "Accetta tutti" parte subito Google Analytics; con il rifiuto non parte, e se era già attivo
   si ferma e i suoi cookie vengono cancellati.
4. Si può **riaprire** con qualsiasi elemento che ha l'attributo `data-cookie-preferences`.
