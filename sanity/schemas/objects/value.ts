import { defineField, defineType } from "sanity";

export const value = defineType({
  name: "value",
  title: "Value",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", type: "text", rows: 3, validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "title", subtitle: "text" },
  },
});
