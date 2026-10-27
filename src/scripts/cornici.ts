// Cornici che "si costruiscono" come una casa (sezione "Chi siamo", solo desktop).
//
// Ogni elemento con data-cornice è un <div> con bordo blu e angoli superiori arrotondati.
// Lo script ci disegna sopra lo stesso contorno con due linee SVG, una per lato: partono dal
// basso, salgono come due muri e si incontrano al centro in cima, chiudendo l'arco (il tetto).
// Il bordo vero viene nascosto solo quando le linee sono pronte: senza JavaScript la
// cornice si vede comunque, ferma.
//
// Il movimento parte con la classe "is-visible", aggiunta da animazioni.ts (data-reveal="build");
// velocità e ritardo sono in src/styles/animazioni.css.

const SVG = "http://www.w3.org/2000/svg";

// Percorso delle due metà, misurato sul riquadro reale (cambia con la larghezza dello schermo).
function percorsi(el: HTMLElement) {
  const w = el.offsetWidth;
  const h = el.offsetHeight;
  const s = parseFloat(getComputedStyle(el).borderTopWidth) || 3; // spessore
  // Raggio degli angoli: come fa il browser, non più di metà larghezza né dell'altezza.
  const raggio = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
  const r = Math.min(raggio, w / 2, h);
  const a = Math.max(r - s / 2, 0); // raggio della linea, a metà dello spessore
  const m = s / 2;
  // Le due metà si sovrappongono di 1px al centro, così in cima non resta una fessura
  return {
    sinistra: `M ${m} ${h} V ${r} A ${a} ${a} 0 0 1 ${r} ${m} H ${w / 2 + 1}`,
    destra: `M ${w - m} ${h} V ${r} A ${a} ${a} 0 0 0 ${w - r} ${m} H ${w / 2 - 1}`,
  };
}

function prepara(el: HTMLElement) {
  const stile = getComputedStyle(el);
  const svg = document.createElementNS(SVG, "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("class", "cornice-linee");

  const lati = (["sinistra", "destra"] as const).map((lato) => {
    const path = document.createElementNS(SVG, "path");
    // pathLength="1": la lunghezza vale sempre 1, così l'animazione non dipende dalle misure
    path.setAttribute("pathLength", "1");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", stile.borderTopColor);
    path.setAttribute("stroke-width", stile.borderTopWidth);
    svg.append(path);
    return [lato, path] as const;
  });

  const aggiorna = () => {
    const d = percorsi(el);
    // L'SVG copre tutto il riquadro, bordo compreso (top/left negativi = spessore del bordo)
    Object.assign(svg.style, {
      top: `${-el.clientTop}px`,
      left: `${-el.clientLeft}px`,
      width: `${el.offsetWidth}px`,
      height: `${el.offsetHeight}px`,
    });
    svg.setAttribute("viewBox", `0 0 ${el.offsetWidth} ${el.offsetHeight}`);
    for (const [lato, path] of lati) path.setAttribute("d", d[lato]);
  };

  aggiorna();
  el.append(svg);
  el.dataset.cornice = "pronta";
  // Ridisegna il contorno quando la finestra cambia misura
  new ResizeObserver(aggiorna).observe(el);
}

document.querySelectorAll<HTMLElement>("[data-cornice]").forEach(prepara);
