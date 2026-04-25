import { Eyebrow } from "@/components/ui/Eyebrow";
import type { PressStripSection } from "@/content/sections";

export function PressStrip({ data }: { data: PressStripSection }) {
  return (
    <section className="mt-10">
      <div className="flex flex-col items-center gap-6 rounded-[28px] bg-white/70 px-8 py-8">
        <Eyebrow align="center">{data.eyebrow}</Eyebrow>
        <div className="grid w-full grid-cols-2 items-center justify-items-center gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
          {data.logos.map((logo, i) => (
            <p
              key={logo.name}
              className={`font-recoleta text-[20px] italic text-ink/55 sm:text-[22px] ${
                i === 0 ? "tracking-tight" : ""
              }`}
            >
              {logo.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
