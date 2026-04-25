import { defineField, defineType } from "sanity";

export const PROGRAM_THEMES = ["sage", "cream", "stone"] as const;

export const programCard = defineType({
  name: "programCard",
  title: "Program card",
  type: "object",
  fields: [
    defineField({ name: "tag", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "illustration",
      title: "Illustration path",
      type: "string",
      description: "Path under /public (e.g. /assets/program_illustration_1.png).",
      validation: (r) => r.required(),
    }),
    defineField({ name: "link", type: "link", validation: (r) => r.required() }),
    defineField({
      name: "theme",
      type: "string",
      options: {
        list: PROGRAM_THEMES.map((t) => ({ title: t, value: t })),
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "tag" },
  },
});
