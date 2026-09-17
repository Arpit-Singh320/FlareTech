import { useMemo, useState } from "react";
import Aurora from "@/components/reactbits/Aurora";
import ShinyText from "@/components/reactbits/ShinyText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Shuffle from "@/components/reactbits/Shuffle";

type MilestoneStatus = "Shipped" | "In progress" | "Exploring";

type Milestone = {
  id: string;
  label: string;
  title: string;
  status: MilestoneStatus;
  headline: string;
  details: [string, string][];
  date: string;
};

const milestones: Milestone[] = [
  {
    id: "wings-v2",
    label: "WNG-02",
    title: "Wing articulation v2",
    status: "In progress",
    headline: "The wings are starting to feel alive",
    details: [
      ["Stage", "Robotics"],
      ["Focus", "Kinematics + control"],
    ],
    date: "Sep 2026",
  },
  {
    id: "pcb-v1",
    label: "PCB-01",
    title: "Custom board via SiliXon",
    status: "Shipped",
    headline: "Prompt to PCB in minutes",
    details: [
      ["Stage", "Electronics"],
      ["Focus", "Custom PCB design"],
    ],
    date: "Sep 2026",
  },
  {
    id: "bfly-v1",
    label: "BFL-01",
    title: "Bionic butterfly v1",
    status: "Shipped",
    headline: "The first working frame",
    details: [
      ["Stage", "Prototype"],
      ["Focus", "Wing mechanism"],
    ],
    date: "Aug 2026",
  },
  {
    id: "agent",
    label: "AGT-01",
    title: "On-chain autonomy",
    status: "Exploring",
    headline: "Robots as agents on Virtuals",
    details: [
      ["Stage", "Autonomy"],
      ["Focus", "Agent identity"],
    ],
    date: "Next",
  },
];

function GlowDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
    </span>
  );
}

function statusClass(status: MilestoneStatus) {
  if (status === "Shipped") return "status-verified";
  if (status === "In progress") return "status-pending";
  return "indicator-base indicator-unknown";
}

export function HeroSection() {
  const [activeId, setActiveId] = useState(milestones[0].id);
  const active = useMemo(
    () => milestones.find((m) => m.id === activeId) ?? milestones[0],
    [activeId]
  );

  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      {/* Aurora Background - Bright White/Gray */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#FFFFFF", "#F5F5F5", "#E8E8E8", "#FFFFFF", "#EEEEEE"]}
          blend={0.7}
          amplitude={1.8}
          speed={0.5}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/30 via-background/60 to-background" />

      <div className="container relative z-10 py-32 md:py-40 lg:py-48">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm animate-fade-in">
              <GlowDot />
              Robotics · Built in public
            </div>

            {/* Headline */}
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="font-display text-6xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
                <Shuffle
                  text="Flare"
                  tag="span"
                  className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold block"
                  shuffleDirection="up"
                  duration={0.4}
                  stagger={0.04}
                  triggerOnce={true}
                />
                <ShinyText
                  text="Tech."
                  shineColor="#D4B8E8"
                  color="#E0E0E0"
                  speed={3}
                  className="font-display font-semibold"
                />
              </h1>

              <p className="max-w-lg text-lg text-muted-foreground leading-relaxed md:text-xl">
                Flaretech builds biomimetic robots — starting with a butterfly — and the intelligence and on-chain autonomy to run them.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <a
                href="https://x.com/Flaretechxyz"
                target="_blank"
                rel="noreferrer"
                className="btn-primary group"
              >
                Follow the build
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <button
                onClick={() => document.getElementById("build")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-secondary"
              >
                Read the build log
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Biomimetic design
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom electronics
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                On-chain autonomy
              </div>
            </div>
          </div>

          {/* Right Column - Active Build Card */}
          <div className="lg:col-span-6 space-y-6">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.15)"
              className="bg-card/90 border-border backdrop-blur-md animate-fade-in-up"
            >
              <div className="p-8">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Active build</p>
                    <p className="mt-2 font-display text-lg font-medium">{active.title}</p>
                  </div>
                  <span className={statusClass(active.status)}>
                    {active.status === "In progress" && <GlowDot />}
                    {active.status}
                  </span>
                </div>

                {/* Headline */}
                <div className="mb-10">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{active.id}</p>
                  <p className="font-display text-3xl font-medium tracking-tight text-accent-violet md:text-4xl">
                    {active.headline}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {active.details.map(([k, v]) => (
                    <div key={k} className="rounded-lg bg-secondary/50 p-4 hover:bg-secondary/70 transition-colors">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{k}</p>
                      <p className="mt-2 font-display text-lg font-medium text-foreground">{v}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-6">
                  <span>{active.date}</span>
                  <button
                    className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium group"
                    onClick={() => document.getElementById("build")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Build log
                    <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </SpotlightCard>

            {/* Milestone Timeline */}
            <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {milestones.map((m) => {
                const activeMarker = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveId(m.id)}
                    className={
                      "flex-1 h-12 rounded-lg border transition-all duration-200 flex items-center justify-center hover-lift " +
                      (activeMarker
                        ? "border-accent/50 bg-accent/10"
                        : "border-border bg-card/50 hover:border-accent/30 hover:bg-secondary/50"
                      )
                    }
                    aria-label={`Select milestone ${m.title}`}
                  >
                    <span className="text-xs font-medium truncate px-2">
                      {m.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
