// Attiva lo scorrimento morbido (classe "scorrimento-morbido" su <html>, vedi global.css)
// solo a pagina caricata. Se fosse attivo da subito, aprendo un link come /#chi-siamo da
// un'altra pagina il browser mostrerebbe prima la cima della home e poi scorrerebbe fino
// alla sezione: sembrerebbe di vedere due pagine una dopo l'altra.

function attiva() {
  // Piccola attesa: il browser finisce prima di posizionarsi sulla sezione dell'indirizzo.
  setTimeout(
    () => document.documentElement.classList.add("scorrimento-morbido"),
    100,
  );
}

if (document.readyState === "complete") attiva();
else window.addEventListener("load", attiva, { once: true });
