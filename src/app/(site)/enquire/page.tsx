import Image from "next/image";
import { enquireContent } from "@/content/enquire";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { StepItem } from "@/components/StepItem";
import { EnquiryForm } from "@/components/EnquiryForm";

export default function Enquire() {
  const c = enquireContent;

  return (
    <div>
      {/* Hero */}
      <section className="relative mt-8">
        <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#f0ebde] p-8 sm:p-12 lg:p-14">
          <div className="relative mx-auto max-w-2xl space-y-8 text-center">
            <div className="rise" style={{ animationDelay: "120ms" }}>
              <Eyebrow align="center">{c.hero.eyebrow}</Eyebrow>
            </div>

            <div className="rise" style={{ animationDelay: "200ms" }}>
              <Heading
                heading={c.hero.heading}
                level="h1"
                size="lg"
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
              className="rise flex items-center justify-center gap-4"
              style={{ animationDelay: "360ms" }}
            >
              <div className="flex -space-x-2.5">
                {c.trust.avatars.map((src, i) => (
                  <div
                    key={src}
                    className="relative h-11 w-11 overflow-hidden rounded-full border-[2.5px] border-[#f0ebde] bg-stone"
                    style={{ zIndex: c.trust.avatars.length - i }}
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
              <p className="text-left text-[13px] text-ink-soft">
                {c.trust.textLead}
                <span className="font-semibold text-ink">
                  {c.trust.textStrong}
                </span>
                {c.trust.textTrail}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-step enquiry form */}
      <section className="mt-12">
        <EnquiryForm form={c.form} />
      </section>

      {/* What to expect */}
      <section className="mt-20">
        <div className="paper-grain relative overflow-hidden rounded-[32px] bg-[#e8ece0] p-10 sm:p-14">
          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="space-y-5">
              <Eyebrow>{c.expect.section.eyebrow}</Eyebrow>
              <Heading heading={c.expect.section.heading} size="sm" />
            </div>

            <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              <div
                aria-hidden
                className="absolute left-6 right-6 top-[22px] hidden h-px border-t border-dashed border-ink/20 lg:block"
              />
              {c.expect.items.map((step) => (
                <StepItem key={step.number} step={step} />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
