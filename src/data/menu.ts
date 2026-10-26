// Menù mostrato nella sezione "Il menù" della home.
// Per aggiornarlo: cambia i piatti qui sotto, poi pubblica il sito.
// Ogni nome si scrive nelle tre lingue: { it: "…", fr: "…", en: "…" }.
// Se manca il francese o l'inglese, in quella lingua si vede il nome italiano.
// I nomi delle categorie su desktop sono molto grandi: meglio parole brevi (max ~12 lettere).
// Sono 2 piatti per categoria scelti dal menù della cucina (prezzi del menù cartaceo).
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
          it: "Crespella alla valdostana con Fontina DOP",
          fr: "Crêpe à la valdôtaine à la Fontina AOP",
          en: "Aosta Valley crêpe with Fontina PDO",
        },
        price: "€ 12,00",
      },
      {
        name: {
          it: "Lasagnetta tradizionale alla bolognese",
          fr: "Lasagnes traditionnelles à la bolognaise",
          en: "Traditional lasagne Bolognese",
        },
        price: "€ 12,00",
      },
    ],
  },
  {
    name: { it: "Secondi", fr: "Plats", en: "Main courses" },
    items: [
      {
        name: {
          it: "Brasato di manzo alla piemontese",
          fr: "Bœuf braisé à la piémontaise",
          en: "Piedmont-style braised beef",
        },
        price: "€ 14,00",
      },
      {
        name: {
          it: "Scaloppina di pollo al limone",
          fr: "Escalope de poulet au citron",
          en: "Chicken escalope with lemon",
        },
        price: "€ 14,00",
      },
    ],
  },
  {
    name: { it: "Contorni", fr: "Garnitures", en: "Side dishes" },
    items: [
      {
        name: {
          it: "Patate dorate al forno",
          fr: "Pommes de terre rôties au four",
          en: "Golden oven-roasted potatoes",
        },
        price: "€ 5,00",
      },
      {
        name: {
          it: "Insalatina verde di stagione",
          fr: "Salade verte de saison",
          en: "Seasonal green salad",
        },
        price: "€ 5,00",
      },
    ],
  },
  {
    name: { it: "Dolci", fr: "Desserts", en: "Desserts" },
    items: [
      // Nome del dolce della casa: uguale in tutte le lingue
      { name: { it: "Portofino Noir" }, price: "€ 6,00" },
      {
        name: {
          it: "Tiramisù della casa",
          fr: "Tiramisù maison",
          en: "House tiramisù",
        },
        price: "€ 6,00",
      },
    ],
  },
];
