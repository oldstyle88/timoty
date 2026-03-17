import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timoty Drinks & Kitchen — Ristorante Roma, Via Torino 46",
  description:
    "Cucina genuina, healthy, veg e gluten free a Roma centro. Ingredienti km 0, brunch, pranzo e cena. Prenota il tuo tavolo.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://timotyristorante.it"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
