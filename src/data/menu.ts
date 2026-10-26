// Menù mostrato nella sezione "Il menù" della home.
// Per aggiornarlo: cambia i piatti qui sotto, poi pubblica il sito.
// Ogni nome si scrive nelle tre lingue: { it: "…", fr: "…", en: "…" }.
// Se manca il francese o l'inglese, in quella lingua si vede il nome italiano.
// I nomi delle categorie su desktop sono molto grandi: meglio parole brevi (max ~12 lettere).
// TODO: sostituire i piatti d'esempio del design con il menù reale.
import type { Tradotto } from "../i18n/lingue";

export type MenuItem = {
  name: Tradotto;
  /** Prezzo facoltativo, es. "€ 9,00". Se vuoto non viene mostrato. */
  price?: string;
};

export type MenuCategory = {
  name: Tradotto;
  items: MenuItem[];
};

// Ordine: Primi, Secondi, Contorni, Dolci. Su desktop diventano due colonne
// (Primi e Secondi a sinistra, Contorni e Dolci a destra).
export const menu: MenuCategory[] = [
  {
    name: { it: "Primi", fr: "Premiers plats", en: "First courses" },
    items: [
      {
        name: {
          it: "Mezze maniche al pomodoro e basilico",
          fr: "Mezze maniche à la tomate et au basilic",
          en: "Mezze maniche with tomato and basil",
        },
      },
      {
        name: {
          it: "Risotto alle verdure",
          fr: "Risotto aux légumes",
          en: "Vegetable risotto",
        },
      },
    ],
  },
  {
    name: { it: "Secondi", fr: "Plats", en: "Main courses" },
    items: [
      {
        name: {
          it: "Mezze maniche al pomodoro e basilico",
          fr: "Mezze maniche à la tomate et au basilic",
          en: "Mezze maniche with tomato and basil",
        },
      },
      {
        name: {
          it: "Risotto alle verdure",
          fr: "Risotto aux légumes",
          en: "Vegetable risotto",
        },
      },
    ],
  },
  {
    name: { it: "Contorni", fr: "Garnitures", en: "Side dishes" },
    items: [
      {
        name: {
          it: "Mezze maniche al pomodoro e basilico",
          fr: "Mezze maniche à la tomate et au basilic",
          en: "Mezze maniche with tomato and basil",
        },
      },
      {
        name: {
          it: "Risotto alle verdure",
          fr: "Risotto aux légumes",
          en: "Vegetable risotto",
        },
      },
    ],
  },
  {
    name: { it: "Dolci", fr: "Desserts", en: "Desserts" },
    items: [
      {
        name: {
          it: "Mezze maniche al pomodoro e basilico",
          fr: "Mezze maniche à la tomate et au basilic",
          en: "Mezze maniche with tomato and basil",
        },
      },
      {
        name: {
          it: "Risotto alle verdure",
          fr: "Risotto aux légumes",
          en: "Vegetable risotto",
        },
      },
    ],
  },
];
