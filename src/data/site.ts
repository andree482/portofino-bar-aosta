// Dati del locale: unica fonte per testi, link, SEO e dati strutturati (schema.org).
// I campi vuoti ("") segnati TODO vanno completati prima della pubblicazione:
// finché sono vuoti, il sito mostra un segnaposto tra parentesi quadre (es. "[Numero]").

export type OpeningHours = {
  /** Testo mostrato sul sito, es. "Martedì - Domenica". */
  label: string;
  /** Giorni in inglese per Google (schema.org): Monday, Tuesday, ... */
  days: string[];
  /** Orario di apertura e chiusura, es. "08:00". Assenti se il locale è chiuso. */
  opens?: string;
  closes?: string;
};

export const site = {
  name: "Portofino",
  fullName: "Portofino Boutique Café",
  legalName: "", // TODO: ragione sociale
  vatNumber: "", // TODO: partita IVA (obbligatoria nel footer)
  tagline: "Bar ad Aosta",
  description:
    "Portofino Boutique Café ad Aosta: colazione, pranzo, aperitivo e shopping in un unico spazio. Scopri il menù del giorno, gli orari e dove trovarci.",
  locale: "it_IT",
  lang: "it",

  contact: {
    phone: "", // TODO: es. "+39 0165 000000"
    email: "", // TODO
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

  /** Link alla scheda Google Maps del locale. Se vuoto si usa una ricerca per indirizzo. */
  mapsUrl: "", // TODO

  // TODO: verificare gli orari con il locale (ora: quelli del design)
  openingHours: [
    {
      label: "Martedì - Domenica",
      days: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    { label: "Lunedì", days: ["Monday"] },
  ] as OpeningHours[],

  social: {
    instagram: "", // TODO: link completo, es. "https://www.instagram.com/portofino..."
    instagramHandle: "", // TODO: es. "@portofino.aosta"
    facebook: "",
    tripadvisor: "",
  },

  priceRange: "€",
  servesCuisine: ["Italiana", "Caffetteria", "Aperitivi"],

  /** Immagine per le anteprime social (1200x630), in /public. */
  ogImage: "/og-image.jpg",
};

export type Site = typeof site;

/** Indirizzo su una riga, es. "Via Roma 1, 11100 Aosta". */
export const fullAddress = [
  site.address.street,
  `${site.address.postalCode} ${site.address.city}`,
]
  .filter(Boolean)
  .join(", ");

/** Link "Ottieni indicazioni": la scheda Maps se c'è, altrimenti una ricerca per indirizzo. */
export const directionsUrl =
  site.mapsUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.fullName}, ${fullAddress}`)}`;

/** Link "Prenota un tavolo": chiama il locale se c'è il numero, altrimenti porta ai contatti. */
export const bookingUrl = site.contact.phone
  ? `tel:${site.contact.phone.replace(/\s/g, "")}`
  : "/#contatti";
