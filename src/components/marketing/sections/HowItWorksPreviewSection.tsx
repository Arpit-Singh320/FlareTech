import ShinyText from "@/components/reactbits/ShinyText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { GridScan } from "@/components/reactbits/GridScan";

const steps = [
  {
    number: "01",
    title: "Prototype",
    description: "Plywood, servos, and hand-cut frames. Fast mechanical iteration where every version teaches the next.",
  },
  {
    number: "02",
    title: "Electronics",
    description: "Custom PCBs generated from natural-language prompts with SiliXon, then assembled by hand.",
  },
  {
    number: "03",
    title: "Intelligence",
    description: "Onboard control and wing kinematics. The machine starts to move the way the idea always looked.",
  },
  {
    number: "04",
    title: "Autonomy",
    description: "AI agents with on-chain identity on Virtuals. The endgame: robots that act for themselves.",
  },
];

export function HowItWorksPreviewSection() {
  return (
    <section id="process" className="py-28 lg:py-36 border-t border-border relative overflow-hidden scroll-mt-24">
      {/* Grid Scan Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridScan
          linesColor="#4e4c4cff"
          scanColor="#dad4d4ff"
          lineThickness={1}
          gridScale={0.1}
          lineJitter={0.1}
          scanGlow={0.5}
          scanSoftness={2}
          enablePost={true}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          sensitivity={0.7}
          scanOnClick={false}
          snapBackDelay={500}
          enableWebcam={false}
          showPreview={false}
          modelsPath="https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/80 via-background/60 to-background/80 pointer-events-none" />
      <div className="container relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <ScrollFloat
            containerClassName="mb-6"
            textClassName="font-display text-4xl font-medium tracking-tight md:text-5xl text-foreground"
            scrollStart="top bottom+=30%"
            scrollEnd="bottom bottom-=20%"
          >
            From plywood to autonomy
          </ScrollFloat>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The same pipeline, every iteration — prototype, electronics, control, then agency.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <SpotlightCard
              key={step.number}
              spotlightColor="rgba(185, 158, 216, 0.06)"
              className="bg-card/50 border-border animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` } as React.CSSProperties}
            >
              <div className="p-6 h-full relative">
                {/* Number */}
                <span className="font-display text-4xl font-medium text-accent/30 mb-6 block">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-lg font-medium mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-px bg-border" />
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById("build")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary group"
          >
            <ShinyText
              text="See it in the build log"
              shineColor="#D4B8E8"
              color="#B0B0B0"
              speed={4}
            />
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
