// Testi fissi del sito in FRANCESE. Stesse voci di it.ts, nello stesso ordine.
// Nota: in francese prima di ":", ";", "?" e "!" va uno spazio "non separabile" (già presente
// nei testi qui sotto), che impedisce di andare a capo prima del segno.
import type { Testi } from "./it";

export const fr: Testi = {
  seo: {
    slogan: "Bar, cuisine et boutique à Aoste",
    descrizione:
      "Bar, cuisine et boutique de vêtements via Sant'Anselmo, dans le centre historique d'Aoste : petit-déjeuner, déjeuner, apéritif et shopping dans un même lieu. Menu, horaires et accès.",
  },

  nav: {
    // Le voci desktop (label) sono più corte: devono stare in una riga con il selettore lingua
    chiSiamo: { label: "à propos", mobile: "Qui sommes-nous" },
    cosaTrovi: { label: "notre offre", mobile: "Ce que nous proposons" },
    orari: { label: "horaires et accès", mobile: "Horaires et accès" },
    contatti: { label: "infos", mobile: "Contacts" },
    ilPortofino: "Le Portofino",
    menu: "Menu",
    orariFooter: "Horaires et accès",
    privacy: "Vie privée",
    cookie: "Cookies",
  },

  layout: {
    vaiAlContenuto: "Aller au contenu",
    tornaHome: "Portofino, retour à l'accueil",
    menuPrincipale: "Menu principal",
    menuMobile: "Menu",
    apriMenu: "Ouvrir le menu",
    chiudiMenu: "Fermer le menu",
    lingua: "Langue",
    scopriMenu: "Découvrir le menu du jour",
    prenota: "Réserver une table",
    attivita: "Bar - Cuisine - Vêtements",
    footerNav: "Liens du pied de page",
    partitaIva: "N° TVA",
    tornaSu: "Haut de page",
  },

  hero: {
    titolo: ["Une expérience à vivre", "au cœur d'Aoste."],
    sottotitolo:
      "Petit-déjeuner, déjeuner, apéritif, shopping. Bienvenue au Portofino Boutique Café.",
    pulsante: "Découvrir le menu du jour",
    scorri: "découvrez qui nous sommes",
    altFoto:
      "La salle du Portofino, avec ses murs bleus et son mur de bouteilles de vin",
  },

  chiSiamo: {
    sopratitolo: "L'UNIVERS PORTOFINO",
    titolo: ["Un lieu,", "mille choses à vivre."],
    testo:
      "Un café pour bien commencer la journée, une pause déjeuner, un vêtement qui attire le regard. Portofino Boutique Café réunit bar, cuisine et shopping dans un espace au caractère urbain, à vivre à votre rythme.",
    attivita: "BAR / CUISINE / VÊTEMENTS",
    scorri: "Ce que nous proposons",
    altFoto: "Un espresso servi sur une table en bois du Portofino",
  },

  cosaTrovi: {
    attivita: "bar - cuisine - vêtements",
    sopratitolo: "Ce que nous proposons",
    titolo: "À midi, découvrez les saveurs de saison",
    testo:
      "Notre menu s'enrichit chaque saison de nouveaux plats. Jetez un œil à nos propositions et choisissez comment rendre votre pause au Portofino Boutique Café encore plus savoureuse.",
    altFoto:
      "Une assiette de mezze maniche à la tomate et au basilic sur une table du Portofino",
  },

  menu: {
    scorri: "Découvrir le menu",
    titolo: "Le menu",
    prenota: "Réserver une table",
  },

  orari: {
    sopratitolo: "Horaires et accès",
    titolo: ["Nous vous", "attendons ici !"],
    testo: "Pour un déjeuner, un café ou un apéritif : voici où nous trouver.",
    quando: "Quand passer",
    chiuso: "Fermé",
    variazioni: "Les horaires peuvent varier",
    dove: "Où nous trouver",
    indicazioni: "Itinéraire",
    altFoto: "Un café, un spritz et une coupelle d'olives sur le comptoir du Portofino",
    altMappa: "Carte : comment rejoindre le Portofino Boutique Café",
  },

  contatti: {
    sopratitolo: "infos et contacts",
    titolo: "Restons en contact",
    testo: "Pour une table, une information ou simplement pour dire bonjour",
    numero: "Téléphone",
    email: "E-mail",
    instagram: "Instagram",
    segnapostoNumero: "[Téléphone]",
    segnapostoEmail: "[E-mail]",
    segnapostoInstagram: "[@Profil]",
  },

  legale: {
    tornaAlSito: "Retour au site",
    informazioni: "INFORMATIONS",
    aggiornata: "Mise à jour le",
    indice: "Sur cette page",
  },

  cookie: {
    titolo: "Préférences cookies",
    testo:
      "Nous utilisons des cookies nécessaires et, uniquement si vous acceptez, les cookies de Google Analytics pour les statistiques de visite.",
    necessari: "Nécessaires",
    sempreAttivi: "Toujours actifs",
    facoltativi: "Facultatifs",
    daConfigurare: "À configurer",
    accetta: "Tout accepter",
    rifiuta: "Tout refuser",
    personalizza: "Personnaliser",
    salva: "Enregistrer mes choix",
    modifica: "Modifier les préférences cookies",
  },

  errore: {
    titoloPagina: "Page introuvable",
    codice: "ERREUR 404",
    titolo: "Page introuvable",
    testo: "La page que vous cherchez n'existe pas ou a été déplacée.",
    pulsante: "Retour à l'accueil",
  },
};
