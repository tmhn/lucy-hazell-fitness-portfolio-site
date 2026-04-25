import { defineField, defineType } from "sanity";

export const imageAsset = defineType({
  name: "imageAsset",
  title: "Image",
  type: "object",
  description:
    "Local asset path (e.g. /assets/hero.png) plus alt text. Will be upgraded to uploadable Sanity images in a later pass.",
  fields: [
    defineField({
      name: "src",
      title: "Path",
      type: "string",
      description: "Path under /public (e.g. /assets/hero_trainer_1.png).",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "alt", subtitle: "src" },
  },
});
