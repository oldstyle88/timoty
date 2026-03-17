import Link from "next/link";

export const metadata = {
  title: "Menu — Timoty Drinks & Kitchen",
  description: "Menu completo: veg, vegetariano, gluten free, km 0. Brunch, pranzo, cena.",
};

export default function MenuPage() {
  return (
    <main className="page-section container">
      <p className="eyebrow">Menu</p>
      <h1 className="section-title">Scopri il menu</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        Proposte veg, vegetariane, gluten free e ingredienti a km zero. In arrivo il menu completo.
      </p>
      <Link href="/" className="button button-primary">
        Torna alla home
      </Link>
    </main>
  );
}
