import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { ProgramsSection as ProgramsSectionData } from "@/content/sections";

export function ProgramsSection({ data }: { data: ProgramsSectionData }) {
  return (
    <section id={data.anchorId} className="mt-20">
      <SectionHeading
        section={data.section}
        className="mb-10"
        trailing={
          data.viewAll ? (
            <a
              href={data.viewAll.href}
              className="font-engravers self-center sm:self-start inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink"
            >
              {data.viewAll.label}
              <Icon name="arrow-right" className="h-3 w-3" />
            </a>
          ) : undefined
        }
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {data.items.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
    </section>
  );
}
