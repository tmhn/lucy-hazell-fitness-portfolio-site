import { defineField, defineType } from "sanity";

export const finalCtaSection = defineType({
  name: "finalCta",
  title: "Final CTA",
  type: "object",
  fields: [
    defineField({
      name: "anchorId",
      title: "Anchor ID (optional)",
      type: "string",
      description: "If set, becomes the section's id attribute (e.g. 'contact').",
    }),
    defineField({ name: "eyebrow", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heading", type: "splitHeading", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "cta", type: "link", validation: (r) => r.required() }),
    defineField({ name: "note", type: "string", validation: (r) => r.required() }),
    defineField({ name: "image", type: "imageAsset", validation: (r) => r.required() }),
  ],
  preview: {
    prepare: () => ({ title: "Final CTA" }),
  },
});
