import ShinyText from "@/components/reactbits/ShinyText";

export function FinalCtaBand() {
  return (
    <section className="py-28 lg:py-36 border-t border-border relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl animate-fade-in-up">
            Still building. <br />
            <ShinyText
              text="Still exploring."
              shineColor="#D4B8E8"
              color="#E0E0E0"
              speed={3}
              className="font-display"
            />
          </h2>

          <p className="text-xl text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Every wire, every iteration, every breakthrough — public. Follow the build as it turns into something real.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a
              href="https://x.com/Flaretechxyz"
              target="_blank"
              rel="noreferrer"
              className="btn-primary group"
            >
              @Flaretechxyz on X
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary"
            >
              Get in touch
            </button>
          </div>

          {/* Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-10 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Built in public
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Biomimetic robotics
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              On-chain autonomy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
