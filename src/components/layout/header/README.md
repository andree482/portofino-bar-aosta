# Header

Barra di navigazione in cima a ogni pagina. File: `Header.astro`.

**Design Figma:** "NAV BAR PC" dentro la Home desktop (nodo `191:51`) e "Nav BAr Mobile" (nodo `155:1249`).

## Cosa mostra

- **Desktop** (da 1024px): logo a sinistra e quattro voci di menu in linea.
- **Mobile**: logo e pulsante a due linee. Premendolo si apre il menu a tendina con le
  voci principali, il pulsante "Scopri il menù di oggi", il link "Prenota un tavolo" e la
  scritta "Bar - Cucina - Abbigliamento". Le due linee diventano una X per chiudere.

## Opzioni

| Prop      | Valore  | Effetto                                                               |
| --------- | ------- | --------------------------------------------------------------------- |
| `overlay` | `true`  | La barra sta sopra la foto della home, con sfondo sfumato su desktop. |
| `overlay` | `false` | Barra blu piena che occupa spazio (pagine Privacy e Cookie).          |

Si imposta dalla pagina tramite `BaseLayout` (`headerOverlay`).

## Come modificarlo

- **Voci di menu**: in `src/data/navigation.ts` (`mainNav`). Ogni voce ha il testo per il
  desktop (`label`) e quello per il menu mobile (`mobileLabel`).
- **Link "Prenota un tavolo"**: si calcola in `src/data/site.ts` (`bookingUrl`): se c'è il
  numero di telefono chiama il locale, altrimenti porta alla sezione Contatti.
- **Apertura/chiusura del menu mobile**: lo script in fondo a `Header.astro`. Si chiude anche
  scegliendo una voce o premendo Esc.

## Nota

Nel design le voci desktop usano il font Inter. Per caricare un font in meno ho usato
Inclusive Sans, il font dei testi del sito: la differenza a quella dimensione è minima.
