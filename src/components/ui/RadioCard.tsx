import type { IconName } from "@/content/types";
import { Icon } from "./Icon";

type Props = {
  name: string;
  value: string;
  type: "radio" | "checkbox";
  checked: boolean;
  onChange: (value: string) => void;
  icon: IconName;
  title: string;
  description: string;
};

export function RadioCard({
  name,
  value,
  type,
  checked,
  onChange,
  icon,
  title,
  description,
}: Props) {
  return (
    <label className="group relative flex cursor-pointer">
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="peer sr-only"
      />
      <span
        className={[
          "flex w-full items-start gap-4 rounded-3xl border bg-white p-5 transition-all",
          "border-hairline shadow-[0_2px_8px_-6px_rgba(28,44,68,0.12)]",
          "hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_18px_30px_-22px_rgba(28,44,68,0.25)]",
          "peer-checked:border-sage-deep peer-checked:bg-sage-mist/40 peer-checked:shadow-[0_18px_36px_-20px_rgba(56,87,52,0.4)]",
          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sage-deep",
        ].join(" ")}
      >
        <span
          className={[
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors",
            "bg-sage-mist text-sage-deep",
            "group-has-[:checked]:bg-sage-deep group-has-[:checked]:text-white",
          ].join(" ")}
        >
          <Icon name={icon} className="h-5 w-5" />
        </span>

        <span className="flex-1 space-y-1">
          <span className="block font-recoleta text-[18px] leading-tight text-ink">
            {title}
          </span>
          <span className="block text-[13px] leading-[1.55] text-ink-soft">
            {description}
          </span>
        </span>

        <span
          aria-hidden
          className={[
            "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all",
            "border-ink/20 bg-white",
            "group-has-[:checked]:border-sage-deep group-has-[:checked]:bg-sage-deep group-has-[:checked]:text-white",
          ].join(" ")}
        >
          <Icon
            name="check"
            className="h-3 w-3 opacity-0 transition-opacity group-has-[:checked]:opacity-100"
          />
        </span>
      </span>
    </label>
  );
}
