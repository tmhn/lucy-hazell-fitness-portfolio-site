import type { Stat } from "@/content/types";

export function StatBlock({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col">
      <p className="font-recoleta text-[52px] leading-none tracking-[-0.02em] text-ink sm:text-[64px]">
        {stat.value}
      </p>
      <p className="mt-3 max-w-[140px] text-[13px] leading-[1.5] text-ink-soft">
        {stat.label}
      </p>
    </div>
  );
}
