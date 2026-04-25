import type { Link } from "./types";

type SiteImage = { src: string; alt: string };

export type SiteContent = {
  brand: { name: string; tagline: string };
  nav: Link[];
  primaryCta: Link;
  menuPhoto: SiteImage;
  footer: { links: Link[]; copyright: string };
};

export const siteContent: SiteContent = {
  brand: {
    name: "LUCY HAZELL",
    tagline: "Personal Trainer",
  },
  nav: [
    { label: "Programs", href: "/programs" },
    { label: "Coaching", href: "/coaching" },
    { label: "About", href: "/about" },
    { label: "Success Stories", href: "success-stories" },
  ],
  primaryCta: { label: "Book a Free Call", href: "/enquire" },
  menuPhoto: {
    src: "/assets/hero_trainer_1_bg_removed.png",
    alt: "Lucy, personal trainer, smiling with hands on hips",
  },
  footer: {
    links: [
      { label: "Programs", href: "programs" },
      { label: "Coaching", href: "coaching" },
      { label: "About", href: "about" },
      { label: "Success Stories", href: "success-stories" },
    ],
    copyright: "Lucy Hazell Fitness",
  },
};
