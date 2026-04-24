import Image from "next/image";
import type { Program, ProgramTheme } from "@/content/types";
import { Icon } from "./ui/Icon";

const themes: Record<
  ProgramTheme,
  { panel: string; chip: string; pedestal: string; halo: string }
> = {
  sage: {
    panel: "bg-[#d6dfca]",
    chip: "bg-[#5e7c66]/10 text-[#3e5e48]",
    pedestal: "bg-[#e8eedd]",
    halo: "bg-white/35",
  },
  cream: {
    panel: "bg-[#ede2cc]",
    chip: "bg-[#8b6e4b]/10 text-[#73553a]",
    pedestal: "bg-[#f7ecd6]",
    halo: "bg-white/40",
  },
  stone: {
    panel: "bg-[#e6d9cb]",
    chip: "bg-[#7a6557]/10 text-[#5d4c40]",
    pedestal: "bg-[#f2e6d7]",
    halo: "bg-white/40",
  },
};

export function ProgramCard({ program }: { program: Program }) {
  const theme = themes[program.theme];

  return (
    <article className="card-lift group flex flex-col overflow-hidden rounded-[28px] border border-hairline bg-white">
      <div className={`relative h-60 overflow-hidden ${theme.panel}`}>
        <div
          aria-hidden
          className={`absolute left-1/2 top-8 h-44 w-44 -translate-x-1/2 rounded-full blur-2xl ${theme.halo}`}
        />

        <div
          aria-hidden
          className={`absolute bottom-7 left-1/2 h-11 w-[74%] -translate-x-1/2 rounded-[50%] ${theme.pedestal}`}
        />

        <div
          aria-hidden
          className="absolute bottom-[30px] left-1/2 h-[10px] w-[52%] -translate-x-1/2 rounded-[50%] bg-ink/25 blur-[10px] transition-all duration-500 group-hover:w-[60%] group-hover:bg-ink/18"
        />

        <div className="absolute inset-x-0 bottom-[28px] flex justify-center">
          <div className="relative h-44 w-36">
            <Image
              src={program.illustration}
              alt=""
              fill
              sizes="160px"
              className="object-contain object-bottom drop-shadow-[0_8px_10px_rgba(28,44,68,0.08)] transition-transform duration-500 group-hover:-translate-y-1.5"
            />
          </div>
        </div>

        <span
          className={`font-engravers absolute left-5 top-5 rounded-full px-3 py-1.5 text-[9px] ${theme.chip}`}
        >
          {program.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-7">
        <h3 className="font-recoleta text-[26px] leading-tight text-ink">
          {program.title}
        </h3>
        <p className="text-[14px] leading-[1.7] text-ink-soft">
          {program.text}
        </p>
        <a
          href={program.link.href}
          className="font-engravers mt-auto justify-end inline-flex items-center gap-2 text-sm text-sage-deep"
        >
          {program.link.label}
          <Icon name="arrow-right" className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}
