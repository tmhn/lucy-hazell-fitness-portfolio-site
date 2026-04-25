import { defineField, defineType } from "sanity";

import { iconNameField } from "./iconName";

export const statCard = defineType({
  name: "statCard",
  title: "Stat card",
  type: "object",
  fields: [
    defineField({ name: "value", type: "string", validation: (r) => r.required() }),
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    iconNameField(),
  ],
  preview: {
    select: { title: "value", subtitle: "label" },
  },
});
