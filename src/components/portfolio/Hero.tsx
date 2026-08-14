import { ArrowRight, Download, Sparkles } from "lucide-react";

function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[440px]">
      <div
        className="animate-float-slow absolute inset-8 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, oklch(0.7 0.2 264 / 55%), oklch(0.6 0.22 305 / 35%) 55%, transparent 72%)",
        }}
      />
      <div className="animate-float-slow glass absolute inset-10 rounded-full">
        <div
          className="absolute inset-0 rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, oklch(1 0 0 / 45%), transparent 45%)",
          }}
        />
        <div className="animate-spin-slow absolute inset-6 rounded-full border border-dashed border-[var(--glass-border)]" />
        <div
          className="animate-spin-slow absolute inset-16 rounded-full border border-[var(--glass-border)]"
          style={{ animationDirection: "reverse", animationDuration: "18s" }}
        />
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full opacity-70"
        >
          <g stroke="currentColor" className="text-primary/40" strokeWidth="0.6">
            <line x1="55" y1="70" x2="105" y2="45" />
            <line x1="105" y1="45" x2="150" y2="90" />
            <line x1="55" y1="70" x2="80" y2="130" />
            <line x1="80" y1="130" x2="140" y2="145" />
            <line x1="140" y1="145" x2="150" y2="90" />
            <line x1="105" y1="45" x2="80" y2="130" />
          </g>
          {[
            [55, 70],
            [105, 45],
            [150, 90],
            [80, 130],
            [140, 145],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="3.2"
              className="fill-primary animate-pulse-soft"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="glass animate-float-slow absolute -top-1 left-0 rounded-2xl px-4 py-3 font-mono text-xs" style={{ animationDelay: "-3s" }}>
        <span className="text-muted-foreground">def</span>{" "}
        <span className="text-gradient font-semibold">learn</span>
        <span className="text-muted-foreground">():</span>
      </div>
      <div
        className="glass animate-float-slow absolute right-0 bottom-6 rounded-2xl px-4 py-3 font-mono text-xs"
        style={{ animationDelay: "-6s" }}
      >
        <span className="text-muted-foreground">{"<"}</span>
        <span className="text-gradient font-semibold">FullStack</span>
        <span className="text-muted-foreground">{" />"}</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p
            className="animate-rise glass-soft text-muted-foreground inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs"
            style={{ animationDelay: "80ms" }}
          >
            <Sparkles className="text-primary h-3.5 w-3.5" />
            Second-year B.Tech AIML student · Dehradun
          </p>

          <h1
            className="animate-rise mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-[4.2rem]"
            style={{ animationDelay: "160ms" }}
          >
            MOHD RAZI
            <br />
            <span className="text-gradient">CHAUDHARY</span>
          </h1>

          <p
            className="animate-rise text-foreground/80 mt-5 text-base font-medium sm:text-lg"
            style={{ animationDelay: "260ms" }}
          >
            B.Tech AIML Student <span className="text-muted-foreground">|</span> Aspiring
            Full-Stack &amp; AI/ML Engineer
          </p>

          <p
            className="animate-rise text-muted-foreground mt-3 max-w-xl text-base"
            style={{ animationDelay: "320ms" }}
          >
            “Building toward full-stack engineering with applied AI/ML integration.”
          </p>

          <p
            className="animate-rise text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed"
            style={{ animationDelay: "380ms" }}
          >
            Right now I&apos;m strengthening my Python fundamentals — data structures,
            OOP and problem solving — while moving steadily toward React, backend
            development and AI-integrated full-stack projects.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "460ms" }}
          >
            <a
              href="#projects"
              className="bg-brand text-primary-foreground lift inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="glass lift text-foreground inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground group inline-flex items-center justify-center gap-1 px-1 py-2 text-sm font-medium transition-colors"
            >
              Let&apos;s Connect
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="animate-rise" style={{ animationDelay: "560ms" }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
