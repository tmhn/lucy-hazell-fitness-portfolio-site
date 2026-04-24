import { defineField } from "sanity";

export const ICON_NAMES = [
  "dumbbell",
  "apple",
  "mindset",
  "calendar",
  "heart",
  "check",
  "arrow-right",
  "star",
  "quote",
] as const;

export const iconNameField = () =>
  defineField({
    name: "icon",
    type: "string",
    options: {
      list: ICON_NAMES.map((name) => ({ title: name, value: name })),
      layout: "dropdown",
    },
    validation: (r) => r.required(),
  });
