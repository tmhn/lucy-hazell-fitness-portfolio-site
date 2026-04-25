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

export type Credential = {
  title: string;
  text: string;
  icon: IconName;
};

export type Value = {
  title: string;
  text: string;
};

export type Story = {
  quote: string;
  authorName: string;
  authorRole: string;
  avatar: string;
  result?: string;
  programme?: string;
};

export type FeaturedStory = {
  tag: string;
  name: string;
  programme: string;
  headline: string;
  paragraphs: string[];
  pullQuote: string;
  stats: Stat[];
  image: { src: string; alt: string };
};

export type SuccessStoriesContent = {
  hero: {
    eyebrow: string;
    heading: Heading;
    description: string;
    primaryCta: Link;
    secondaryCta: Link;
  };
  stats: {
    eyebrow: string;
    items: Stat[];
  };
  featured: {
    section: Section;
    story: FeaturedStory;
  };
  grid: {
    section: Section;
    items: Story[];
  };
  finalCta: {
    eyebrow: string;
    heading: Heading;
    description: string;
    cta: Link;
    note: string;
    image: { src: string; alt: string };
  };
};

export type ProgramsContent = {
  hero: {
    eyebrow: string;
    heading: Heading;
    description: string;
    primaryCta: Link;
    secondaryCta: Link;
    stats: Stat[];
  };
  catalogue: {
    section: Section;
    items: Program[];
  };
  compare: {
    section: Section;
    personas: {
      title: string;
      text: string;
      bestFor: string;
      icon: IconName;
    }[];
  };
  finalCta: {
    eyebrow: string;
    heading: Heading;
    description: string;
    cta: Link;
    note: string;
    image: { src: string; alt: string };
  };
};

export type PricingTier = {
  tag?: string;
  name: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  cta: Link;
  theme: ProgramTheme;
  featured?: boolean;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ProgramDetailContent = {
  slug: string;
  tag: string;
  theme: ProgramTheme;
  testimonialMatch?: string;
  hero: {
    eyebrow: string;
    heading: Heading;
    description: string;
    illustration: string;
    price: string;
    priceSuffix: string;
    primaryCta: Link;
    secondaryCta?: Link;
    highlights: { icon: IconName; label: string }[];
  };
  structure: {
    section: Section;
    description: string;
    phases: Step[];
  };
  ctaStrip: {
    text: string;
    cta: Link;
  };
};

export type CoachingContent = {
  hero: {
    eyebrow: string;
    heading: Heading;
    description: string;
    primaryCta: Link;
    secondaryCta: Link;
    image: { src: string; alt: string };
    highlights: { icon: IconName; label: string }[];
  };
  included: {
    section: Section;
    items: Feature[];
  };
  howItWorks: {
    section: Section;
    description: string;
    steps: Step[];
  };
  pricing: {
    section: Section;
    tiers: PricingTier[];
    note: string;
  };
  faqs: {
    section: Section;
    items: Faq[];
  };
  finalCta: {
    eyebrow: string;
    heading: Heading;
    description: string;
    cta: Link;
    note: string;
    image: { src: string; alt: string };
  };
};

export type EnquireOption = {
  key: string;
  title: string;
  description: string;
  icon: IconName;
};

export type EnquireSingleStep = {
  kind: "single";
  field: "goal" | "activityLevel";
  eyebrow: string;
  title: string;
  prompt: string;
  options: EnquireOption[];
};

export type EnquireMultiStep = {
  kind: "multi";
  field: "priorities";
  eyebrow: string;
  title: string;
  prompt: string;
  helper: string;
  options: EnquireOption[];
};

export type EnquireDetailsStep = {
  kind: "details";
  eyebrow: string;
  title: string;
  prompt: string;
  contactMethods: { key: "email" | "phone" | "either"; label: string }[];
};

export type EnquireStep =
  | EnquireSingleStep
  | EnquireMultiStep
  | EnquireDetailsStep;

export type EnquireContent = {
  hero: {
    eyebrow: string;
    heading: Heading;
    description: string;
  };
  expect: {
    section: Section;
    items: Step[];
  };
  trust: {
    avatars: string[];
    textLead: string;
    textStrong: string;
    textTrail: string;
  };
  form: {
    eyebrow: string;
    title: string;
    prompt: string;
    steps: EnquireStep[];
    nextLabel: string;
    backLabel: string;
    submitLabel: string;
    submittingLabel: string;
    success: {
      eyebrow: string;
      title: string;
      description: string;
      followUpLabel: string;
    };
    error: {
      title: string;
      description: string;
    };
  };
};

