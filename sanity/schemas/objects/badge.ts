import { defineField, defineType } from "sanity";

import { iconNameField } from "./iconName";

export const badge = defineType({
  name: "badge",
  title: "Badge",
  type: "object",
  fields: [
    iconNameField(),
    defineField({ name: "prefix", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", type: "string", validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "prefix", subtitle: "text" },
  },
});
