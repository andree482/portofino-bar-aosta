// Passaggio automatico tra la prima schermata (hero) e la sezione "Chi siamo".
//
// Quando chi visita smette di scorrere e la pagina è rimasta "a metà" tra le due,
// il sito completa il movimento da solo, in modo fluido:
//   - se stava scendendo → arriva all'inizio di "Chi siamo";
//   - se stava salendo  → torna in cima alla prima schermata.
// Il resto della pagina scorre normalmente. Con "riduci movimento" attivo non fa nulla.

const hero = document.querySelector<HTMLElement>("[data-hero]");
const next = document.getElementById("chi-siamo");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Attesa dopo l'ultimo movimento prima di completare il passaggio (in millisecondi).
const PAUSA = 120;

if (hero && next) {
  let lastY = window.scrollY;
  let goingDown = true;
  let touching = false; // dito ancora appoggiato sullo schermo
  let autoScrolling = false; // il movimento in corso è quello fatto dal sito
  let timer: number | undefined;

  // Posizione (in px dall'alto della pagina) dell'inizio di "Chi siamo".
  const nextTop = () => next.getBoundingClientRect().top + window.scrollY;

  function completeTransition() {
    if (touching || reducedMotion.matches) return;
    const y = window.scrollY;
    const end = nextTop();
    // Già fermi in cima o oltre l'inizio di "Chi siamo": niente da fare.
    if (y <= 2 || y >= end - 2) return;

    autoScrolling = true;
    window.scrollTo({ top: goingDown ? end : 0, behavior: "smooth" });
  }

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (y !== lastY) goingDown = y > lastY;
      lastY = y;

      window.clearTimeout(timer);
      if (autoScrolling) {
        // Aspetta che finisca il movimento del sito prima di ascoltare di nuovo.
        timer = window.setTimeout(() => (autoScrolling = false), PAUSA);
        return;
      }
      timer = window.setTimeout(completeTransition, PAUSA);
    },
    { passive: true },
  );

  // Su telefono: completa il passaggio solo quando il dito si è staccato dallo schermo.
  window.addEventListener("touchstart", () => (touching = true), {
    passive: true,
  });
  window.addEventListener(
    "touchend",
    () => {
      touching = false;
      window.clearTimeout(timer);
      timer = window.setTimeout(completeTransition, PAUSA);
    },
    { passive: true },
  );
}
