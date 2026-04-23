import type { Feature } from "@/content/types";
import { Icon } from "./ui/Icon";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="flex flex-col gap-4 bg-white p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-mist text-sage-deep">
        <Icon name={feature.icon} className="h-5 w-5" />
      </div>
      <h3 className="font-recoleta text-[22px] leading-tight text-ink">
        {feature.title}
      </h3>
      <p className="text-[14px] leading-[1.65] text-ink-soft">{feature.text}</p>
    </article>
  );
}
