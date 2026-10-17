// Menu del bar. TODO: sostituire con il listino reale.

export type MenuItem = {
  name: string;
  description?: string;
  price: string; // "€ 1,20"
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    name: "Caffetteria",
    items: [
      { name: "Espresso", price: "€ —" },
      { name: "Cappuccino", price: "€ —" },
    ],
  },
  {
    name: "Aperitivi",
    items: [{ name: "Spritz", price: "€ —" }],
  },
];
