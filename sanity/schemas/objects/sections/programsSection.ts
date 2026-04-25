import { defineArrayMember, defineField, defineType } from "sanity";

export const programsSection = defineType({
  name: "programsSection",
  title: "Programs section",
  type: "object",
  fields: [
    defineField({
      name: "anchorId",
      title: "Anchor ID (optional)",
      type: "string",
      description: "If set, becomes the section's id attribute (e.g. 'programs' for #programs links).",
    }),
    defineField({
      name: "section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string", validation: (r) => r.required() }),
        defineField({ name: "heading", type: "splitHeading", validation: (r) => r.required() }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({ name: "viewAll", type: "link" }),
    defineField({
      name: "items",
      type: "array",
      of: [defineArrayMember({ type: "programCard" })],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Programs section" }),
  },
});
