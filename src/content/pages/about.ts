import type { Page } from "../sections";

export const aboutPage: Page = {
  slug: "about",
  title: "About",
  sections: [
    {
      _type: "heroSection",
      eyebrow: "About Lucy",
      heading: {
        lead: "Training women to feel\nat home in their own ",
        emphasis: "strength.",
      },
      description:
        "I'm Lucy — a personal trainer, nutrition coach, and fierce advocate for women training in a way that actually feels good. No punishing plans, no shrinking goals. Just strong, capable, energised living.",
      primaryCta: { label: "Book a free call", href: "/enquire" },
      secondaryCta: { label: "Explore coaching", href: "/coaching" },
      image: {
        src: "/assets/hero_trainer_2.png",
        alt: "Lucy, personal trainer, in the gym",
      },
      imageFit: "cover",
      since: "Since 2018",
      statCard: { value: "7 yrs", label: "Coaching women", icon: "heart" },
    },
    {
      _type: "storySplit",
      eyebrow: "My story",
      heading: { lead: "Where this all ", emphasis: "started." },
      paragraphs: [
        "I didn't fall in love with training because of how I looked. I fell in love with it because of how it made me feel — strong, clear-headed, and like I was finally on my own team.",
        "For years I'd tried to out-diet, out-run and out-willpower my way into liking my body. It never worked. What changed everything was learning to lift, eat properly, and build habits that actually fit my life instead of fighting it.",
        "Since 2018 I've been coaching women through the same shift. From first-time lifters to mums coming back to themselves, my clients aren't chasing a smaller version of who they are — they're building the strongest one.",
      ],
      image: {
        src: "/assets/lifestyle_image_1.png",
        alt: "Lucy training a client",
      },
      pullQuote:
        "The goal was never to be smaller. It was to feel fully, unmistakably at home in my own body.",
    },
    {
      _type: "featureGrid",
      section: {
        eyebrow: "Qualifications",
        heading: {
          lead: "Properly trained.\nGenuinely ",
          emphasis: "evidence-led.",
        },
      },
      items: [
        {
          title: "Level 4 Personal Trainer",
          text: "Advanced certification in strength, programming and behaviour change.",
          icon: "dumbbell",
        },
        {
          title: "Nutrition Coach",
          text: "Precision-style nutrition coaching — practical, sustainable, non-restrictive.",
          icon: "apple",
        },
        {
          title: "Pre & Post-Natal",
          text: "Specialist training for pregnancy, postpartum and returning to the gym safely.",
          icon: "heart",
        },
        {
          title: "Women's Health",
          text: "Cycle-aware programming built around energy, recovery and long-term vitality.",
          icon: "mindset",
        },
      ],
    },
    {
      _type: "valueList",
      section: {
        eyebrow: "What I stand for",
        heading: {
          lead: "Four things I ",
          emphasis: "won't",
          trail: " compromise on.",
        },
      },
      items: [
        {
          title: "Evidence over trends",
          text: "No fads, no fear-mongering, no thirty-day quick fixes. Just what actually works, done consistently.",
        },
        {
          title: "Realistic, not rigid",
          text: "Plans that flex around your life, your cycle and your energy — not ones you have to perform for.",
        },
        {
          title: "Kind, not soft",
          text: "Warm coaching with real standards. I'll meet you where you are and then quietly raise the bar.",
        },
        {
          title: "For life, not a season",
          text: "The goal is a relationship with training and food you'll still have in ten years — not in ten weeks.",
        },
      ],
    },
    {
      _type: "finalCta",
      eyebrow: "Let's begin",
      heading: { lead: "Think we'd be a ", emphasis: "good fit?" },
      description:
        "Book a free, no-pressure call. We'll chat about where you are, where you'd like to go, and whether working together is the right next step.",
      cta: { label: "Book your free call", href: "/enquire" },
      note: "Replies within 24 hours — usually a lot sooner.",
      image: {
        src: "/assets/lifestyle_image_2.png",
        alt: "Lucy in a bright studio",
      },
    },
  ],
};
