// Lingue del sito e funzioni per passare da una all'altra.
//
// L'italiano è la lingua principale: le sue pagine non hanno prefisso (/, /privacy).
// Francese e inglese stanno sotto /fr e /en (/fr, /en/privacy).
// I testi di ogni lingua sono in it.ts, fr.ts ed en.ts, in questa cartella.
import { it } from "./it";
import { fr } from "./fr";
import { en } from "./en";

export const lingue = ["it", "fr", "en"] as const;
export type Lingua = (typeof lingue)[number];
export const linguaPrincipale: Lingua = "it";

/**
 * Dati di ogni lingua: sigla nel selettore, nome per esteso, codice per i social (locale).
 * Per Google si usa solo la lingua ("fr", non "fr-FR"): così la versione francese vale
 * anche per Svizzera, Belgio, Canada…
 */
export const infoLingue: Record<
  Lingua,
  { sigla: string; nome: string; locale: string }
> = {
  it: { sigla: "IT", nome: "Italiano", locale: "it_IT" },
  fr: { sigla: "FR", nome: "Français", locale: "fr_FR" },
  en: { sigla: "EN", nome: "English", locale: "en_GB" },
};

/** Lingua per chi parla una lingua che il sito non ha (es. tedesco, spagnolo). */
export const linguaInternazionale: Lingua = "en";

/** Tutti i testi fissi del sito, divisi per lingua. */
export const testi = { it, fr, en };

/**
 * Testo scritto direttamente nelle tre lingue, es. { it: "Dolci", fr: "Desserts", en: "Desserts" }.
 * Usato nei dati (menù, orari). Se manca il francese o l'inglese si mostra l'italiano.
 */
export type Tradotto = { it: string; fr?: string; en?: string };

export const traduci = (testo: Tradotto, lingua: Lingua) =>
  testo[lingua] || testo.it;

/** Lingua di una pagina, ricavata dal suo indirizzo: "/fr/privacy" → "fr". */
export function linguaDa(url: URL): Lingua {
  const primo = url.pathname.split("/")[1];
  return (
    lingue.find((l) => l !== linguaPrincipale && l === primo) ??
    linguaPrincipale
  );
}

/** Indirizzo senza la lingua: "/fr/privacy" → "/privacy", "/en" → "/". */
function senzaLingua(pathname: string) {
  const [, primo, ...resto] = pathname.split("/");
  if (lingue.some((l) => l !== linguaPrincipale && l === primo)) {
    return `/${resto.join("/")}`;
  }
  return pathname;
}

/**
 * Indirizzo di una pagina nella lingua scelta. I link si scrivono come per l'italiano:
 *   percorso("/privacy", "fr")  → "/fr/privacy"
 *   percorso("/#menu", "en")    → "/en#menu"
 *   percorso("/", "fr")         → "/fr"
 */
export function percorso(path: string, lingua: Lingua) {
  if (lingua === linguaPrincipale) return path;
  return path === "/" || path.startsWith("/#")
    ? `/${lingua}${path.slice(1)}`
    : `/${lingua}${path}`;
}

/** Indirizzo della stessa pagina in ogni lingua, es. { it: "/privacy", fr: "/fr/privacy", … }. */
export function versioni(url: URL): Record<Lingua, string> {
  const base = senzaLingua(url.pathname.replace(/\/$/, "")) || "/";
  return {
    it: percorso(base, "it"),
    fr: percorso(base, "fr"),
    en: percorso(base, "en"),
  };
}

/**
 * Per le pagine in src/pages/[...lingua]/: crea una versione per lingua.
 * L'italiano non ha prefisso (lingua = undefined), le altre sì (/fr, /en).
 */
export function percorsiLingue() {
  return lingue.map((lingua) => ({
    params: { lingua: lingua === linguaPrincipale ? undefined : lingua },
  }));
}
