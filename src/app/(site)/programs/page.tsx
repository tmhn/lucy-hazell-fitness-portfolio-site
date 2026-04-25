import Image from "next/image";
import { programsContent } from "@/content/programs";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ProgramCard } from "@/components/ProgramCard";

export default function Programs() {
  const c = programsContent;

  return (
    <div>
      {/* Hero */}
      <section className="relative mt-8">
        <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#f0ebde] p-8 sm:p-12 lg:p-14">
          <div className="relative mx-auto max-w-3xl space-y-8 text-center">
            <div className="rise" style={{ animationDelay: "120ms" }}>
              <Eyebrow align="center">{c.hero.eyebrow}</Eyebrow>
            </div>

            <div className="rise" style={{ animationDelay: "200ms" }}>
              <Heading
                heading={c.hero.heading}
                level="h1"
                size="xl"
                align="center"
                emphasisUnderline
              />
            </div>

            <p
              className="rise mx-auto max-w-xl text-[17px] leading-[1.65] text-ink-soft sm:text-[18px]"
              style={{ animationDelay: "280ms" }}
            >
              {c.hero.description}
            </p>

            <div
              className="rise flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: "360ms" }}
            >
              <Button
                href={c.hero.primaryCta.href}
                size="lg"
                withArrow
                fullWidthOnMobile
              >
                {c.hero.primaryCta.label}
              </Button>
              <Button
                href={c.hero.secondaryCta.href}
                variant="ghost"
                size="lg"
                fullWidthOnMobile
              >
                {c.hero.secondaryCta.label}
              </Button>
            </div>

            <div
              className="rise mx-auto grid max-w-2xl grid-cols-3 gap-6 border-t border-ink/10 pt-8 sm:gap-10"
              style={{ animationDelay: "460ms" }}
            >
              {c.hero.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-recoleta text-[32px] leading-none tracking-tight text-ink sm:text-[40px]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] leading-tight text-ink-soft sm:text-[12px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="mt-20">
        <SectionHeading section={c.catalogue.section} className="mb-10" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.catalogue.items.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </section>

      {/* Which is right for me */}
      <section id="compare" className="mt-20">
        <div className="paper-grain relative overflow-hidden rounded-[32px] bg-[#e8ece0] p-10 sm:p-14">
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <Eyebrow>{c.compare.section.eyebrow}</Eyebrow>
              <Heading heading={c.compare.section.heading} size="sm" />
            </div>

            <ul className="space-y-5">
              {c.compare.personas.map((p) => (
                <li
                  key={p.title}
                  className="flex gap-5 rounded-2xl border border-white/70 bg-white/80 p-6 backdrop-blur-sm sm:p-7"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-mist text-sage-deep">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-recoleta text-[22px] leading-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-ink-soft">
                      {p.text}
                    </p>
                    <p className="font-engravers pt-1 text-[11px] text-sage-deep">
                      {p.bestFor}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-20">
        <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#e8ece0]">
          <div className="relative grid gap-10 p-10 sm:p-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-6">
            <div className="space-y-5">
              <Eyebrow>{c.finalCta.eyebrow}</Eyebrow>
              <Heading heading={c.finalCta.heading} size="lg" />
              <p className="max-w-xl text-[16px] leading-[1.7] text-ink-soft">
                {c.finalCta.description}
              </p>
              <div className="flex flex-col items-stretch gap-4 pt-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  href={c.finalCta.cta.href}
                  size="lg"
                  withArrow
                  fullWidthOnMobile
                >
                  {c.finalCta.cta.label}
                </Button>
                <p className="text-center text-[13px] text-ink-soft sm:text-left">
                  {c.finalCta.note}
                </p>
              </div>
            </div>

            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] bg-white/60">
              <Image
                src={c.finalCta.image.src}
                alt={c.finalCta.image.alt}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
