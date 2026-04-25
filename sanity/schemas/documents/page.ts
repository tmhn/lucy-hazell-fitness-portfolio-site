import { defineArrayMember, defineField, defineType } from "sanity";

const SECTION_TYPES = [
  "heroSection",
  "pressStrip",
  "featureGrid",
  "programsSection",
  "howItWorks",
  "storySplit",
  "valueList",
  "resultsBlock",
  "finalCta",
] as const;

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      description:
        "URL path. Use 'home' for the homepage (it routes to /), otherwise the path segment (e.g. 'about', 'programs/strength').",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title (optional)",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description (optional)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sections",
      type: "array",
      of: SECTION_TYPES.map((type) => defineArrayMember({ type })),
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle === "home" ? "/" : `/${subtitle ?? ""}`,
    }),
  },
});
