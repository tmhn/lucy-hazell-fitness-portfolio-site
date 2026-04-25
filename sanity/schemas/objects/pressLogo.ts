import { defineField, defineType } from "sanity";

export const pressLogo = defineType({
  name: "pressLogo",
  title: "Press logo",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
  ],
});
