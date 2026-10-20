// Testi delle pagine Privacy e Cookie.
//
// Sono scritti in base a come funziona oggi il sito: nessun modulo di contatto, nessun
// cookie, nessuna statistica, font e immagini ospitati sul sito stesso.
// Se il sito cambia (statistiche, mappe incorporate, moduli, newsletter…) questi testi
// vanno aggiornati, insieme alla data `updatedAt`.
//
// I dati del titolare (ragione sociale, indirizzo, P.IVA, email) arrivano da
// src/data/site.ts: finché sono vuoti compare un segnaposto tra parentesi quadre.
import { site, fullAddress } from "./site";

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
  /** Data di ultimo aggiornamento, es. "20 ottobre 2026". */
  updatedAt: string;
  sections: LegalSection[];
  /** Pulsante in fondo alla pagina (porta all'altra informativa). */
  link: { label: string; href: string };
};

// Fornitore di hosting del sito. TODO: aggiornare se si sceglie un servizio diverso.
const hosting = {
  name: "Cloudflare, Inc.",
  privacyUrl: "https://www.cloudflare.com/it-it/privacypolicy/",
};

const owner = site.legalName || "[Ragione sociale]";
const vat = site.vatNumber || "[Partita IVA]";
const email = site.contact.email || "[Email]";
// Finché manca la via in site.ts resta solo "11100 Aosta".
const address = fullAddress;

export const privacyPage: LegalPage = {
  title: "Privacy",
  description: `Informativa sul trattamento dei dati personali di ${site.fullName}, Aosta.`,
  updatedAt: "20 ottobre 2026",
  link: { label: "Informativa cookie", href: "/cookie" },
  sections: [
    {
      id: "chi-tratta-i-dati",
      title: "Chi tratta i dati",
      body: [
        `Il titolare del trattamento è ${owner}, che gestisce ${site.fullName}, con sede in ${address}, P.IVA ${vat}.`,
        `Per qualsiasi domanda sui tuoi dati puoi scrivere a ${email}.`,
      ],
    },
    {
      id: "quali-dati-raccogliamo",
      title: "Quali dati raccogliamo",
      body: [
        "Dati di navigazione. Quando visiti il sito, i server del fornitore di hosting registrano in automatico alcune informazioni tecniche: indirizzo IP, data e ora della visita, pagina richiesta, tipo di browser e di dispositivo. Non le usiamo per identificarti.",
        "Dati che ci comunichi tu. Se ci telefoni, ci scrivi un'email o ci contatti su Instagram, per esempio per prenotare un tavolo, trattiamo i dati che decidi di darci: nome, numero di telefono, indirizzo email e il contenuto del messaggio.",
        "Il sito non ha moduli di contatto, non richiede registrazione e non usa cookie di profilazione né strumenti di statistica che ti identificano.",
      ],
    },
    {
      id: "perche-e-per-quanto-tempo",
      title: "Perché e per quanto tempo",
      body: [
        "Dati di navigazione: servono a far funzionare il sito e a proteggerlo da abusi e attacchi informatici. La base giuridica è il nostro legittimo interesse alla sicurezza del sito (art. 6, par. 1, lett. f del GDPR). Sono conservati dal fornitore di hosting per un periodo limitato, secondo le sue politiche.",
        "Richieste e prenotazioni: servono a risponderti e a gestire quello che ci chiedi. La base giuridica è l'esecuzione di misure richieste da te (art. 6, par. 1, lett. b del GDPR). Li conserviamo per il tempo necessario a rispondere e poi li cancelliamo, salvo obblighi di legge.",
        "Non vendiamo i tuoi dati e non li usiamo per inviarti pubblicità.",
      ],
    },
    {
      id: "a-chi-li-affidiamo",
      title: "A chi li affidiamo",
      body: [
        `Il sito è ospitato da ${hosting.name}, che tratta i dati di navigazione per nostro conto come responsabile del trattamento. ${hosting.name} può trasferire i dati negli Stati Uniti: il trasferimento è tutelato dall'EU-U.S. Data Privacy Framework e dalle clausole contrattuali standard della Commissione europea. Informativa del fornitore: ${hosting.privacyUrl}`,
        "Il sito contiene link a servizi esterni, come Google Maps e Instagram. Se li apri, esci dal nostro sito e quei servizi trattano i tuoi dati secondo le loro informative.",
      ],
    },
    {
      id: "diritti-e-contatti",
      title: "Diritti e contatti",
      body: [
        "In qualsiasi momento puoi chiedere di accedere ai tuoi dati, di correggerli o cancellarli, di limitarne il trattamento, di opporti al trattamento e di riceverli in un formato leggibile (artt. 15-22 del GDPR).",
        `Per esercitare questi diritti scrivi a ${email}: ti risponderemo entro un mese.`,
        "Se ritieni che i tuoi dati siano trattati in modo non corretto, puoi presentare un reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
      ],
    },
  ],
};

export const cookiePage: LegalPage = {
  title: "Cookie",
  description: `Informativa sui cookie del sito di ${site.fullName}, Aosta.`,
  updatedAt: "20 ottobre 2026",
  link: { label: "Informativa privacy", href: "/privacy" },
  sections: [
    {
      id: "cosa-sono-i-cookie",
      title: "Cosa sono i cookie",
      body: [
        'I cookie sono piccoli file di testo che un sito salva nel tuo browser. Servono, per esempio, a ricordare le tue preferenze o a raccogliere statistiche sulle visite. Esistono anche strumenti simili, come la memoria locale del browser: in questa pagina li chiamiamo tutti "cookie".',
      ],
    },
    {
      id: "cookie-usati-da-questo-sito",
      title: "Cookie usati da questo sito",
      body: [
        "Questo sito non installa cookie e non usa strumenti di tracciamento, di profilazione o di statistica.",
        "Font e immagini sono ospitati direttamente sul nostro sito: durante la visita nessun servizio esterno, come Google Fonts, riceve informazioni su di te.",
        `Il fornitore di hosting (${hosting.name}) può usare cookie tecnici strettamente necessari per la sicurezza, per esempio per riconoscere il traffico automatico dannoso. Per questi cookie la legge non richiede il consenso (art. 122 del Codice Privacy).`,
        "Per questo motivo il sito non mostra un banner per i cookie.",
      ],
    },
    {
      id: "servizi-esterni",
      title: "Servizi esterni",
      body: [
        "Nel sito ci sono link a Google Maps e Instagram. Se li apri, esci dal nostro sito: quei servizi possono usare i propri cookie, secondo le loro informative.",
      ],
    },
    {
      id: "gestire-i-cookie",
      title: "Gestire i cookie",
      body: [
        "Puoi vedere, bloccare o cancellare i cookie in qualsiasi momento dalle impostazioni del tuo browser.",
        "Se in futuro useremo cookie facoltativi, per esempio per le statistiche, ti chiederemo il consenso prima di installarli e aggiorneremo questa pagina.",
      ],
    },
  ],
};
