# Banner cookie

Finestra "Preferenze Cookie". File: `CookieBanner.astro`.

**Design Figma:** "Pop Up Pc" (nodo `191:164`) e "Cookie mobile" (nodo `201:278`).

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
4. Si può **riaprire** con qualsiasi elemento che ha l'attributo `data-cookie-preferences`, per
   esempio il pulsante "Preferenze e Cookie" nelle pagine Privacy e Cookie.

## Stato attuale

Oggi il sito **non usa cookie facoltativi**: nessuna statistica, nessuna mappa o video incorporati.
Il banner è già pronto per quando ne servirà uno (per esempio Google Analytics).

Per caricare uno script solo con il consenso:

```js
window.addEventListener("cookie-consent", (event) => {
  if (event.detail.optional) {
    // carica qui lo script delle statistiche
  }
});
```

Ricordati di controllare anche le visite successive, leggendo `localStorage.getItem("portofino-cookie-consent")`.

> Finché il sito usa solo cookie tecnici, per legge il banner non è obbligatorio. Se preferisci
> non mostrarlo, basta togliere `<CookieBanner />` da `src/layouts/BaseLayout.astro`.
