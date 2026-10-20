// Disegna la mappa della sezione "Orari e posizione" nello stile del design
// (sfondo crema, edifici beige, strade azzurre, segnaposto blu) usando i dati OpenStreetMap.
//
// Uso:  npm run mappa
// Crea: src/assets/images/mappa-portofino.jpg
//
// Se il locale cambia indirizzo, aggiorna LAT e LON qui sotto (e in src/data/site.ts).
// La mappa usa dati OpenStreetMap: sul sito va lasciata la scritta "© OpenStreetMap".
import sharp from "sharp";

// Posizione del locale (Via Sant'Anselmo 8, Aosta)
const LAT = 45.7381007;
const LON = 7.3239224;

// Dimensioni dell'immagine e posizione del segnaposto (al centro, al 43% dell'altezza,
// dove si trova nel design).
const W = 1642;
const H = 958;
const MARKER_X = 821;
const MARKER_Y = 412;
const METRI_IN_LARGHEZZA = 600;

const COLORI = {
  sfondo: "#f7efe8",
  edifici: "#efdfcd",
  acqua: "#a9c3d9",
  strade: "#8fadcf",
  stradeSecondarie: "#a9c1dc",
  segnaposto: "#072768",
};

// 1. Scarica i dati della zona da OpenStreetMap
const bbox = [LON - 0.0048, LAT - 0.002, LON + 0.0048, LAT + 0.002].join(",");
const response = await fetch(
  `https://api.openstreetmap.org/api/0.6/map?bbox=${bbox}`,
  {
    headers: { "User-Agent": "portofino-bar-aosta (sito web)" },
  },
);
if (!response.ok)
  throw new Error(`OpenStreetMap ha risposto ${response.status}`);
const xml = await response.text();

// 2. Converte latitudine/longitudine in pixel
const pxPerMetro = W / METRI_IN_LARGHEZZA;
const metriPerLat = 111_200;
const metriPerLon = 111_320 * Math.cos((LAT * Math.PI) / 180);
const proietta = (lat, lon) => [
  MARKER_X + (lon - LON) * metriPerLon * pxPerMetro,
  MARKER_Y + (LAT - lat) * metriPerLat * pxPerMetro,
];

// 3. Legge punti e linee (nodi e "way") dal file OpenStreetMap
const nodi = new Map();
for (const m of xml.matchAll(
  /<node id="(\d+)"[^>]*?lat="([\d.]+)" lon="([\d.]+)"/g,
)) {
  nodi.set(m[1], [Number(m[2]), Number(m[3])]);
}
const linee = [];
for (const m of xml.matchAll(/<way id="\d+"[^>]*>([\s\S]*?)<\/way>/g)) {
  const ref = [...m[1].matchAll(/<nd ref="(\d+)"/g)].map((r) => r[1]);
  const tag = Object.fromEntries(
    [...m[1].matchAll(/<tag k="([^"]+)" v="([^"]*)"/g)].map((t) => [
      t[1],
      t[2],
    ]),
  );
  linee.push({ ref, tag });
}

const percorso = (ref, chiuso) =>
  ref
    .filter((r) => nodi.has(r))
    .map((r, i) => {
      const [x, y] = proietta(...nodi.get(r));
      return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join("") + (chiuso ? "Z" : "");

// 4. Divide gli elementi per tipo
const principali = new Set([
  "trunk",
  "primary",
  "secondary",
  "tertiary",
  "trunk_link",
  "primary_link",
  "secondary_link",
  "tertiary_link",
]);
const secondarie = new Set([
  "residential",
  "unclassified",
  "living_street",
  "pedestrian",
  "road",
]);
const strati = {
  acqua: "",
  edifici: "",
  principali: "",
  secondarie: "",
  servizio: "",
};

for (const { ref, tag } of linee) {
  const chiuso = ref[0] === ref.at(-1);
  if (
    chiuso &&
    (tag.natural === "water" ||
      tag.waterway === "riverbank" ||
      tag.landuse === "reservoir")
  ) {
    strati.acqua += `<path d="${percorso(ref, true)}"/>`;
  } else if (chiuso && tag.building) {
    strati.edifici += `<path d="${percorso(ref, true)}"/>`;
  } else if (principali.has(tag.highway)) {
    strati.principali += `<path d="${percorso(ref)}"/>`;
  } else if (secondarie.has(tag.highway)) {
    strati.secondarie += `<path d="${percorso(ref)}"/>`;
  } else if (tag.highway === "service") {
    strati.servizio += `<path d="${percorso(ref)}"/>`;
  }
}

// 5. Disegna la mappa in SVG e la salva in JPG
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${COLORI.sfondo}"/>
  <g fill="${COLORI.acqua}">${strati.acqua}</g>
  <g fill="${COLORI.edifici}">${strati.edifici}</g>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <g stroke="${COLORI.stradeSecondarie}" stroke-width="2.5">${strati.servizio}</g>
    <g stroke="${COLORI.strade}" stroke-width="3.5">${strati.secondarie}</g>
    <g stroke="${COLORI.strade}" stroke-width="5">${strati.principali}</g>
  </g>
  <g transform="translate(${MARKER_X} ${MARKER_Y})">
    <path d="M0 0C-6-18-31-38-31-60A31 31 0 1 1 31-60C31-38 6-18 0 0Z" fill="${COLORI.segnaposto}"/>
    <circle cx="0" cy="-61" r="11" fill="${COLORI.sfondo}"/>
  </g>
</svg>`;

const destinazione = "src/assets/images/mappa-portofino.jpg";
await sharp(Buffer.from(svg))
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(destinazione);
console.log(`Mappa salvata in ${destinazione}`);
