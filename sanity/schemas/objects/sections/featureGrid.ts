import { defineArrayMember, defineField, defineType } from "sanity";

export const featureGridSection = defineType({
  name: "featureGrid",
  title: "Feature grid",
  type: "object",
  description: "Four-up grid of icon/title/text cards. Used for features and credentials.",
  fields: [
    defineField({
      name: "section",
      title: "Section heading (optional)",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "heading", type: "splitHeading" }),
      ],
    }),
    defineField({
      name: "items",
      type: "array",
      of: [defineArrayMember({ type: "feature" })],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { count: "items.length" },
    prepare: ({ count }) => ({ title: "Feature grid", subtitle: `${count ?? 0} cards` }),
  },
});
