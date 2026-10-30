// Trasforma i px del CSS in rem, così tutte le misure seguono la grandezza scelta per il sito
// in base allo schermo (vedi "Scala del sito" in src/styles/global.css).
// Nei file si continuano a scrivere le misure del Figma in px.
import pxtorem from "postcss-pxtorem";

export default {
  plugins: [
    pxtorem({
      rootValue: 16,
      propList: ["*"],
      mediaQuery: false, // i punti di passaggio (540px, 1024px...) restano in px
      minPixelValue: 2, // le linee sottili da 1px restano nitide
    }),
  ],
};
