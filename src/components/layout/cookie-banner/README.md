# Banner cookie (disattivato)

Finestra "Preferenze Cookie". File: `CookieBanner.astro`.

**Design Figma:** "Pop Up Pc" (nodo `191:164`) e "Cookie mobile" (nodo `201:278`).

## Stato attuale: non viene mostrato

Il sito **non usa cookie facoltativi**: niente statistiche, mappe o video incorporati, pixel social.
In questo caso, secondo le linee guida del Garante Privacy, il banner non è obbligatorio: basta
l'informativa (pagina `/cookie`). Per questo il banner è stato tolto da
`src/layouts/BaseLayout.astro`.

Il file resta nel progetto, pronto e già funzionante, per quando servirà. I suoi testi però sono
solo in italiano: prima di riattivarlo vanno spostati in `src/i18n/` (it, fr, en) come quelli del
resto del sito.

## Quando riattivarlo

Se aggiungi uno strumento che usa cookie facoltativi o traccia i visitatori, per esempio:

- Google Analytics o altre statistiche con cookie;
- una mappa Google o un video YouTube incorporati nella pagina;
- un feed Instagram o il pixel di Facebook.

> Cloudflare Web Analytics **non** usa cookie e non richiede il banner.

## Come riattivarlo

1. In `src/layouts/BaseLayout.astro` aggiungi l'import in alto (tra i `---`) e il componente
   prima di `</body>`:

   ```astro
   ---
   import CookieBanner from "../components/layout/cookie-banner/CookieBanner.astro";
   ---

   <CookieBanner />
   ```

2. In `src/components/legal/LegalPage.astro` il pulsante in fondo alla pagina può tornare a
   riaprire il banner: basta un `<button type="button" data-cookie-preferences>`.
3. Aggiorna l'informativa in `src/data/legal.ts` (pagina Cookie) con gli strumenti usati.
4. Carica gli script facoltativi solo con il consenso:

   ```js
   window.addEventListener("cookie-consent", (event) => {
     if (event.detail.optional) {
       // carica qui lo script delle statistiche
     }
   });
   ```

   Ricordati di controllare anche le visite successive, leggendo
   `localStorage.getItem("portofino-cookie-consent")`.

## Come funziona (quando è attivo)

1. Alla **prima visita** si apre da sola: finestra al centro su desktop, pannello in basso su mobile.
2. Il visitatore sceglie:
   - **Accetta tutti**: cookie necessari e facoltativi.
   - **Rifiuta Facoltativi**: solo i necessari.
   - **Personalizza**: compare un interruttore accanto a "Facoltativi" e il pulsante "Salva le scelte".
   - **Esc** (chiusura senza scelta): vale come rifiuto dei facoltativi, come chiedono le linee
     guida del Garante Privacy.
3. La scelta viene salvata **nel browser** (`localStorage`, chiave `portofino-cookie-consent`) e
   la finestra non si riapre più da sola.
4. Si può **riaprire** con qualsiasi elemento che ha l'attributo `data-cookie-preferences`.
