// Testi fissi del sito in ITALIANO (lingua principale).
// Le traduzioni sono in fr.ts ed en.ts e devono avere le stesse voci: se ne aggiungi una qui,
// aggiungila anche lì (altrimenti `npm run check` segnala l'errore).
// Le righe dei titoli sono elenchi: ogni elemento va a capo, come nel design.
// Dati del locale (orari, indirizzo, contatti) e menù non stanno qui: vedi src/data/.

export const it = {
  seo: {
    // Va nel titolo dopo il nome: "Portofino Boutique Café – Bar, cucina e boutique ad Aosta".
    // Contiene le parole che la gente cerca (bar, Aosta, boutique): meglio non toglierle.
    slogan: "Bar, cucina e boutique ad Aosta",
    descrizione:
      "Bar, cucina e boutique di abbigliamento in via Sant'Anselmo, nel centro storico di Aosta: colazione, pranzo, aperitivo e shopping in un unico spazio. Menù, orari e dove trovarci.",
  },

  // Voci di header e footer
  nav: {
    chiSiamo: { label: "chi siamo", mobile: "Chi siamo" },
    cosaTrovi: {
      label: "cosa puoi trovare da noi",
      mobile: "Cosa trovi da noi",
    },
    orari: { label: "orari e posizione", mobile: "Orari e posizione" },
    contatti: { label: "info", mobile: "Contatti" },
    ilPortofino: "Il Portofino",
    menu: "Menù",
    orariFooter: "Orari e posizione",
    privacy: "Privacy",
    cookie: "Cookie",
  },

  layout: {
    vaiAlContenuto: "Vai al contenuto",
    tornaHome: "Portofino, torna alla home",
    menuPrincipale: "Menu principale",
    menuMobile: "Menu",
    apriMenu: "Apri il menu",
    chiudiMenu: "Chiudi il menu",
    lingua: "Lingua",
    scopriMenu: "Scopri il menù di oggi",
    prenota: "Prenota un tavolo",
    attivita: "Bar - Cucina - Abbigliamento",
    footerNav: "Link del piè di pagina",
    partitaIva: "P.IVA",
    tornaSu: "Torna su",
  },

  hero: {
    titolo: ["Un'esperienza da vivere", "nel cuore di Aosta."],
    sottotitolo:
      "Colazione, pranzo, aperitivo, shopping. Benvenuto da Portofino Boutique Café.",
    pulsante: "Scopri il menù di oggi",
    scorri: "scopri chi siamo",
    altFoto: "La sala del Portofino con le pareti blu e la parete dei vini",
  },

  chiSiamo: {
    sopratitolo: "IL MONDO PORTOFINO",
    titolo: ["Un posto,", "tante cose da vivere."],
    testo:
      "Un caffè per iniziare la giornata, una pausa pranzo, un capo che cattura lo sguardo. Portofino Boutique Café unisce bar, cucina e shopping in uno spazio dal carattere urbano, da vivere seguendo il proprio ritmo.",
    attivita: "BAR / CUCINA / ABBIGLIAMENTO",
    scorri: "Cosa trovi da noi",
    altFoto: "Un caffè espresso servito su un tavolo in legno del Portofino",
  },

  cosaTrovi: {
    attivita: "bar - cucina - abbigliamento",
    sopratitolo: "Cosa trovi da noi",
    titolo: "A pranzo, scopri i sapori di stagione",
    testo:
      "Il nostro menù fisso si arricchisce ogni stagione con nuovi piatti. Dai un’occhiata alle proposte e scegli come rendere più gustosa la tua pausa da Portofino Boutique Café.",
    altFoto:
      "Un piatto di mezze maniche al pomodoro e basilico su un tavolo del Portofino",
  },

  menu: {
    scorri: "Scopri il menù",
    titolo: "Il menù",
    prenota: "Prenota un tavolo",
  },

  orari: {
    sopratitolo: "Orari e posizione",
    titolo: "Ti aspettiamo qui!",
    testo: "Per un pranzo, un caffè o un aperitivo: ecco dove trovarci.",
    quando: "Quando passare",
    chiuso: "Chiuso",
    variazioni: "Gli orari potranno variare",
    dove: "Dove siamo",
    indicazioni: "Ottieni indicazioni",
    altCaffe: "Un caffè espresso sul bancone del Portofino",
    altAperitivo: "Un caffè e uno spritz sul bancone del Portofino",
    altMappa: "Mappa: come raggiungere Portofino Boutique Café",
  },

  contatti: {
    sopratitolo: "info e contatti",
    titolo: "Restiamo in contatto",
    testo: "Per un tavolo, un'informazione o un saluto",
    numero: "Numero",
    email: "Email",
    instagram: "Instagram",
    // Segnaposto mostrati finché i contatti in src/data/site.ts sono vuoti
    segnapostoNumero: "[Numero]",
    segnapostoEmail: "[Email]",
    segnapostoInstagram: "[@Profilo]",
  },

  // Pagine Privacy e Cookie (i testi delle informative sono in src/data/legal.ts)
  legale: {
    tornaAlSito: "Torna al sito",
    informazioni: "INFORMAZIONI",
    aggiornata: "Aggiornata il",
    indice: "In questa pagina",
  },

  // Finestra "Preferenze Cookie" (src/components/layout/cookie-banner)
  cookie: {
    titolo: "Preferenze Cookie",
    testo:
      "Usiamo cookie necessari e, solo se accetti, i cookie di Google Analytics per le statistiche delle visite.",
    necessari: "Necessari",
    sempreAttivi: "Sempre attivi",
    facoltativi: "Facoltativi",
    daConfigurare: "Da configurare",
    accetta: "Accetta tutti",
    rifiuta: "Rifiuta Facoltativi",
    personalizza: "Personalizza",
    salva: "Salva le scelte",
    // Pulsante nella pagina Cookie che riapre la finestra
    modifica: "Modifica le preferenze cookie",
  },

  errore: {
    titoloPagina: "Pagina non trovata",
    codice: "ERRORE 404",
    titolo: "Pagina non trovata",
    testo: "La pagina che cerchi non esiste o è stata spostata.",
    pulsante: "Torna alla home",
  },
};

/** Struttura dei testi: fr.ts ed en.ts devono avere le stesse voci. */
export type Testi = typeof it;
