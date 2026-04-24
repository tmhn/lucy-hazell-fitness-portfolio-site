import type { HomeContent } from "./types";

export const homeContent: HomeContent = {
  brand: {
    name: "LUCY HAZELL",
    tagline: "Personal Trainer",
  },
  nav: [
    { label: "Programs", href: "#programs" },
    { label: "Coaching", href: "#" },
    { label: "About", href: "#" },
    { label: "Success Stories", href: "#" },
    { label: "Resources", href: "#" },
  ],
  primaryCta: { label: "Book a Free Call", href: "#contact" },

  hero: {
    eyebrow: "Personal Training & Coaching for Women",
    heading: {
      lead: "Stronger in body.\nStronger in ",
      emphasis: "life.",
    },
    description:
      "Personalised training, nutrition and mindset support — so you feel confident, energised and genuinely unstoppable. Not for a month. For life.",
    primaryCta: { label: "Book a Free Call", href: "#contact" },
    secondaryCta: { label: "Explore Programs", href: "#programs" },
    trust: {
      avatars: [
        "/assets/customer_avatar_1.png",
        "/assets/customer_avatar_2.png",
        "/assets/customer_avatar_3.png",
      ],
      textLead: "Trusted by ",
      textStrong: "500+ women",
      textTrail: " in Yorkshire",
    },
    image: {
      src: "/assets/hero_trainer_1_bg_removed.png",
      alt: "Lucy, personal trainer, smiling with hands on hips",
    },
    since: "Since 2018",
    statCard: { value: "500+", label: "Women transformed", icon: "heart" },
    badge: { icon: "check", prefix: "Level 4", text: "PT & Nutrition Coach" },
  },

  press: {
    eyebrow: "As featured in",
    logos: [
      { name: "Women's Health" },
      { name: "fit &well" },
      { name: "Well+Good" },
      { name: "healthline" },
      { name: "Mind Body Green" },
    ],
  },

  features: [
    {
      title: "Personalised Workouts",
      text: "Training plans built around your body, your goals, and the way you actually live your week.",
      icon: "dumbbell",
    },
    {
      title: "Nutrition Guidance",
      text: "Simple, realistic nutrition that fits real life and quietly compounds into progress.",
      icon: "apple",
    },
    {
      title: "Mindset Support",
      text: "Build confidence and habits so training becomes something you actually want to keep doing.",
      icon: "mindset",
    },
    {
      title: "Ongoing Support",
      text: "Weekly check-ins and unlimited messaging so you are never figuring it out alone.",
      icon: "calendar",
    },
  ],

  programs: {
    section: {
      eyebrow: "Programs",
      heading: {
        lead: "A programme for ",
        emphasis: "every goal.",
      },
    },
    viewAll: { label: "View all programs", href: "#" },
    items: [
      {
        tag: "Signature",
        title: "1:1 Coaching",
        text: "Fully personalised training, nutrition and mindset coaching, built around your life and reviewed weekly.",
        illustration: "/assets/program_illustration_bg_removed_1.png",
        link: { label: "Learn more", href: "#" },
        theme: "sage",
      },
      {
        tag: "Build strength",
        title: "Strength & Tone",
        text: "A twelve-week lift-focused plan to build lean muscle, feel powerful, and love how your body moves.",
        illustration: "/assets/program_illustration_bg_removed_2.png",
        link: { label: "Learn more", href: "#" },
        theme: "cream",
      },
      {
        tag: "Women's health",
        title: "Women's Wellness",
        text: "Cycle-aware training, nutrition and recovery designed around energy, balance and long-term vitality.",
        illustration: "/assets/program_illustration_bg_removed_3.png",
        link: { label: "Learn more", href: "#" },
        theme: "stone",
      },
    ],
  },

  howItWorks: {
    section: {
      eyebrow: "How it works",
      heading: {
        lead: "Simple steps.\n",
        emphasis: "Real",
        trail: " results.",
      },
    },
    description:
      "A clear, proven process to help you become your strongest self — without the guesswork, the faddy diets, or the six-am self-loathing.",
    steps: [
      {
        number: "01",
        title: "Book a Call",
        text: "A relaxed chat about where you are and what you want.",
      },
      {
        number: "02",
        title: "Your Plan",
        text: "A tailored programme, delivered in your Lucy app.",
      },
      {
        number: "03",
        title: "Train & Track",
        text: "Follow video demos with weekly check-ins as strength, energy and habits start to shift.",
      },
      {
        number: "04",
        title: "Feel Amazing",
        text: "Move through life lighter, stronger and properly yourself.",
      },
    ],
  },

  results: {
    eyebrow: "Real women. Real results.",
    heading: {
      lead: "Stronger together.\n",
      emphasis: "Real",
      trail: " transformations.",
    },
    stats: [
      { value: "95%", label: "feel more confident" },
      { value: "87%", label: "reach their goal" },
      { value: "500+", label: "women coached" },
    ],
    testimonial: {
      quote:
        "Lucy rebuilt my relationship with food and training from the ground up. I'm stronger, calmer, and the most at-home in my body I have ever been.",
      authorName: "Emma R.",
      authorRole: "1:1 Coaching client — 9 months",
      avatar: "/assets/customer_avatar_1.png",
    },
  },

  finalCta: {
    eyebrow: "Let's begin",
    heading: {
      lead: "Ready to become your ",
      emphasis: "strongest",
      trail: " self?",
    },
    description:
      "Let's build a plan that fits your goals and your life. No pressure, no sales pitch — just a friendly chat about where you are and where you'd like to go.",
    cta: { label: "Book your free call", href: "#" },
    note: "Replies within 24 hours — usually a lot sooner.",
    image: {
      src: "/assets/wellness_still_life.png",
      alt: "Water bottle, yoga mat and plant",
    },
  },

  footer: {
    links: [
      { label: "Programs", href: "#programs" },
      { label: "Coaching", href: "#" },
      { label: "About", href: "#" },
      { label: "Success Stories", href: "#" },
      { label: "Resources", href: "#" },
    ],
    copyright: "Lucy Hazell Fitness",
  },
};
