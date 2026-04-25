import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heading", type: "splitHeading", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "primaryCta", type: "link", validation: (r) => r.required() }),
    defineField({ name: "secondaryCta", type: "link" }),
    defineField({ name: "image", type: "imageAsset", validation: (r) => r.required() }),
    defineField({
      name: "imageFit",
      title: "Image fit",
      type: "string",
      options: {
        list: [
          { title: "Cover (full bleed photo)", value: "cover" },
          { title: "Contain bottom (transparent PNG)", value: "containBottom" },
        ],
        layout: "radio",
      },
      initialValue: "cover",
    }),
    defineField({ name: "since", type: "string" }),
    defineField({ name: "statCard", type: "statCard" }),
    defineField({ name: "badge", type: "badge" }),
    defineField({ name: "trust", type: "trustStrip" }),
  ],
  preview: {
    select: { title: "heading.lead", subtitle: "eyebrow" },
    prepare: ({ title, subtitle }) => ({
      title: `Hero: ${title ?? ""}`.trim(),
      subtitle,
    }),
  },
});
