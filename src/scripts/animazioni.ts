// Comparsa degli elementi allo scroll.
// Ogni elemento con l'attributo data-reveal riceve la classe "is-visible" quando entra nello
// schermo: l'animazione vera e propria è in src/styles/animazioni.css.
// Ogni elemento si anima una sola volta.

const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

// A comparsa finita toglie data-reveal: così gli effetti al passaggio del mouse (es. sui
// pulsanti) tornano ad avere i loro tempi normali, senza il ritardo della comparsa.
function finish(el: HTMLElement) {
  const delay = parseFloat(getComputedStyle(el).transitionDelay) * 1000 || 0;
  setTimeout(() => el.removeAttribute("data-reveal"), delay + 2000);
}

function show(el: HTMLElement) {
  el.classList.add("is-visible");
  finish(el);
}

if (!("IntersectionObserver" in window)) {
  // Browser molto vecchi: mostra tutto subito.
  elements.forEach(show);
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    },
    // Parte quando almeno il 15% dell'elemento è visibile, un po' prima del fondo dello schermo.
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );

  // Gli elementi già nello schermo all'apertura (es. la hero) partono subito; gli altri
  // aspettano di essere raggiunti con lo scroll.
  // (getBoundingClientRect fa calcolare al browser lo stato iniziale, così l'animazione parte.)
  const inView = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  };
  elements.forEach((el) => (inView(el) ? show(el) : observer.observe(el)));
}
