// Dati del locale: unica fonte per link, SEO e dati strutturati (schema.org).
// I testi fissi del sito, nelle tre lingue, sono in src/i18n/.
// I campi vuoti ("") segnati TODO vanno completati prima della pubblicazione:
// finché sono vuoti, il sito mostra un segnaposto tra parentesi quadre (es. "[Numero]").
import type { Tradotto } from "../i18n/lingue";

export type OpeningHours = {
  /** Testo mostrato sul sito nelle tre lingue, es. { it: "Lunedì", fr: "Lundi", en: "Monday" }. */
  label: Tradotto;
  /** Giorni in inglese per Google (schema.org): Monday, Tuesday, ... */
  days: string[];
  /** Orario di apertura e chiusura, es. "08:00". Assenti se il locale è chiuso. */
  opens?: string;
  closes?: string;
};

export const site = {
  name: "Portofino",
  fullName: "Portofino Boutique Café",
  // Altri modi in cui la gente scrive o cerca il nome: Google e le AI (ChatGPT, Gemini,
  // Claude...) li collegano tutti a questo locale. Si possono aggiungere altre varianti.
  alternateNames: [
    "Portofino Boutique Caffè",
    "Portofino Boutique Cafe",
    "Portofino Café Aosta",
    "Portofino Aosta",
    "Bar Portofino Aosta",
  ],
  // Dati della società che gestisce il locale (sede legale = indirizzo del locale, sotto)
  // Ragione sociale completa: CHANTILLY SOCIETA' A RESPONSABILITA' LIMITATA SEMPLIFICATA
  legalName: "Chantilly S.r.l.s.",
  vatNumber: "01249930072", // partita IVA, uguale al codice fiscale (obbligatoria nel footer)
  tagline: "",
  // La descrizione per Google, in ogni lingua, è in src/i18n/ (voce seo.descrizione).

  contact: {
    phone: "+39 0165 040405",
    email: "info@portofinoboutiquecafe.it",
  },

  address: {
    street: "Via Sant'Anselmo, 6/b",
    city: "Aosta",
    postalCode: "11100",
    region: "Valle d'Aosta",
    country: "IT",
  },

  geo: {
    // Posizione del locale (dalla scheda Google Maps)
    latitude: 45.7381007,
    longitude: 7.3239224,
  },

  /** Link alla scheda Google Maps del locale. Se vuoto si usa una ricerca per indirizzo. */
  mapsUrl: "https://maps.app.goo.gl/zMULjXvrM8VnJZxh9",

  // TODO: verificare con il locale l'orario di chiusura (ora: quello del design)
  openingHours: [
    {
      label: {
        it: "Martedì - Domenica",
        fr: "Mardi - Dimanche",
        en: "Tuesday - Sunday",
      },
      days: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    { label: { it: "Lunedì", fr: "Lundi", en: "Monday" }, days: ["Monday"] },
  ] as OpeningHours[],

  social: {
    // Stesso nome del dominio, tutto attaccato
    instagram: "https://www.instagram.com/portofinoboutiquecafe",
    instagramHandle: "@portofinoboutiquecafe",
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
