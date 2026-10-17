# Pagine legali (Privacy e Cookie)

Modello comune alle pagine `/privacy` e `/cookie`. File: `LegalPage.astro`.

**Design Figma:** "Privacy e Cookie pc" (nodo `191:39`) e "Privacy mobile" (nodo `201:405`).
La pagina Cookie non ha un design suo: usa lo stesso modello della Privacy.

## Cosa mostra

- Link **← Torna al sito**.
- "INFORMAZIONI", titolo grande (Privacy / Cookie) e data di aggiornamento.
- **In questa pagina**: indice con i link alle sezioni.
- Sezioni numerate (0.1, 0.2, …).
- Pulsante **Preferenze e Cookie**, che riapre il banner cookie. Su desktop sta sotto l'indice,
  su mobile in fondo alla pagina.

## Modificare i testi

Tutto in `src/data/legal.ts` (`privacyPage` e `cookiePage`):

```ts
{
  id: "chi-tratta-i-dati",          // parte del link: /privacy#chi-tratta-i-dati
  title: "Chi tratta i dati",
  body: ["Primo paragrafo…", "Secondo paragrafo…"],
}
```

Puoi aggiungere o togliere sezioni: numeri e indice si aggiornano da soli.

> **Importante:** i testi tra parentesi quadre sono segnaposto del design. L'informativa vera va
> scritta da un consulente o generata con un servizio apposito (es. iubenda) e poi incollata qui.

## Pagine che usano questo modello

| Pagina     | File                      |
| ---------- | ------------------------- |
| `/privacy` | `src/pages/privacy.astro` |
| `/cookie`  | `src/pages/cookie.astro`  |
