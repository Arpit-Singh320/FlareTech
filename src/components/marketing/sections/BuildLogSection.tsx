import { useState } from "react";

type BuildStatus = "Shipped" | "In progress" | "Exploring";

type BuildEntry = {
  id: string;
  title: string;
  note: string;
  stage: string;
  status: BuildStatus;
  date: string;
  url?: string;
};

const entries: BuildEntry[] = [
  {
    id: "WNG-02",
    title: "Wing articulation v2",
    note: "Movement coming together — more control, more of the idea made real",
    stage: "Robotics",
    status: "In progress",
    date: "Sep 2026",
    url: "https://x.com/Flaretechxyz/status/2100327775790080225",
  },
  {
    id: "BFL-02",
    title: "Bionic butterfly — next iteration",
    note: "The first version was only the beginning",
    stage: "Robotics",
    status: "In progress",
    date: "Sep 2026",
    url: "https://x.com/Flaretechxyz/status/2100156188851892507",
  },
  {
    id: "PCB-01",
    title: "Custom PCB via SiliXon",
    note: "Natural-language prompt to custom, ready-to-customise PCB design",
    stage: "Electronics",
    status: "Shipped",
    date: "Sep 2026",
    url: "https://x.com/Flaretechxyz/status/2099940496215085254",
  },
  {
    id: "PLY-01",
    title: "Plywood chassis — first build",
    note: "We're early. The wires are still visible. That's what building looks like",
    stage: "Prototype",
    status: "Shipped",
    date: "Sep 2026",
    url: "https://x.com/Flaretechxyz/status/2098818647083077735",
  },
  {
    id: "INT-01",
    title: "Onboard intelligence",
    note: "Control loops, perception, learned wing behavior",
    stage: "Intelligence",
    status: "Exploring",
    date: "Next",
  },
  {
    id: "AGT-01",
    title: "On-chain agent",
    note: "Robot identity and autonomy on Virtuals Protocol",
    stage: "Autonomy",
    status: "Exploring",
    date: "Next",
  },
];

function StatusBadge({ status }: { status: BuildStatus }) {
  if (status === "Shipped") {
    return (
      <span className="indicator-base indicator-verified">
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        Shipped
      </span>
    );
  }
  if (status === "In progress") {
    return (
      <span className="indicator-base indicator-fallback">
        <span className="h-1.5 w-1.5 rounded-full bg-warning" />
        In progress
      </span>
    );
  }
  return (
    <span className="indicator-base indicator-unknown">
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
      Exploring
    </span>
  );
}

type Filter = "all" | "active" | "shipped";

export function BuildLogSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = entries.filter((e) => {
    if (filter === "shipped") return e.status === "Shipped";
    if (filter === "active") return e.status !== "Shipped";
    return true;
  });

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "shipped", label: "Shipped" },
  ];

  return (
    <section id="build" className="py-28 lg:py-36 scroll-mt-24">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-12">
          <div className="space-y-4 max-w-xl">
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              The <span className="text-accent-violet">build log</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every iteration, public. Plywood → robotics → intelligence → on-chain autonomy.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1 p-1 glass-light rounded-lg">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === f.key
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Build Log Table */}
        <div className="premium-card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Entry
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Stage
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Notes
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-5 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {filtered.map((entry) => (
                  <tr
                    key={entry.id}
                    className="group transition-colors hover:bg-secondary/30"
                  >
                    <td className="px-6 py-5">
                      <span className="font-display font-medium text-foreground">
                        {entry.id}
                      </span>
                      <span className="block text-xs text-muted-foreground mt-1">
                        {entry.title}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <StatusBadge status={entry.status} />
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">
                      {entry.stage}
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground max-w-xs">
                      {entry.note}
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground whitespace-nowrap">
                      {entry.date}
                    </td>
                    <td className="px-6 py-5 text-right">
                      {entry.url ? (
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          View →
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground/50">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border bg-secondary/20">
            <p className="text-xs text-muted-foreground">
              Showing {filtered.length} of {entries.length} entries — the rest happens on{" "}
              <a
                href="https://x.com/Flaretechxyz"
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                @Flaretechxyz
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
