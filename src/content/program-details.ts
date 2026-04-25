import type { ProgramDetailContent } from "./types";

// NOTE: prices are placeholders pending Lucy's sign-off.

export const programDetails: Record<string, ProgramDetailContent> = {
  "strength-tone": {
    slug: "strength-tone",
    tag: "Build strength",
    theme: "cream",
    testimonialMatch: "Strength & Tone",
    hero: {
      eyebrow: "Strength & Tone",
      heading: {
        lead: "Lift with ",
        emphasis: "purpose",
        trail: ".",
      },
      description:
        "A twelve-week lift-focused plan to build lean muscle, reshape how you feel in your body, and fall in love with proper strength training.",
      illustration: "/assets/program_illustration_bg_removed_2.png",
      price: "£69",
      priceSuffix: "/ month",
      primaryCta: { label: "Start the programme", href: "/enquire" },
      secondaryCta: { label: "Book a free call", href: "/enquire" },
      highlights: [
        { icon: "calendar", label: "12 weeks" },
        { icon: "dumbbell", label: "4 sessions / week" },
        { icon: "check", label: "Full gym" },
      ],
    },
    structure: {
      section: {
        eyebrow: "How it's structured",
        heading: {
          lead: "Three phases,\n",
          emphasis: "twelve",
          trail: " weeks.",
        },
      },
      description:
        "A proven progression from foundations to full strength — so every week has a clear job.",
      phases: [
        {
          number: "01",
          title: "Foundations",
          text: "Weeks 1–4. Build technique, wake up key muscle groups, lay down baseline strength.",
        },
        {
          number: "02",
          title: "Build",
          text: "Weeks 5–8. Progressive overload in the big lifts with accessory work for balance and control.",
        },
        {
          number: "03",
          title: "Peak",
          text: "Weeks 9–12. Heavier loads, sharper form, and the lifts you didn't think you had in you.",
        },
      ],
    },
    ctaStrip: {
      text: "Not sure it's the right fit?",
      cta: { label: "Book a free call", href: "/enquire" },
    },
  },

  "womens-wellness": {
    slug: "womens-wellness",
    tag: "Women's health",
    theme: "stone",
    testimonialMatch: "Women's Wellness",
    hero: {
      eyebrow: "Women's Wellness",
      heading: {
        lead: "Train in sync with ",
        emphasis: "your",
        trail: " body.",
      },
      description:
        "Cycle-aware training, nutrition and recovery designed around your energy, balance and long-term vitality — not someone else's peak-week protocol.",
      illustration: "/assets/program_illustration_bg_removed_3.png",
      price: "£89",
      priceSuffix: "/ month",
      primaryCta: { label: "Join the programme", href: "/enquire" },
      secondaryCta: { label: "Book a free call", href: "/enquire" },
      highlights: [
        { icon: "calendar", label: "Rolling monthly" },
        { icon: "heart", label: "Cycle-aware" },
        { icon: "mindset", label: "Recovery-first" },
      ],
    },
    structure: {
      section: {
        eyebrow: "How it's structured",
        heading: {
          lead: "A month in\n",
          emphasis: "four",
          trail: " phases.",
        },
      },
      description:
        "Training that honours the rhythm of your cycle — so you're working with your body, not against it.",
      phases: [
        {
          number: "01",
          title: "Menstrual",
          text: "Lighter sessions, restorative movement, and permission to rest where you need it.",
        },
        {
          number: "02",
          title: "Follicular",
          text: "Energy climbs — we lean into strength, progression and the hardest sessions of the month.",
        },
        {
          number: "03",
          title: "Ovulatory",
          text: "Peak output week. Power work, confident lifting, space for something playful.",
        },
        {
          number: "04",
          title: "Luteal",
          text: "A gradual wind-down — steady strength, gentler conditioning, recovery priorities.",
        },
      ],
    },
    ctaStrip: {
      text: "Want to chat it through first?",
      cta: { label: "Book a free call", href: "/enquire" },
    },
  },

  foundations: {
    slug: "foundations",
    tag: "Beginner-friendly",
    theme: "cream",
    // No matching testimonial in success-stories yet — page will skip the testimonial block.
    hero: {
      eyebrow: "Foundations",
      heading: {
        lead: "Start strong.\n",
        emphasis: "Start",
        trail: " here.",
      },
      description:
        "An eight-week starter plan to build confidence in the gym, master the key lifts, and find a training rhythm that actually sticks.",
      illustration: "/assets/program_illustration_bg_removed_2.png",
      price: "£59",
      priceSuffix: "one-off",
      primaryCta: { label: "Start Foundations", href: "/enquire" },
      secondaryCta: { label: "Book a free call", href: "/enquire" },
      highlights: [
        { icon: "calendar", label: "8 weeks" },
        { icon: "dumbbell", label: "3 sessions / week" },
        { icon: "check", label: "Beginner-friendly" },
      ],
    },
    structure: {
      section: {
        eyebrow: "How it's structured",
        heading: {
          lead: "Two blocks,\n",
          emphasis: "eight",
          trail: " weeks.",
        },
      },
      description:
        "A gentle on-ramp followed by a confident build — so you finish knowing you belong in the gym.",
      phases: [
        {
          number: "01",
          title: "Orient",
          text: "Weeks 1–4. Learn the five key lifts with light loads, build movement confidence and a rhythm.",
        },
        {
          number: "02",
          title: "Build",
          text: "Weeks 5–8. Add load, start tracking progress, taste your first real strength wins.",
        },
      ],
    },
    ctaStrip: {
      text: "Not sure where to start?",
      cta: { label: "Book a free call", href: "/enquire" },
    },
  },

  "strong-after-baby": {
    slug: "strong-after-baby",
    tag: "Post-natal",
    theme: "stone",
    testimonialMatch: "Strong After Baby",
    hero: {
      eyebrow: "Strong After Baby",
      heading: {
        lead: "Rebuild,\n",
        emphasis: "gently",
        trail: ".",
      },
      description:
        "A phased return-to-training plan for new mums — rebuild the core, restore strength, and reclaim your energy on a timeline that respects what your body has just done.",
      illustration: "/assets/program_illustration_bg_removed_3.png",
      price: "£79",
      priceSuffix: "/ month",
      primaryCta: { label: "Join the programme", href: "/enquire" },
      secondaryCta: { label: "Book a free call", href: "/enquire" },
      highlights: [
        { icon: "calendar", label: "16 weeks" },
        { icon: "heart", label: "Post-natal certified" },
        { icon: "mindset", label: "Pelvic-floor aware" },
      ],
    },
    structure: {
      section: {
        eyebrow: "How it's structured",
        heading: {
          lead: "Four phases,\n",
          emphasis: "sixteen",
          trail: " weeks.",
        },
      },
      description:
        "A slow, honest return to training — paced for real post-natal recovery, not a hurry.",
      phases: [
        {
          number: "01",
          title: "Reconnect",
          text: "Weeks 1–4. Breathwork, pelvic floor, core reconnection. Gentle, essential, often skipped.",
        },
        {
          number: "02",
          title: "Restore",
          text: "Weeks 5–8. Low-load full-body movement patterns and a return to daily rhythm.",
        },
        {
          number: "03",
          title: "Rebuild",
          text: "Weeks 9–12. Real strength work introduced carefully — squats, hinges, presses, loaded.",
        },
        {
          number: "04",
          title: "Reclaim",
          text: "Weeks 13–16. Confident, progressive training. You'll feel like yourself again — stronger.",
        },
      ],
    },
    ctaStrip: {
      text: "New to post-natal training?",
      cta: { label: "Book a free call", href: "/enquire" },
    },
  },

  "at-home-strong": {
    slug: "at-home-strong",
    tag: "Self-led",
    theme: "sage",
    testimonialMatch: "At-Home Strong",
    hero: {
      eyebrow: "At-Home Strong",
      heading: {
        lead: "Minimal kit.\n",
        emphasis: "Maximum",
        trail: " results.",
      },
      description:
        "A progressive dumbbell programme you can do from your front room — smart, structured and deceptively hard. No barbell required.",
      illustration: "/assets/program_illustration_bg_removed_1.png",
      price: "£49",
      priceSuffix: "one-off",
      primaryCta: { label: "Start the programme", href: "/enquire" },
      secondaryCta: { label: "Book a free call", href: "/enquire" },
      highlights: [
        { icon: "calendar", label: "12 weeks" },
        { icon: "dumbbell", label: "Dumbbells only" },
        { icon: "check", label: "30-min sessions" },
      ],
    },
    structure: {
      section: {
        eyebrow: "How it's structured",
        heading: {
          lead: "Three blocks,\n",
          emphasis: "twelve",
          trail: " weeks.",
        },
      },
      description:
        "A progressive build you can run without ever setting foot in a gym.",
      phases: [
        {
          number: "01",
          title: "Groove",
          text: "Weeks 1–4. Movement patterns, tempo control, and a baseline you can build on.",
        },
        {
          number: "02",
          title: "Build",
          text: "Weeks 5–8. Smart progressions — more load, more reps, more intent per session.",
        },
        {
          number: "03",
          title: "Press",
          text: "Weeks 9–12. Dense, powerful sessions that squeeze everything from minimal kit.",
        },
      ],
    },
    ctaStrip: {
      text: "Not sure it's right for you?",
      cta: { label: "Book a free call", href: "/enquire" },
    },
  },
};
