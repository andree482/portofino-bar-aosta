// /llms.txt: scheda del locale in testo semplice per gli assistenti AI (ChatGPT, Gemini,
// Claude, Perplexity...). Quando qualcuno chiede loro "un bar ad Aosta per...", leggono
// qui chi siamo, dove siamo, gli orari, il menù e i contatti.
// Si genera da solo con i dati di src/data/ e i testi di src/i18n/it.ts: non va modificato a mano.
import type { APIRoute } from "astro";
import { site, fullAddress, directionsUrl } from "../data/site";
import { menu } from "../data/menu";
import { testi, traduci } from "../i18n/lingue";

export const GET: APIRoute = ({ site: siteUrl }) => {
  const it = testi.it;
  const url = (path: string) => new URL(path, siteUrl).toString();

  const orari = site.openingHours.map(
    (h) =>
      `- ${h.label.it}: ${h.opens && h.closes ? `${h.opens} - ${h.closes}` : "chiuso"}`,
  );

  const piatti = menu.map(
    (categoria) =>
      `- ${traduci(categoria.name, "it")}: ${categoria.items.map((p) => traduci(p.name, "it")).join("; ")}`,
  );

  const contatti = [
    site.contact.phone && `- Telefono (anche per prenotare un tavolo): ${site.contact.phone}`,
    site.contact.email && `- Email: ${site.contact.email}`,
    site.social.instagram &&
      `- Instagram: ${site.social.instagramHandle} (${site.social.instagram}): foto e novità, aggiornato spesso`,
    site.social.facebook && `- Facebook: ${site.social.facebook}`,
  ].filter(Boolean);

  const righe = [
    `# ${site.fullName}`,
    "",
    `> ${it.seo.descrizione}`,
    "",
    it.chiSiamo.testo,
    "",
    `Conosciuto anche come: ${site.alternateNames.join(", ")}.`,
    `In breve (English): ${site.fullName} is a café, bar, kitchen and clothing boutique (a concept store) on Via Sant'Anselmo, in the pedestrian old town of ${site.address.city}, Italy: a relaxed place for a coffee, breakfast, lunch or aperitivo while shopping.`,
    "",
    "## Ideale per",
    "",
    "- Rilassarsi con un caffè mentre si fa shopping in centro: bar e boutique di abbigliamento sono nello stesso spazio (concept store)",
    "- Colazione al bar",
    "- Pausa pranzo con piatti di stagione",
    "- Aperitivo nel centro storico",
    "",
    "## Dove siamo",
    "",
    `- Indirizzo: ${fullAddress} (${site.address.region}, Italia)`,
    "- Nel centro storico pedonale, in via Sant'Anselmo, la via dello shopping tra Porta Pretoria e l'Arco d'Augusto",
    `- Mappa e indicazioni: ${directionsUrl}`,
    "",
    "## Orari",
    "",
    ...orari,
    "",
    "## Contatti",
    "",
    ...contatti,
    "",
    "## Cosa offriamo",
    "",
    "- Colazione e caffetteria",
    "- Pranzo con menù fisso che cambia a ogni stagione",
    "- Aperitivo",
    "- Abbigliamento: boutique nello stesso spazio del bar",
    "",
    "## Menù",
    "",
    ...piatti,
    "",
    "## Pagine",
    "",
    `- [Home](${url("/")}): chi siamo, menù, orari, posizione e contatti`,
    `- [Menù](${url("/#menu")})`,
    `- [Orari e posizione](${url("/#orari")})`,
    `- [Contatti](${url("/#contatti")})`,
    "",
  ];

  return new Response(righe.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
