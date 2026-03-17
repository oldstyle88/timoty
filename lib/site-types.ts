export type Locale = "it";

export type PageId = "home" | "menu" | "eventi" | "contacts" | "privacy";

export type NavPageId = "menu" | "eventi" | "contacts";

export type ActionLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type ImageAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export type InquiryMode = "reservation" | "contact";

export type HomePageData = {
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image: ImageAsset;
    badges: string[];
    actions: ActionLink[];
  };
  identity: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  proposal: {
    eyebrow: string;
    title: string;
    cards: Array<{
      title: string;
      body: string;
      href?: string;
    }>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    images: ImageAsset[];
  };
  reservation: {
    title: string;
    intro: string;
    note: string;
    mode: InquiryMode;
    requestType: "booking" | "general" | "events" | "press";
  };
  events: {
    eyebrow: string;
    title: string;
    body: string;
    cta: ActionLink;
  };
  location: {
    eyebrow: string;
    title: string;
    body: string;
    address: string;
    mapHref: string;
    linkLabel?: string;
  };
};
