import { defineField, defineType } from "sanity";

export const trustStrip = defineType({
  name: "trustStrip",
  title: "Trust strip",
  type: "object",
  fields: [
    defineField({
      name: "avatars",
      title: "Avatar paths",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "textLead", title: "Text (lead)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "textStrong", title: "Text (strong)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "textTrail", title: "Text (trail)", type: "string", validation: (r) => r.required() }),
  ],
});
