import SpotlightCard from "@/components/reactbits/SpotlightCard";

const pillars = [
  {
    title: "Every iteration public",
    description: "Prototypes, failures, and breakthroughs documented as they happen. The wires stay visible — that's the point.",
  },
  {
    title: "Hardware + AI native",
    description: "Biomimetic mechanics, generative PCB design, and embedded control under one roof.",
  },
  {
    title: "Agent-economy ready",
    description: "Building toward on-chain autonomy inside the Virtuals ecosystem, not bolted on after.",
  },
];

export function ContactSection() {
  return (
    <section id="open" className="py-28 lg:py-36 scroll-mt-24 border-t border-border">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl mb-6">
            Built in the open
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Robotics is hard. Doing it in public keeps us honest — and brings the right people along.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-20">
          {pillars.map((pillar, idx) => (
            <SpotlightCard
              key={pillar.title}
              spotlightColor="rgba(185, 158, 216, 0.06)"
              className="bg-card/50 border-border hover:border-accent/20 transition-all duration-300"
            >
              <div className="p-8 text-center">
                <span className="inline-block font-display text-sm font-medium text-muted-foreground mb-6">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-lg font-medium mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Contact Form */}
        <div id="contact" className="scroll-mt-24">
          <div className="premium-card max-w-4xl mx-auto">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-7 space-y-6">
                <h3 className="font-display text-3xl font-medium">
                  Build with us
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hardware, AI agents, fabrication, or just following along — if Flaretech's trajectory interests you, get in touch.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Collaboration and partnerships
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Early-access to builds and drops
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fastest updates on{" "}
                    <a
                      href="https://x.com/Flaretechxyz"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      @Flaretechxyz
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-5">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="w-full h-12 rounded-lg border border-border bg-secondary/30 px-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Email"
                    aria-label="Email"
                    type="email"
                  />
                  <input
                    className="w-full h-12 rounded-lg border border-border bg-secondary/30 px-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="What are you working on?"
                    aria-label="What are you working on?"
                  />
                  <button
                    className="w-full btn-primary justify-center"
                    type="submit"
                  >
                    Get in touch
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    Or DM us on X — we read everything.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
