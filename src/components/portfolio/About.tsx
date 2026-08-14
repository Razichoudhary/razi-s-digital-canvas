import { GraduationCap, CalendarDays, MapPin, Layers } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const FACTS = [
  { icon: GraduationCap, label: "Education", value: "B.Tech — Artificial Intelligence & Machine Learning" },
  { icon: Layers, label: "Current Year", value: "Second Year" },
  { icon: CalendarDays, label: "Expected Graduation", value: "2029" },
  { icon: MapPin, label: "Location", value: "Dehradun, Uttarakhand" },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Introduction" title="About Me" />
          <Reveal delay={80} className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
            <p>
              I&apos;m a second-year B.Tech student specializing in Artificial
              Intelligence &amp; Machine Learning at JB Institute of Technology,
              Dehradun.
            </p>
            <p>
              My focus right now is on developing strong programming fundamentals in
              Python — data structures, object-oriented design and clean problem
              solving — while expanding toward modern web development and
              AI-integrated full-stack applications.
            </p>
            <p>
              I learn by building. Every concept I pick up is aimed at one goal:
              being able to ship real, useful software that combines solid
              engineering with applied AI.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="glass gradient-ring lift rounded-3xl p-6 sm:p-8">
            <dl className="space-y-6">
              {FACTS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="glass-soft text-primary grid h-11 w-11 shrink-0 place-items-center rounded-xl">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-muted-foreground font-mono text-[11px] tracking-[0.18em] uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
