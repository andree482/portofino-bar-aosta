# Componenti UI

Piccoli pezzi riutilizzati in più sezioni del sito. Se cambi qui, cambia ovunque.

| File              | Cosa disegna                                                       | Dove si usa                     |
| ----------------- | ------------------------------------------------------------------ | ------------------------------- |
| `Arrow.astro`     | La freccia del design (→ ↗ ↓ ←), colore preso dal testo intorno    | Pulsanti, contatti, menu mobile |
| `Button.astro`    | Pulsante "a pillola" crema o blu, con freccia facoltativa          | Hero, menù, orari, privacy      |
| `ScrollCue.astro` | Testo sottolineato con lunga freccia verso il basso ("scorri giù") | Hero, Chi siamo, Menù (mobile)  |
| `Logo.astro`      | Logo Portofino color crema                                         | Header, sezione Contatti        |

## Esempi

```astro
<Arrow direction="up-right" length={21} />

<Button
  href="#menu"
  variant="cream"
  arrow="right"
  class="h-12 px-4 text-[24px]"
>
  Scopri il menù di oggi
</Button>

<ScrollCue href="#chi-siamo" label="scopri chi siamo" />

<Logo class="w-[124px] lg:w-[247px]" />
```

## Opzioni utili

**Arrow**

| Prop          | Esempio      | A cosa serve                                         |
| ------------- | ------------ | ---------------------------------------------------- |
| `direction`   | `"up-right"` | Direzione: right, left, down, up, up-right           |
| `angle`       | `{-56}`      | Inclinazione libera in gradi (sostituisce direction) |
| `length`      | `{23}`       | Lunghezza dell'asta in px                            |
| `strokeWidth` | `{1}`        | Spessore della linea                                 |
| `head`        | `{3.7}`      | Lunghezza dei tratti della punta                     |

**Button**

| Prop                                      | A cosa serve                                                                |
| ----------------------------------------- | --------------------------------------------------------------------------- |
| `arrow` / `arrowAngle`                    | Freccia dritta (`right`, `up-right`) o inclinata di un angolo preciso       |
| `arrowLength`, `arrowStroke`, `arrowHead` | Misure della freccia                                                        |
| `desktopArrow`                            | Freccia diversa da 1024px in su, es. `{ length: 43, stroke: 3, head: 9.5 }` |
| `layout`                                  | Posizione di testo e freccia, es. `"justify-start gap-[20px] pl-[28px]"`    |

Esempio (pulsante "Prenota un tavolo" del menù):

```astro
<Button
  href={bookingUrl}
  arrow="right"
  arrowLength={23}
  arrowStroke={1}
  arrowHead={3.7}
  desktopArrow={{ length: 43, stroke: 3, head: 9.5 }}
  layout="justify-start gap-[20px] pl-[28px] lg:justify-center lg:gap-[0.4em] lg:pl-0"
  class="h-[30px] w-[199px] text-[15px] lg:h-[67px] lg:w-[498px] lg:text-[30px]"
>
  Prenota un tavolo
</Button>
```

**ScrollCue**

| Prop          | A cosa serve                                                                 |
| ------------- | ---------------------------------------------------------------------------- |
| `align`       | Freccia alla fine (`end`) o all'inizio (`start`) della linea                 |
| `arrowOffset` | Solo mobile: distanza della freccia dall'inizio della linea (es. 25 in hero) |
| `arrowLength` | Solo mobile: lunghezza della freccia (su desktop è sempre 147px)             |

## Note

- `Button` e `ScrollCue` accettano anche altri attributi, per esempio `data-reveal` per farli
  comparire allo scroll (vedi `src/styles/README.md`).
- Al passaggio del mouse la freccia dei pulsanti si sposta un po' nella sua direzione; la
  freccia di `ScrollCue` si disegna dall'alto quando compare.
- **Dimensioni e font** dei pulsanti si passano con `class`, così ogni pulsante può
  avere le misure del design senza creare varianti nuove.
- Il **logo** è un PNG esportato da Figma. Se il grafico fornisce una versione SVG, basta
  sostituire `src/assets/images/logo-portofino.png` e l'import in `Logo.astro`.
