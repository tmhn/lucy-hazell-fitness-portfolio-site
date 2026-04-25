import type {
  Credential,
  Feature,
  Heading,
  IconName,
  Link,
  PressLogo,
  Program,
  Section as SectionHeader,
  Stat,
  Step,
  Testimonial,
  Value,
} from "./types";

type SiteImage = { src: string; alt: string };

export type HeroImageFit = "cover" | "containBottom";

export type HeroSection = {
  _type: "heroSection";
  _key?: string;
  eyebrow: string;
  heading: Heading;
  description: string;
  primaryCta: Link;
  secondaryCta?: Link;
  image: SiteImage;
  imageFit?: HeroImageFit;
  since?: string;
  statCard?: { value: string; label: string; icon: IconName };
  badge?: { icon: IconName; prefix: string; text: string };
  trust?: {
    avatars: string[];
    textLead: string;
    textStrong: string;
    textTrail: string;
  };
};

export type PressStripSection = {
  _type: "pressStrip";
  _key?: string;
  eyebrow: string;
  logos: PressLogo[];
};

export type FeatureGridSection = {
  _type: "featureGrid";
  _key?: string;
  section?: SectionHeader;
  items: Feature[] | Credential[];
};

export type ProgramsSection = {
  _type: "programsSection";
  _key?: string;
  anchorId?: string;
  section: SectionHeader;
  viewAll?: Link;
  items: Program[];
};

export type HowItWorksSection = {
  _type: "howItWorks";
  _key?: string;
  section: SectionHeader;
  description: string;
  steps: Step[];
};

export type StorySplitSection = {
  _type: "storySplit";
  _key?: string;
  eyebrow: string;
  heading: Heading;
  paragraphs: string[];
  image: SiteImage;
  pullQuote: string;
};

export type ValueListSection = {
  _type: "valueList";
  _key?: string;
  section: SectionHeader;
  items: Value[];
};

export type ResultsBlockSection = {
  _type: "resultsBlock";
  _key?: string;
  eyebrow: string;
  heading: Heading;
  stats: Stat[];
  testimonial: Testimonial;
};

export type FinalCtaSection = {
  _type: "finalCta";
  _key?: string;
  anchorId?: string;
  eyebrow: string;
  heading: Heading;
  description: string;
  cta: Link;
  note: string;
  image: SiteImage;
};

export type Section =
  | HeroSection
  | PressStripSection
  | FeatureGridSection
  | ProgramsSection
  | HowItWorksSection
  | StorySplitSection
  | ValueListSection
  | ResultsBlockSection
  | FinalCtaSection;

export type Page = {
  slug: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  sections: Section[];
};
