import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Background" title="Education" />

      <div className="relative mt-12 pl-8">
        <span
          aria-hidden
          className="bg-brand absolute top-2 bottom-2 left-[7px] w-[2px] rounded-full opacity-50"
        />
        <span
          aria-hidden
          className="bg-brand glow-brand absolute top-7 left-0 h-4 w-4 rounded-full ring-4 ring-[var(--background)]"
        />
        <Reveal>
          <article className="glass gradient-ring lift rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="glass-soft text-primary grid h-12 w-12 shrink-0 place-items-center rounded-2xl">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight">
                  JB Institute of Technology
                </h3>
                <p className="text-gradient mt-1 text-sm font-medium">
                  B.Tech — Artificial Intelligence &amp; Machine Learning
                </p>
                <div className="text-muted-foreground mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Dehradun, Uttarakhand
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" /> Second Year · Expected 2029
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
