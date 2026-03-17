import type { Locale } from "@/lib/site-types";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteShell({ locale, children }: Props) {
  return (
    <div className="site-shell">
      <SiteHeader locale={locale} />
      <main className="page">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
