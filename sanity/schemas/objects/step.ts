import { defineField, defineType } from "sanity";

export const step = defineType({
  name: "step",
  title: "Step",
  type: "object",
  fields: [
    defineField({
      name: "number",
      type: "string",
      description: 'e.g. "01"',
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", type: "text", rows: 2, validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "title", subtitle: "number" },
  },
});
