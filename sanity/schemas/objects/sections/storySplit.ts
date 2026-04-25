import { defineArrayMember, defineField, defineType } from "sanity";

export const storySplitSection = defineType({
  name: "storySplit",
  title: "Story split",
  type: "object",
  description: "Image on one side, paragraphs + pull-quote on the other.",
  fields: [
    defineField({ name: "eyebrow", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heading", type: "splitHeading", validation: (r) => r.required() }),
    defineField({
      name: "paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 3 })],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "image", type: "imageAsset", validation: (r) => r.required() }),
    defineField({ name: "pullQuote", type: "text", rows: 3, validation: (r) => r.required() }),
  ],
  preview: {
    prepare: () => ({ title: "Story split" }),
  },
});
