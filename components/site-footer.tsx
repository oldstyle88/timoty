import Image from "next/image";
import Link from "next/link";

import { FOOTER_ITEMS, getLocalizedHref } from "@/lib/routes";
import { siteCopy } from "@/lib/site-data";
import type { Locale } from "@/lib/site-types";

type Props = { locale: Locale };

export function SiteFooter({ locale }: Props) {
  const ui = siteCopy.ui[locale];

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Image
                alt={siteCopy.brand.logo.alt}
                className="footer-logo"
                height={48}
                src={siteCopy.brand.logo.src}
                width={160}
              />
              <div>
                <p className="footer-title">{siteCopy.brand.name}</p>
                <p className="footer-copy">{ui.footerLine}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="footer-title">{ui.navigationTitle}</p>
            <nav className="footer-nav">
              {FOOTER_ITEMS.map((pageId) => (
                <Link key={pageId} href={getLocalizedHref(locale, pageId)}>
                  {siteCopy.navigation[locale][pageId]}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="footer-title">{ui.contactTitle}</p>
            <div className="footer-nav">
              <a href={siteCopy.contact.mapHref} target="_blank" rel="noreferrer">
                {siteCopy.contact.address}
              </a>
              <a href={siteCopy.contact.phoneHref}>{siteCopy.contact.phonePrimary}</a>
              <a href={`mailto:${siteCopy.contact.email}`}>{siteCopy.contact.email}</a>
              {siteCopy.contact.instagram ? (
                <a
                  href={siteCopy.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{siteCopy.contact.hours}</span>
          <span>{ui.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
