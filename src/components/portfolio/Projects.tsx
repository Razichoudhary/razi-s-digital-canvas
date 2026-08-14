import { Github, ExternalLink, Hammer } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export type Project = {
  category: string;
  title?: string;
  description?: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  inDevelopment?: boolean;
};

// Real projects can simply be appended here once they're ready.
const PROJECTS: Project[] = [
  {
    category: "Python Project",
    tags: ["Python", "OOP", "Data Structures"],
    inDevelopment: true,
  },
  {
    category: "Web Development Project",
    tags: ["HTML", "CSS", "JavaScript"],
    inDevelopment: true,
  },
  {
    category: "AI/ML Project",
    tags: ["Python", "AI/ML Fundamentals"],
    inDevelopment: true,
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="glass gradient-ring lift group flex h-full flex-col rounded-2xl p-6">
        <div
          aria-hidden
          className="relative mb-5 h-32 overflow-hidden rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.62 0.2 264 / 18%), oklch(0.62 0.22 305 / 14%))",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title ?? project.category}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-primary/60 absolute inset-0 grid place-items-center">
              <Hammer className="animate-pulse-soft h-7 w-7" />
            </span>
          )}
        </div>

        <p className="text-primary font-mono text-[11px] tracking-[0.18em] uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">
          {project.title ?? "Project in Development"}
        </h3>
        <p className="text-muted-foreground mt-2 text-sm">
          {project.description ?? "Currently building."}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="glass-soft text-foreground/80 rounded-lg px-2.5 py-1 text-xs"
            >
              {t}
            </li>
          ))}
        </ul>

        {(project.github || project.demo) && (
          <div className="mt-5 flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="glass-soft inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="bg-brand text-primary-foreground inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live Demo
              </a>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Work"
        title="Featured Projects"
        description="Projects coming soon — currently building and documenting projects across Python, web development and AI/ML."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.category} project={p} delay={i * 90} />
        ))}
      </div>
    </Section>
  );
}
