import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Brand | Lucy Hazell Fitness",
  description:
    "The Lucy Hazell Fitness brand — colours, type, voice, and ready-made templates for social media and beyond.",
};

type Swatch = {
  name: string;
  hex: string;
  token: string;
  role: string;
  textOn?: "light" | "dark";
  ring?: boolean;
};

const palettePrimary: Swatch[] = [
  {
    name: "Sage Deep",
    hex: "#5E7C66",
    token: "sage-deep",
    role: "Primary buttons, emphasis text, callouts",
    textOn: "light",
  },
  {
    name: "Sage",
    hex: "#7F9C84",
    token: "sage",
    role: "Accents, decorative underlines, hovers",
    textOn: "light",
  },
  {
    name: "Ink",
    hex: "#1C2C44",
    token: "ink",
    role: "Headlines, body copy",
    textOn: "light",
  },
  {
    name: "Cream",
    hex: "#F6F1E7",
    token: "bg",
    role: "Page background, calm canvases",
    textOn: "dark",
    ring: true,
  },
];

const paletteSecondary: Swatch[] = [
  { name: "Sage Soft", hex: "#C5D2B6", token: "sage-soft", role: "Soft fills", textOn: "dark" },
  { name: "Sage Mist", hex: "#DDE4D3", token: "sage-mist", role: "Tags, pills", textOn: "dark" },
  { name: "Bg Deeper", hex: "#EDE6D6", token: "bg-deeper", role: "Section panels", textOn: "dark", ring: true },
  { name: "Cream Warm", hex: "#EDE2CC", token: "cream", role: "Card surfaces", textOn: "dark", ring: true },
  { name: "Stone", hex: "#E2D7C8", token: "stone", role: "Quiet backgrounds", textOn: "dark", ring: true },
  { name: "Warm Taupe", hex: "#C5B5A2", token: "warm-taupe", role: "Imagery accents", textOn: "dark" },
  { name: "Mist", hex: "#D3DDE2", token: "mist", role: "Cool neutral", textOn: "dark" },
  { name: "Hairline", hex: "#E4DCCB", token: "hairline", role: "Borders, rules", textOn: "dark", ring: true },
  { name: "Ink Soft", hex: "#425468", token: "ink-soft", role: "Body copy alt", textOn: "light" },
  { name: "Ink Muted", hex: "#6C7B8E", token: "ink-muted", role: "Captions, eyebrows", textOn: "light" },
];

const voiceWords = [
  "Calm",
  "Considered",
  "Empowering",
  "Honest",
  "Warm",
  "Grounded",
  "Strong",
  "Personal",
];

const taglines = [
  "Strength is built quietly, day by day.",
  "Train with intention. Live with energy.",
  "Personal coaching for women who want more than a workout.",
  "Stronger, healthier, more yourself.",
];

function Swatch({ s, large = false }: { s: Swatch; large?: boolean }) {
  const onDark = s.textOn === "light";
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-[22px] p-5 ${
        large ? "min-h-[220px]" : "min-h-[170px]"
      } ${s.ring ? "ring-1 ring-inset ring-ink/8" : ""}`}
      style={{ background: s.hex, color: onDark ? "#ffffff" : "#1c2c44" }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="font-engravers text-[10px]"
          style={{ opacity: onDark ? 0.85 : 0.6 }}
        >
          {s.token}
        </span>
        <span
          className="font-engravers text-[10px] tabular-nums"
          style={{ opacity: onDark ? 0.85 : 0.6 }}
        >
          {s.hex}
        </span>
      </div>
      <div>
        <p className="font-recoleta text-[22px] leading-tight">{s.name}</p>
        <p
          className="mt-1 text-[12.5px] leading-snug"
          style={{ opacity: onDark ? 0.78 : 0.7 }}
        >
          {s.role}
        </p>
      </div>
    </div>
  );
}

function FrameLabel({ format, label }: { format: string; label: string }) {
  return (
    <div className="mb-3 flex items-baseline justify-between gap-2">
      <p className="font-engravers text-[10px] text-ink-muted">{label}</p>
      <p className="font-engravers text-[10px] text-ink-muted">{format}</p>
    </div>
  );
}

export default function BrandPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative mt-8">
        <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#f0ebde] p-8 sm:p-12 lg:p-14">
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-7">
              <Eyebrow>Brand Kit · v1</Eyebrow>
              <Heading
                heading={{
                  lead: "The look, voice and ",
                  emphasis: "feel",
                  trail: " of Lucy Hazell Fitness.",
                }}
                level="h1"
                size="xl"
                emphasisUnderline
              />
              <p className="max-w-xl text-[17px] leading-[1.65] text-ink-soft sm:text-[18px]">
                A working library of colours, type, voice and ready-made
                templates — built so anything we put into the world (a post, a
                program guide, an email, a talk) feels unmistakably Lucy.
              </p>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button href="#palette" size="lg" withArrow fullWidthOnMobile>
                  Explore the kit
                </Button>
                <Button href="#social" variant="ghost" size="lg" fullWidthOnMobile>
                  Social templates
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="paper-grain relative aspect-[4/5] w-full max-w-[460px] mx-auto overflow-hidden rounded-[28px] bg-sage-deep p-8 text-white">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-engravers text-[10px] tracking-[0.22em] opacity-80">
                      LHF · Identity
                    </span>
                    <span className="font-engravers text-[10px] tabular-nums opacity-80">
                      26.04.26
                    </span>
                  </div>
                  <div>
                    <p className="font-recoleta text-[42px] leading-[1.0] sm:text-[52px]">
                      Strong,<br />
                      <span className="italic text-sage-soft">soft-edged.</span>
                    </p>
                    <div className="mt-6 h-px w-16 bg-white/40" />
                    <p className="mt-5 max-w-[28ch] text-[13px] leading-[1.6] opacity-90">
                      Earthy palette, classical type, calm pacing — built for
                      women who want substance over hype.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wordmark / Logo */}
      <section id="logo" className="mt-20">
        <SectionHeading
          section={{
            eyebrow: "01 · Wordmark",
            heading: {
              lead: "A name set in ",
              emphasis: "Recoleta",
              trail: ", quiet and confident.",
            },
          }}
          className="mb-10"
        />
        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="paper-grain flex flex-col items-center justify-center rounded-[28px] bg-white px-6 py-16 sm:py-20">
            <p className="font-recoleta text-[48px] leading-none tracking-tight text-ink sm:text-[80px] lg:text-[96px]">
              Lucy <span className="italic text-sage-deep">Hazell</span>
            </p>
            <p className="font-engravers mt-5 text-[12px] tracking-[0.28em] text-ink-muted">
              PERSONAL TRAINER
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex flex-col items-center justify-center rounded-[24px] bg-sage-deep p-10 text-white">
              <p className="font-recoleta text-[32px] leading-none">
                Lucy <span className="italic text-sage-soft">Hazell</span>
              </p>
              <p className="font-engravers mt-3 text-[10px] tracking-[0.28em] opacity-80">
                ON SAGE DEEP
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[24px] border border-hairline bg-bg-deeper p-10">
              <p className="font-recoleta text-[32px] leading-none text-ink">
                Lucy <span className="italic text-sage-deep">Hazell</span>
              </p>
              <p className="font-engravers mt-3 text-[10px] tracking-[0.28em] text-ink-muted">
                ON CREAM
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-[14px] leading-[1.65] text-ink-soft">
          The wordmark always pairs the surname in italic sage with the title
          line in Engravers Gothic. Keep at least one cap-height of clear space
          on every side. Avoid stretching, recolouring outside the palette, or
          stacking the two lines too tightly.
        </p>
      </section>

      {/* Palette */}
      <section id="palette" className="mt-20">
        <SectionHeading
          section={{
            eyebrow: "02 · Palette",
            heading: {
              lead: "Earth tones, ",
              emphasis: "sage",
              trail: ", and a deep navy ink.",
            },
          }}
          className="mb-10"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {palettePrimary.map((s) => (
            <Swatch key={s.token} s={s} large />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {paletteSecondary.map((s) => (
            <Swatch key={s.token} s={s} />
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-[20px] border border-hairline bg-white p-5">
            <p className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
              60 · BACKGROUND
            </p>
            <p className="mt-2 font-recoleta text-[22px] text-ink">Cream &amp; Bg-deeper</p>
            <p className="mt-1 text-[13px] leading-[1.6] text-ink-soft">
              The dominant tone. Sets a calm, warm canvas.
            </p>
          </div>
          <div className="rounded-[20px] border border-hairline bg-white p-5">
            <p className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
              30 · INK
            </p>
            <p className="mt-2 font-recoleta text-[22px] text-ink">Ink &amp; Ink-soft</p>
            <p className="mt-1 text-[13px] leading-[1.6] text-ink-soft">
              For headlines and body. Always grounded, never harsh black.
            </p>
          </div>
          <div className="rounded-[20px] border border-hairline bg-white p-5">
            <p className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
              10 · SAGE
            </p>
            <p className="mt-2 font-recoleta text-[22px] text-ink">Sage family</p>
            <p className="mt-1 text-[13px] leading-[1.6] text-ink-soft">
              Reserved for emphasis: italics, buttons, highlights.
            </p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section id="type" className="mt-20">
        <SectionHeading
          section={{
            eyebrow: "03 · Type",
            heading: {
              lead: "Three voices, one ",
              emphasis: "conversation",
              trail: ".",
            },
          }}
          className="mb-10"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="paper-grain rounded-[28px] bg-white p-8">
            <p className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
              DISPLAY · RECOLETA
            </p>
            <p className="mt-6 font-recoleta text-[64px] leading-[0.95] text-ink">
              Aa
            </p>
            <p className="mt-4 font-recoleta text-[22px] leading-tight text-ink">
              Strength is built <span className="italic text-sage-deep">quietly</span>.
            </p>
            <div className="mt-6 h-px w-full bg-hairline" />
            <ul className="mt-5 space-y-1.5 text-[13px] text-ink-soft">
              <li>Headlines, hero copy, pull quotes</li>
              <li>Italic cut for emphasis words</li>
              <li>Weights: 400 · 500 · 600 · 700</li>
            </ul>
          </div>

          <div className="rounded-[28px] bg-ink p-8 text-white">
            <p className="font-engravers text-[10px] tracking-[0.22em] opacity-70">
              LABEL · ENGRAVERS GOTHIC
            </p>
            <p className="font-engravers mt-6 text-[64px] leading-[0.95] tracking-[0.06em]">
              AA
            </p>
            <p className="font-engravers mt-4 text-[14px] tracking-[0.28em]">
              EYEBROWS · BUTTONS · TAGS
            </p>
            <div className="mt-6 h-px w-full bg-white/15" />
            <ul className="mt-5 space-y-1.5 text-[13px] text-white/75">
              <li>All caps, wide letter-spacing</li>
              <li>Use sparingly — frames Recoleta</li>
              <li>Never used for body copy</li>
            </ul>
          </div>

          <div className="rounded-[28px] bg-bg-deeper p-8">
            <p className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
              BODY · FIGTREE
            </p>
            <p className="mt-6 text-[64px] leading-[0.95] font-medium text-ink">
              Aa
            </p>
            <p className="mt-4 text-[16px] leading-[1.6] text-ink-soft">
              A humanist sans for paragraphs, captions, navigation and form
              copy. Comfortable at small sizes; never competes with Recoleta.
            </p>
            <div className="mt-6 h-px w-full bg-hairline" />
            <ul className="mt-5 space-y-1.5 text-[13px] text-ink-soft">
              <li>Body, UI, microcopy</li>
              <li>15–18px body, 1.6 leading</li>
              <li>Weights: 400 · 500 · 600</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Voice */}
      <section id="voice" className="mt-20">
        <div className="paper-grain relative overflow-hidden rounded-[32px] bg-[#e8ece0] p-10 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <Eyebrow>04 · Voice</Eyebrow>
              <Heading
                heading={{
                  lead: "Speak like a ",
                  emphasis: "trusted coach",
                  trail: ", not a brand.",
                }}
                size="sm"
              />
              <p className="max-w-md text-[16px] leading-[1.65] text-ink-soft">
                Direct, warm, never shouty. Use second person. Trade
                superlatives for specifics. Lean on calm imperatives over
                hard-sell language.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {voiceWords.map((w) => (
                  <span
                    key={w}
                    className="font-engravers rounded-full bg-white/70 px-4 py-2 text-[10px] tracking-[0.22em] text-sage-deep"
                  >
                    {w}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-sage-deep/20 bg-white p-5">
                  <p className="font-engravers text-[10px] tracking-[0.22em] text-sage-deep">
                    DO
                  </p>
                  <ul className="mt-3 space-y-2 text-[14px] leading-[1.55] text-ink-soft">
                    <li>“Train with intention.”</li>
                    <li>“Built around your week, not a template.”</li>
                    <li>“A real plan, a real coach, real results.”</li>
                  </ul>
                </div>
                <div className="rounded-[20px] border border-hairline bg-white/60 p-5">
                  <p className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
                    AVOID
                  </p>
                  <ul className="mt-3 space-y-2 text-[14px] leading-[1.55] text-ink-soft line-through decoration-ink-muted/40">
                    <li>“Crush your goals!!”</li>
                    <li>“Insane fat-burning hacks.”</li>
                    <li>“Ladies, get ready to sweat.”</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-[20px] bg-sage-deep p-5 text-white">
                <p className="font-engravers text-[10px] tracking-[0.22em] opacity-80">
                  TAGLINE OPTIONS
                </p>
                <ul className="mt-3 space-y-2 font-recoleta text-[18px] leading-snug">
                  {taglines.map((t) => (
                    <li key={t}>“{t}”</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Templates */}
      <section id="social" className="mt-20">
        <SectionHeading
          section={{
            eyebrow: "05 · Social",
            heading: {
              lead: "Templates that ",
              emphasis: "travel",
              trail: " across the feed.",
            },
          }}
          className="mb-10"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Square 1:1 — Quote */}
          <div>
            <FrameLabel format="1080 × 1080" label="Square · Quote" />
            <div className="paper-grain relative aspect-square overflow-hidden rounded-[24px] bg-bg-deeper p-7">
              <div className="flex h-full flex-col justify-between">
                <span className="font-engravers text-[10px] tracking-[0.28em] text-ink-muted">
                  L · H · F
                </span>
                <p className="font-recoleta text-[28px] leading-[1.1] text-ink sm:text-[34px]">
                  Strength isn’t loud.
                  <br />
                  It’s <span className="italic text-sage-deep">consistent</span>.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-engravers text-[9px] tracking-[0.28em] text-ink-muted">
                    @LUCYHAZELLFITNESS
                  </span>
                  <span className="h-px w-12 bg-ink/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Square — Stat */}
          <div>
            <FrameLabel format="1080 × 1080" label="Square · Stat" />
            <div className="relative aspect-square overflow-hidden rounded-[24px] bg-sage-deep p-7 text-white">
              <div className="flex h-full flex-col justify-between">
                <span className="font-engravers text-[10px] tracking-[0.28em] opacity-80">
                  RESULTS · 2026
                </span>
                <div>
                  <p className="font-recoleta text-[80px] leading-none tracking-tight sm:text-[96px]">
                    300+
                  </p>
                  <p className="font-recoleta mt-2 text-[20px] italic text-sage-soft">
                    women coached
                  </p>
                </div>
                <p className="text-[12px] leading-[1.55] opacity-85">
                  Personal training built around real lives — strength,
                  movement, energy.
                </p>
              </div>
            </div>
          </div>

          {/* Square — Tip */}
          <div>
            <FrameLabel format="1080 × 1080" label="Square · Tip" />
            <div className="paper-grain relative aspect-square overflow-hidden rounded-[24px] bg-white p-7">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-mist text-sage-deep">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M5 12l5 5L20 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-engravers text-[10px] tracking-[0.28em] text-ink-muted">
                    TUESDAY TIP · 04
                  </span>
                </div>
                <p className="font-recoleta text-[28px] leading-[1.15] text-ink">
                  Train the basics until <br />
                  they feel <span className="italic text-sage-deep">easy</span>.
                </p>
                <p className="text-[13px] leading-[1.6] text-ink-soft">
                  Squat, hinge, push, pull, carry. Master those five and the
                  rest takes care of itself.
                </p>
              </div>
            </div>
          </div>

          {/* Portrait 4:5 — Photo + caption */}
          <div>
            <FrameLabel format="1080 × 1350" label="Portrait · Lifestyle" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#d6dfca]">
              <Image
                src="/assets/lifestyle_image_1.png"
                alt="Lifestyle"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <span className="font-engravers self-start rounded-full bg-white/15 px-3 py-1 text-[9px] tracking-[0.28em] backdrop-blur-md">
                  THIS WEEK
                </span>
                <div>
                  <p className="font-recoleta text-[32px] leading-[1.05]">
                    Move with <span className="italic text-sage-soft">purpose</span>,
                    rest without guilt.
                  </p>
                  <p className="mt-3 font-engravers text-[10px] tracking-[0.28em] opacity-85">
                    LUCY HAZELL FITNESS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Portrait — Program promo */}
          <div>
            <FrameLabel format="1080 × 1350" label="Portrait · Program" />
            <div className="paper-grain relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#efe7d8] p-7">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-engravers rounded-full bg-white/80 px-3 py-1 text-[9px] tracking-[0.28em] text-sage-deep">
                    NEW INTAKE
                  </span>
                  <span className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
                    SPRING ’26
                  </span>
                </div>
                <div>
                  <p className="font-engravers text-[10px] tracking-[0.28em] text-sage-deep">
                    8-WEEK PROGRAM
                  </p>
                  <p className="font-recoleta mt-3 text-[40px] leading-[1.0] text-ink">
                    Stronger
                    <br />
                    <span className="italic text-sage-deep">by spring.</span>
                  </p>
                  <div className="mt-5 h-px w-12 bg-ink/15" />
                  <ul className="mt-4 space-y-1.5 text-[13px] leading-[1.55] text-ink-soft">
                    <li>Three sessions a week</li>
                    <li>Personalised plan + check-ins</li>
                    <li>Small group — 12 spots</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-engravers text-[10px] tracking-[0.28em] text-ink-muted">
                    LUCYHAZELL.CO
                  </span>
                  <span className="font-recoleta text-[14px] italic text-sage-deep">
                    apply →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Story 9:16 */}
          <div>
            <FrameLabel format="1080 × 1920" label="Story · 9:16" />
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[24px] bg-ink p-6 text-white">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-engravers text-[9px] tracking-[0.28em] opacity-75">
                    BEHIND THE PLAN
                  </span>
                  <span className="font-engravers text-[9px] tabular-nums opacity-75">
                    01 / 04
                  </span>
                </div>
                <div>
                  <p className="font-recoleta text-[34px] leading-[1.05]">
                    Why we
                    <br />
                    train <span className="italic text-sage-soft">slow</span>
                    <br />
                    on purpose.
                  </p>
                  <div className="mt-5 h-px w-10 bg-white/40" />
                  <p className="mt-4 text-[12.5px] leading-[1.55] opacity-85">
                    Tempo work builds joints that last. Swipe up — three drills
                    to slow your reps down without losing strength.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-recoleta text-[14px] italic text-sage-soft">
                    swipe →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns / Texture */}
      <section className="mt-20">
        <SectionHeading
          section={{
            eyebrow: "06 · Texture",
            heading: {
              lead: "Small details that ",
              emphasis: "anchor",
              trail: " the brand.",
            },
          }}
          className="mb-10"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="paper-grain rounded-[24px] bg-bg-deeper p-7">
            <p className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
              PAPER GRAIN
            </p>
            <p className="mt-4 font-recoleta text-[22px] text-ink">
              A whisper of texture
            </p>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-soft">
              A subtle SVG noise overlay (~18% opacity, multiply blend) on
              warm panels. Keeps surfaces feeling printed, not flat.
            </p>
          </div>
          <div className="rounded-[24px] bg-white p-7">
            <p className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
              HAIRLINE RULE
            </p>
            <p className="mt-4 font-recoleta text-[22px] text-ink">
              Soft separation
            </p>
            <div className="mt-6 hairline" />
            <p className="mt-4 text-[13.5px] leading-[1.6] text-ink-soft">
              A 1px gradient that fades at both ends — used between sections
              and inside cards. Never a hard line.
            </p>
          </div>
          <div className="rounded-[24px] border border-hairline bg-white p-7">
            <p className="font-engravers text-[10px] tracking-[0.22em] text-ink-muted">
              HAND-DRAWN UNDERLINE
            </p>
            <p className="mt-4 font-recoleta text-[22px] text-ink">
              An <span className="relative italic text-sage-deep">accent
                <svg
                  viewBox="0 0 220 22"
                  className="absolute -bottom-2 left-0 h-3 w-full text-sage"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 14 C 60 2, 140 2, 218 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </p>
            <p className="mt-4 text-[13.5px] leading-[1.6] text-ink-soft">
              Pairs with italic Recoleta to mark the emphasis word in any
              headline. One per heading, never more.
            </p>
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="mt-20">
        <SectionHeading
          section={{
            eyebrow: "07 · Photography",
            heading: {
              lead: "Natural light, ",
              emphasis: "real moments",
              trail: ".",
            },
          }}
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "/assets/lifestyle_image_1.png",
            "/assets/lifestyle_image_2.png",
            "/assets/lifestyle_image_3.png",
          ].map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#d6dfca]"
            >
              <Image
                src={src}
                alt={`Lifestyle ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-[14px] leading-[1.65] text-ink-soft">
          Shoot in soft, directional daylight. Earthy props, neutral wardrobe,
          no neon gym aesthetics. Subjects mid-movement or mid-thought — not
          posed. Crop generously; let the frame breathe.
        </p>
      </section>

      {/* Final note */}
      <section className="mt-20">
        <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#e8ece0]">
          <div className="grid gap-8 p-10 sm:p-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <Eyebrow>Use the kit</Eyebrow>
              <Heading
                heading={{
                  lead: "Need an asset? ",
                  emphasis: "Start here",
                  trail: ".",
                }}
                size="sm"
              />
              <p className="max-w-xl text-[15.5px] leading-[1.7] text-ink-soft">
                Every template on this page is built from the same colours,
                type and tone you’ll find across the site. Lift any block as a
                starting point for posts, decks, emails, or print — and keep
                the palette and Recoleta italic emphasis as the through-line.
              </p>
              <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
                <Button href="#palette" size="lg" withArrow fullWidthOnMobile>
                  Back to palette
                </Button>
                <Button href="/enquire" variant="ghost" size="lg" fullWidthOnMobile>
                  Brief Lucy
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                "#5E7C66",
                "#7F9C84",
                "#C5D2B6",
                "#1C2C44",
                "#F6F1E7",
                "#E4DCCB",
              ].map((c) => (
                <div
                  key={c}
                  className="aspect-square rounded-[18px] ring-1 ring-inset ring-ink/8"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
