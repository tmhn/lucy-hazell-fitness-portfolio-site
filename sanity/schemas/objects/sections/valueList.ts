import { defineArrayMember, defineField, defineType } from "sanity";

export const valueListSection = defineType({
  name: "valueList",
  title: "Value list",
  type: "object",
  description: "Numbered grid of title + text values.",
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
    defineField({
      name: "items",
      type: "array",
      of: [defineArrayMember({ type: "value" })],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Value list" }),
  },
});
