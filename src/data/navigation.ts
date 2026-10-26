// Voci di navigazione usate da header (desktop e mobile) e footer.
// Gli indirizzi "/#..." portano alle sezioni della home tramite il loro id; per francese e
// inglese diventano "/fr#...", "/en#..." da soli. I testi delle voci sono in src/i18n/ (nav).
import { testi, percorso, type Lingua } from "../i18n/lingue";

export type NavLink = {
  href: string;
  /** Testo nella barra desktop (in minuscolo, come nel design). */
  label: string;
  /** Testo nel menu mobile. */
  mobileLabel: string;
};

export function mainNav(lingua: Lingua): NavLink[] {
  const nav = testi[lingua].nav;
  return [
    { href: "/#chi-siamo", ...nav.chiSiamo },
    { href: "/#cosa-trovi", ...nav.cosaTrovi },
    { href: "/#orari", ...nav.orari },
    { href: "/#contatti", ...nav.contatti },
  ].map(({ href, label, mobile }) => ({
    href: percorso(href, lingua),
    label,
    mobileLabel: mobile,
  }));
}

export function footerNav(lingua: Lingua) {
  const nav = testi[lingua].nav;
  return [
    { href: percorso("/#chi-siamo", lingua), label: nav.ilPortofino },
    { href: percorso("/#menu", lingua), label: nav.menu },
    { href: percorso("/#orari", lingua), label: nav.orariFooter },
  ];
}

export function legalNav(lingua: Lingua) {
  const nav = testi[lingua].nav;
  return [
    { href: percorso("/privacy", lingua), label: nav.privacy },
    { href: percorso("/cookie", lingua), label: nav.cookie },
  ];
}
