import Image from "next/image";
import { coachingContent } from "@/content/coaching";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { FeatureCard } from "@/components/FeatureCard";
import { StepItem } from "@/components/StepItem";

const tierTheme = {
  sage: {
    card: "bg-sage-deep text-white",
    tag: "bg-white/15 text-white",
    price: "text-white",
    divider: "bg-white/20",
    feature: "text-white/85",
    check: "bg-white/15 text-white",
  },
  cream: {
    card: "bg-white text-ink border border-hairline",
    tag: "bg-sage-mist text-sage-deep",
    price: "text-ink",
    divider: "bg-hairline",
    feature: "text-ink-soft",
    check: "bg-sage-mist text-sage-deep",
  },
  stone: {
    card: "bg-[#efe7d8] text-ink",
    tag: "bg-white/80 text-sage-deep",
    price: "text-ink",
    divider: "bg-ink/10",
    feature: "text-ink-soft",
    check: "bg-white/70 text-sage-deep",
  },
} as const;

export default function Coaching() {
  const c = coachingContent;

  return (
    <div>
      {/* Hero */}
      <section className="relative mt-8">
        <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#f0ebde] p-8 sm:p-12 lg:p-14">
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="relative z-10 flex flex-col justify-between gap-10 lg:gap-14">
              <div className="space-y-8">
                <div className="rise" style={{ animationDelay: "120ms" }}>
                  <Eyebrow>{c.hero.eyebrow}</Eyebrow>
                </div>

                <div className="rise" style={{ animationDelay: "200ms" }}>
                  <Heading
                    heading={c.hero.heading}
                    level="h1"
                    size="xl"
                    emphasisUnderline
                  />
                </div>

                <p
                  className="rise max-w-lg text-[17px] leading-[1.65] text-ink-soft sm:text-[18px]"
                  style={{ animationDelay: "280ms" }}
                >
                  {c.hero.description}
                </p>

                <div
                  className="rise flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
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
              </div>

              <ul
                className="rise flex flex-wrap gap-5 text-[13px] text-ink-soft"
                style={{ animationDelay: "460ms" }}
              >
                {c.hero.highlights.map((h) => (
                  <li key={h.label} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage-mist text-sage-deep">
                      <Icon name={h.icon} className="h-3.5 w-3.5" />
                    </span>
                    {h.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rise relative" style={{ animationDelay: "160ms" }}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[32px] bg-gradient-to-b from-[#d6dfca] via-[#c2d1b1] to-[#b0c19e]">
                <div
                  aria-hidden
                  className="absolute left-1/2 top-[58%] h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dae3cd]/70 blur-xl"
                />
                <div className="absolute inset-0">
                  <Image
                    src={c.hero.image.src}
                    alt={c.hero.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="included" className="mt-20">
        <SectionHeading section={c.included.section} className="mb-10" />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {c.included.items.map((item) => (
            <FeatureCard key={item.title} feature={item} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mt-20">
        <div className="paper-grain relative overflow-hidden rounded-[32px] bg-[#e8ece0] p-10 sm:p-14">
          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="space-y-5">
              <Eyebrow>{c.howItWorks.section.eyebrow}</Eyebrow>
              <Heading heading={c.howItWorks.section.heading} size="sm" />
              <p className="max-w-md text-[16px] leading-[1.65] text-ink-soft">
                {c.howItWorks.description}
              </p>
            </div>

            <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              <div
                aria-hidden
                className="absolute left-6 right-6 top-[22px] hidden h-px border-t border-dashed border-ink/20 lg:block"
              />
              {c.howItWorks.steps.map((step) => (
                <StepItem key={step.number} step={step} />
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mt-20">
        <SectionHeading section={c.pricing.section} className="mb-10" />
        <div className="grid gap-5 lg:grid-cols-2">
          {c.pricing.tiers.map((tier) => {
            const t = tierTheme[tier.theme];
            return (
              <article
                key={tier.name}
                className={`card-lift relative flex flex-col gap-7 rounded-[28px] p-8 sm:p-10 ${t.card}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {tier.tag && (
                      <span
                        className={`font-engravers inline-block rounded-full px-3 py-1 text-[10px] ${t.tag}`}
                      >
                        {tier.tag}
                      </span>
                    )}
                    <h3
                      className={`mt-4 font-recoleta text-[28px] leading-tight sm:text-[32px] ${t.price}`}
                    >
                      {tier.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-recoleta text-[48px] leading-none tracking-tight ${t.price}`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-[14px] ${
                      tier.featured ? "text-white/80" : "text-ink-muted"
                    }`}
                  >
                    {tier.priceSuffix}
                  </span>
                </div>

                <p
                  className={`text-[15px] leading-[1.65] ${
                    tier.featured ? "text-white/85" : "text-ink-soft"
                  }`}
                >
                  {tier.description}
                </p>

                <div className={`h-px w-full ${t.divider}`} />

                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-[14px] leading-[1.55] ${t.feature}`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.check}`}
                      >
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <Button
                    href={tier.cta.href}
                    variant={tier.featured ? "ghost" : "primary"}
                    size="lg"
                    withArrow
                    fullWidth
                    className={
                      tier.featured
                        ? "!bg-transparent !border-white/50 text-white hover:!bg-white/10"
                        : ""
                    }
                  >
                    {tier.cta.label}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-[14px] text-ink-soft">
          {c.pricing.note}
        </p>
      </section>

      {/* FAQs */}
      <section className="mt-20">
        <SectionHeading section={c.faqs.section} className="mb-10" />
        <div className="rounded-[28px] border border-hairline bg-white">
          {c.faqs.items.map((faq, i) => (
            <details
              key={faq.question}
              className={`faq-item group px-6 py-5 sm:px-8 ${
                i > 0 ? "border-t border-hairline" : ""
              }`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <h3 className="font-recoleta text-[19px] leading-snug text-ink sm:text-[21px]">
                  {faq.question}
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-mist text-sage-deep transition-transform duration-300 group-open:rotate-45">
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-[15px] leading-[1.7] text-ink-soft">
                {faq.answer}
              </p>
            </details>
          ))}
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
