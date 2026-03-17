import Link from "next/link";

import { getLocalizedHref } from "@/lib/routes";
import { homePages } from "@/lib/site-data";

export const metadata = {
  title: "Eventi e gruppi — Timoty Drinks & Kitchen",
  description:
    "Pranzi di lavoro, cene private, eventi su misura. Roma, Via Torino 46.",
};

export default function EventiGruppiPage() {
  const section = homePages.it.events;

  return (
    <div className="container page-section">
      <p className="eyebrow">{section.eyebrow}</p>
      <h1 className="section-title">{section.title}</h1>
      <p className="section-copy" style={{ marginBottom: "1.5rem", maxWidth: "50ch" }}>
        {section.body}
      </p>
      <div className="button-row">
        <Link href={`${getLocalizedHref("it", "home")}#booking`} className="button button-primary">
          {section.cta.label}
        </Link>
        <Link href={getLocalizedHref("it", "contacts")} className="button button-secondary">
          Contatti
        </Link>
      </div>
    </div>
  );
}
