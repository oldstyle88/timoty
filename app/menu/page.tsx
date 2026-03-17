import Link from "next/link";

import { siteCopy } from "@/lib/site-data";
import { getLocalizedHref } from "@/lib/routes";

export const metadata = {
  title: "Menu — Timoty Drinks & Kitchen",
  description:
    "Menu completo: veg, vegetariano, gluten free, km 0. Brunch, pranzo, cena. Roma, Via Torino 46.",
};

export default function MenuPage() {
  return (
    <div className="container page-section">
      <p className="eyebrow">Menu</p>
      <h1 className="section-title">Scopri il menu</h1>
      <p className="section-copy" style={{ marginBottom: "1.5rem" }}>
        Proposte veg, vegetariane, gluten free e ingredienti a km zero. Menu in aggiornamento;
        per il menu del giorno e le proposte del momento chiedi in sede.
      </p>
      <div className="button-row">
        <Link href={`${getLocalizedHref("it", "home")}#booking`} className="button button-primary">
          Prenota un tavolo
        </Link>
        <Link href={getLocalizedHref("it", "contacts")} className="button button-secondary">
          Contatti
        </Link>
      </div>
    </div>
  );
}
