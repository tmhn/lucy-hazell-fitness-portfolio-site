import type { IconName } from "@/content/types";

type Props = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: Props) {
  const common = {
    viewBox: "0 0 32 32",
    className,
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "dumbbell":
      return (
        <svg {...common}>
          <path d="M4 16h24" />
          <path d="M8 11v10M12 9v14M20 9v14M24 11v10" />
        </svg>
      );
    case "apple":
      return (
        <svg {...common}>
          <path d="M16 7c-5 0-9 4-9 9 0 6 4 10 9 10s9-4 9-10c0-5-4-9-9-9Z" />
          <path d="M16 7c0-2 1.3-3.6 3.2-4.5" />
          <path d="M12 13c0 2 1.5 3.5 3.5 3.5" />
        </svg>
      );
    case "mindset":
      return (
        <svg {...common} strokeLinejoin="round">
          <path d="M16 6v3M16 23v3M6 16h3M23 16h3M9.1 9.1l2.1 2.1M20.8 20.8l2.1 2.1M22.9 9.1l-2.1 2.1M11.2 20.8l-2.1 2.1" />
          <circle cx="16" cy="16" r="4.8" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common} strokeLinejoin="round">
          <rect x="5" y="9" width="22" height="18" rx="2.4" />
          <path d="M5 14h22" />
          <path d="M11 5v6M21 5v6" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden>
          <path d="M8 14s-5-3.2-5-7a3 3 0 0 1 5-2.2A3 3 0 0 1 13 7c0 3.8-5 7-5 7z" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 8.5l2.5 2.5L12 5.5" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden>
          <path d="M8 1.5l1.9 4 4.4.5-3.3 3 .9 4.4L8 11.2 4.1 13.4 5 9l-3.3-3 4.4-.5L8 1.5z" />
        </svg>
      );
    case "quote":
      return (
        <svg viewBox="0 0 40 32" className={className} fill="currentColor" aria-hidden>
          <path d="M0 32V16C0 7 5 2 14 0v6c-4 1-6 4-6 8h6v18H0zm22 0V16C22 7 27 2 36 0v6c-4 1-6 4-6 8h6v18H22z" />
        </svg>
      );
  }
}
