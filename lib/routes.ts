import type { Locale, NavPageId, PageId } from "@/lib/site-types";

export const PAGE_ROUTES: Record<PageId, Record<Locale, string>> = {
  home: { it: "/" },
  menu: { it: "/menu" },
  eventi: { it: "/eventi-gruppi" },
  contacts: { it: "/contatti" },
  privacy: { it: "/privacy-policy" },
};

export const NAV_ITEMS: NavPageId[] = ["menu", "eventi", "contacts"];

export const FOOTER_ITEMS: PageId[] = ["menu", "eventi", "contacts", "privacy"];

export function getLocalizedHref(locale: Locale, pageId: PageId): string {
  return PAGE_ROUTES[pageId][locale];
}

export function resolvePageIdFromPathname(pathname: string, locale: Locale): PageId | null {
  const normalized = pathname.replace(/\/$/, "") || "/";
  for (const [pageId, routes] of Object.entries(PAGE_ROUTES) as Array<[PageId, Record<Locale, string>]>) {
    if (routes[locale] === normalized) return pageId;
  }
  return null;
}
