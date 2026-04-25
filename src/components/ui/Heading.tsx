import { Fragment } from "react";
import type { Heading as HeadingContent } from "@/content/types";

type Level = "h1" | "h2";
type Size = "sm" | "md" | "lg" | "xl";
type Align = "start" | "center";

type Props = {
  heading: HeadingContent;
  level?: Level;
  size?: Size;
  align?: Align;
  emphasisUnderline?: boolean;
  className?: string;
};

const sizes: Record<Size, string> = {
  sm: "text-[36px] leading-[1.02] tracking-[-0.01em] sm:text-[52px]",
  md: "text-[44px] leading-[1.02] tracking-[-0.01em] sm:text-[56px]",
  lg: "text-[48px] leading-[1.02] tracking-[-0.01em] sm:text-[62px]",
  xl: "text-[52px] leading-[1.0] tracking-[-0.02em] sm:text-[68px] lg:text-[76px]",
};

function renderLines(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}

export function Heading({
  heading,
  level = "h2",
  size = "sm",
  align = "start",
  emphasisUnderline = false,
  className = "",
}: Props) {
  const Tag = level;
  const alignment =
    align === "center" ? "text-center" : "text-center sm:text-start";
  const classes =
    `font-recoleta ${alignment} text-ink ${sizes[size]} ${className}`.trim();

  const emphasis = emphasisUnderline ? (
    <span className="relative inline-block italic text-sage-deep">
      {heading.emphasis}
      <svg
        viewBox="0 0 220 22"
        className="absolute -bottom-3 left-0 h-3 w-full text-sage"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M2 14 C 60 2, 140 2, 218 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ) : (
    <span className="italic text-sage-deep">{heading.emphasis}</span>
  );

  return (
    <Tag className={classes}>
      {renderLines(heading.lead)}
      {emphasis}
      {heading.trail && renderLines(heading.trail)}
    </Tag>
  );
}
