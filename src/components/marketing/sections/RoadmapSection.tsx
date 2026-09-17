import { useState } from "react";

type TabKey = "plywood" | "robotics" | "intelligence" | "autonomy";

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "plywood", label: "Plywood" },
  { key: "robotics", label: "Robotics" },
  { key: "intelligence", label: "Intelligence" },
  { key: "autonomy", label: "On-chain autonomy" },
];

const content: Record<TabKey, { proving: string; today: string; next: string }> = {
  plywood: {
    proving: "Does a butterfly mechanism even work at this scale? Form first, everything else later.",
    today: "A working winged chassis, wires still visible — exactly what early building looks like.",
    next: "Lighter materials, tighter tolerances, cleaner wing geometry.",
  },
  robotics: {
    proving: "Movement that feels alive — wing kinematics and actuation that match the original idea.",
    today: "First working prototype shipped; wing articulation v2 is in active testing.",
    next: "Closed-loop control, onboard sensing, smoother flight profiles.",
  },
  intelligence: {
    proving: "Control that isn't just scripted — perception and learned behavior onboard.",
    today: "Early experiments with control loops and wing-beat profiles.",
    next: "Adaptive flight control and learned movement patterns.",
  },
  autonomy: {
    proving: "Robots as agents — identity, wallets, and verifiable actions on-chain.",
    today: "Research phase inside the Virtuals ecosystem.",
    next: "Agent identity and autonomous on-chain behavior.",
  },
};

export function RoadmapSection() {
  const [active, setActive] = useState<TabKey>("plywood");
  const c = content[active];

  return (
    <section id="roadmap" className="py-28 lg:py-36 border-t border-border scroll-mt-24">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl mb-6">
            The <span className="text-accent-violet">trajectory</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every stage gets us closer — from a plywood sketch to autonomous machines.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Tab Navigation */}
          <div className="lg:col-span-4">
            <div className="space-y-2">
              {tabs.map((t, idx) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setActive(t.key)}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-200 flex items-center gap-4 ${isActive
                      ? "bg-accent/10 border border-accent/30"
                      : "border border-transparent hover:bg-secondary/50"
                      }`}
                  >
                    <span className={`font-display text-xs ${isActive ? "text-accent-violet" : "text-muted-foreground/50"}`}>
                      0{idx + 1}
                    </span>
                    <span className={`font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-8">
            <div className="premium-card">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">What we're proving</p>
                  <p className="text-sm text-foreground leading-relaxed">{c.proving}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Where we are</p>
                  <p className="text-sm text-foreground leading-relaxed">{c.today}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">What's next</p>
                  <p className="text-sm text-foreground leading-relaxed">{c.next}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-4">
                <a
                  className="btn-primary"
                  href="https://x.com/Flaretechxyz"
                  target="_blank"
                  rel="noreferrer"
                >
                  Follow progress on X
                </a>
                <button
                  className="btn-secondary"
                  onClick={() => document.getElementById("build")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See the build log
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
