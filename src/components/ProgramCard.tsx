import Image from "next/image";
import type { Program, ProgramTheme } from "@/content/types";
import { Icon } from "./ui/Icon";

const themes: Record<ProgramTheme, { panel: string; chip: string }> = {
  sage: {
    panel: "bg-[#d6dfca]",
    chip: "bg-[#5e7c66]/10 text-[#3e5e48]",
  },
  cream: {
    panel: "bg-[#ede2cc]",
    chip: "bg-[#8b6e4b]/10 text-[#73553a]",
  },
  stone: {
    panel: "bg-[#e6d9cb]",
    chip: "bg-[#7a6557]/10 text-[#5d4c40]",
  },
};

export function ProgramCard({ program }: { program: Program }) {
  const theme = themes[program.theme];

  return (
    <article className="card-lift group flex flex-col overflow-hidden rounded-[28px] border border-hairline bg-white">
      <div className={`relative flex h-52 items-center justify-center overflow-hidden ${theme.panel}`}>
        <div
          aria-hidden
          className="absolute -bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/35"
        />
        <div className="relative h-44 w-32">
          <Image
            src={program.illustration}
            alt=""
            fill
            sizes="160px"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <span className={`font-engravers absolute left-5 top-5 rounded-full px-3 py-1.5 text-[9px] ${theme.chip}`}>
          {program.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-7">
        <h3 className="font-recoleta text-[26px] leading-tight text-ink">
          {program.title}
        </h3>
        <p className="text-[14px] leading-[1.7] text-ink-soft">{program.text}</p>
        <a
          href={program.link.href}
          className="font-engravers mt-auto inline-flex items-center gap-2 text-[11px] text-sage-deep"
        >
          {program.link.label}
          <Icon name="arrow-right" className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}
