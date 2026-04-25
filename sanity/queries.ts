import { client } from "./client";
import type { Link } from "@/content/types";
import type { Page } from "@/content/sections";

export type SiteImage = { src: string; alt: string };

export type SiteSettings = {
  brand: { name: string; tagline: string };
  nav: Link[];
  primaryCta: Link;
  menuPhoto: SiteImage | null;
  footer: {
    links: Link[];
    copyright: string;
  };
};

const splitHeadingProjection = `{ lead, emphasis, trail }`;
const linkProjection = `{ label, href }`;
const imageProjection = `{ src, alt }`;
const sectionHeaderProjection = `{ eyebrow, "heading": heading${splitHeadingProjection} }`;

const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  brand,
  "nav": nav[]${linkProjection},
  "primaryCta": primaryCta${linkProjection},
  "menuPhoto": menuPhoto${imageProjection},
  footer{
    "links": links[]${linkProjection},
    copyright
  }
}`;

const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  seoTitle,
  seoDescription,
  sections[]{
    _type,
    _key,
    _type == "heroSection" => {
      eyebrow,
      "heading": heading${splitHeadingProjection},
      description,
      "primaryCta": primaryCta${linkProjection},
      "secondaryCta": secondaryCta${linkProjection},
      "image": image${imageProjection},
      imageFit,
      since,
      statCard{ value, label, icon },
      badge{ icon, prefix, text },
      trust{ avatars, textLead, textStrong, textTrail }
    },
    _type == "pressStrip" => {
      eyebrow,
      "logos": logos[]{ name }
    },
    _type == "featureGrid" => {
      "section": section${sectionHeaderProjection},
      "items": items[]{ title, text, icon }
    },
    _type == "programsSection" => {
      anchorId,
      "section": section${sectionHeaderProjection},
      "viewAll": viewAll${linkProjection},
      "items": items[]{
        tag, title, text, illustration,
        "link": link${linkProjection},
        theme
      }
    },
    _type == "howItWorks" => {
      "section": section${sectionHeaderProjection},
      description,
      "steps": steps[]{ number, title, text }
    },
    _type == "storySplit" => {
      eyebrow,
      "heading": heading${splitHeadingProjection},
      paragraphs,
      "image": image${imageProjection},
      pullQuote
    },
    _type == "valueList" => {
      "section": section${sectionHeaderProjection},
      "items": items[]{ title, text }
    },
    _type == "resultsBlock" => {
      eyebrow,
      "heading": heading${splitHeadingProjection},
      "stats": stats[]{ value, label },
      testimonial{ quote, authorName, authorRole, avatar }
    },
    _type == "finalCta" => {
      anchorId,
      eyebrow,
      "heading": heading${splitHeadingProjection},
      description,
      "cta": cta${linkProjection},
      note,
      "image": image${imageProjection}
    }
  }
}`;

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch<SiteSettings | null>(
    siteSettingsQuery,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  return client.fetch<Page | null>(
    pageQuery,
    { slug },
    { next: { revalidate: 60 } },
  );
}
