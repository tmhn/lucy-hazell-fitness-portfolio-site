import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  fullWidth?: boolean;
  fullWidthOnMobile?: boolean;
  className?: string;
};

const base = "btn-label rounded-full inline-flex items-center gap-3";

const variants: Record<Variant, string> = {
  primary: "btn-primary bg-sage-deep text-white",
  ghost: "btn-ghost border border-ink/15 bg-white/70 text-ink",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[11px]",
  lg: "px-7 py-4 text-[11px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  fullWidth = false,
  fullWidthOnMobile = false,
  className = "",
}: Props) {
  const width = fullWidth
    ? "flex w-full justify-center"
    : fullWidthOnMobile
      ? "flex w-full justify-center sm:inline-flex sm:w-auto"
      : "";

  const classes =
    `${base} ${variants[variant]} ${sizes[size]} ${width} ${className} ${withArrow ? "group" : ""}`.trim();

  return (
    <a href={href} className={classes}>
      {children}
      {withArrow && (
        <span className="transition-transform group-hover:translate-x-0.5">
          <Icon name="arrow-right" className="h-3 w-3" />
        </span>
      )}
    </a>
  );
}
