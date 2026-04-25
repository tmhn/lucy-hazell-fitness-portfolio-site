import type { ProgramsContent } from "./types";

export const programsContent: ProgramsContent = {
  hero: {
    eyebrow: "Programs",
    heading: {
      lead: "A programme for\n",
      emphasis: "every",
      trail: " goal.",
    },
    description:
      "Whether you want proper 1:1 coaching or a structured plan to follow at your own pace, there's something here built around how you actually live.",
    primaryCta: { label: "Book a free call", href: "/enquire" },
    secondaryCta: { label: "Compare options", href: "#compare" },
    stats: [
      { value: "6", label: "programmes to choose from" },
      { value: "500+", label: "women trained since 2018" },
      { value: "87%", label: "reach their goal" },
    ],
  },

  catalogue: {
    section: {
      eyebrow: "All programmes",
      heading: {
        lead: "Find the one ",
        emphasis: "built",
        trail: "\nfor where you are.",
      },
    },
    items: [
      {
        tag: "Signature",
        title: "1:1 Coaching",
        text: "Fully personalised training, nutrition and mindset coaching, built around your life and reviewed weekly.",
        illustration: "/assets/program_illustration_bg_removed_1.png",
        link: { label: "Learn more", href: "/coaching" },
        theme: "sage",
      },
      {
        tag: "Build strength",
        title: "Strength & Tone",
        text: "A twelve-week lift-focused plan to build lean muscle, feel powerful, and love how your body moves.",
        illustration: "/assets/program_illustration_bg_removed_2.png",
        link: { label: "Learn more", href: "/programs/strength-tone" },
        theme: "cream",
      },
      {
        tag: "Women's health",
        title: "Women's Wellness",
        text: "Cycle-aware training, nutrition and recovery designed around energy, balance and long-term vitality.",
        illustration: "/assets/program_illustration_bg_removed_3.png",
        link: { label: "Learn more", href: "/programs/womens-wellness" },
        theme: "stone",
      },
      {
        tag: "Beginner-friendly",
        title: "Foundations",
        text: "An eight-week starter plan to build confidence in the gym, master the key lifts and find your rhythm.",
        illustration: "/assets/program_illustration_bg_removed_2.png",
        link: { label: "Learn more", href: "/programs/foundations" },
        theme: "cream",
      },
      {
        tag: "Post-natal",
        title: "Strong After Baby",
        text: "A phased return-to-training plan for new mums — rebuild the core, restore strength, reclaim your energy.",
        illustration: "/assets/program_illustration_bg_removed_3.png",
        link: { label: "Learn more", href: "/programs/strong-after-baby" },
        theme: "stone",
      },
      {
        tag: "Self-led",
        title: "At-Home Strong",
        text: "A progressive dumbbell programme you can do from your front room — minimal kit, maximum results.",
        illustration: "/assets/program_illustration_bg_removed_1.png",
        link: { label: "Learn more", href: "/programs/at-home-strong" },
        theme: "sage",
      },
    ],
  },

  compare: {
    section: {
      eyebrow: "Which is right for me?",
      heading: {
        lead: "Three ways\nto ",
        emphasis: "get started.",
      },
    },
    personas: [
      {
        title: "I want proper accountability",
        text: "You've tried plans on your own and they fizzle out. You want someone in your corner weekly — adjusting, pushing, reviewing.",
        bestFor: "Best fit: 1:1 Coaching",
        icon: "heart",
      },
      {
        title: "I want structure I can follow",
        text: "You're self-motivated and enjoy a plan. You want clear progression, great demos and a community — without weekly 1:1 time.",
        bestFor: "Best fit: Strength & Tone or Foundations",
        icon: "dumbbell",
      },
      {
        title: "I'm in a specific season",
        text: "Post-natal, returning after injury, training around your cycle, or short on kit at home. You need a plan built for that reality.",
        bestFor: "Best fit: Wellness, Strong After Baby or At-Home Strong",
        icon: "mindset",
      },
    ],
  },

  finalCta: {
    eyebrow: "Still deciding?",
    heading: {
      lead: "Not sure which\nis ",
      emphasis: "right",
      trail: " for you?",
    },
    description:
      "Book a free call and I'll help you pick — honestly, with zero pressure. The right programme is the one you'll actually stick to.",
    cta: { label: "Book your free call", href: "/enquire" },
    note: "Replies within 24 hours — usually a lot sooner.",
    image: {
      src: "/assets/wellness_still_life.png",
      alt: "Water bottle, yoga mat and plant",
    },
  },
};
