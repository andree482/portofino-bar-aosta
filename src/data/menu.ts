// Menù del giorno mostrato nella sezione "Il menù" della home.
// Per aggiornarlo: cambia la data e i piatti qui sotto, poi pubblica il sito.
// TODO: sostituire i piatti d'esempio del design con il menù reale.

export type MenuItem = {
  name: string;
  /** Prezzo facoltativo, es. "€ 9,00". Se vuoto non viene mostrato. */
  price?: string;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

/** Data del menù nel formato anno-mese-giorno (verrà mostrata come 19-11-2026). */
export const menuDate = "2026-11-19";

// Ordine: Primi, Secondi, Contorni, Dolci. Su desktop diventano due colonne
// (Primi e Secondi a sinistra, Contorni e Dolci a destra).
export const menu: MenuCategory[] = [
  {
    name: "Primi",
    items: [
      { name: "Mezze maniche al pomodoro e basilico" },
      { name: "Risotto alle verdure" },
    ],
  },
  {
    name: "Secondi",
    items: [
      { name: "Mezze maniche al pomodoro e basilico" },
      { name: "Risotto alle verdure" },
    ],
  },
  {
    name: "Contorni",
    items: [
      { name: "Mezze maniche al pomodoro e basilico" },
      { name: "Risotto alle verdure" },
    ],
  },
  {
    name: "Dolci",
    items: [
      { name: "Mezze maniche al pomodoro e basilico" },
      { name: "Risotto alle verdure" },
    ],
  },
];
