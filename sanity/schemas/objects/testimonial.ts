import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "authorName", title: "Author name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "authorRole", title: "Author role", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "avatar",
      title: "Avatar path",
      type: "string",
      description: "Path under /public (e.g. /assets/customer_avatar_1.png).",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "authorName", subtitle: "authorRole" },
  },
});
