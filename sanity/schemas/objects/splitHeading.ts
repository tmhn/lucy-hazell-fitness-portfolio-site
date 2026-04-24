import { defineField, defineType } from "sanity";

export const splitHeading = defineType({
  name: "splitHeading",
  title: "Heading",
  type: "object",
  description:
    "Split the heading into a lead, an emphasis (styled), and optional trailing text.",
  fields: [
    defineField({ name: "lead", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "emphasis",
      type: "string",
      description: "The word(s) styled with the underline / accent.",
      validation: (r) => r.required(),
    }),
    defineField({ name: "trail", type: "string" }),
  ],
});
