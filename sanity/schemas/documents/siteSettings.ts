import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "brand",
      type: "object",
      fields: [
        defineField({ name: "name", type: "string", validation: (r) => r.required() }),
        defineField({ name: "tagline", type: "string", validation: (r) => r.required() }),
      ],
    }),
    defineField({
      name: "nav",
      title: "Primary navigation",
      type: "array",
      of: [defineArrayMember({ type: "link" })],
    }),
    defineField({
      name: "primaryCta",
      title: "Header CTA",
      type: "link",
    }),
    defineField({
      name: "menuPhoto",
      title: "Mobile menu photo",
      type: "imageAsset",
      description:
        "Photo shown inside the mobile nav drawer (typically Lucy's hero portrait).",
    }),
    defineField({
      name: "footer",
      type: "object",
      fields: [
        defineField({
          name: "links",
          type: "array",
          of: [defineArrayMember({ type: "link" })],
        }),
        defineField({ name: "copyright", type: "string" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
