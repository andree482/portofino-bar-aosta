// Testi fissi del sito in INGLESE (britannico). Stesse voci di it.ts, nello stesso ordine.
import type { Testi } from "./it";

export const en: Testi = {
  seo: {
    slogan: "Café, kitchen and boutique in Aosta",
    descrizione:
      "Café, kitchen and clothing boutique on Via Sant'Anselmo in Aosta's old town: breakfast, lunch, aperitivo and shopping in one place. See the menu, opening hours and how to find us.",
  },

  nav: {
    chiSiamo: { label: "about us", mobile: "About us" },
    // Le voci desktop (label) sono più corte: devono stare in una riga con il selettore lingua
    cosaTrovi: { label: "what we offer", mobile: "What you'll find here" },
    orari: { label: "hours and location", mobile: "Hours and location" },
    contatti: { label: "info", mobile: "Contact" },
    ilPortofino: "Portofino",
    menu: "Menu",
    orariFooter: "Hours and location",
    privacy: "Privacy",
    cookie: "Cookies",
  },

  layout: {
    vaiAlContenuto: "Skip to content",
    tornaHome: "Portofino, back to the home page",
    menuPrincipale: "Main menu",
    menuMobile: "Menu",
    apriMenu: "Open the menu",
    chiudiMenu: "Close the menu",
    lingua: "Language",
    scopriMenu: "See today's menu",
    prenota: "Book a table",
    attivita: "Bar - Kitchen - Clothing",
    footerNav: "Footer links",
    partitaIva: "VAT No.",
    tornaSu: "Back to top",
  },

  hero: {
    titolo: ["An experience to savour", "in the heart of Aosta."],
    sottotitolo:
      "Breakfast, lunch, aperitivo, shopping. Welcome to Portofino Boutique Café.",
    pulsante: "See today's menu",
    scorri: "discover who we are",
    altFoto:
      "The Portofino dining room with its blue walls and wall of wine bottles",
  },

  chiSiamo: {
    sopratitolo: "THE WORLD OF PORTOFINO",
    titolo: ["One place,", "so much to enjoy."],
    testo:
      "A coffee to start the day, a lunch break, a piece of clothing that catches the eye. Portofino Boutique Café brings together a bar, a kitchen and a boutique in a space with an urban feel, to enjoy at your own pace.",
    attivita: "BAR / KITCHEN / CLOTHING",
    scorri: "What you'll find here",
    altFoto: "An espresso served on a wooden table at Portofino",
  },

  cosaTrovi: {
    attivita: "bar - kitchen - clothing",
    sopratitolo: "What you'll find here",
    titolo: "At lunch, discover seasonal flavours",
    testo:
      "Our set menu welcomes new dishes every season. Take a look at what's on offer and choose how to make your break at Portofino Boutique Café even tastier.",
    altFoto:
      "A plate of mezze maniche pasta with tomato and basil on a table at Portofino",
  },

  menu: {
    scorri: "See the menu",
    titolo: "The menu",
    prenota: "Book a table",
  },

  orari: {
    sopratitolo: "Hours and location",
    titolo: ["See you", "here!"],
    testo: "For lunch, a coffee or an aperitivo: here's where to find us.",
    quando: "When to visit",
    chiuso: "Closed",
    variazioni: "Opening hours may vary",
    dove: "Where we are",
    indicazioni: "Get directions",
    altFoto: "A coffee, a spritz and a bowl of olives on the Portofino counter",
    altMappa: "Map: how to get to Portofino Boutique Café",
  },

  contatti: {
    sopratitolo: "info and contacts",
    titolo: "Let's stay in touch",
    testo: "For a table, some information or just to say hello",
    numero: "Phone",
    email: "Email",
    instagram: "Instagram",
    segnapostoNumero: "[Phone]",
    segnapostoEmail: "[Email]",
    segnapostoInstagram: "[@Profile]",
  },

  legale: {
    tornaAlSito: "Back to the site",
    informazioni: "INFORMATION",
    aggiornata: "Last updated",
    indice: "On this page",
  },

  cookie: {
    titolo: "Cookie Preferences",
    testo:
      "We use necessary cookies and, only if you agree, Google Analytics cookies for visit statistics.",
    necessari: "Necessary",
    sempreAttivi: "Always active",
    facoltativi: "Optional",
    daConfigurare: "Not set",
    accetta: "Accept all",
    rifiuta: "Reject optional",
    personalizza: "Customise",
    salva: "Save choices",
    modifica: "Change cookie preferences",
  },

  errore: {
    titoloPagina: "Page not found",
    codice: "ERROR 404",
    titolo: "Page not found",
    testo: "The page you're looking for doesn't exist or has been moved.",
    pulsante: "Back to the home page",
  },
};
