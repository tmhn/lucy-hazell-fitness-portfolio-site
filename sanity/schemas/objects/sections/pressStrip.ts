import { defineArrayMember, defineField, defineType } from "sanity";

export const pressStripSection = defineType({
  name: "pressStrip",
  title: "Press strip",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "logos",
      type: "array",
      of: [defineArrayMember({ type: "pressLogo" })],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Press strip" }),
  },
});
