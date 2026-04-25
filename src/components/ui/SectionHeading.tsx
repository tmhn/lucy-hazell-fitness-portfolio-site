import type { ReactNode } from "react";
import type { Section } from "@/content/types";
import { Eyebrow } from "./Eyebrow";
import { Heading } from "./Heading";

type Size = "sm" | "md" | "lg" | "xl";

type Props = {
  section: Section;
  size?: Size;
  trailing?: ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeading({
  section,
  size = "sm",
  trailing,
  description,
  className = "",
}: Props) {
  return (
    <div
      className={`flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end ${className}`.trim()}
    >
      <div className="w-full max-w-xl space-y-5 sm:w-auto">
        <Eyebrow>{section.eyebrow}</Eyebrow>
        <Heading heading={section.heading} size={size} />
        {description && (
          <p className="mx-auto max-w-md text-center text-[16px] leading-[1.65] text-ink-soft sm:mx-0 sm:text-left">
            {description}
          </p>
        )}
      </div>
      {trailing}
    </div>
  );
}
