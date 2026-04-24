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
      <div className="max-w-xl space-y-5">
        <Eyebrow>{section.eyebrow}</Eyebrow>
        <Heading heading={section.heading} size={size} />
        {description && (
          <p className="max-w-md text-[16px] leading-[1.65] text-ink-soft">
            {description}
          </p>
        )}
      </div>
      {trailing}
    </div>
  );
}
