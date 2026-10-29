// Testi delle pagine Privacy e Cookie, in italiano, francese e inglese.
//
// Sono scritti in base a come funziona oggi il sito: nessun modulo di contatto, statistiche
// con Google Analytics solo dopo il consenso nel banner cookie, font e immagini ospitati sul
// sito stesso. Nel browser restano la lingua scelta con il selettore IT / FR / EN e la scelta
// sui cookie (memoria locale del browser).
// Se il sito cambia (altre statistiche, mappe incorporate, moduli, newsletter…) questi testi
// vanno aggiornati in tutte e tre le lingue, insieme alla data `updatedAt`.
// Il testo che fa fede è quello italiano: francese e inglese ne sono la traduzione.
//
// I dati del titolare (ragione sociale, indirizzo, P.IVA, email) arrivano da
// src/data/site.ts: finché sono vuoti compare un segnaposto tra parentesi quadre.
import { site, fullAddress } from "./site";
import type { Lingua } from "../i18n/lingue";

export type LegalSection = {
  /** id usato nei link "In questa pagina", es. "chi-tratta-i-dati". Uguale nelle tre lingue. */
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
  /**
   * Pulsante in fondo alla pagina (porta all'altra informativa).
   * L'indirizzo si scrive come in italiano: per le altre lingue diventa /fr/..., /en/... da solo.
   */
  link: { label: string; href: string };
  /** true = in fondo alle sezioni compare il pulsante che riapre le preferenze cookie. */
  preferenzeCookie?: boolean;
};

// Fornitore di hosting del sito. TODO: aggiornare se si sceglie un servizio diverso.
const hosting = {
  name: "Cloudflare, Inc.",
  privacyUrl: {
    it: "https://www.cloudflare.com/it-it/privacypolicy/",
    fr: "https://www.cloudflare.com/fr-fr/privacypolicy/",
    en: "https://www.cloudflare.com/privacypolicy/",
  },
};

// Google Analytics (statistiche, solo con consenso). Se si toglie, aggiornare i testi sotto.
const google = {
  name: "Google Ireland Limited",
  privacyUrl: "https://policies.google.com/privacy",
  partnerUrl: "https://policies.google.com/technologies/partner-sites",
};

const owner = site.legalName || "[Ragione sociale]";
const vat = site.vatNumber || "[Partita IVA]";
const email = site.contact.email || "[Email]";
// Finché manca la via in site.ts resta solo "11100 Aosta".
const address = fullAddress;

// ---------------------------------------------------------------------------
// PRIVACY
// ---------------------------------------------------------------------------

export const privacyPage: Record<Lingua, LegalPage> = {
  it: {
    title: "Privacy",
    description: `Informativa sul trattamento dei dati personali di ${site.fullName}, Aosta.`,
    updatedAt: "29 ottobre 2026",
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
          "Statistiche delle visite. Solo se lo accetti nella finestra dei cookie, usiamo Google Analytics per sapere quante persone visitano il sito e come lo usano: pagine viste, durata della visita, tipo di dispositivo e di browser, paese o città approssimativi, insieme a un codice casuale salvato in un cookie. Non riceviamo il tuo nome né altri dati che ti identificano direttamente.",
          "Il sito non ha moduli di contatto, non richiede registrazione e non usa cookie di profilazione o pubblicitari.",
        ],
      },
      {
        id: "perche-e-per-quanto-tempo",
        title: "Perché e per quanto tempo",
        body: [
          "Dati di navigazione: servono a far funzionare il sito e a proteggerlo da abusi e attacchi informatici. La base giuridica è il nostro legittimo interesse alla sicurezza del sito (art. 6, par. 1, lett. f del GDPR). Sono conservati dal fornitore di hosting per un periodo limitato, secondo le sue politiche.",
          "Richieste e prenotazioni: servono a risponderti e a gestire quello che ci chiedi. La base giuridica è l'esecuzione di misure richieste da te (art. 6, par. 1, lett. b del GDPR). Li conserviamo per il tempo necessario a rispondere e poi li cancelliamo, salvo obblighi di legge.",
          "Statistiche: servono a capire come viene usato il sito e a migliorarlo. La base giuridica è il tuo consenso (art. 6, par. 1, lett. a del GDPR), che puoi ritirare in qualsiasi momento dalla pagina Cookie. I dati restano in Google Analytics per al massimo 14 mesi.",
          "Non vendiamo i tuoi dati e non li usiamo per inviarti pubblicità.",
        ],
      },
      {
        id: "a-chi-li-affidiamo",
        title: "A chi li affidiamo",
        body: [
          `Il sito è ospitato da ${hosting.name}, che tratta i dati di navigazione per nostro conto come responsabile del trattamento. ${hosting.name} può trasferire i dati negli Stati Uniti: il trasferimento è tutelato dall'EU-U.S. Data Privacy Framework e dalle clausole contrattuali standard della Commissione europea. Informativa del fornitore: ${hosting.privacyUrl.it}`,
          `Solo con il tuo consenso, le statistiche delle visite sono affidate a Google Analytics, fornito da ${google.name}, che tratta i dati per nostro conto come responsabile del trattamento. Google può trasferire i dati negli Stati Uniti: il trasferimento è tutelato dall'EU-U.S. Data Privacy Framework, a cui Google aderisce. Informativa di Google: ${google.privacyUrl}`,
          "Il sito contiene link a servizi esterni, come Google Maps e Instagram. Se li apri, esci dal nostro sito e quei servizi trattano i tuoi dati secondo le loro informative.",
        ],
      },
      {
        id: "immagini",
        title: "Immagini del sito",
        body: [
          "Le fotografie e le immagini presenti sul sito hanno scopo puramente illustrativo e dimostrativo: servono a dare un'idea dell'atmosfera del locale e di ciò che proponiamo. Piatti, bevande, prodotti, ambienti e allestimenti reali possono essere diversi da quelli mostrati.",
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
  },

  fr: {
    title: "Vie privée",
    description: `Politique de confidentialité du ${site.fullName}, Aoste.`,
    updatedAt: "29 octobre 2026",
    link: { label: "Politique de cookies", href: "/cookie" },
    sections: [
      {
        id: "chi-tratta-i-dati",
        title: "Qui traite vos données",
        body: [
          `Le responsable du traitement est ${owner}, qui gère le ${site.fullName}, dont le siège est situé ${address}, Italie, n° TVA ${vat}.`,
          `Pour toute question concernant vos données, vous pouvez écrire à ${email}.`,
        ],
      },
      {
        id: "quali-dati-raccogliamo",
        title: "Les données que nous collectons",
        body: [
          "Données de navigation. Lorsque vous visitez le site, les serveurs de l'hébergeur enregistrent automatiquement certaines informations techniques : adresse IP, date et heure de la visite, page demandée, type de navigateur et d'appareil. Nous ne les utilisons pas pour vous identifier.",
          "Données que vous nous communiquez. Si vous nous appelez, nous écrivez un e-mail ou nous contactez sur Instagram, par exemple pour réserver une table, nous traitons les données que vous choisissez de nous donner : nom, numéro de téléphone, adresse e-mail et contenu du message.",
          "Statistiques de visite. Uniquement si vous l'acceptez dans la fenêtre des cookies, nous utilisons Google Analytics pour savoir combien de personnes visitent le site et comment elles l'utilisent : pages vues, durée de la visite, type d'appareil et de navigateur, pays ou ville approximatifs, ainsi qu'un code aléatoire enregistré dans un cookie. Nous ne recevons ni votre nom ni aucune autre donnée permettant de vous identifier directement.",
          "Le site n'a pas de formulaire de contact, ne demande aucune inscription et n'utilise pas de cookies de profilage ou publicitaires.",
        ],
      },
      {
        id: "perche-e-per-quanto-tempo",
        title: "Pourquoi et pendant combien de temps",
        body: [
          "Données de navigation : elles servent à faire fonctionner le site et à le protéger contre les abus et les attaques informatiques. La base juridique est notre intérêt légitime à la sécurité du site (art. 6, par. 1, point f du RGPD). Elles sont conservées par l'hébergeur pendant une durée limitée, selon ses propres règles.",
          "Demandes et réservations : elles servent à vous répondre et à gérer ce que vous nous demandez. La base juridique est l'exécution de mesures prises à votre demande (art. 6, par. 1, point b du RGPD). Nous les conservons le temps nécessaire pour vous répondre, puis nous les supprimons, sauf obligation légale.",
          "Statistiques : elles servent à comprendre comment le site est utilisé et à l'améliorer. La base juridique est votre consentement (art. 6, par. 1, point a du RGPD), que vous pouvez retirer à tout moment depuis la page Cookies. Les données restent dans Google Analytics pendant 14 mois au maximum.",
          "Nous ne vendons pas vos données et ne les utilisons pas pour vous envoyer de la publicité.",
        ],
      },
      {
        id: "a-chi-li-affidiamo",
        title: "À qui nous les confions",
        body: [
          `Le site est hébergé par ${hosting.name}, qui traite les données de navigation pour notre compte en tant que sous-traitant. ${hosting.name} peut transférer les données aux États-Unis : ce transfert est encadré par le EU-U.S. Data Privacy Framework et par les clauses contractuelles types de la Commission européenne. Politique de l'hébergeur : ${hosting.privacyUrl.fr}`,
          `Uniquement avec votre consentement, les statistiques de visite sont confiées à Google Analytics, fourni par ${google.name}, qui traite les données pour notre compte en tant que sous-traitant. Google peut transférer les données aux États-Unis : ce transfert est encadré par le EU-U.S. Data Privacy Framework, auquel Google adhère. Politique de Google : ${google.privacyUrl}`,
          "Le site contient des liens vers des services externes, comme Google Maps et Instagram. Si vous les ouvrez, vous quittez notre site et ces services traitent vos données selon leurs propres politiques.",
        ],
      },
      {
        id: "immagini",
        title: "Images du site",
        body: [
          "Les photos et images présentes sur le site sont fournies à titre purement illustratif et de démonstration : elles donnent une idée de l'ambiance du lieu et de ce que nous proposons. Les plats, boissons, produits, espaces et aménagements réels peuvent différer de ceux qui sont montrés.",
        ],
      },
      {
        id: "diritti-e-contatti",
        title: "Vos droits et nous contacter",
        body: [
          "À tout moment, vous pouvez demander à accéder à vos données, à les rectifier ou à les effacer, à en limiter le traitement, à vous opposer au traitement et à les recevoir dans un format lisible (art. 15 à 22 du RGPD).",
          `Pour exercer ces droits, écrivez à ${email} : nous vous répondrons dans un délai d'un mois.`,
          "Si vous estimez que vos données ne sont pas traitées correctement, vous pouvez introduire une réclamation auprès de l'autorité italienne de protection des données, le Garante per la protezione dei dati personali (www.garanteprivacy.it).",
        ],
      },
    ],
  },

  en: {
    title: "Privacy",
    description: `Privacy policy of ${site.fullName}, Aosta.`,
    updatedAt: "29 October 2026",
    link: { label: "Cookie policy", href: "/cookie" },
    sections: [
      {
        id: "chi-tratta-i-dati",
        title: "Who processes your data",
        body: [
          `The data controller is ${owner}, which runs ${site.fullName}, with registered office at ${address}, Italy, VAT No. ${vat}.`,
          `If you have any questions about your data, you can write to ${email}.`,
        ],
      },
      {
        id: "quali-dati-raccogliamo",
        title: "What data we collect",
        body: [
          "Browsing data. When you visit the site, the hosting provider's servers automatically record some technical information: IP address, date and time of the visit, page requested, type of browser and device. We do not use it to identify you.",
          "Data you give us. If you phone us, email us or contact us on Instagram, for example to book a table, we process the data you choose to give us: name, phone number, email address and the content of your message.",
          "Visit statistics. Only if you accept in the cookie window, we use Google Analytics to find out how many people visit the site and how they use it: pages viewed, length of the visit, type of device and browser, approximate country or city, together with a random code saved in a cookie. We do not receive your name or any other data that directly identifies you.",
          "The site has no contact forms, does not require registration and does not use profiling or advertising cookies.",
        ],
      },
      {
        id: "perche-e-per-quanto-tempo",
        title: "Why and for how long",
        body: [
          "Browsing data: used to run the site and protect it from abuse and cyber attacks. The legal basis is our legitimate interest in keeping the site secure (Art. 6(1)(f) GDPR). It is kept by the hosting provider for a limited period, according to its policies.",
          "Requests and bookings: used to reply to you and handle what you ask us. The legal basis is taking steps at your request (Art. 6(1)(b) GDPR). We keep this data for as long as needed to reply and then delete it, unless the law requires otherwise.",
          "Statistics: used to understand how the site is used and to improve it. The legal basis is your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time from the Cookies page. The data is kept in Google Analytics for a maximum of 14 months.",
          "We do not sell your data or use it to send you advertising.",
        ],
      },
      {
        id: "a-chi-li-affidiamo",
        title: "Who we share it with",
        body: [
          `The site is hosted by ${hosting.name}, which processes browsing data on our behalf as a data processor. ${hosting.name} may transfer data to the United States: the transfer is covered by the EU-U.S. Data Privacy Framework and by the European Commission's standard contractual clauses. Provider's policy: ${hosting.privacyUrl.en}`,
          `Only with your consent, visit statistics are handled by Google Analytics, provided by ${google.name}, which processes the data on our behalf as a data processor. Google may transfer data to the United States: the transfer is covered by the EU-U.S. Data Privacy Framework, in which Google participates. Google's policy: ${google.privacyUrl}`,
          "The site contains links to external services, such as Google Maps and Instagram. If you open them, you leave our site and those services process your data according to their own policies.",
        ],
      },
      {
        id: "immagini",
        title: "Images on this site",
        body: [
          "The photos and images on this site are for illustrative and demonstration purposes only: they give an idea of the atmosphere of the place and of what we offer. Actual dishes, drinks, products, spaces and furnishings may differ from those shown.",
        ],
      },
      {
        id: "diritti-e-contatti",
        title: "Your rights and contacts",
        body: [
          "At any time you can ask to access your data, correct or delete it, restrict or object to its processing, and receive it in a readable format (Arts. 15-22 GDPR).",
          `To exercise these rights, write to ${email}: we will reply within one month.`,
          "If you believe your data is not being processed correctly, you can lodge a complaint with the Italian data protection authority, the Garante per la protezione dei dati personali (www.garanteprivacy.it).",
        ],
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// COOKIE
// ---------------------------------------------------------------------------

export const cookiePage: Record<Lingua, LegalPage> = {
  it: {
    title: "Cookie",
    description: `Informativa sui cookie del sito di ${site.fullName}, Aosta.`,
    updatedAt: "27 ottobre 2026",
    link: { label: "Informativa privacy", href: "/privacy" },
    preferenzeCookie: true,
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
          "Questo sito usa cookie tecnici, per i quali la legge non richiede il consenso, e, solo se li accetti, i cookie di statistica di Google Analytics (vedi sotto). Non usa cookie di profilazione o pubblicitari.",
          "Alla prima visita il sito si apre nella lingua impostata sul tuo dispositivo (italiano, francese o inglese). Per farlo legge solo l'impostazione della lingua del browser, che non viene salvata né inviata a nessuno.",
          'Se scegli una lingua con il selettore "IT / FR / EN", il browser ricorda la tua scelta nella sua memoria locale (voce "lingua"), così alle visite successive il sito si apre nella lingua che hai scelto. Il dato resta sul tuo dispositivo, non ci viene inviato e non scade: puoi cancellarlo quando vuoi dalle impostazioni del browser. Serve solo a fornirti una funzione che hai chiesto tu, quindi la legge non richiede il consenso (art. 122 del Codice Privacy).',
          "Font e immagini sono ospitati direttamente sul nostro sito: durante la visita nessun servizio esterno, come Google Fonts, riceve informazioni su di te.",
          `Il fornitore di hosting (${hosting.name}) può usare cookie tecnici strettamente necessari per la sicurezza, per esempio per riconoscere il traffico automatico dannoso. Anche per questi cookie la legge non richiede il consenso.`,
          'Alla prima visita una finestra ti chiede se accetti i cookie facoltativi. La tua scelta viene salvata nella memoria locale del browser (voce "portofino-cookie-consent"), così la finestra non ti viene riproposta a ogni visita. Anche questo dato resta sul tuo dispositivo e non richiede il consenso.',
        ],
      },
      {
        id: "statistiche",
        title: "Statistiche (Google Analytics)",
        body: [
          `Se accetti i cookie facoltativi, usiamo Google Analytics, un servizio di ${google.name}, per contare le visite e capire quali pagine sono più utili. Senza il tuo consenso il codice di Google non viene caricato e Google non riceve alcun dato.`,
          'Google Analytics salva due cookie: "_ga", che distingue i visitatori con un codice casuale, e "_ga_" seguito da un codice, che ricorda la visita in corso. Durano al massimo 2 anni.',
          `Google Analytics non conserva gli indirizzi IP. Google può trasferire i dati negli Stati Uniti, con le tutele dell'EU-U.S. Data Privacy Framework. Informativa di Google: ${google.privacyUrl}. Come Google usa i dati dei siti che usano i suoi servizi: ${google.partnerUrl}`,
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
          'Puoi cambiare la tua scelta in qualsiasi momento con il pulsante "Modifica le preferenze cookie" in questa pagina. Se ritiri il consenso, le statistiche si fermano e i cookie di Google Analytics vengono cancellati.',
          "Se chiudi la finestra dei cookie senza scegliere (tasto Esc), è come se avessi rifiutato i cookie facoltativi.",
          "Puoi anche vedere, bloccare o cancellare i cookie in qualsiasi momento dalle impostazioni del tuo browser.",
        ],
      },
    ],
  },

  fr: {
    title: "Cookies",
    description: `Politique de cookies du site du ${site.fullName}, Aoste.`,
    updatedAt: "27 octobre 2026",
    link: { label: "Politique de confidentialité", href: "/privacy" },
    preferenzeCookie: true,
    sections: [
      {
        id: "cosa-sono-i-cookie",
        title: "Qu'est-ce qu'un cookie",
        body: [
          "Les cookies sont de petits fichiers texte qu'un site enregistre dans votre navigateur. Ils servent, par exemple, à mémoriser vos préférences ou à établir des statistiques de visite. Il existe aussi des outils similaires, comme la mémoire locale du navigateur : sur cette page, nous les appelons tous « cookies ».",
        ],
      },
      {
        id: "cookie-usati-da-questo-sito",
        title: "Les cookies utilisés par ce site",
        body: [
          "Ce site utilise des cookies techniques, pour lesquels la loi n'exige pas de consentement, et, uniquement si vous les acceptez, les cookies de statistiques de Google Analytics (voir ci-dessous). Il n'utilise pas de cookies de profilage ou publicitaires.",
          "Lors de votre première visite, le site s'ouvre dans la langue réglée sur votre appareil (italien, français ou anglais). Pour cela, il lit uniquement le réglage de langue du navigateur, qui n'est ni enregistré ni transmis à qui que ce soit.",
          "Si vous choisissez une langue avec le sélecteur « IT / FR / EN », le navigateur mémorise votre choix dans sa mémoire locale (entrée « lingua »), pour que le site s'ouvre dans cette langue lors de vos prochaines visites. Cette donnée reste sur votre appareil, ne nous est pas transmise et n'expire pas : vous pouvez l'effacer à tout moment dans les réglages du navigateur. Elle sert uniquement à vous fournir une fonction que vous avez demandée : la loi n'exige donc pas votre consentement (art. 122 du Code italien de la vie privée).",
          "Les polices et les images sont hébergées directement sur notre site : pendant votre visite, aucun service externe, comme Google Fonts, ne reçoit d'informations vous concernant.",
          `L'hébergeur (${hosting.name}) peut utiliser des cookies techniques strictement nécessaires à la sécurité, par exemple pour reconnaître le trafic automatisé malveillant. Pour ces cookies non plus, la loi n'exige pas de consentement.`,
          "Lors de votre première visite, une fenêtre vous demande si vous acceptez les cookies facultatifs. Votre choix est enregistré dans la mémoire locale du navigateur (entrée « portofino-cookie-consent »), pour que la fenêtre ne s'affiche pas à chaque visite. Cette donnée reste elle aussi sur votre appareil et ne nécessite pas de consentement.",
        ],
      },
      {
        id: "statistiche",
        title: "Statistiques (Google Analytics)",
        body: [
          `Si vous acceptez les cookies facultatifs, nous utilisons Google Analytics, un service de ${google.name}, pour compter les visites et comprendre quelles pages sont les plus utiles. Sans votre consentement, le code de Google n'est pas chargé et Google ne reçoit aucune donnée.`,
          "Google Analytics enregistre deux cookies : « _ga », qui distingue les visiteurs grâce à un code aléatoire, et « _ga_ » suivi d'un code, qui mémorise la visite en cours. Ils durent 2 ans au maximum.",
          `Google Analytics ne conserve pas les adresses IP. Google peut transférer les données aux États-Unis, avec les garanties du EU-U.S. Data Privacy Framework. Politique de Google : ${google.privacyUrl}. Comment Google utilise les données des sites qui utilisent ses services : ${google.partnerUrl}`,
        ],
      },
      {
        id: "servizi-esterni",
        title: "Services externes",
        body: [
          "Le site contient des liens vers Google Maps et Instagram. Si vous les ouvrez, vous quittez notre site : ces services peuvent utiliser leurs propres cookies, selon leurs politiques.",
        ],
      },
      {
        id: "gestire-i-cookie",
        title: "Gérer les cookies",
        body: [
          "Vous pouvez modifier votre choix à tout moment avec le bouton « Modifier les préférences cookies » sur cette page. Si vous retirez votre consentement, les statistiques s'arrêtent et les cookies de Google Analytics sont supprimés.",
          "Si vous fermez la fenêtre des cookies sans choisir (touche Échap), cela revient à refuser les cookies facultatifs.",
          "Vous pouvez aussi consulter, bloquer ou supprimer les cookies à tout moment dans les réglages de votre navigateur.",
        ],
      },
    ],
  },

  en: {
    title: "Cookies",
    description: `Cookie policy of the ${site.fullName} website, Aosta.`,
    updatedAt: "27 October 2026",
    link: { label: "Privacy policy", href: "/privacy" },
    preferenzeCookie: true,
    sections: [
      {
        id: "cosa-sono-i-cookie",
        title: "What cookies are",
        body: [
          'Cookies are small text files that a website saves in your browser. They are used, for example, to remember your preferences or to collect visit statistics. There are also similar tools, such as the browser\'s local storage: on this page we call them all "cookies".',
        ],
      },
      {
        id: "cookie-usati-da-questo-sito",
        title: "Cookies used by this site",
        body: [
          "This site uses technical cookies, which the law does not require consent for, and, only if you accept them, Google Analytics statistics cookies (see below). It does not use profiling or advertising cookies.",
          "On your first visit, the site opens in the language set on your device (Italian, French or English). To do this, it only reads your browser's language setting, which is neither saved nor sent to anyone.",
          'If you choose a language with the "IT / FR / EN" selector, your browser remembers your choice in its local storage (entry "lingua"), so the site opens in that language on your next visits. This data stays on your device, is not sent to us and does not expire: you can delete it at any time from your browser settings. It is only used to provide a feature you asked for, so the law does not require your consent (Art. 122 of the Italian Privacy Code).',
          "Fonts and images are hosted directly on our site: during your visit, no external service, such as Google Fonts, receives any information about you.",
          `The hosting provider (${hosting.name}) may use technical cookies that are strictly necessary for security, for example to recognise harmful automated traffic. These cookies do not require consent either.`,
          'On your first visit, a window asks whether you accept optional cookies. Your choice is saved in your browser\'s local storage (entry "portofino-cookie-consent"), so the window does not appear on every visit. This data also stays on your device and does not require consent.',
        ],
      },
      {
        id: "statistiche",
        title: "Statistics (Google Analytics)",
        body: [
          `If you accept optional cookies, we use Google Analytics, a service of ${google.name}, to count visits and understand which pages are most useful. Without your consent, Google's code is not loaded and Google receives no data.`,
          'Google Analytics saves two cookies: "_ga", which tells visitors apart with a random code, and "_ga_" followed by a code, which remembers the current visit. They last up to 2 years.',
          `Google Analytics does not store IP addresses. Google may transfer data to the United States, with the safeguards of the EU-U.S. Data Privacy Framework. Google's policy: ${google.privacyUrl}. How Google uses data from sites that use its services: ${google.partnerUrl}`,
        ],
      },
      {
        id: "servizi-esterni",
        title: "External services",
        body: [
          "The site contains links to Google Maps and Instagram. If you open them, you leave our site: those services may use their own cookies, according to their policies.",
        ],
      },
      {
        id: "gestire-i-cookie",
        title: "Managing cookies",
        body: [
          'You can change your choice at any time with the "Change cookie preferences" button on this page. If you withdraw your consent, statistics stop and the Google Analytics cookies are deleted.',
          "If you close the cookie window without choosing (Esc key), it counts as rejecting optional cookies.",
          "You can also view, block or delete cookies at any time from your browser settings.",
        ],
      },
    ],
  },
};
