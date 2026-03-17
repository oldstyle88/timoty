import Link from "next/link";

import type { ActionLink } from "@/lib/site-types";
import { cn, isExternalHref } from "@/lib/utils";

type Props = {
  links: ActionLink[];
};

export function ActionLinks({ links }: Props) {
  return (
    <div className="button-row">
      {links.map((link) => {
        const variantClass =
          link.variant === "ghost"
            ? "button-ghost"
            : link.variant === "secondary"
              ? "button-secondary"
              : "button-primary";
        const isAnchor = link.href.startsWith("#");
        const href = link.href;

        if (isAnchor || isExternalHref(href)) {
          return (
            <a
              key={`${href}-${link.label}`}
              className={cn("button", variantClass)}
              href={href}
              target={isExternalHref(href) ? "_blank" : undefined}
              rel={isExternalHref(href) ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          );
        }

        return (
          <Link key={`${href}-${link.label}`} className={cn("button", variantClass)} href={href}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
