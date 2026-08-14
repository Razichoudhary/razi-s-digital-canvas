import { BookOpen, Rocket } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const CARDS = [
  {
    icon: BookOpen,
    heading: "Certifications & Coursework",
    title: "Currently expanding my learning portfolio",
    body: "Certifications and relevant coursework will be added as I complete them.",
    id: "certifications",
  },
  {
    icon: Rocket,
    heading: "Beyond the Code",
    title: "More to come",
    body: "Currently exploring opportunities to participate in hackathons, coding communities, competitions and open-source projects.",
    id: "beyond",
  },
];

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="In progress"
        title="Learning & Community"
        description="Two areas I'm intentionally growing into — kept honest and up to date."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {CARDS.map(({ icon: Icon, heading, title, body, id }, i) => (
          <Reveal key={id} delay={i * 100}>
            <article className="glass gradient-ring lift h-full rounded-3xl p-7 sm:p-8">
              <span className="glass-soft text-secondary grid h-12 w-12 place-items-center rounded-2xl">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-muted-foreground mt-5 font-mono text-[11px] tracking-[0.18em] uppercase">
                {heading}
              </h3>
              <p className="mt-2 text-lg font-semibold tracking-tight">{title}</p>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
