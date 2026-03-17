# Timoty — Piano implementazione step-by-step

Riferimento: `verticals/rosemary`. Stack: Next.js, TypeScript, stesso livello di qualità e pattern.

---

## 1. Setup progetto

- [ ] Creare app Next.js in `verticals/timoty` (o copiare da rosemary e ripulire).
- [ ] Configurare `package.json`, `tsconfig`, `next.config`, `.env.example` (NEXT_PUBLIC_SITE_URL, eventuale Supabase/API).
- [ ] Struttura cartelle: `app/`, `components/`, `lib/`, `public/` (assets).

---

## 2. Design system e identità

- [ ] Definire palette colori (CSS variables in `globals.css`): primary, secondary, background, text, accent per CTA.
- [ ] Scegliere font: display (es. serif o distinctive) + body (sans); caricare in `layout.tsx` (next/font).
- [ ] Logo Timoty: `public/assets/timoty-logo.png` (o SVG).
- [ ] Placeholder immagini hero e gallery (da sostituire con foto reali).

---

## 3. Tipi e routing

- [ ] `lib/site-types.ts`: `Locale` (it per ora), `PageId` = home | menu | eventi | contacts | privacy; `ActionLink`, `ImageAsset`, tipi per sezioni homepage.
- [ ] `lib/routes.ts`: `PAGE_ROUTES`, `NAV_ITEMS`, `FOOTER_ITEMS`, `getLocalizedHref` (solo IT per v1).
- [ ] `lib/site-data.ts`: brand name, contact (indirizzo Via Torino 46, telefono, email, orari, mapHref, social), `homePages.it` con tutte le sezioni (hero, identity, proposal, gallery, booking, events, location); copy da `TIMOTY_AUDIT_AND_STRATEGY.md`.

---

## 4. Layout e shell

- [ ] `app/layout.tsx`: metadata (title, description), font, html/lang, body.
- [ ] `app/globals.css`: reset/container, variables, typography (display-title, section-title, eyebrow, lede), spacing (page-section, section-intro), componenti base (button, button-primary, button-secondary, panel).
- [ ] Header/nav: logo, link Menu, Prenota (#booking), Eventi, Contatti; mobile menu; CTA “Prenota” sempre visibile (es. in sticky header).

---

## 5. Componenti condivisi (da Rosemary, adattati)

- [ ] **ActionLinks**: `components/action-links.tsx` — riceve `links: ActionLink[]`, render bottoni con variant primary/secondary/ghost.
- [ ] **ReservationForm**: `components/reservation-form.tsx` — form (nome, email, telefono, data, ora, ospiti, richieste) + submit a API (es. `/api/inquiry`); stati idle/loading/success/error. Opzione: slot picker se si integra API disponibilità come Rosemary.
- [ ] **SiteFooter**: `components/site-footer.tsx` — grid: brand+logo, nav (Menu, Eventi, Contatti, Privacy), contatti (indirizzo, tel, email, orari, social).

---

## 6. Homepage — sezioni

- [ ] **Hero** (`components/home-page.tsx` o `components/sections/hero.tsx`): eyebrow, headline, subheadline, badges (opzionale), ActionLinks (Prenota, Menu), hero visual (Image con frame/panel). Full-bleed su mobile.
- [ ] **Identità**: section-intro (eyebrow, title) + paragrafi + bullet list; classe `page-section`, `split-grid` o single column.
- [ ] **Proposta gastronomica**: section-intro + grid di card (2–3): titolo + body + eventuale CTA “Vedi menu”. Riuso pattern `spotlight-card` o `info-card`.
- [ ] **Gallery**: section-intro + gallery-grid; una immagine large, altre in grid; Image + caption opzionale.
- [ ] **Prenotazione**: id="booking", section-intro + layout a due colonne (testo + contatti a sinistra, form a destra) in `panel`; ReservationForm + telefono/email in evidenza.
- [ ] **Eventi/Private**: section-intro + 1 paragrafo + CTA “Richiedi informazioni”.
- [ ] **Posizione**: section-intro + indirizzo, breve copy, embed mappa (iframe Google Maps) o link “Apri in Google Maps” + link “Cosa visitare vicino”.
- [ ] **Footer**: SiteFooter.

---

## 7. Pagine secondarie

- [ ] **Menu** (`app/menu/page.tsx`): titolo, intro, link a PDF menu o lista categorie/piatti (da site-data). CTA “Prenota” in pagina.
- [ ] **Eventi e gruppi** (`app/eventi-gruppi/page.tsx`): titolo, copy, CTA a #booking o /contatti.
- [ ] **Contatti** (`app/contatti/page.tsx`): indirizzo, orari, telefono, email, mappa; opzionale form contatto.
- [ ] **Privacy** (`app/privacy-policy/page.tsx`): testo policy, layout standard.

---

## 8. API e prenotazione

- [ ] Endpoint `app/api/inquiry/route.ts`: POST con payload (nome, email, telefono, data, ora, ospiti, richieste, requestType); invio email e/o salvataggio DB (Supabase o altro). Restituire JSON success/error.
- [ ] (Opzionale) `app/api/availability/route.ts`: come Rosemary, se si ha gestione slot; altrimenti form solo richiesta e conferma manuale.

---

## 9. SEO e performance

- [ ] Metadata in layout e per pagina (title, description).
- [ ] Structured data JSON-LD (Restaurant: name, address Via Torino 46, telephone, url, servesCuisine, openingHours).
- [ ] `sitemap.ts` e `robots.ts` per Next.js.
- [ ] Immagini: Next/Image, dimensioni adeguate, priority per hero.

---

## 10. Mobile e QA

- [ ] Test responsive: hero, nav, sezioni, form, footer su 320px, 768px, 1024px.
- [ ] CTA “Prenota” sempre raggiungibile (header o sticky bar).
- [ ] Touch target adeguati, font size leggibile.
- [ ] Test invio form prenotazione e messaggio di conferma.

---

## Ordine consigliato

1. Setup + design system + tipi/routes/site-data.  
2. Layout + globals + header + footer.  
3. Homepage: hero → identità → proposta → gallery → prenotazione → eventi → posizione → footer.  
4. API inquiry + form.  
5. Pagine secondarie (menu, eventi-gruppi, contatti, privacy).  
6. SEO, structured data, sitemap, QA mobile.

---

## File chiave da creare (checklist)

| File | Descrizione |
|------|-------------|
| `app/layout.tsx` | Root layout, metadata, font |
| `app/globals.css` | Variables, typography, sections |
| `app/page.tsx` | Homepage (import HomePage) |
| `app/menu/page.tsx` | Pagina menu |
| `app/eventi-gruppi/page.tsx` | Eventi e gruppi |
| `app/contatti/page.tsx` | Contatti |
| `app/privacy-policy/page.tsx` | Privacy |
| `app/api/inquiry/route.ts` | POST richieste prenotazione |
| `components/home-page.tsx` | Tutte le sezioni homepage |
| `components/action-links.tsx` | CTA buttons |
| `components/reservation-form.tsx` | Form prenotazione |
| `components/site-footer.tsx` | Footer |
| `lib/site-types.ts` | Tipi |
| `lib/routes.ts` | Route e nav |
| `lib/site-data.ts` | Contenuti e copy |
| `public/assets/` | Logo, hero, gallery (placeholder) |

Dopo questi passi il sito è pronto per contenuti definitivi (testi, foto) e eventuale integrazione con sistema prenotazioni (slot reali, Hubia, ecc.).
