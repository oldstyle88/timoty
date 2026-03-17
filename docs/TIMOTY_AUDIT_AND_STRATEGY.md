# Timoty Ristorante — Audit sito attuale e strategia nuovo sito

**Riferimento qualità:** Rosemary (verticals/rosemary)  
**Sito attuale:** https://www.timotyristorante.it  
**Obiettivo:** sito premium, moderno, ordinato, stessa qualità strutturale di Rosemary ma identità Timoty.

---

## A. Audit del sito attuale

### Contenuti e temi emersi dal sito attuale
- **Posizione:** Roma, Via Torino 46 (zona Repubblica / Teatro dell’Opera / centro).
- **Cucina:** genuina, healthy, veg/vegetariana/gluten free, ingredienti km 0, eccellenze laziali.
- **Servizi:** prenotazione online + telefono (+39 06 9686 0080), brunch, pranzo, cena, aperitivo, eventi, pranzi/cene private, convenzioni/partner.
- **Utilità:** come arrivare, cosa visitare vicino, contatti, orari.

### Cosa tenere (contenuto)
- Indirizzo e contatti (Via Torino 46, telefono, email).
- Posizionamento: cucina healthy, veg/vegetariano/gluten free, km 0, eccellenze laziali.
- Valorizzazione location: Repubblica, Teatro dell’Opera, centro Roma.
- Prenotazione come azione principale (online + telefono).
- Eventi / cene private / gruppi come proposta commerciale.
- Partner/convenzioni (se ancora attivi).
- Orari e informazioni pratiche (come arrivare, cosa visitare).

### Cosa eliminare / non replicare
- Struttura dispersiva e troppe voci di menu/secondarie deboli.
- Look datato e UX confusa.
- Testi lunghi e ridondanti.
- Elementi da “template ristorante economico”.
- Duplicazioni tra homepage e pagine interne senza gerarchia chiara.

### Cosa semplificare
- Numero di pagine: meno pagine, più focus.
- Testi: meno parole, più chiarezza e gerarchia.
- Nav: poche voci essenziali (Menu, Prenota, Eventi, Contatti / Dove siamo).
- Footer: contatti, orari, indirizzo, link utili, privacy.

### Cosa ristrutturare
- **Hero:** da generico a headline forte + subheadline + CTA “Prenota ora” + secondaria “Menu” (o equivalente).
- **Storytelling:** da descrizione lunga a “identità” breve (chi siamo, cucina, km 0, Roma centro).
- **Proposta gastronomica:** da elenco a blocchi chiari (veg/vegetarian/gluten free, km 0, momenti: brunch/pranzo/cena/aperitivo).
- **Prenotazione:** da nascosta/secondaria a sezione primaria, sempre visibile (sticky CTA o sezione dedicata).
- **Atmosfera:** da immagini sparse a gallery curata che fa percepire il locale.
- **Posizione:** una sezione “Dove siamo” con mappa e valore (Repubblica, Opera, centro).
- **Eventi/private:** sezione elegante ma compatta, non lunga.

---

## B. Nuova sitemap / architettura contenuti

### Homepage
- Hero → Identità → Proposta gastronomica → Gallery → Prenotazione → Eventi/Private → Posizione → Footer.

### Pagine secondarie (minime)
- **Menu** — menu completo (PDF o pagina dedicata); link da hero e nav.
- **Prenota** — opzionale se la prenotazione vive in homepage (#booking); altrimenti pagina con form + telefono.
- **Eventi e gruppi** — una pagina per cene private, eventi, catering (testo breve + CTA contatto/prenota).
- **Contatti** — indirizzo, orari, telefono, email, mappa (o link a “Dove siamo” in homepage).
- **Privacy / Policy** — obbligatorio, link in footer.

### Non includere (per ora)
- Pagine “cosa visitare” e “come arrivare” come pagine separate: integrare in sezione “Posizione” in homepage (con link esterni se serve).
- Convenzioni/partner: una card in footer o in “Eventi” se utile; evitare pagina dedicata debole.
- Multilingua: partire da IT; estendere come Rosemary se necessario.

### Sitemap sintetica
```
/
/menu
/eventi-gruppi
/contatti
/privacy-policy
```
Prenotazione: sezione #booking in homepage + eventuale /prenota come alias.

---

## C. Wireframe testuale homepage (ordine sezioni)

1. **HERO**
   - Headline forte (placeholder sotto).
   - Subheadline breve.
   - Badge/eyebrow: es. "Via Torino 46 · Roma centro".
   - CTA primaria: "Prenota ora" → #booking.
   - CTA secondaria: "Scopri il menu" → /menu.
   - Visual: immagine/video hero full-bleed, qualità alta.

2. **IDENTITÀ / CHI SIAMO**
   - Eyebrow: "Timoty".
   - Titolo sezione: una riga che riassume posizionamento.
   - 1–2 paragrafi: cucina genuina, healthy, km 0, Roma centro.
   - Bullet o short list: veg/vegetariano/gluten free, ingredienti locali, accoglienza.

3. **PROPOSTA GASTRONOMICA**
   - Eyebrow: "La cucina".
   - Titolo: proposta in una frase.
   - 2–3 blocchi (card o highlight):
     - Veg, vegetariano, gluten free.
     - Ingredienti locali / km 0 / eccellenze laziali.
     - Brunch, pranzo, cena, aperitivo (se coerente).
   - CTA: "Vedi il menu" → /menu.

4. **ATMOSFERA / GALLERY**
   - Eyebrow: "L’atmosfera".
   - Titolo: far percepire il locale.
   - Grid immagini (1 grande + altre), nessun testo lungo.
   - Optional: caption brevi.

5. **PRENOTAZIONE**
   - Eyebrow: "Prenota".
   - Titolo: "Prenota il tuo tavolo".
   - Intro breve (form o telefono).
   - Form prenotazione + telefono + email in evidenza.
   - Nota: "Stesso giorno o urgenze? Telefona o scrivici."

6. **EVENTI / CENE PRIVATE / GRUPPI**
   - Eyebrow: "Eventi e gruppi".
   - Titolo + 1 paragrafo.
   - CTA: "Richiedi informazioni" → #booking o /eventi-gruppi.

7. **POSIZIONE**
   - Eyebrow: "Dove siamo".
   - Titolo: valore location (Repubblica, Opera, centro).
   - Indirizzo, come arrivare (testo breve), mappa embed o link.
   - Link "Cosa visitare vicino" (esterno o ancoraggio).

8. **FOOTER**
   - Brand, indirizzo, orari, telefono, email, social.
   - Link: Menu, Eventi, Contatti, Privacy.
   - Copyright.

---

## D. Componenti da costruire o riusare (riferimento Rosemary)

### Da riusare (pattern/layout Rosemary, adattati a Timoty)
- **Layout generale:** container, page-section, section-intro (eyebrow + section-title + section-copy).
- **ActionLinks:** CTA primaria/secondaria/ghost (stesso pattern, stili Timoty).
- **ReservationForm:** form prenotazione + stato loading/success/error (API inquiry o booking).
- **SiteFooter:** grid contatti + nav + orari (contenuti Timoty).
- **Hero:** struttura hero-copy + hero-visual (floating cards opzionali); visual hierarchy uguale, font/colori Timoty.
- **Card grid:** spotlight-card, info-card per proposta gastronomica e posizione.
- **Gallery:** gallery-grid con gallery-item, gallery-item-large (immagini con caption opzionale).
- **SEO e metadata:** layout con metadata, structured data Restaurant (indirizzo Timoty, telefono, ecc.).

### Da adattare (non copiare 1:1)
- **site-data / routes:** nuovo `site-data.ts` e `routes.ts` per Timoty (poche pagine: home, menu, eventi-gruppi, contatti, privacy).
- **Tipi:** site-types con PageId ridotto a home | menu | eventi | contacts | privacy.
- **Home page:** stesse sezioni concettuali di Rosemary (hero, story, proposal, gallery, booking, events, location, footer) ma copy e asset Timoty; rimuovere testimonial se non prioritari; sostenibilità solo se messaggio forte (altrimenti inglobata in “identità”).

### Da creare ex novo per Timoty
- **Identità visiva:** palette, font (display + body), logo Timoty, asset hero/gallery.
- **Contenuti:** copy hero, subhero, eyebrow, CTA, testi sezioni (vedi sotto).
- **Eventi/Private:** blocco sezione dedicato (titolo + copy + CTA) se non presente in Rosemary in quella forma.
- **Mappa/Posizione:** sezione “Dove siamo” con indirizzo + mappa (embed Google Maps o link).

---

## E. Proposta copy hero e subhero

### Hero
- **Headline (placeholder):**  
  *"Timoty. Cucina genuina nel cuore di Roma."*
- **Subheadline:**  
  *"Veg, vegetariano, gluten free e ingredienti a km zero. Brunch, pranzo e cena in Via Torino."*
- **Eyebrow:**  
  *"Via Torino 46 · Repubblica · Roma"*
- **CTA primaria:**  
  *"Prenota ora"*
- **CTA secondaria:**  
  *"Scopri il menu"*

### Identità (Chi siamo) — titolo + lead
- **Titolo:**  
  *"Cucina sana e territorio laziale."*
- **Lead (1–2 frasi):**  
  *"A Timoty portiamo in tavola piatti bilanciati e genuini, con un’attenzione forte a vegetariano, vegano e senza glutine. Ingredienti biologici e a km zero, con le eccellenze del Lazio nel centro di Roma."*
- **Bullet (short):**  
  - Veg, vegetariano, gluten free in tutto il menu  
  - Ingredienti km 0 e biologici  
  - Via Torino 46, tra Repubblica e Teatro dell’Opera  

### Proposta gastronomica (titoli card)
- *"Per tutti i palati"* — veg, vegetariano, gluten free.
- *"Territorio e km 0"* — ingredienti locali, eccellenze laziali.
- *"Brunch, pranzo e cena"* — momenti della giornata (e aperitivo se applicabile).

### Prenotazione
- **Titolo:** *"Prenota il tuo tavolo"*
- **Intro:** *"Scegli data e ora qui sotto o contattaci per telefono o email. Per conferme last minute il telefono è il canale più veloce."*
- **Nota:** *"Stesso giorno o urgenze? Chiamaci o scrivici."*

### Eventi
- **Eyebrow:** *"Eventi e gruppi"*
- **Titolo:** *"Pranzi di lavoro, cene private e eventi."*
- **Copy:** *"Organizziamo eventi su misura in sede: meeting, compleanni, cene aziendali. Richiedi informazioni e disponibilità."*
- **CTA:** *"Richiedi informazioni"* → #booking o /eventi-gruppi.

### Posizione
- **Eyebrow:** *"Dove siamo"*
- **Titolo:** *"Via Torino 46, tra Repubblica e Teatro dell’Opera."*
- **Copy:** *"In centro a Roma, comodo per chi soggiorna in zona, per turisti e per chi lavora in centro. Metro e bus a pochi passi."*
- **CTA:** *"Come arrivare"* / *"Cosa visitare vicino"* (link esterni o ancoraggio).

---

## Vincoli rispettati
- Nessun look da template ristorante economico.
- Homepage non lunga e non confusa: sezioni ordinate, una idea per blocco.
- Poche pagine secondarie, tutte utili.
- Prenotazione sempre ben visibile (hero + sezione dedicata + footer).
- Design mobile-first.
- Qualità strutturale pari a Rosemary, identità visiva e copy coerenti con Timoty.
- Struttura semplice, chiara, premium.
