import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Strong Programming Foundations",
    body: "Python, Data Structures, OOP fundamentals",
  },
  { n: "02", title: "Modern Web Development", body: "HTML, CSS, JavaScript" },
  {
    n: "03",
    title: "Full-Stack Development",
    body: "React, FastAPI / Django, SQL, REST APIs",
  },
  { n: "04", title: "AI + Full-Stack", body: "Building AI-integrated applications" },
  {
    n: "05",
    title: "Internship Ready",
    body: "Preparing projects and skills for internship opportunities",
  },
];

export function Journey() {
  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="Current journey"
        title="What I'm Building Toward"
        description="A deliberate path from fundamentals to AI-integrated full-stack engineering."
      />

      <div className="relative mt-14 pl-6 sm:pl-0">
        <div
          aria-hidden
          className="bg-brand absolute top-0 bottom-0 left-[7px] w-[2px] rounded-full opacity-50 sm:left-1/2 sm:-translate-x-1/2"
        />
        <ol className="space-y-10">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative sm:grid sm:grid-cols-2 sm:gap-12">
              <Reveal
                delay={i * 90}
                className={
                  i % 2 === 0
                    ? "sm:col-start-1 sm:pr-4 sm:text-right"
                    : "sm:col-start-2 sm:pl-4"
                }
              >
                <div className="glass gradient-ring lift rounded-2xl p-5 sm:p-6">
                  <span className="text-gradient font-mono text-sm font-bold">{s.n}</span>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{s.body}</p>
                </div>
              </Reveal>
              <span
                aria-hidden
                className="bg-brand glow-brand absolute top-6 -left-6 h-4 w-4 rounded-full ring-4 ring-[var(--background)] sm:left-1/2 sm:-translate-x-1/2"
              />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
