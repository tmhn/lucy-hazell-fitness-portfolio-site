import Image from "next/image";
import { successStoriesContent } from "@/content/success-stories";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { StatBlock } from "@/components/StatBlock";

export default function SuccessStories() {
  const c = successStoriesContent;

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
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mt-12">
        <div className="rounded-[28px] border border-hairline bg-white px-8 py-10 sm:px-12">
          <Eyebrow align="center">{c.stats.eyebrow}</Eyebrow>
          <div className="mt-8 grid grid-cols-2 justify-items-center gap-y-10 sm:grid-cols-4">
            {c.stats.items.map((stat) => (
              <StatBlock key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured story */}
      <section className="mt-20">
        <SectionHeading
          section={c.featured.section}
          size="md"
          className="mb-10"
        />

        <article className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-stone">
              <Image
                src={c.featured.story.image.src}
                alt={c.featured.story.image.alt}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
            <span className="font-engravers absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] text-sage-deep">
              {c.featured.story.tag}
            </span>
          </div>

          <div className="flex flex-col rounded-[32px] border border-hairline bg-white p-8 sm:p-10">
            <p className="font-engravers text-[11px] text-sage-deep">
              {c.featured.story.programme}
            </p>
            <h3 className="mt-4 font-recoleta text-[28px] leading-[1.15] text-ink sm:text-[34px]">
              {c.featured.story.headline}
            </h3>

            <div className="mt-6 space-y-5">
              {c.featured.story.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-[1.7] text-ink-soft sm:text-[16px]"
                >
                  {p}
                </p>
              ))}
            </div>

            <blockquote className="mt-8 rounded-2xl bg-sage-mist/60 p-6 sm:p-7">
              <Icon name="quote" className="h-6 w-8 text-sage-deep/60" />
              <p className="mt-3 font-recoleta text-[19px] leading-[1.4] italic text-ink sm:text-[21px]">
                &ldquo;{c.featured.story.pullQuote}&rdquo;
              </p>
              <p className="font-engravers mt-4 text-[11px] text-sage-deep">
                — {c.featured.story.name}
              </p>
            </blockquote>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-hairline pt-6">
              {c.featured.story.stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-recoleta text-[26px] leading-none tracking-tight text-ink sm:text-[30px]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] leading-tight text-ink-soft">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      {/* Stories grid */}
      <section id="stories" className="mt-20">
        <SectionHeading section={c.grid.section} className="mb-10" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.grid.items.map((story, i) => (
            <article
              key={i}
              className="card-lift flex flex-col gap-5 rounded-[28px] border border-hairline bg-white p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <Icon name="quote" className="h-6 w-8 text-sage-deep/50" />
                {story.result && (
                  <span className="font-engravers rounded-full bg-sage-mist px-3 py-1 text-[10px] text-sage-deep">
                    {story.result}
                  </span>
                )}
              </div>

              <p className="font-recoleta text-[18px] leading-[1.45] text-ink">
                &ldquo;{story.quote}&rdquo;
              </p>

              <div className="mt-auto flex items-center gap-4 border-t border-hairline pt-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-stone">
                  <Image
                    src={story.avatar}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-recoleta text-[15px] leading-tight text-ink">
                    {story.authorName}
                  </p>
                  <p className="font-engravers mt-1 text-[10px] text-ink-muted">
                    {story.authorRole}
                  </p>
                </div>
              </div>
            </article>
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
