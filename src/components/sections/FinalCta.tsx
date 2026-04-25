import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import type { FinalCtaSection } from "@/content/sections";

export function FinalCta({ data }: { data: FinalCtaSection }) {
  return (
    <section id={data.anchorId} className="mt-20">
      <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#e8ece0]">
        <div className="relative grid gap-10 p-10 sm:p-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-6">
          <div className="space-y-5">
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <Heading heading={data.heading} size="lg" />
            <p className="max-w-xl text-[16px] leading-[1.7] text-ink-soft">
              {data.description}
            </p>
            <div className="flex flex-col items-stretch gap-4 pt-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href={data.cta.href}
                size="lg"
                withArrow
                fullWidthOnMobile
              >
                {data.cta.label}
              </Button>
              <p className="text-center text-[13px] text-ink-soft sm:text-left">
                {data.note}
              </p>
            </div>
          </div>

          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] bg-white/60">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
