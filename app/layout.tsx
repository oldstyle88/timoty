import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { SiteShell } from "@/components/site-shell";

import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

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
      <body className={`${display.variable} ${body.variable}`}>
        <SiteShell locale="it">{children}</SiteShell>
      </body>
    </html>
  );
}
