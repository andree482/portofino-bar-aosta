// Trasforma i px del CSS in rem, così tutte le misure seguono la grandezza scelta per il sito
// in base allo schermo (vedi "Scala del sito" in src/styles/global.css).
// Nei file si continuano a scrivere le misure del Figma in px.
import pxtorem from "postcss-pxtorem";

// Tailwind scrive gli angoli "rounded-full" come un numero enorme (3.4e38px): pxtorem ne
// convertirebbe solo la fine ("38px") rovinando la forma di archi e pulsanti.
// Prima lo sostituiamo con un numero normale, che dà lo stesso arrotondamento.
const numeriEnormi = {
  postcssPlugin: "numeri-enormi",
  Once(root) {
    root.walkDecls((decl) => {
      decl.value = decl.value.replace(/[\d.]+e\+?\d+px/g, "9999px");
    });
  },
};

export default {
  plugins: [
    numeriEnormi,
    pxtorem({
      rootValue: 16,
      propList: ["*"],
      mediaQuery: false, // i punti di passaggio (540px, 1024px...) restano in px
      minPixelValue: 2, // le linee sottili da 1px restano nitide
    }),
  ],
};
