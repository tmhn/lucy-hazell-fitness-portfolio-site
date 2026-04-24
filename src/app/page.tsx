import Image from "next/image";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { FeatureCard } from "@/components/FeatureCard";
import { ProgramCard } from "@/components/ProgramCard";
import { StepItem } from "@/components/StepItem";
import { StatBlock } from "@/components/StatBlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import { MobileMenu } from "@/components/MobileMenu";

export default function Home() {
  const c = homeContent;

  return (
    <main className="mx-auto w-full max-w-[1280px] px-5 pt-5 pb-16 sm:px-8 lg:px-10">
      {/* Header */}
      <header
        className="rise flex flex-wrap items-center justify-between gap-6 rounded-full border border-hairline bg-white/50 px-6 py-4 backdrop-blur-sm sm:px-7"
        style={{ animationDelay: "40ms" }}
      >
        <a href="#" className="flex items-center gap-3">
          <span className="font-engravers text-[22px] leading-none text-ink">
            {c.brand.name}
          </span>
          <span className="hidden h-3 w-px bg-hairline sm:block" />
          <span className="font-engravers hidden text-sm text-ink-muted sm:block">
            {c.brand.tagline}
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] text-ink-soft lg:flex">
          {c.nav.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <MobileMenu
          nav={c.nav}
          cta={c.primaryCta}
          brand={c.brand}
          photo={c.hero.image}
          location="Yorkshire • Online worldwide"
        />
        <div className="hidden md:block">
          <Button href={c.primaryCta.href}>{c.primaryCta.label}</Button>
        </div>
      </header>

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

              <div
                className="rise flex items-center gap-4"
                style={{ animationDelay: "460ms" }}
              >
                <div className="flex -space-x-2.5">
                  {c.hero.trust.avatars.map((src, i) => (
                    <div
                      key={src}
                      className="relative h-11 w-11 overflow-hidden rounded-full border-[2.5px] border-[#f0ebde] bg-stone"
                      style={{ zIndex: c.hero.trust.avatars.length - i }}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-0.5 text-[13px] text-ink-soft">
                  <div className="flex items-center gap-1 text-sage-deep">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <p>
                    {c.hero.trust.textLead}
                    <span className="font-semibold text-ink">
                      {c.hero.trust.textStrong}
                    </span>
                    {c.hero.trust.textTrail}
                  </p>
                </div>
              </div>
            </div>

            <div className="rise relative" style={{ animationDelay: "160ms" }}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[32px] bg-gradient-to-b from-[#d6dfca] via-[#c2d1b1] to-[#b0c19e]">
                <div
                  aria-hidden
                  className="absolute left-1/2 top-[58%] h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dae3cd]/70 blur-xl"
                />
                <div
                  aria-hidden
                  className="absolute bottom-[-8%] left-1/2 h-[70%] w-[86%] -translate-x-1/2 rounded-[50%] bg-[#e6edd8]"
                />
                <div className="absolute inset-x-0 bottom-0 top-6">
                  <Image
                    src={c.hero.image.src}
                    alt={c.hero.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-contain object-bottom"
                  />
                </div>
                <div className="absolute left-6 top-6 flex items-center gap-2 text-sage-deep/60">
                  <span className="font-engravers text-sm tracking-[0.3em]">
                    {c.hero.since}
                  </span>
                </div>
              </div>

              <aside
                className="drift mx-auto mt-5 flex w-fit items-center gap-4 rounded-2xl border border-hairline bg-white px-5 py-3 text-left shadow-[0_16px_32px_-18px_rgba(28,44,68,0.18)] lg:absolute lg:-right-6 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[148px] lg:-translate-y-1/2 lg:flex-col lg:items-center lg:gap-0 lg:px-5 lg:py-5 lg:text-center lg:shadow-[0_24px_50px_-20px_rgba(28,44,68,0.25)]"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="font-recoleta text-[34px] leading-none tracking-tight text-ink lg:text-[40px]">
                  {c.hero.statCard.value}
                </p>
                <div className="flex items-center gap-3 lg:contents">
                  <p className="max-w-[110px] text-[11px] leading-tight text-ink-soft lg:mt-2 lg:max-w-none">
                    {c.hero.statCard.label}
                  </p>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-mist text-sage-deep lg:mx-auto lg:mt-3">
                    <Icon name={c.hero.statCard.icon} className="h-3.5 w-3.5" />
                  </div>
                </div>
              </aside>

              <div
                className="hidden sm:flex drift absolute -left-2 bottom-6 items-center gap-3 rounded-full border border-white/80 bg-white/95 px-4 py-2 shadow-[0_18px_30px_-18px_rgba(28,44,68,0.3)] lg:-left-4"
                style={{ animationDelay: "1s" }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage-deep text-white">
                  <Icon name={c.hero.badge.icon} className="h-3.5 w-3.5" />
                </span>
                <span className="text-[11px] leading-tight text-ink-soft">
                  <span className="font-semibold text-ink pr-1">
                    {c.hero.badge.prefix}
                  </span>
                  {c.hero.badge.text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press strip */}
      <section className="mt-10">
        <div className="flex flex-col items-center gap-6 rounded-[28px] bg-white/70 px-8 py-8">
          <Eyebrow align="center">{c.press.eyebrow}</Eyebrow>
          <div className="grid w-full grid-cols-2 items-center justify-items-center gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
            {c.press.logos.map((logo, i) => (
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

      {/* Features */}
      <section className="mt-12">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {c.features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="mt-20">
        <SectionHeading
          section={c.programs.section}
          className="mb-10"
          trailing={
            <a
              href={c.programs.viewAll.href}
              className="font-engravers self-center sm:self-start inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink"
            >
              {c.programs.viewAll.label}
              <Icon name="arrow-right" className="h-3 w-3" />
            </a>
          }
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {c.programs.items.map((program) => (
            <ProgramCard key={program.title} program={program} />
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

      {/* Results + Testimonial */}
      <section className="mt-20">
        <div className="mb-10">
          <Eyebrow>{c.results.eyebrow}</Eyebrow>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] border border-hairline bg-white p-10">
            <Heading heading={c.results.heading} size="sm" />
            <div className="hairline mt-10" />

            {/* StatCard Block */}
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {c.results.stats.map((stat, index) => (
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
          <TestimonialCard testimonial={c.results.testimonial} />
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="mt-20">
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

      {/* Footer */}
      <footer className="mt-16">
        <div className="hairline mb-10" />
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="font-engravers text-[18px] text-ink">
              {c.brand.name}
            </span>
            <span className="h-3 w-px bg-hairline" />
            <span className="font-engravers text-sm text-ink-muted">
              {c.brand.tagline}
            </span>
          </div>
          <div className="flex flex-wrap gap-6 text-[12px] text-ink-soft">
            {c.footer.links.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-[11px] text-ink-muted">
            © {new Date().getFullYear()} {c.footer.copyright}
          </p>
        </div>
      </footer>
    </main>
  );
}
