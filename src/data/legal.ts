// Testi delle pagine Privacy e Cookie.
// TODO: i testi tra parentesi quadre sono segnaposto del design. Vanno sostituiti con
// l'informativa reale (redatta da un consulente o con un servizio come iubenda).

export type LegalSection = {
  /** id usato nei link "In questa pagina", es. "chi-tratta-i-dati". */
  id: string;
  title: string;
  /** Paragrafi della sezione. */
  body: string[];
};

export type LegalPage = {
  /** Titolo grande della pagina. */
  title: string;
  /** Descrizione per Google. */
  description: string;
  /** Data di ultimo aggiornamento, es. "15 ottobre 2026". */
  updatedAt: string;
  sections: LegalSection[];
};

export const privacyPage: LegalPage = {
  title: "Privacy",
  description:
    "Informativa sul trattamento dei dati personali di Portofino Boutique Café, Aosta.",
  updatedAt: "[data]",
  sections: [
    {
      id: "chi-tratta-i-dati",
      title: "Chi tratta i dati",
      body: ["[Ragione sociale del titolare]", "[Recapiti del titolare]"],
    },
    {
      id: "quali-dati-raccogliamo",
      title: "Quali dati raccogliamo",
      body: ["[Descrizione dei dati raccolti]"],
    },
    {
      id: "perche-e-per-quanto-tempo",
      title: "Perché e per quanto tempo",
      body: ["[Finalità, basi giuridiche e tempi di conservazione]"],
    },
    {
      id: "diritti-e-contatti",
      title: "Diritti e contatti",
      body: ["[Diritti esercitabili e modalità di contatto]"],
    },
  ],
};

export const cookiePage: LegalPage = {
  title: "Cookie",
  description:
    "Informativa sui cookie usati dal sito di Portofino Boutique Café, Aosta.",
  updatedAt: "[data]",
  sections: [
    {
      id: "cosa-sono-i-cookie",
      title: "Cosa sono i cookie",
      body: ["[Breve spiegazione di cosa sono i cookie]"],
    },
    {
      id: "cookie-necessari",
      title: "Cookie necessari",
      body: [
        "Il sito salva nel browser solo la tua scelta sulle preferenze cookie, per non chiedertela a ogni visita.",
      ],
    },
    {
      id: "cookie-facoltativi",
      title: "Cookie facoltativi",
      body: ["[Elenco dei cookie facoltativi, se presenti (es. statistiche)]"],
    },
    {
      id: "gestire-le-preferenze",
      title: "Gestire le preferenze",
      body: [
        "Puoi cambiare la tua scelta in qualsiasi momento con il pulsante “Preferenze e Cookie” in questa pagina.",
      ],
    },
  ],
};
