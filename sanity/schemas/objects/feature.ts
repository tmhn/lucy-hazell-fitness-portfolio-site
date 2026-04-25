import { defineField, defineType } from "sanity";

import { iconNameField } from "./iconName";

export const feature = defineType({
  name: "feature",
  title: "Feature",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", type: "text", rows: 3, validation: (r) => r.required() }),
    iconNameField(),
  ],
  preview: {
    select: { title: "title", subtitle: "text" },
  },
});
