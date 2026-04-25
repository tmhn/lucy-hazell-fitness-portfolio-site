import { defineArrayMember, defineField, defineType } from "sanity";

export const howItWorksSection = defineType({
  name: "howItWorks",
  title: "How it works",
  type: "object",
  fields: [
    defineField({
      name: "section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string", validation: (r) => r.required() }),
        defineField({ name: "heading", type: "splitHeading", validation: (r) => r.required() }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "steps",
      type: "array",
      of: [defineArrayMember({ type: "step" })],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: "How it works" }),
  },
});
