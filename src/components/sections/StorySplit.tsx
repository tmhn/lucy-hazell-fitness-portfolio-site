import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import type { StorySplitSection } from "@/content/sections";

export function StorySplit({ data }: { data: StorySplitSection }) {
  return (
    <section className="mt-20">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[32px] bg-stone">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden max-w-[280px] rounded-2xl border border-hairline bg-white px-6 py-5 shadow-[0_24px_50px_-20px_rgba(28,44,68,0.25)] lg:block">
            <p className="font-recoleta text-[18px] leading-[1.4] italic text-ink">
              &ldquo;{data.pullQuote}&rdquo;
            </p>
          </div>
        </div>

        <div className="order-1 space-y-6 lg:order-2">
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <Heading heading={data.heading} size="md" />
          <div className="space-y-5 pt-2">
            {data.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-xl text-[16px] leading-[1.75] text-ink-soft sm:text-[17px]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
