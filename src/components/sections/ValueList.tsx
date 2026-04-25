import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import type { ValueListSection } from "@/content/sections";

export function ValueList({ data }: { data: ValueListSection }) {
  return (
    <section className="mt-20">
      <div className="paper-grain relative overflow-hidden rounded-[32px] bg-[#e8ece0] p-10 sm:p-14">
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-5">
            <Eyebrow>{data.section.eyebrow}</Eyebrow>
            <Heading heading={data.section.heading} size="sm" />
          </div>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
            {data.items.map((item, i) => (
              <li
                key={item.title}
                className="relative rounded-2xl border border-white/70 bg-white/70 p-6 backdrop-blur-sm"
              >
                <p className="font-engravers text-[12px] text-sage-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-recoleta text-[22px] leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-ink-soft">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
