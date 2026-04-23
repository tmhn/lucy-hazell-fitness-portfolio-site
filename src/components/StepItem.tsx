import type { Step } from "@/content/types";

export function StepItem({ step }: { step: Step }) {
  return (
    <li className="relative z-10">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-sage-deep/30 bg-white">
        <span className="font-engravers text-[11px] text-sage-deep">{step.number}</span>
      </div>
      <p className="font-recoleta text-[19px] leading-tight text-ink">{step.title}</p>
      <p className="mt-2 text-[13px] leading-[1.6] text-ink-soft">{step.text}</p>
    </li>
  );
}
