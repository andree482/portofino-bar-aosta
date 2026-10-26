# Mettere online il sito (IONOS + Cloudflare)

Guida passo passo per collegare il dominio **portofinoboutiquecafe.it** al sito.

## Come funziona, in breve

Ci sono tre servizi, ognuno con il suo compito:

| Servizio       | A cosa serve                                                                      |
| -------------- | --------------------------------------------------------------------------------- |
| **IONOS**      | Dove è registrato il dominio. Resta lì: lo rinnovi ogni anno su IONOS.            |
| **Cloudflare** | Gestisce i DNS del dominio e ospita il sito (gratis, con Cloudflare Pages).       |
| **GitHub**     | Dove sta il codice (`andree482/portofino-bar-aosta`). Cloudflare lo prende da lì. |

I **DNS** sono la "rubrica" del dominio: dicono a internet dove si trova il sito e dove vanno le
email. Su IONOS cambiamo solo una cosa, i **name server**: indicano chi gestisce questa rubrica.
Da quel momento si gestisce tutto da Cloudflare.

Ogni volta che una modifica al codice arriva su GitHub (ramo `main`), Cloudflare ripubblica il sito
da solo in un paio di minuti. Le modifiche che restano solo sul computer **non** vanno online.

> I nomi dei pulsanti possono cambiare un po' nel tempo o tra italiano e inglese: qui sotto c'è
> quello che si vedeva a ottobre 2026.

---

## 0. Prima di iniziare: annota le email

Se hai già creato un indirizzo su IONOS (es. `info@portofinoboutiquecafe.it` inoltrato a Gmail),
le email dipendono dai DNS di IONOS. Cambiando i name server bisogna portarle su Cloudflare, se
no smettono di arrivare.

1. Su IONOS apri il dominio → **DNS**.
2. Fai uno **screenshot** di tutti i record, soprattutto quelli di tipo **MX** e **TXT**.

Se non hai ancora creato nessun indirizzo email, salta questo passo.

## 1. Aggiungi il dominio a Cloudflare

1. Crea un account gratuito su <https://dash.cloudflare.com/sign-up> (o accedi).
2. Clicca **Aggiungi un dominio** e scrivi `portofinoboutiquecafe.it`.
3. Lascia attiva la **scansione rapida dei record DNS** e continua.
4. Scegli il piano **Free** (gratuito).
5. Cloudflare mostra i record che ha trovato su IONOS. Confrontali con lo screenshot del passo 0:
   i record **MX** e **TXT** delle email devono esserci. Se ne manca uno, aggiungilo a mano
   (**Aggiungi record**, stesso tipo, nome e valore che vedi su IONOS).
6. Cloudflare ti dà **due name server**, tipo `nome1.ns.cloudflare.com` e `nome2.ns.cloudflare.com`.
   Copiali: servono nel passo 2.

## 2. Su IONOS: cambia i name server

1. Su IONOS apri il dominio `portofinoboutiquecafe.it`.
2. Se vedi **DNSSEC** attivo, disattivalo prima (si può riattivare dopo, da Cloudflare).
3. Clicca **Name Server** (è nella lista "Dominio non in uso").
4. Scegli di usare **name server personalizzati** (o "altri name server").
5. Cancella quelli di IONOS e inserisci i **due di Cloudflare**, esattamente come te li ha dati.
6. Salva.

Ora si aspetta: di solito da qualche minuto a qualche ora, al massimo 24-48 ore. Quando ha
finito, Cloudflare ti manda un'email e il dominio risulta **Attivo** nella dashboard.

**Non toccare** le altre voci di IONOS ("Crea sito web", "Reindirizza dominio", "Collega con
pagina esterna"...): con i name server su Cloudflare non servono più.

## 3. Pubblica il sito su Cloudflare Pages

Si può fare anche mentre aspetti il passo 2.

1. In Cloudflare apri **Workers & Pages** → **Crea** → scheda **Pages** →
   **Importa un repository Git** (Connect to Git).
2. Collega l'account **GitHub** e scegli il repository `portofino-bar-aosta`.
3. Impostazioni di build:
   - Ramo di produzione: `main`
   - Preset framework: **Astro**
   - Comando di build: `npm run build`
   - Cartella di output: `dist`
   - Variabili d'ambiente: aggiungi `NODE_VERSION` con valore `22`
4. Clicca **Salva e distribuisci**. Dopo un paio di minuti il sito è online su un indirizzo
   provvisorio, tipo `portofino-bar-aosta.pages.dev`: aprilo e controlla che sia tutto a posto.

## 4. Collega il dominio al sito

Quando il dominio è **Attivo** su Cloudflare (fine del passo 2):

**Indirizzo con www (quello ufficiale)**

1. Nel progetto Pages apri **Domini personalizzati** → **Configura un dominio**.
2. Scrivi `www.portofinoboutiquecafe.it` e conferma. Cloudflare crea da solo il record DNS.

**Indirizzo senza www** (deve portare alla versione con www, così Google vede un solo sito)

1. In Cloudflare, nel dominio, apri **DNS** → **Record**. Se c'è già un record `A` (o `AAAA`)
   con nome `portofinoboutiquecafe.it` o `@`, copiato da IONOS, basta che abbia la **nuvola
   arancione** (Proxied): lascialo così e passa al punto 2. Se non c'è, **Aggiungi record**:
   - Tipo: `A`
   - Nome: `@`
   - Indirizzo IPv4: `192.0.2.1` (indirizzo "finto": serve solo a far passare le visite da
     Cloudflare, che poi le reindirizza)
   - Proxy: **attivo** (nuvola arancione)
2. Apri **Regole** → **Redirect Rules** (Regole di reindirizzamento) → **Crea regola** e scegli il
   modello **Redirect from root to WWW** (dalla radice a www). Controlla che il codice sia **301** e
   che percorso e parametri vengano mantenuti, poi salva.

Il certificato per il lucchetto (HTTPS) lo crea Cloudflare da solo, in pochi minuti.

## 5. Email

Scegli **una** delle due strade, non entrambe.

**A. Tieni l'inoltro di IONOS.** Basta che i record MX e TXT di IONOS siano nei DNS di Cloudflare
(passo 1, punto 5). Non serve altro.

**B. Usa l'inoltro gratuito di Cloudflare** (consigliato se su IONOS non hai trovato l'inoltro
gratis):

1. In Cloudflare, nel dominio, apri **Email** → **Email Routing** → **Inizia**.
2. Crea l'indirizzo `info@portofinoboutiquecafe.it` e come destinazione metti la tua Gmail.
3. Gmail riceve un'email di conferma da Cloudflare: clicca il link.
4. Cloudflare propone di aggiungere i suoi record DNS: accetta. Se ti avvisa che ci sono
   già record MX di IONOS, lascia che li sostituisca.

In tutti e due i casi, prova scrivendo a `info@portofinoboutiquecafe.it` da un'altra casella
(guarda anche nello Spam). Quando funziona, l'indirizzo va messo in `src/data/site.ts`
(`contact.email`) al posto della PEC.

## 6. Controlli finali

Apri questi indirizzi e verifica:

| Indirizzo                                                | Cosa deve succedere                                    |
| -------------------------------------------------------- | ------------------------------------------------------ |
| `https://www.portofinoboutiquecafe.it`                   | Si vede il sito, con il lucchetto                      |
| `portofinoboutiquecafe.it/privacy`                       | Porta a `https://www.portofinoboutiquecafe.it/privacy` |
| `https://www.portofinoboutiquecafe.it/robots.txt`        | Si vede un file di testo                               |
| `https://www.portofinoboutiquecafe.it/sitemap-index.xml` | Si vede l'elenco delle pagine                          |

## 7. Dopo la pubblicazione: farsi trovare su Google e dalle AI

Il sito online da solo non basta: questi passaggi dicono a Google, Bing e agli assistenti AI
(ChatGPT, Gemini, Claude, Copilot) che esiste e a chi appartiene.

1. **Google Search Console** (<https://search.google.com/search-console>): aggiungi una proprietà
   di tipo **Dominio** con `portofinoboutiquecafe.it`. Per la verifica Cloudflare può aggiungere
   il record da solo (pulsante di verifica automatica). Poi, in **Sitemap**, invia
   `sitemap-index.xml`.
2. **Bing Webmaster Tools** (<https://www.bing.com/webmasters>): scegli **Importa da Google Search
   Console**. Bing è il motore che usano ChatGPT e Copilot per cercare sul web: non saltarlo.
3. **Scheda Google Business** del locale: nel campo **Sito web** metti
   `https://www.portofinoboutiquecafe.it`. Nome, indirizzo e telefono devono essere **identici** a
   quelli del sito.
4. **Instagram**: nella bio metti il link al sito.
5. Consigliati: **Bing Places** (<https://www.bingplaces.com>, si importa dalla scheda Google) e
   **Apple Business Connect** (<https://businessconnect.apple.com>, per Mappe e Siri). Anche qui
   stessi nome, indirizzo e telefono.

## Se qualcosa non va

- **Il sito non si apre dopo 48 ore:** controlla su IONOS che i name server siano quelli di
  Cloudflare, scritti senza errori.
- **La build su Cloudflare fallisce:** apri il dettaglio della distribuzione e leggi l'errore; il
  più comune è `NODE_VERSION` mancante (passo 3).
- **Le email non arrivano più:** mancano i record MX nei DNS di Cloudflare (passo 0 e passo 5).
- **Una modifica non si vede online:** deve essere salvata su GitHub (commit e push sul ramo
  `main`); poi in **Workers & Pages** → progetto → **Distribuzioni** controlla che sia completata.
