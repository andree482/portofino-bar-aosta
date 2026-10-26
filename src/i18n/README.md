# Lingue (italiano, francese, inglese)

Il sito esiste in tre lingue. L'italiano è la lingua principale.

| Lingua   | Home  | Privacy       | Cookie       |
| -------- | ----- | ------------- | ------------ |
| Italiano | `/`   | `/privacy`    | `/cookie`    |
| Francese | `/fr` | `/fr/privacy` | `/fr/cookie` |
| Inglese  | `/en` | `/en/privacy` | `/en/cookie` |

## File di questa cartella

| File        | Cosa contiene                                                                    |
| ----------- | -------------------------------------------------------------------------------- |
| `it.ts`     | Tutti i testi fissi del sito in italiano (titoli, pulsanti, voci di menu…).      |
| `fr.ts`     | Gli stessi testi in francese, con le stesse voci di `it.ts`.                     |
| `en.ts`     | Gli stessi testi in inglese, con le stesse voci di `it.ts`.                      |
| `lingue.ts` | Elenco delle lingue e funzioni per passare da una all'altra (non serve toccarlo). |

I testi sono divisi per sezione (`hero`, `chiSiamo`, `menu`, `orari`…), nello stesso ordine
della pagina. I titoli su più righe sono elenchi: ogni elemento va a capo.

```ts
hero: {
  titolo: ["Un'esperienza da vivere", "nel cuore di Aosta."],
  ...
}
```

## Dove sono gli altri testi

- **Menù**: `src/data/menu.ts`, ogni piatto scritto nelle tre lingue (`{ it, fr, en }`).
- **Orari** ("Martedì - Domenica"…): `src/data/site.ts`, anche loro nelle tre lingue.
- **Privacy e Cookie**: `src/data/legal.ts`, una versione per lingua.

## Cambiare un testo

1. Trova la voce in `it.ts` (es. `orari.variazioni`).
2. Cambia il testo italiano e, alla stessa voce, quello di `fr.ts` ed `en.ts`.

Se aggiungi una voce in `it.ts` e dimentichi le traduzioni, `npm run check` (e `npm run build`)
segnala l'errore indicando il file e la voce mancante.

In francese, prima di `:` `;` `?` `!` e dentro le virgolette `« »` va uno spazio "non separabile"
(impedisce di andare a capo prima del segno). Il modo più semplice è copiarlo da un testo francese già
presente.

## Lingua automatica

Alla prima visita il sito si apre nella lingua del dispositivo di chi visita (impostazione del
browser): italiano, francese o inglese; per tutte le altre lingue (tedesco, spagnolo…) in inglese.
Lo fa lo script in cima a `src/layouts/BaseLayout.astro`.

- Se chi visita sceglie una lingua con il selettore **IT / FR / EN** (in alto a destra su desktop,
  in fondo al menu su mobile), il browser la ricorda (voce `lingua` nella memoria locale) e il sito
  si apre sempre in quella lingua. Il selettore è in `src/components/layout/header/`.
- Con i motori di ricerca non interviene: Google vede e indicizza ogni versione separatamente.
- Si usa la lingua del dispositivo e non l'indirizzo IP: il sito è statico (non c'è un server che
  possa leggere l'IP) e la lingua del dispositivo è più affidabile. Un turista tedesco in Italia ha
  un IP italiano, ma il telefono in tedesco.
- La memoria locale è un dato tecnico chiesto da chi visita: non serve il banner cookie. È descritto
  nell'informativa cookie (`src/data/legal.ts`).

## SEO

Ogni pagina indica a Google le sue versioni nelle altre lingue (`hreflang`, in
`src/components/seo/Seo.astro`), e la sitemap fa lo stesso (`astro.config.mjs`). Così Google mostra
a un francese la pagina in francese. Per chi parla un'altra lingua la versione indicata è l'inglese.

## Aggiungere una pagina

Le pagine stanno in `src/pages/[...lingua]/`: ogni file crea da solo le tre versioni. Per esempio
`src/pages/[...lingua]/eventi.astro` diventa `/eventi`, `/fr/eventi` e `/en/eventi`. Copia
`privacy.astro` come esempio: la parte `getStaticPaths` è quella che crea le tre versioni.

Nei componenti i testi si prendono così:

```astro
---
import { linguaDa, testi } from "../../i18n/lingue";
const t = testi[linguaDa(Astro.url)].hero;
---
<h1>{t.titolo}</h1>
```

I link interni si scrivono come in italiano e si passano a `percorso()`, che aggiunge `/fr` o `/en`:
`percorso("/privacy", lingua)` → `/fr/privacy`.
