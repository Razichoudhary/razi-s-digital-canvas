import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "razigour06@gmail.com",
    href: "mailto:razigour06@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "8439677875", href: "tel:+918439677875" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/razi-chaudhary",
    href: "https://www.linkedin.com/in/razi-chaudhary",
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something"
        description="I'm open to opportunities where I can learn, contribute and grow through real-world projects."
        className="mx-auto text-center"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {CONTACTS.map(({ icon: Icon, label, value, href, external }, i) => (
          <Reveal key={label} delay={i * 90}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              aria-label={`${label}: ${value}`}
              className="glass gradient-ring lift group flex h-full items-start gap-4 rounded-2xl p-6"
            >
              <span className="glass-soft text-primary grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="text-muted-foreground block font-mono text-[11px] tracking-[0.18em] uppercase">
                  {label}
                </span>
                <span className="mt-1 block truncate text-sm font-medium">{value}</span>
              </span>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground ml-auto h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
