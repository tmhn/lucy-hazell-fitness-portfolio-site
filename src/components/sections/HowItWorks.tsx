import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { StepItem } from "@/components/StepItem";
import type { HowItWorksSection } from "@/content/sections";

export function HowItWorks({ data }: { data: HowItWorksSection }) {
  return (
    <section className="mt-20">
      <div className="paper-grain relative overflow-hidden rounded-[32px] bg-[#e8ece0] p-10 sm:p-14">
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="space-y-5">
            <Eyebrow>{data.section.eyebrow}</Eyebrow>
            <Heading heading={data.section.heading} size="sm" />
            <p className="max-w-md text-[16px] leading-[1.65] text-ink-soft">
              {data.description}
            </p>
          </div>

          <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <div
              aria-hidden
              className="absolute left-6 right-6 top-[22px] hidden h-px border-t border-dashed border-ink/20 lg:block"
            />
            {data.steps.map((step) => (
              <StepItem key={step.number} step={step} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
