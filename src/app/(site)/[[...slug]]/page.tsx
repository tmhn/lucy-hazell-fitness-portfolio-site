import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolvePage } from "@/content/resolve";
import { SectionRenderer } from "@/components/sections/SectionRenderer";

type Params = Promise<{ slug?: string[] }>;

function slugFromParams(slug: string[] | undefined): string {
  if (!slug || slug.length === 0) return "home";
  return slug.join("/");
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await resolvePage(slugFromParams(slug));
  if (!page) return {};
  return {
    title: page.seoTitle ?? page.title,
    description: page.seoDescription,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const page = await resolvePage(slugFromParams(slug));
  if (!page) notFound();

  return (
    <div>
      {page.sections.map((section, i) => (
        <SectionRenderer key={section._key ?? i} section={section} />
      ))}
    </div>
  );
}
