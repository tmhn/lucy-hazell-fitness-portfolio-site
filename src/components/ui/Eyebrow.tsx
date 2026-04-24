type Props = {
  children: string;
  align?: "start" | "center";
  className?: string;
};

export function Eyebrow({ children, align = "start", className = "" }: Props) {
  const centerAlways = align === "center";
  const justify = centerAlways
    ? "justify-center"
    : "justify-center sm:justify-start";
  const trailingRuleHidden = centerAlways ? "" : "sm:hidden";

  return (
    <p
      className={`font-engravers flex w-full items-center gap-3 text-sm text-ink-muted ${justify} ${className}`.trim()}
    >
      <span
        aria-hidden
        className="h-px w-8 flex-shrink-0 bg-ink-muted/50"
      />
      <span>{children}</span>
      <span
        aria-hidden
        className={`h-px w-8 flex-shrink-0 bg-ink-muted/50 ${trailingRuleHidden}`.trim()}
      />
    </p>
  );
}
