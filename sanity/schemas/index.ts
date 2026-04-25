import type { SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./documents/siteSettings";
import { page } from "./documents/page";
import { link } from "./objects/link";
import { splitHeading } from "./objects/splitHeading";
import { imageAsset } from "./objects/imageAsset";
import { pressLogo } from "./objects/pressLogo";
import { feature } from "./objects/feature";
import { programCard } from "./objects/programCard";
import { step } from "./objects/step";
import { stat } from "./objects/stat";
import { testimonial } from "./objects/testimonial";
import { trustStrip } from "./objects/trustStrip";
import { statCard } from "./objects/statCard";
import { badge } from "./objects/badge";
import { value } from "./objects/value";
import { heroSection } from "./objects/sections/heroSection";
import { pressStripSection } from "./objects/sections/pressStrip";
import { featureGridSection } from "./objects/sections/featureGrid";
import { programsSection } from "./objects/sections/programsSection";
import { howItWorksSection } from "./objects/sections/howItWorks";
import { storySplitSection } from "./objects/sections/storySplit";
import { valueListSection } from "./objects/sections/valueList";
import { resultsBlockSection } from "./objects/sections/resultsBlock";
import { finalCtaSection } from "./objects/sections/finalCta";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  link,
  splitHeading,
  imageAsset,
  pressLogo,
  feature,
  programCard,
  step,
  stat,
  testimonial,
  trustStrip,
  statCard,
  badge,
  value,
  heroSection,
  pressStripSection,
  featureGridSection,
  programsSection,
  howItWorksSection,
  storySplitSection,
  valueListSection,
  resultsBlockSection,
  finalCtaSection,
];
