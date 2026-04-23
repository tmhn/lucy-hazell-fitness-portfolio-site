type Props = {
  children: string;
  align?: "start" | "center";
  className?: string;
};

export function Eyebrow({ children, align = "start", className = "" }: Props) {
  const rule = <span className="h-px w-8 bg-ink-muted/50" />;
  return (
    <p
      className={`font-engravers flex items-center gap-3 text-sm text-ink-muted ${className}`.trim()}
    >
      {rule}
      {children}
      {align === "center" && rule}
    </p>
  );
}
