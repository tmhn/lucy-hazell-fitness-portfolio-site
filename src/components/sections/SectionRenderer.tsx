import type { Section } from "@/content/sections";
import { HeroSection } from "./HeroSection";
import { PressStrip } from "./PressStrip";
import { FeatureGrid } from "./FeatureGrid";
import { ProgramsSection } from "./ProgramsSection";
import { HowItWorks } from "./HowItWorks";
import { StorySplit } from "./StorySplit";
import { ValueList } from "./ValueList";
import { ResultsBlock } from "./ResultsBlock";
import { FinalCta } from "./FinalCta";

export function SectionRenderer({ section }: { section: Section }) {
  switch (section._type) {
    case "heroSection":
      return <HeroSection data={section} />;
    case "pressStrip":
      return <PressStrip data={section} />;
    case "featureGrid":
      return <FeatureGrid data={section} />;
    case "programsSection":
      return <ProgramsSection data={section} />;
    case "howItWorks":
      return <HowItWorks data={section} />;
    case "storySplit":
      return <StorySplit data={section} />;
    case "valueList":
      return <ValueList data={section} />;
    case "resultsBlock":
      return <ResultsBlock data={section} />;
    case "finalCta":
      return <FinalCta data={section} />;
    default: {
      const _exhaustive: never = section;
      void _exhaustive;
      return null;
    }
  }
}
