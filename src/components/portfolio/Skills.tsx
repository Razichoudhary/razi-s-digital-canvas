import { Code2, Globe, BrainCircuit, Wrench, Compass } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const CURRENT = [
  {
    icon: Code2,
    title: "Programming",
    desc: "Core language and problem-solving foundations.",
    items: ["Python", "Data Structures", "OOP Fundamentals"],
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Building and styling interfaces from scratch.",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    desc: "Foundational coursework through B.Tech AIML.",
    items: ["AI/ML Fundamentals"],
  },
  {
    icon: Wrench,
    title: "Tools",
    desc: "Everyday development workflow.",
    items: ["Git", "GitHub", "VS Code"],
  },
];

const LEARNING = ["React", "FastAPI", "Django", "SQL", "REST APIs"];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & Technologies"
        description="An honest snapshot: what I work with today, and what I'm actively learning next."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CURRENT.map(({ icon: Icon, title, desc, items }, i) => (
          <Reveal key={title} delay={i * 80}>
            <article className="glass gradient-ring lift group h-full rounded-2xl p-6">
              <span className="glass-soft text-primary grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{title}</h3>
              <p className="text-muted-foreground mt-1.5 text-xs leading-relaxed">{desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((it) => (
                  <li
                    key={it}
                    className="glass-soft text-foreground/80 rounded-lg px-2.5 py-1 text-xs"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-6">
        <article className="glass gradient-ring rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="glass-soft text-secondary grid h-11 w-11 shrink-0 place-items-center rounded-xl">
              <Compass className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-semibold tracking-tight">
                Currently Exploring
              </h3>
              <p className="text-muted-foreground mt-1.5 text-xs">
                Technologies I&apos;m learning now — not yet production experience.
              </p>
              <ul className="scrollbar-none mt-4 flex gap-2 overflow-x-auto pb-1">
                {LEARNING.map((it) => (
                  <li
                    key={it}
                    className="glass-soft text-foreground/80 shrink-0 rounded-lg px-3 py-1.5 text-xs"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
