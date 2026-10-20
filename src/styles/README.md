# Stili e animazioni

| File             | Cosa contiene                                                          |
| ---------------- | ---------------------------------------------------------------------- |
| `global.css`     | Design token (colori, font, spaziature) e contenitore `container-site` |
| `animazioni.css` | Tutte le animazioni e le transizioni del sito                          |

Lo script che fa partire le animazioni allo scroll è `src/scripts/animazioni.ts`.

## Animazioni: lo stile

Movimenti lenti e morbidi, senza rimbalzi, coerenti con il tono elegante del design:
le cose compaiono salendo di poco, le foto si "scoprono" e si assestano, le linee e le frecce
si disegnano. Durata tipica: circa 0,9 secondi.

## Come far comparire un elemento allo scroll

Aggiungi l'attributo `data-reveal`:

```astro
<p data-reveal>Compare salendo dal basso</p>
<p data-reveal style="--reveal-delay: 200ms">
  Compare 0,2 secondi dopo
</p>
```

| Valore                | Effetto                                                    | Dove si usa                     |
| --------------------- | ---------------------------------------------------------- | ------------------------------- |
| `data-reveal`         | Dissolvenza + sale di 24px                                 | Testi, blocchi, pulsanti        |
| `data-reveal="fade"`  | Solo dissolvenza                                           | Etichette, cornici, logo        |
| `data-reveal="down"`  | Dissolvenza + scende dall'alto                             | Barra dell'header               |
| `data-reveal="image"` | La foto si scopre dal basso verso l'alto, come una tenda   | Foto ad arco, foto orari, mappa |
| `data-reveal="zoom"`  | La foto parte un po' ingrandita e si assesta (1,8 secondi) | Foto della hero e della pasta   |
| `data-reveal="line"`  | Linea che si disegna da sinistra                           | Linea corta in "Chi siamo"      |
| `data-reveal="draw"`  | Freccia verticale che si disegna dall'alto                 | Frecce "scorri giù" (ScrollCue) |

Per più elementi in fila (es. le categorie del menù) si usa un ritardo crescente:
`style={`--reveal-delay: ${index * 120}ms`}`.

Funziona anche su `Button` e `ScrollCue`, che accettano attributi extra.

### Come funziona

1. Nel `<head>` una riga aggiunge la classe `js` a `<html>`: solo allora gli elementi partono
   nascosti. Senza JavaScript il sito si vede comunque tutto.
2. `src/scripts/animazioni.ts` mostra subito gli elementi già nello schermo e osserva gli altri:
   quando entrano nello schermo ricevono la classe `is-visible` e l'animazione parte.
3. A comparsa finita lo script toglie `data-reveal`, così gli effetti al passaggio del mouse
   (es. sui pulsanti) restano rapidi.

## Altri effetti

| Effetto                                      | Dove                                        | Come                                  |
| -------------------------------------------- | ------------------------------------------- | ------------------------------------- |
| Sottolineatura che si allunga                | Menu in alto, link del footer               | classe `link-underline`               |
| Freccia che si sposta al passaggio del mouse | Pulsanti, contatti, menu mobile, "Torna su" | classi `group-hover:translate-…`      |
| Leggero zoom della mappa                     | Mappa in "Orari e posizione"                | `group-hover:scale-[1.03]`            |
| Menu mobile che si apre e voci in sequenza   | Header su mobile                            | `.menu-mobile` in `animazioni.css`    |
| Dissolvenza tra le pagine                    | Home ↔ Privacy ↔ Cookie                     | `@view-transition` (senza JavaScript) |

## Movimento ridotto

Se nelle impostazioni del telefono o del computer è attivo "riduci movimento", tutte le
animazioni si spengono e i contenuti compaiono subito (in fondo ad `animazioni.css`).

## Modificare le animazioni

- **Velocità di tutte le comparse**: `--reveal-duration` in cima ad `animazioni.css`.
- **Curva di movimento**: `--ease-portofino`.
- **Togliere l'animazione da un elemento**: cancella il suo attributo `data-reveal`.
