import Image from "next/image";
import Link from "next/link";

import { ActionLinks } from "@/components/action-links";
import { ReservationForm } from "@/components/reservation-form";
import { getLocalizedHref } from "@/lib/routes";
import { homePages, siteCopy } from "@/lib/site-data";
import type { Locale } from "@/lib/site-types";

type Props = { locale: Locale };

export function HomePage({ locale }: Props) {
  const page = homePages[locale];
  const ui = siteCopy.ui[locale];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://timotyristorante.it";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteCopy.brand.name,
    url: `${siteUrl}${getLocalizedHref(locale, "home")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Torino 46",
      postalCode: "00184",
      addressLocality: "Roma",
      addressCountry: "IT",
    },
    telephone: siteCopy.contact.phonePrimary,
    servesCuisine: ["Italian", "Healthy", "Vegetarian", "Gluten-free"],
    email: siteCopy.contact.email,
    sameAs: siteCopy.contact.instagram ? [siteCopy.contact.instagram] : [],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      {/* Hero */}
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">{page.hero.eyebrow}</p>
          <h1 className="display-title">{page.hero.title}</h1>
          <p className="lede">{page.hero.intro}</p>
          <div className="badge-row">
            {page.hero.badges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
          <ActionLinks links={page.hero.actions} />
        </div>
        <div className="hero-visual">
          <div className="hero-frame panel">
            <Image
              alt={page.hero.image.alt}
              className="hero-image"
              height={800}
              priority
              src={page.hero.image.src}
              width={1200}
              unoptimized={page.hero.image.src.startsWith("https://placehold.co")}
            />
          </div>
        </div>
      </section>

      {/* Identità */}
      <section className="container page-section">
        <div className="section-intro">
          <p className="eyebrow">{page.identity.eyebrow}</p>
          <h2 className="section-title">{page.identity.title}</h2>
        </div>
        {page.identity.paragraphs.map((p) => (
          <p key={p} className="section-copy">
            {p}
          </p>
        ))}
        <ul className="story-list">
          {page.identity.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      {/* Proposta gastronomica */}
      <section className="container page-section">
        <div className="section-intro">
          <p className="eyebrow">{page.proposal.eyebrow}</p>
          <h2 className="section-title">{page.proposal.title}</h2>
        </div>
        <div className="card-grid proposal-grid">
          {page.proposal.cards.map((card) => (
            <article key={card.title} className="info-card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {card.href && (
                <Link className="inline-link" href={card.href}>
                  {ui.open}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container page-section">
        <div className="section-intro">
          <p className="eyebrow">{page.gallery.eyebrow}</p>
          <h2 className="section-title">{page.gallery.title}</h2>
        </div>
        <div className="gallery-grid">
          {page.gallery.images.map((img, i) => (
            <figure
              key={`${img.src}-${i}`}
              className={`gallery-item ${i === 0 ? "gallery-item-large" : ""}`}
            >
              <Image
                alt={img.alt}
                className="hero-image"
                height={600}
                src={img.src}
                width={800}
                unoptimized={img.src.startsWith("https://placehold.co")}
              />
              {img.caption && (
                <figcaption className="gallery-caption">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

      {/* Prenotazione */}
      <section className="container page-section" id="booking">
        <div className="reservation-layout panel">
          <div className="contact-stack">
            <p className="eyebrow">{ui.bookingEyebrow}</p>
            <h2 className="section-title">{page.reservation.title}</h2>
            <p className="section-copy">{page.reservation.intro}</p>
            <div className="contact-line">
              <span className="contact-label">{ui.phoneLabel}</span>
              <a href={siteCopy.contact.phoneHref}>{siteCopy.contact.phonePrimary}</a>
            </div>
            <div className="contact-line">
              <span className="contact-label">Email</span>
              <a href={`mailto:${siteCopy.contact.email}`}>{siteCopy.contact.email}</a>
            </div>
            <div className="contact-line">
              <span className="contact-label">{ui.hoursLabel}</span>
              <span>{siteCopy.contact.hours}</span>
            </div>
            <p className="section-copy">{page.reservation.note}</p>
          </div>
          <ReservationForm
            hideIntro
            intro={page.reservation.intro}
            locale={locale}
            mode={page.reservation.mode}
            requestType={page.reservation.requestType}
            title={page.reservation.title}
          />
        </div>
      </section>

      {/* Eventi */}
      <section className="container page-section">
        <div className="section-intro">
          <p className="eyebrow">{page.events.eyebrow}</p>
          <h2 className="section-title">{page.events.title}</h2>
          <p className="section-copy">{page.events.body}</p>
          <ActionLinks links={[page.events.cta]} />
        </div>
      </section>

      {/* Posizione */}
      <section className="container page-section">
        <div className="section-intro">
          <p className="eyebrow">{page.location.eyebrow}</p>
          <h2 className="section-title">{page.location.title}</h2>
          <p className="section-copy">{page.location.body}</p>
          <p>
            <a
              href={page.location.mapHref}
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              {page.location.linkLabel ?? "Apri in Google Maps"}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
