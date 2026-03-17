import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="page-section container">
        <p className="eyebrow">Via Torino 46 · Repubblica · Roma</p>
        <h1 className="section-title">Timoty. Cucina genuina nel cuore di Roma.</h1>
        <p style={{ fontSize: "1.125rem", color: "var(--muted)", maxWidth: "42ch" }}>
          Veg, vegetariano, gluten free e ingredienti a km zero. Brunch, pranzo e cena in Via Torino.
        </p>
        <div className="button-row">
          <a href="#prenota" className="button button-primary">
            Prenota ora
          </a>
          <Link href="/menu" className="button button-secondary">
            Scopri il menu
          </Link>
        </div>
      </section>

      <section id="prenota" className="page-section container" style={{ paddingTop: "2rem" }}>
        <p className="eyebrow">Prenota</p>
        <h2 className="section-title">Prenota il tuo tavolo</h2>
        <p style={{ marginBottom: "1rem" }}>
          Contattaci per telefono o compila il form quando sarà attivo. Stesso giorno? Chiamaci.
        </p>
        <p>
          <a href="tel:+390696860080" className="button button-primary">
            +39 06 9686 0080
          </a>
        </p>
      </section>

      <footer className="page-section container" style={{ borderTop: "1px solid #e7e5e4", marginTop: "3rem" }}>
        <p style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
          Timoty Drinks & Kitchen · Via Torino 46, 00184 Roma
        </p>
      </footer>
    </main>
  );
}
