// Menù mostrato nella sezione "Il menù" della home.
// Per aggiornarlo: cambia i piatti qui sotto, poi pubblica il sito.
// Sono 2 piatti per categoria scelti dal menù della cucina (prezzi del menù cartaceo).

export type MenuItem = {
  name: string;
  /** Prezzo facoltativo, es. "€ 9,00". Se vuoto non viene mostrato. */
  price?: string;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

// Ordine: Primi, Secondi, Contorni, Dolci. Su desktop diventano due colonne
// (Primi e Secondi a sinistra, Contorni e Dolci a destra).
export const menu: MenuCategory[] = [
  {
    name: "Primi",
    items: [
      { name: "Crespella alla valdostana con Fontina DOP", price: "€ 12,00" },
      { name: "Lasagnetta tradizionale alla bolognese", price: "€ 12,00" },
    ],
  },
  {
    name: "Secondi",
    items: [
      { name: "Brasato di manzo alla piemontese", price: "€ 14,00" },
      { name: "Scaloppina di pollo al limone", price: "€ 14,00" },
    ],
  },
  {
    name: "Contorni",
    items: [
      { name: "Patate dorate al forno", price: "€ 5,00" },
      { name: "Insalatina verde di stagione", price: "€ 5,00" },
    ],
  },
  {
    name: "Dolci",
    items: [
      { name: "Portofino Noir", price: "€ 6,00" },
      { name: "Tiramisù della casa", price: "€ 6,00" },
    ],
  },
];
