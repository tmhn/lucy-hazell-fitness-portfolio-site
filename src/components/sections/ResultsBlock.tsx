import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { StatBlock } from "@/components/StatBlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import type { ResultsBlockSection } from "@/content/sections";

export function ResultsBlock({ data }: { data: ResultsBlockSection }) {
  return (
    <section className="mt-20">
      <div className="mb-10">
        <Eyebrow>{data.eyebrow}</Eyebrow>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[32px] border border-hairline bg-white p-10">
          <Heading heading={data.heading} size="sm" />
          <div className="hairline mt-10" />

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {data.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={
                  index === 2
                    ? "col-span-2 flex justify-center md:col-span-1 md:block"
                    : ""
                }
              >
                <div
                  className={index === 2 ? "w-full max-w-[140px]" : "w-full"}
                >
                  <StatBlock stat={stat} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <TestimonialCard testimonial={data.testimonial} />
      </div>
    </section>
  );
}
