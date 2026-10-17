// Voci di navigazione usate da header (desktop e mobile) e footer.
// Gli indirizzi "/#..." portano alle sezioni della home tramite il loro id.

export type NavLink = {
  href: string;
  /** Testo nella barra desktop (in minuscolo, come nel design). */
  label: string;
  /** Testo nel menu mobile. */
  mobileLabel: string;
};

export const mainNav: NavLink[] = [
  { href: "/#chi-siamo", label: "chi siamo", mobileLabel: "Chi siamo" },
  {
    href: "/#cosa-trovi",
    label: "cosa puoi trovare da noi",
    mobileLabel: "Cosa trovi da noi",
  },
  {
    href: "/#orari",
    label: "orari e posizione",
    mobileLabel: "Orari e posizione",
  },
  { href: "/#contatti", label: "info", mobileLabel: "Contatti" },
];

export const footerNav = [
  { href: "/#chi-siamo", label: "Il Portofino" },
  { href: "/#menu", label: "Menù" },
  { href: "/#orari", label: "Orari e posizione" },
];

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookie", label: "Cookie" },
];
