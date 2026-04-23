export type IconName =
  | "dumbbell"
  | "apple"
  | "mindset"
  | "calendar"
  | "heart"
  | "check"
  | "arrow-right"
  | "star"
  | "quote";

export type Link = {
  label: string;
  href: string;
};

export type Heading = {
  lead: string;
  emphasis: string;
  trail?: string;
};

export type Feature = {
  title: string;
  text: string;
  icon: IconName;
};

export type ProgramTheme = "sage" | "cream" | "stone";

export type Program = {
  tag: string;
  title: string;
  text: string;
  illustration: string;
  link: Link;
  theme: ProgramTheme;
};

export type Step = {
  number: string;
  title: string;
  text: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  authorName: string;
  authorRole: string;
  avatar: string;
};

export type PressLogo = {
  name: string;
};

export type Section = {
  eyebrow: string;
  heading: Heading;
};

export type HomeContent = {
  brand: {
    name: string;
    tagline: string;
  };
  nav: Link[];
  primaryCta: Link;

  hero: {
    eyebrow: string;
    heading: Heading;
    description: string;
    primaryCta: Link;
    secondaryCta: Link;
    trust: {
      avatars: string[];
      textLead: string;
      textStrong: string;
      textTrail: string;
    };
    image: { src: string; alt: string };
    since: string;
    statCard: { value: string; label: string; icon: IconName };
    badge: { icon: IconName; prefix: string; text: string };
  };

  press: {
    eyebrow: string;
    logos: PressLogo[];
  };

  features: Feature[];

  programs: {
    section: Section;
    viewAll: Link;
    items: Program[];
  };

  howItWorks: {
    section: Section;
    description: string;
    steps: Step[];
  };

  results: {
    eyebrow: string;
    heading: Heading;
    stats: Stat[];
    testimonial: Testimonial;
  };

  finalCta: {
    eyebrow: string;
    heading: Heading;
    description: string;
    cta: Link;
    note: string;
    image: { src: string; alt: string };
  };

  footer: {
    links: Link[];
    copyright: string;
  };
};
