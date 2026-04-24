import type { Step } from "@/content/types";

export function StepItem({ step }: { step: Step }) {
  return (
    <li className="step-item relative z-10">
      <span
        aria-hidden
        className="step-connector absolute left-[21px] top-11 -bottom-6 border-l border-dashed border-ink/25 sm:hidden"
      />
      <div className="flex items-start gap-5 sm:block">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sage-deep/30 bg-white">
          <span className="font-engravers text-[11px] text-sage-deep">
            {step.number}
          </span>
        </div>
        <div className="flex-1 pt-1.5 sm:mt-5 sm:pt-0">
          <p className="font-recoleta text-[19px] leading-tight text-ink">
            {step.title}
          </p>
          <p className="mt-2 text-[13px] leading-[1.6] text-ink-soft">
            {step.text}
          </p>
        </div>
      </div>
    </li>
  );
}
