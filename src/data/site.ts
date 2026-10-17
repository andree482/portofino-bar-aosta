// Dati del locale: unica fonte per testi, SEO e dati strutturati (schema.org).
// TODO: completare i campi segnati con i dati reali del bar.

export type OpeningHours = {
  /** Giorni in formato schema.org: Monday, Tuesday, ... */
  days: string[];
  opens: string; // "07:00"
  closes: string; // "20:00"
};

export const site = {
  name: "Portofino",
  legalName: "", // TODO: ragione sociale
  vatNumber: "", // TODO: partita IVA (obbligatoria nel footer)
  tagline: "Bar ad Aosta",
  description:
    "Portofino, bar ad Aosta: colazioni, pranzi veloci e aperitivi. Scopri il menu, gli orari e come raggiungerci.",
  locale: "it_IT",
  lang: "it",

  contact: {
    phone: "", // TODO: es. "+39 0165 000000"
    email: "", // TODO
    whatsapp: "", // TODO: numero in formato internazionale, senza spazi
  },

  address: {
    street: "", // TODO: via e numero civico
    city: "Aosta",
    postalCode: "11100",
    region: "Valle d'Aosta",
    country: "IT",
  },

  geo: {
    // TODO: coordinate esatte del locale (ora: centro di Aosta)
    latitude: 45.7376,
    longitude: 7.3172,
  },

  /** Link alla scheda Google Business / Google Maps. */
  mapsUrl: "", // TODO

  openingHours: [
    // TODO: orari reali, es.
    // { days: ["Monday", "Tuesday"], opens: "07:00", closes: "20:00" },
  ] as OpeningHours[],

  social: {
    instagram: "", // TODO
    facebook: "", // TODO
    tripadvisor: "", // TODO
  },

  priceRange: "€",
  servesCuisine: ["Caffetteria", "Aperitivi"],

  /** Immagine di default per le anteprime social (1200x630), in /public. */
  ogImage: "/og-image.jpg",
};

export type Site = typeof site;
