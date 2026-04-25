import type { CoachingContent } from "./types";

export const coachingContent: CoachingContent = {
  hero: {
    eyebrow: "1:1 Coaching",
    heading: {
      lead: "Coaching that fits\n",
      emphasis: "your",
      trail: " life.",
    },
    description:
      "Fully personalised training, nutrition and mindset coaching — built around your goals, your schedule and your body. Delivered weekly in the Lucy app with unlimited support in between.",
    primaryCta: { label: "Book a free call", href: "/enquire" },
    secondaryCta: { label: "See what's included", href: "#included" },
    image: {
      src: "/assets/hero_trainer_3.png",
      alt: "Lucy coaching a 1:1 client",
    },
    highlights: [
      { icon: "dumbbell", label: "Weekly programme" },
      { icon: "apple", label: "Nutrition plan" },
      { icon: "calendar", label: "Unlimited messaging" },
    ],
  },

  included: {
    section: {
      eyebrow: "What's included",
      heading: {
        lead: "Everything you need\nto ",
        emphasis: "genuinely",
        trail: " change.",
      },
    },
    items: [
      {
        title: "A plan built for you",
        text: "A weekly programme designed around your goals, your equipment and the time you actually have.",
        icon: "dumbbell",
      },
      {
        title: "Realistic nutrition",
        text: "Simple nutrition guidance that works with your life — no weighing, no banned foods, no rebound.",
        icon: "apple",
      },
      {
        title: "Video demos for every lift",
        text: "Clear, technique-first demos inside the app so you never wonder if you're doing it right.",
        icon: "check",
      },
      {
        title: "Weekly check-ins",
        text: "A proper review each week — what's working, what isn't, and what we're changing next.",
        icon: "calendar",
      },
      {
        title: "Unlimited messaging",
        text: "Got a question at 6am before a lift? Message me. I'm in your corner the whole way through.",
        icon: "mindset",
      },
      {
        title: "Mindset coaching",
        text: "Habits, confidence and the quiet mental shifts that turn training into something you actually enjoy.",
        icon: "heart",
      },
    ],
  },

  howItWorks: {
    section: {
      eyebrow: "How it works",
      heading: {
        lead: "From first call to\n",
        emphasis: "first",
        trail: " lift.",
      },
    },
    description:
      "A simple, proven onboarding so you're training with purpose from week one — not still figuring it out in month three.",
    steps: [
      {
        number: "01",
        title: "Free call",
        text: "A relaxed 20-minute chat to make sure we're a good fit.",
      },
      {
        number: "02",
        title: "Deep-dive intake",
        text: "A thorough onboarding form so your plan is actually yours, not a template.",
      },
      {
        number: "03",
        title: "Your plan drops",
        text: "Training, nutrition and check-in schedule live in your app within 72 hours.",
      },
      {
        number: "04",
        title: "We get to work",
        text: "Weekly reviews, adjustments and support — from week one all the way through.",
      },
    ],
  },

  pricing: {
    section: {
      eyebrow: "Working together",
      heading: {
        lead: "Two ways to\n",
        emphasis: "train with me.",
      },
    },
    tiers: [
      {
        tag: "Most popular",
        name: "Signature 1:1",
        price: "£240",
        priceSuffix: "/ month",
        description:
          "Full coaching for women who want proper accountability and a plan that evolves with them.",
        features: [
          "Fully personalised training plan",
          "Nutrition coaching & check-ins",
          "Weekly written review",
          "Unlimited messaging support",
          "Monthly progress call",
          "3-month minimum",
        ],
        cta: { label: "Apply for 1:1", href: "/enquire" },
        theme: "sage",
        featured: true,
      },
      {
        name: "Self-led Programme",
        price: "£69",
        priceSuffix: "/ month",
        description:
          "A structured training programme you follow at your own pace, with monthly Q&A and progression updates.",
        features: [
          "12-week structured programme",
          "Video demos for every lift",
          "Monthly programme progression",
          "Group Q&A call each month",
          "Private community access",
          "Cancel anytime",
        ],
        cta: { label: "Join the programme", href: "/programs" },
        theme: "cream",
      },
    ],
    note: "Not sure which is right for you? Book a free call and I'll help you decide — no pressure either way.",
  },

  faqs: {
    section: {
      eyebrow: "Common questions",
      heading: {
        lead: "Quick answers to\nthe ",
        emphasis: "usual",
        trail: " asks.",
      },
    },
    items: [
      {
        question: "Do I need to be experienced in the gym?",
        answer:
          "Not at all. Most of my clients start somewhere between 'complete beginner' and 'I've done a few classes' — and that's exactly the point. We build confidence from day one.",
      },
      {
        question: "Do you coach in person or online?",
        answer:
          "Both. In-person sessions run in Yorkshire, online coaching is worldwide and delivered through my app. The plans and support are the same quality either way.",
      },
      {
        question: "How long do most clients stay?",
        answer:
          "The minimum commitment for 1:1 is three months because that's what it genuinely takes to see change. Most clients stay between nine and eighteen months.",
      },
      {
        question: "What if I'm post-natal or have an injury?",
        answer:
          "I'm certified in pre- and post-natal coaching and regularly work with women managing injuries or specific conditions. We'll account for all of it in your intake.",
      },
      {
        question: "Do you do meal plans?",
        answer:
          "No rigid meal plans — they never stick. We build flexible nutrition habits around the food you actually like, with structure where it helps and freedom where it matters.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Let's begin",
    heading: {
      lead: "Ready to train ",
      emphasis: "properly?",
    },
    description:
      "Book a free, no-pressure call. We'll talk through where you are, what you want, and whether working together is the right next step.",
    cta: { label: "Book your free call", href: "/enquire" },
    note: "Replies within 24 hours — usually a lot sooner.",
    image: {
      src: "/assets/lifestyle_image_3.png",
      alt: "Training session in a bright studio",
    },
  },
};
