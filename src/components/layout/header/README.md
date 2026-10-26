# Header

Barra di navigazione in cima a ogni pagina. File: `Header.astro`.

**Design Figma:** "NAV BAR PC" dentro la Home desktop (nodo `191:51`) e "Nav BAr Mobile" (nodo `155:1249`).

## Cosa mostra

- **Desktop** (da 1024px): logo a sinistra, quattro voci di menu in linea e il selettore della
  lingua **IT / FR / EN** a destra.
- **Mobile**: logo e pulsante a due linee. Premendolo si apre il menu a tendina con le
  voci principali, il pulsante "Scopri il menù di oggi", il link "Prenota un tavolo", la
  scritta "Bar - Cucina - Abbigliamento" e, in fondo, il selettore della lingua. Le due linee
  diventano una X per chiudere.

## Selettore della lingua

File: `SelettoreLingua.astro`. Nel Figma non c'è: è disegnato con lo stile dei pulsanti del sito,
senza bandiere. È una pillola con bordo crema sottile; la lingua attiva è piena (crema con testo
blu), le altre sono crema un po' trasparente. Le sigle hanno la spaziatura larga delle etichette
(`tracking-label`, come nel footer).

- Ogni sigla porta alla stessa pagina nell'altra lingua, nello stesso punto (es. `/#menu` →
  `/fr#menu`).
- Scegliendo una lingua, il browser la ricorda: alle visite successive il sito si apre in quella
  lingua. Come funziona la lingua automatica è spiegato in `src/i18n/README.md`.
- Per chi usa un lettore di schermo ogni sigla ha il nome per esteso ("Français", "English").

Per fare spazio al selettore, su desktop le voci di menu sono un po' più piccole che nel Figma: da
1280px testo, spazi e logo si riducono con la larghezza della finestra (a 1440px: testo 24px come
nel Figma, spazi di 60px invece di 84px). In francese e inglese le voci desktop sono più corte di
quelle del menu mobile ("à propos", "notre offre"…), altrimenti non starebbero in una riga.

## Opzioni

| Prop      | Valore  | Effetto                                                               |
| --------- | ------- | --------------------------------------------------------------------- |
| `overlay` | `true`  | La barra sta sopra la foto della home, con sfondo sfumato su desktop. |
| `overlay` | `false` | Barra blu piena che occupa spazio (pagine Privacy e Cookie).          |

Si imposta dalla pagina tramite `BaseLayout` (`headerOverlay`).

## Animazioni

- All'apertura della pagina la barra scende leggermente dall'alto.
- I link desktop hanno una sottolineatura che si allunga al passaggio del mouse (`link-underline`).
- Il menu mobile si apre allungandosi e le voci compaiono una alla volta. Da chiuso è
  `inert`, cioè non raggiungibile con il tasto Tab. Gli stili sono in `src/styles/animazioni.css`
  (`.menu-mobile`).

## Come modificarlo

- **Voci di menu**: i testi sono in `src/i18n/` (voce `nav`, in ogni lingua), i link in
  `src/data/navigation.ts` (`mainNav`). Ogni voce ha il testo per il desktop (`label`) e quello
  per il menu mobile (`mobile`).
- **Altri testi** ("Scopri il menù di oggi", "Prenota un tavolo"…): `src/i18n/` (voce `layout`).
- **Link "Prenota un tavolo"**: si calcola in `src/data/site.ts` (`bookingUrl`): se c'è il
  numero di telefono chiama il locale, altrimenti porta alla sezione Contatti.
- **Apertura/chiusura del menu mobile**: lo script in fondo a `Header.astro`. Si chiude anche
  scegliendo una voce o premendo Esc.

## Nota

Nel design le voci desktop usano il font Inter. Per caricare un font in meno ho usato
Inclusive Sans, il font dei testi del sito: la differenza a quella dimensione è minima.
