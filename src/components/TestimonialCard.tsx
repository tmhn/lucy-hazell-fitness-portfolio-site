import Image from "next/image";
import type { Testimonial } from "@/content/types";
import { Icon } from "./ui/Icon";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-[32px] bg-sage-deep p-10 text-white">
      <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
      <div aria-hidden className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-white/5" />

      <Icon name="quote" className="relative h-8 w-10 text-white/40" />

      <blockquote className="relative font-recoleta text-[22px] leading-[1.35] text-white/95 sm:text-[24px]">
        {testimonial.quote}
      </blockquote>

      <figcaption className="relative flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/30">
          <Image src={testimonial.avatar} alt="" fill sizes="48px" className="object-cover" />
        </div>
        <div>
          <p className="font-recoleta text-base text-white">{testimonial.authorName}</p>
          <p className="font-engravers text-sm text-white/60">{testimonial.authorRole}</p>
        </div>
      </figcaption>
    </figure>
  );
}
