import Link from "next/link";

import { siteCopy } from "@/lib/site-data";
import { getLocalizedHref } from "@/lib/routes";

export const metadata = {
  title: "Contatti — Timoty Drinks & Kitchen",
  description: "Indirizzo, orari, telefono, email. Via Torino 46, Roma.",
};

export default function ContattiPage() {
  const { contact } = siteCopy;

  return (
    <div className="container page-section">
      <p className="eyebrow">Contatti</p>
      <h1 className="section-title">Dove siamo e come raggiungerci</h1>
      <p className="section-copy" style={{ marginBottom: "1.5rem" }}>
        Siamo in Via Torino 46, tra Piazza della Repubblica e il Teatro dell’Opera. Metro e bus
        a pochi passi.
      </p>

      <div className="contact-stack" style={{ maxWidth: "28rem" }}>
        <div className="contact-line">
          <span className="contact-label">Indirizzo</span>
          <a href={contact.mapHref} target="_blank" rel="noreferrer">
            {contact.address}
          </a>
        </div>
        <div className="contact-line">
          <span className="contact-label">Telefono</span>
          <a href={contact.phoneHref}>{contact.phonePrimary}</a>
        </div>
        <div className="contact-line">
          <span className="contact-label">Email</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <div className="contact-line">
          <span className="contact-label">Orari</span>
          <span>{contact.hours}</span>
        </div>
      </div>

      <div className="button-row" style={{ marginTop: "1.5rem" }}>
        <a
          href={contact.mapHref}
          target="_blank"
          rel="noreferrer"
          className="button button-primary"
        >
          Apri in Google Maps
        </a>
        <Link href={`${getLocalizedHref("it", "home")}#booking`} className="button button-secondary">
          Prenota un tavolo
        </Link>
      </div>
    </div>
  );
}
