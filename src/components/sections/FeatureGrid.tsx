import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FeatureGridSection } from "@/content/sections";

export function FeatureGrid({ data }: { data: FeatureGridSection }) {
  const hasHeading =
    data.section?.eyebrow || data.section?.heading?.lead;

  return (
    <section className="mt-12">
      {hasHeading && data.section && (
        <SectionHeading section={data.section} className="mb-10" />
      )}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {data.items.map((item) => (
          <FeatureCard key={item.title} feature={item} />
        ))}
      </div>
    </section>
  );
}
