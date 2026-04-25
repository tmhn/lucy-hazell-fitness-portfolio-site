import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { programDetails } from "@/content/program-details";
import { successStoriesContent } from "@/content/success-stories";
import type { ProgramTheme } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { StepItem } from "@/components/StepItem";
import { TestimonialCard } from "@/components/TestimonialCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(programDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programDetails[slug];
  if (!program) return {};
  return {
    title: `${program.hero.eyebrow} — Lucy Hazell`,
    description: program.hero.description,
  };
}

const heroPanelThemes: Record<ProgramTheme, { panel: string; halo: string }> = {
  sage: { panel: "bg-[#d6dfca]", halo: "bg-white/40" },
  cream: { panel: "bg-[#ede2cc]", halo: "bg-white/45" },
  stone: { panel: "bg-[#e6d9cb]", halo: "bg-white/45" },
};

export default async function ProgramDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programDetails[slug];
  if (!program) notFound();

  const testimonial = program.testimonialMatch
    ? successStoriesContent.grid.items.find(
        (s) => s.programme === program.testimonialMatch,
      )
    : undefined;

  const heroTheme = heroPanelThemes[program.theme];

  return (
    <div>
      {/* Hero */}
      <section className="relative mt-8">
        <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#f0ebde] p-8 sm:p-12 lg:p-14">
          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="relative z-10 flex flex-col justify-between gap-10">
              <div className="space-y-7">

                <div className="rise" style={{ animationDelay: "180ms" }}>
                  <Eyebrow>{program.hero.eyebrow}</Eyebrow>
                </div>

                <div className="rise" style={{ animationDelay: "240ms" }}>
                  <Heading
                    heading={program.hero.heading}
                    level="h1"
                    size="xl"
                    emphasisUnderline
                  />
                </div>

                <p
                  className="rise max-w-lg text-[17px] leading-[1.65] text-ink-soft sm:text-[18px]"
                  style={{ animationDelay: "320ms" }}
                >
                  {program.hero.description}
                </p>

                <div
                  className="rise flex items-baseline gap-2 pt-1"
                  style={{ animationDelay: "360ms" }}
                >
                  <span className="font-recoleta text-[40px] leading-none tracking-tight text-ink sm:text-[48px]">
                    {program.hero.price}
                  </span>
                  <span className="text-[14px] text-ink-muted">
                    {program.hero.priceSuffix}
                  </span>
                </div>

                <div
                  className="rise flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
                  style={{ animationDelay: "420ms" }}
                >
                  <Button
                    href={program.hero.primaryCta.href}
                    size="lg"
                    withArrow
                    fullWidthOnMobile
                  >
                    {program.hero.primaryCta.label}
                  </Button>
                  {program.hero.secondaryCta && (
                    <Button
                      href={program.hero.secondaryCta.href}
                      variant="ghost"
                      size="lg"
                      fullWidthOnMobile
                    >
                      {program.hero.secondaryCta.label}
                    </Button>
                  )}
                </div>
              </div>

              <ul
                className="rise flex flex-wrap gap-5 text-[13px] text-ink-soft"
                style={{ animationDelay: "500ms" }}
              >
                {program.hero.highlights.map((h) => (
                  <li key={h.label} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage-mist text-sage-deep">
                      <Icon name={h.icon} className="h-3.5 w-3.5" />
                    </span>
                    {h.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rise relative" style={{ animationDelay: "200ms" }}>
              <div
                className={`relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[32px] ${heroTheme.panel}`}
              >
                <div
                  aria-hidden
                  className={`absolute left-1/2 top-[38%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl ${heroTheme.halo}`}
                />
                <div className="absolute inset-x-0 bottom-10 flex justify-center">
                  <div className="relative h-[70%] w-[60%] min-h-[280px]">
                    <Image
                      src={program.hero.illustration}
                      alt=""
                      fill
                      priority
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="object-contain object-bottom drop-shadow-[0_14px_20px_rgba(28,44,68,0.12)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="mt-20">
        <div className="paper-grain relative overflow-hidden rounded-[32px] bg-[#e8ece0] p-10 sm:p-14">
          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="space-y-5">
              <Eyebrow>{program.structure.section.eyebrow}</Eyebrow>
              <Heading heading={program.structure.section.heading} size="sm" />
              <p className="max-w-md text-[16px] leading-[1.65] text-ink-soft">
                {program.structure.description}
              </p>
            </div>

            <ol
              className={`relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-5 ${
                program.structure.phases.length === 2
                  ? "lg:grid-cols-2"
                  : program.structure.phases.length === 3
                    ? "lg:grid-cols-3"
                    : "lg:grid-cols-4"
              }`}
            >
              <div
                aria-hidden
                className="absolute left-6 right-6 top-[22px] hidden h-px border-t border-dashed border-ink/20 lg:block"
              />
              {program.structure.phases.map((phase) => (
                <StepItem key={phase.number} step={phase} />
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonial — only if we have one for this programme */}
      {testimonial && (
        <section className="mt-20">
          <div className="mx-auto max-w-3xl">
            <TestimonialCard
              testimonial={{
                quote: testimonial.quote,
                authorName: testimonial.authorName,
                authorRole: testimonial.authorRole,
                avatar: testimonial.avatar,
              }}
            />
          </div>
        </section>
      )}

      {/* Slim CTA strip */}
      <section className="mt-20">
        <div className="paper-grain relative overflow-hidden rounded-[32px] bg-[#e8ece0] px-8 py-9 sm:px-12 sm:py-10">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/35 blur-2xl"
          />
          <div className="relative flex flex-col items-center gap-7 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:text-left">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/80 text-sage-deep">
                <Icon name="heart" className="h-5 w-5" />
              </span>
              <p className="font-recoleta text-[22px] leading-tight text-ink sm:text-[26px]">
                {program.ctaStrip.text}
              </p>
            </div>
            <Button
              href={program.ctaStrip.cta.href}
              size="lg"
              withArrow
              fullWidthOnMobile
            >
              {program.ctaStrip.cta.label}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
