# Footer

Piè di pagina di ogni pagina. File: `Footer.astro`.

**Design Figma:** fondo della Home desktop (nodo `31:3`), "Nav bar down" della Home mobile
(nodo `108:808`) e della Privacy (nodi `191:39`, `201:405`).

## Cosa mostra

- © anno e nome (o ragione sociale, se compilata).
- Dati della società, obbligatori per legge sul sito (art. 2250 del Codice civile), su una riga:
  "P.IVA … · REA …". Se manca la partita IVA compare il segnaposto `[Partita IVA]`; il REA
  compare solo se compilato.
- Link: Il Portofino, Menù, Orari e posizione, Privacy, Cookie.
- Su mobile anche "Torna su ↑", che riporta in cima alla pagina.

## Opzioni

| Prop   | Valore  | Effetto                         | Dove            |
| ------ | ------- | ------------------------------- | --------------- |
| `tone` | `light` | Sfondo crema sfumato, testo blu | Home            |
| `tone` | `dark`  | Sfondo blu, testo crema         | Privacy, Cookie |

Si imposta dalla pagina tramite `BaseLayout` (`footerTone`).

## Come modificarlo

- **Dati della società**: `src/data/site.ts` (`legalName`, `vatNumber`, `rea`).
- **Link**: `src/data/navigation.ts` (`footerNav` e `legalNav`).

## Nota

Nel design "Orari e posizione" è scritto "Orai e posizione": ho corretto il refuso.
