import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import type { HeroSection as HeroSectionData } from "@/content/sections";

export function HeroSection({ data }: { data: HeroSectionData }) {
  const fit = data.imageFit ?? "cover";

  return (
    <section className="relative mt-8">
      <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#f0ebde] p-8 sm:p-12 lg:p-14">
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="relative z-10 flex flex-col justify-between gap-10 lg:gap-14">
            <div className="space-y-8">
              <div className="rise" style={{ animationDelay: "120ms" }}>
                <Eyebrow>{data.eyebrow}</Eyebrow>
              </div>

              <div className="rise" style={{ animationDelay: "200ms" }}>
                <Heading
                  heading={data.heading}
                  level="h1"
                  size="xl"
                  emphasisUnderline
                />
              </div>

              <p
                className="rise max-w-lg text-[17px] leading-[1.65] text-ink-soft sm:text-[18px]"
                style={{ animationDelay: "280ms" }}
              >
                {data.description}
              </p>

              <div
                className="rise flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
                style={{ animationDelay: "360ms" }}
              >
                <Button
                  href={data.primaryCta.href}
                  size="lg"
                  withArrow
                  fullWidthOnMobile
                >
                  {data.primaryCta.label}
                </Button>
                {data.secondaryCta && (
                  <Button
                    href={data.secondaryCta.href}
                    variant="ghost"
                    size="lg"
                    fullWidthOnMobile
                  >
                    {data.secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>

            {data.trust && (
              <div
                className="rise flex items-center gap-4"
                style={{ animationDelay: "460ms" }}
              >
                <div className="flex -space-x-2.5">
                  {data.trust.avatars.map((src, i) => (
                    <div
                      key={src}
                      className="relative h-11 w-11 overflow-hidden rounded-full border-[2.5px] border-[#f0ebde] bg-stone"
                      style={{ zIndex: data.trust!.avatars.length - i }}
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
                    {data.trust.textLead}
                    <span className="font-semibold text-ink">
                      {data.trust.textStrong}
                    </span>
                    {data.trust.textTrail}
                  </p>
                </div>
              </div>
            )}
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
              <div
                className={
                  fit === "containBottom"
                    ? "absolute inset-x-0 bottom-0 top-6"
                    : "absolute inset-0"
                }
              >
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className={
                    fit === "containBottom"
                      ? "object-contain object-bottom"
                      : "object-cover object-center"
                  }
                />
              </div>
              {data.since && (
                <div className="absolute left-6 top-6 flex items-center gap-2 text-sage-deep/60">
                  <span className="font-engravers text-sm tracking-[0.3em]">
                    {data.since}
                  </span>
                </div>
              )}
            </div>

            {data.statCard && (
              <aside
                className="drift mx-auto mt-5 flex w-fit items-center gap-4 rounded-2xl border border-hairline bg-white px-5 py-3 text-left shadow-[0_16px_32px_-18px_rgba(28,44,68,0.18)] lg:absolute lg:-right-6 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[148px] lg:-translate-y-1/2 lg:flex-col lg:items-center lg:gap-0 lg:px-5 lg:py-5 lg:text-center lg:shadow-[0_24px_50px_-20px_rgba(28,44,68,0.25)]"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="font-recoleta text-[34px] leading-none tracking-tight text-ink lg:text-[40px]">
                  {data.statCard.value}
                </p>
                <div className="flex items-center gap-3 lg:contents">
                  <p className="max-w-[110px] text-[11px] leading-tight text-ink-soft lg:mt-2 lg:max-w-none">
                    {data.statCard.label}
                  </p>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-mist text-sage-deep lg:mx-auto lg:mt-3">
                    <Icon name={data.statCard.icon} className="h-3.5 w-3.5" />
                  </div>
                </div>
              </aside>
            )}

            {data.badge && (
              <div
                className="hidden sm:flex drift absolute -left-2 bottom-6 items-center gap-3 rounded-full border border-white/80 bg-white/95 px-4 py-2 shadow-[0_18px_30px_-18px_rgba(28,44,68,0.3)] lg:-left-4"
                style={{ animationDelay: "1s" }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage-deep text-white">
                  <Icon name={data.badge.icon} className="h-3.5 w-3.5" />
                </span>
                <span className="text-[11px] leading-tight text-ink-soft">
                  <span className="font-semibold text-ink pr-1">
                    {data.badge.prefix}
                  </span>
                  {data.badge.text}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
