const featureCards = [
  {
    icon: "🏋️",
    title: "Personalised Workouts",
    text: "Custom training plans designed around your body, goals and lifestyle.",
  },
  {
    icon: "🍎",
    title: "Nutrition Guidance",
    text: "Simple, realistic nutrition that fits your life and fuels your goals.",
  },
  {
    icon: "🧠",
    title: "Mindset Support",
    text: "Build confidence, healthy habits and a mindset that keeps you moving.",
  },
  {
    icon: "🗓️",
    title: "Ongoing Support",
    text: "I'm with you every step of the way so you're never doing it alone.",
  },
];

const programCards = [
  {
    title: "1:1 Coaching",
    text: "Fully personalised training, nutrition and mindset coaching.",
    tone: "from-[#d8e4ec] to-[#eef4f8]",
  },
  {
    title: "Strength & Tone",
    text: "Build lean muscle, get stronger and feel amazing in your body.",
    tone: "from-[#d5dfd2] to-[#ebf1e9]",
  },
  {
    title: "Women's Wellness",
    text: "Focus on energy, balance and long-term health with confidence.",
    tone: "from-[#e4ddd6] to-[#f4f1ee]",
  },
];

const steps = [
  "Book a Call",
  "Your Plan",
  "Take Action",
  "Track Progress",
  "Feel Amazing",
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1240px] px-6 py-8 lg:px-10">
      <header className="mb-14 flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-engravers text-4xl leading-none text-[#1f3046]">LUCY</p>
          <p className="font-engravers mt-2 text-xs text-[#758396]">PERSONAL TRAINER</p>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-[#364459] md:flex">
          <a href="#">Programs</a>
          <a href="#">Coaching</a>
          <a href="#">About</a>
          <a href="#">Success Stories</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </nav>
        <button className="font-engravers rounded-xl bg-[#7ea28f] px-5 py-3 text-xs text-white">
          Book a Free Call
        </button>
      </header>

      <section className="grid gap-10 rounded-[2rem] bg-[#f7f9f7] p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="space-y-7">
          <p className="font-engravers text-xs text-[#7b8a9e]">ONLINE COACHING FOR WOMEN</p>
          <h1 className="font-recoleta text-5xl leading-[1.05] text-[#182b43] lg:text-7xl">
            Stronger in body. <br />
            Stronger in <span className="text-[#7ea28f] italic">life.</span>
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-[#4f5c70]">
            Personalised training, nutrition and mindset support to help you feel
            confident, energised and unstoppable.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="font-engravers rounded-xl bg-[#7ea28f] px-7 py-4 text-xs text-white">
              Book a Free Call
            </button>
            <button className="font-engravers rounded-xl border border-[#c5ced9] bg-white px-7 py-4 text-xs text-[#304359]">
              Explore Programs
            </button>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {["#d9cab8", "#c8d9e9", "#e3d4de"].map((color) => (
                <div
                  key={color}
                  className="h-12 w-12 rounded-full border-2 border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="text-sm text-[#4f5c70]">Trusted by 500+ women worldwide</p>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#e8eef1]">
          <div className="absolute inset-x-10 bottom-0 top-14 rounded-[45%] bg-[#d8e2e8]" />
          <div className="absolute bottom-0 left-1/2 h-[78%] w-[64%] -translate-x-1/2 rounded-t-[45%] bg-gradient-to-b from-[#f5c39b] via-[#dca581] to-[#be7e58]" />
          <div className="absolute bottom-0 left-1/2 h-[45%] w-[70%] -translate-x-1/2 rounded-t-[35%] bg-[#9db196]" />
          <aside className="absolute right-5 top-1/2 w-32 -translate-y-1/2 rounded-2xl bg-white p-4 text-center shadow-sm">
            <p className="font-recoleta text-5xl text-[#182b43]">500+</p>
            <p className="mt-1 text-sm text-[#4f5c70]">Women Transformed</p>
            <p className="mt-2 text-2xl text-[#7ea28f]">♥</p>
          </aside>
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-white px-8 py-10 shadow-[0_10px_30px_rgba(24,43,67,0.05)]">
        <p className="font-engravers text-center text-xs text-[#7b8a9e]">AS FEATURED IN</p>
        <div className="mt-6 grid grid-cols-2 gap-6 text-center text-3xl text-[#8d97a6] md:grid-cols-5">
          {['Women\'sHealth', 'fit&well', 'Well+Good', 'healthline', 'MindBodyGreen'].map((logo) => (
            <p key={logo} className="font-recoleta text-2xl md:text-4xl">
              {logo}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 rounded-3xl bg-white p-6 md:grid-cols-4 md:p-8">
        {featureCards.map((feature) => (
          <article key={feature.title} className="border-[#e7edf2] px-4 py-2 md:border-r last:border-none">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3f6] text-2xl">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-[#1f3046]">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#4f5c70]">{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-14">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="font-engravers text-xs text-[#7b8a9e]">PROGRAMS</p>
            <h2 className="font-recoleta mt-4 text-5xl text-[#182b43]">Programs for every goal</h2>
          </div>
          <a className="font-engravers hidden text-xs text-[#4f5c70] md:block" href="#">
            View all programs →
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {programCards.map((program) => (
            <article
              key={program.title}
              className="grid grid-cols-[120px_1fr] gap-5 rounded-2xl border border-[#d7e0e8] bg-white p-4"
            >
              <div className={`h-32 rounded-2xl bg-gradient-to-b ${program.tone}`} />
              <div>
                <h3 className="text-2xl font-semibold text-[#1f3046]">{program.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4f5c70]">{program.text}</p>
                <button className="font-engravers mt-5 text-xs text-[#4f6b86]">Learn more →</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl bg-[#eaf0f5] p-8">
        <p className="font-engravers text-xs text-[#7b8a9e]">HOW IT WORKS</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-recoleta text-5xl text-[#182b43]">
              Simple steps. <br />
              Real results.
            </h2>
            <p className="mt-4 max-w-md text-[#4f5c70]">
              A clear, proven process to help you become your strongest self.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white font-semibold text-[#7ea28f]">
                  {index + 1}
                </div>
                <p className="font-semibold text-[#1f3046]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-12 rounded-3xl bg-white p-8">
        <p className="font-engravers text-xs text-[#7b8a9e]">REAL WOMEN. REAL RESULTS.</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto_0.9fr] lg:items-center">
          <h2 className="font-recoleta text-6xl leading-tight text-[#182b43]">
            Stronger together. <br />
            Real transformations.
          </h2>
          <div className="grid grid-cols-3 gap-7 text-center">
            {[
              ["95%", "Feel more confident"],
              ["87%", "Achieve fitness goals"],
              ["500+", "Women coached"],
            ].map(([value, label]) => (
              <div key={value}>
                <p className="font-recoleta text-5xl text-[#182b43]">{value}</p>
                <p className="mt-2 text-sm text-[#4f5c70]">{label}</p>
              </div>
            ))}
          </div>
          <article className="rounded-3xl border border-[#e5ebf1] p-6 shadow-sm">
            <p className="text-[#364459]">
              “Lucy changed my life! I’m stronger, healthier and more confident than I’ve
              ever been.”
            </p>
            <p className="mt-4 font-semibold text-[#1f3046]">Emma R. · 1:1 Coaching Client</p>
          </article>
        </div>
      </section>

      <section className="mt-10 mb-6 grid items-center gap-8 rounded-3xl bg-[#eef2ed] p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h2 className="font-recoleta text-5xl text-[#182b43]">Ready to become your strongest self?</h2>
          <p className="mt-4 max-w-xl text-[#4f5c70]">
            Let&apos;s build a plan that fits your goals and your life.
          </p>
        </div>
        <div className="justify-self-start lg:justify-self-end">
          <button className="font-engravers rounded-xl bg-[#7ea28f] px-8 py-4 text-xs text-white">
            Book Your Free Call
          </button>
          <p className="mt-3 text-sm text-[#708093]">No pressure. Just a friendly chat.</p>
        </div>
      </section>
    </main>
  );
}
