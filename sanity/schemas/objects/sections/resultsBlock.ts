import { defineArrayMember, defineField, defineType } from "sanity";

export const resultsBlockSection = defineType({
  name: "resultsBlock",
  title: "Results + testimonial",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heading", type: "splitHeading", validation: (r) => r.required() }),
    defineField({
      name: "stats",
      type: "array",
      of: [defineArrayMember({ type: "stat" })],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "testimonial", type: "testimonial", validation: (r) => r.required() }),
  ],
  preview: {
    prepare: () => ({ title: "Results + testimonial" }),
  },
});
