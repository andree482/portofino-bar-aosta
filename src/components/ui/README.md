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

## Note

- **Dimensioni e font** dei pulsanti si passano con `class`, così ogni pulsante può
  avere le misure del design senza creare varianti nuove.
- Il **logo** è un PNG esportato da Figma. Se il grafico fornisce una versione SVG, basta
  sostituire `src/assets/images/logo-portofino.png` e l'import in `Logo.astro`.
