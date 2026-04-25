import type { SuccessStoriesContent } from "./types";

export const successStoriesContent: SuccessStoriesContent = {
  hero: {
    eyebrow: "Success stories",
    heading: {
      lead: "Real women.\nReal ",
      emphasis: "results.",
    },
    description:
      "Every woman here started somewhere different — and every one of them stayed the course. These are their words, their wins, and a small window into what's possible when you train properly.",
    primaryCta: { label: "Book a free call", href: "/enquire" },
    secondaryCta: { label: "Read the stories", href: "#stories" },
  },

  stats: {
    eyebrow: "Results that hold up",
    items: [
      { value: "500+", label: "women coached" },
      { value: "95%", label: "feel more confident" },
      { value: "87%", label: "reach their goal" },
      { value: "14 mo", label: "average stay" },
    ],
  },

  featured: {
    section: {
      eyebrow: "Featured story",
      heading: {
        lead: "Emma's ",
        emphasis: "9-month",
        trail: "\ntransformation.",
      },
    },
    story: {
      tag: "1:1 Coaching",
      name: "Emma R.",
      programme: "Signature 1:1 — 9 months",
      headline: "From chronic under-eating to confident lifting.",
      paragraphs: [
        "Emma came to me after years of cycling between restrictive dieting and feeling exhausted. She was training hard but eating like someone half her size — and wondering why nothing was changing.",
        "We spent the first three months rebuilding the basics: eating enough, lifting progressively, and letting her body trust food again. By month six she was deadlifting her bodyweight and sleeping properly for the first time in years.",
        "Nine months in, she's stronger, calmer, and — her words — 'the most at-home in my body I've ever been.' She still trains with me now, just at a lighter touch.",
      ],
      pullQuote:
        "Lucy rebuilt my relationship with food and training from the ground up. I'm stronger, calmer, and the most at-home in my body I've ever been.",
      stats: [
        { value: "+12kg", label: "deadlift in 6 months" },
        { value: "-3 sizes", label: "clothing" },
        { value: "8 hrs", label: "sleep a night (first time)" },
      ],
      image: {
        src: "/assets/lifestyle_image_1.png",
        alt: "Emma training",
      },
    },
  },

  grid: {
    section: {
      eyebrow: "More stories",
      heading: {
        lead: "In their own ",
        emphasis: "words.",
      },
    },
    items: [
      {
        quote:
          "I've never been stronger and I've never been calmer. Turns out those two things go together.",
        authorName: "Sarah M.",
        authorRole: "Signature 1:1 — 12 months",
        avatar: "/assets/customer_avatar_1.png",
        result: "First pull-up",
        programme: "1:1 Coaching",
      },
      {
        quote:
          "I stopped treating my body like a project to fix. Lucy helped me train because I like it, not because I owe it.",
        authorName: "Priya K.",
        authorRole: "Strength & Tone — 6 months",
        avatar: "/assets/customer_avatar_2.png",
        result: "+8kg lean mass",
        programme: "Strength & Tone",
      },
      {
        quote:
          "Four months after my son was born I thought I'd lost my strength forever. Lucy proved me wrong, gently.",
        authorName: "Hannah L.",
        authorRole: "Strong After Baby — 5 months",
        avatar: "/assets/customer_avatar_3.png",
        result: "Back squatting PB",
        programme: "Strong After Baby",
      },
      {
        quote:
          "I've done every diet. This was the first programme that actually asked what I wanted to build, not just what I wanted to lose.",
        authorName: "Rachel D.",
        authorRole: "Signature 1:1 — 8 months",
        avatar: "/assets/customer_avatar_1.png",
        result: "-14kg, kept off 18m",
        programme: "1:1 Coaching",
      },
      {
        quote:
          "Training around my cycle instead of fighting it was a revelation. I stopped burning out every three weeks.",
        authorName: "Chloe F.",
        authorRole: "Women's Wellness — 7 months",
        avatar: "/assets/customer_avatar_2.png",
        result: "Zero burnout cycles",
        programme: "Women's Wellness",
      },
      {
        quote:
          "I do everything from my spare room with two dumbbells and I'm the fittest I've been in my life.",
        authorName: "Amira S.",
        authorRole: "At-Home Strong — 10 months",
        avatar: "/assets/customer_avatar_3.png",
        result: "10k under 55 min",
        programme: "At-Home Strong",
      },
    ],
  },

  finalCta: {
    eyebrow: "Your turn",
    heading: {
      lead: "Ready to write\n",
      emphasis: "your",
      trail: " story?",
    },
    description:
      "Every woman on this page started with a free, no-pressure call. Book yours and we'll talk about where you are and where you'd like to go.",
    cta: { label: "Book your free call", href: "/enquire" },
    note: "Replies within 24 hours — usually a lot sooner.",
    image: {
      src: "/assets/lifestyle_image_3.png",
      alt: "Bright training studio",
    },
  },
};
