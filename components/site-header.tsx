"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { NAV_ITEMS, getLocalizedHref, resolvePageIdFromPathname } from "@/lib/routes";
import { siteCopy } from "@/lib/site-data";
import type { Locale } from "@/lib/site-types";
import { cn } from "@/lib/utils";

type Props = { locale: Locale };

export function SiteHeader({ locale }: Props) {
  const pathname = usePathname() ?? "/";
  const currentPageId = resolvePageIdFromPathname(pathname, locale) ?? "home";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand-link"
          href={getLocalizedHref(locale, "home")}
          onClick={() => setMobileOpen(false)}
        >
          <Image
            alt={siteCopy.brand.logo.alt}
            className="brand-logo"
            height={48}
            priority
            src={siteCopy.brand.logo.src}
            width={160}
          />
          <span className="sr-only">{siteCopy.brand.name}</span>
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          className="menu-toggle icon-button"
          onClick={() => setMobileOpen((o) => !o)}
          type="button"
        >
          {mobileOpen ? siteCopy.ui[locale].closeMenu : siteCopy.ui[locale].mobileMenu}
        </button>

        <nav className="site-nav site-nav-desktop" aria-label="Principale">
          {NAV_ITEMS.map((pageId) => (
            <Link
              key={pageId}
              className={cn("nav-link", currentPageId === pageId && "nav-link-active")}
              href={getLocalizedHref(locale, pageId)}
            >
              {siteCopy.navigation[locale][pageId]}
            </Link>
          ))}
        </nav>

        <div className="header-tools header-tools-desktop">
          <Link
            className="button button-primary header-cta"
            href={`${getLocalizedHref(locale, "home")}#booking`}
          >
            {siteCopy.ui[locale].book}
          </Link>
        </div>

        <div
          className={cn("mobile-panel panel", mobileOpen && "mobile-panel-open")}
          id="mobile-navigation"
        >
          <div className="mobile-panel-body">
            <nav className="mobile-nav" aria-label="Menu mobile">
              {NAV_ITEMS.map((pageId) => (
                <Link
                  key={pageId}
                  className={cn("mobile-nav-link", currentPageId === pageId && "mobile-nav-link-active")}
                  href={getLocalizedHref(locale, pageId)}
                  onClick={() => setMobileOpen(false)}
                >
                  {siteCopy.navigation[locale][pageId]}
                </Link>
              ))}
            </nav>
            <Link
              className="button button-primary mobile-book-button"
              href={`${getLocalizedHref(locale, "home")}#booking`}
              onClick={() => setMobileOpen(false)}
            >
              {siteCopy.ui[locale].book}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
