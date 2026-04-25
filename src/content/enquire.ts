import type { EnquireContent } from "./types";

export const enquireContent: EnquireContent = {
  hero: {
    eyebrow: "Enquire",
    heading: {
      lead: "Tell me a little ",
      emphasis: "about you.",
    },
    description:
      "A few quick questions so I can understand where you're at and how I can help. Takes about a minute — and there's zero pressure either way.",
  },

  expect: {
    section: {
      eyebrow: "What happens next",
      heading: {
        lead: "Real reply.\n",
        emphasis: "Real",
        trail: " human.",
      },
    },
    items: [
      {
        number: "01",
        title: "Send your enquiry",
        text: "A few questions about your goals and where you are right now.",
      },
      {
        number: "02",
        title: "I read every one",
        text: "Personally — usually within 24 hours, often a lot sooner.",
      },
      {
        number: "03",
        title: "We have a chat",
        text: "If we're a good fit I'll suggest a relaxed 20-minute call to talk it through.",
      },
      {
        number: "04",
        title: "You decide",
        text: "Zero pressure either way. You take as long as you need.",
      },
    ],
  },

  trust: {
    avatars: [
      "/assets/customer_avatar_1.png",
      "/assets/customer_avatar_2.png",
      "/assets/customer_avatar_3.png",
    ],
    textLead: "Joining ",
    textStrong: "500+ women",
    textTrail: " already training with Lucy.",
  },

  form: {
    eyebrow: "Quick enquiry",
    title: "A few questions.",
    prompt: "Roughly a minute. You can edit anything before sending.",
    nextLabel: "Continue",
    backLabel: "Back",
    submitLabel: "Send enquiry",
    submittingLabel: "Sending…",
    steps: [
      {
        kind: "single",
        field: "goal",
        eyebrow: "Step 1 of 4",
        title: "What are you looking for?",
        prompt: "Pick the one that fits best — we can refine later.",
        options: [
          {
            key: "1to1",
            title: "1:1 Coaching",
            description:
              "Fully personalised training, nutrition and mindset support.",
            icon: "heart",
          },
          {
            key: "strength",
            title: "Strength & Tone",
            description:
              "A twelve-week lift-focused plan to build lean muscle.",
            icon: "dumbbell",
          },
          {
            key: "wellness",
            title: "Women's Wellness",
            description:
              "Cycle-aware training, nutrition and recovery for long-term vitality.",
            icon: "apple",
          },
          {
            key: "unsure",
            title: "I'm not sure yet",
            description:
              "Help me figure out which approach fits where I'm at.",
            icon: "mindset",
          },
        ],
      },
      {
        kind: "multi",
        field: "priorities",
        eyebrow: "Step 2 of 4",
        title: "What matters most right now?",
        prompt: "Pick anything that resonates — choose as many as you like.",
        helper: "Choose one or more",
        options: [
          {
            key: "strength",
            title: "Build strength",
            description: "Feel powerful and love how my body moves.",
            icon: "dumbbell",
          },
          {
            key: "weight",
            title: "Lose weight, sustainably",
            description: "Without faddy diets or six-am self-loathing.",
            icon: "apple",
          },
          {
            key: "energy",
            title: "More energy and better habits",
            description: "Real routines that fit my actual week.",
            icon: "calendar",
          },
          {
            key: "confidence",
            title: "Confidence in my body",
            description: "Feel at home in how I look and move.",
            icon: "star",
          },
          {
            key: "cycle",
            title: "Cycle-aware training",
            description: "Train with my hormones, not against them.",
            icon: "heart",
          },
        ],
      },
      {
        kind: "single",
        field: "activityLevel",
        eyebrow: "Step 3 of 4",
        title: "Where are you starting from?",
        prompt: "Honest answers help me tailor the right next step.",
        options: [
          {
            key: "sedentary",
            title: "Mostly sedentary",
            description: "Not much movement in my week right now.",
            icon: "mindset",
          },
          {
            key: "occasional",
            title: "A bit here and there",
            description: "I move when I can, but it's not consistent.",
            icon: "calendar",
          },
          {
            key: "regular",
            title: "Regularly active",
            description: "I train two-to-four times a week already.",
            icon: "dumbbell",
          },
          {
            key: "very-active",
            title: "Very active",
            description: "I train most days and want to level up.",
            icon: "star",
          },
        ],
      },
      {
        kind: "details",
        eyebrow: "Step 4 of 4",
        title: "How can Lucy reach you?",
        prompt: "These details only get used to reply to your enquiry.",
        contactMethods: [
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
          { key: "either", label: "Either is fine" },
        ],
      },
    ],
    success: {
      eyebrow: "Thanks!",
      title: "Your enquiry is on its way.",
      description:
        "Lucy reads every enquiry personally and will reply within 24 hours — usually a lot sooner.",
      followUpLabel: "Back to home",
    },
    error: {
      title: "Something went wrong sending that.",
      description:
        "Please try again in a moment, or email hello@lucyhazellfitness.com directly.",
    },
  },
};
