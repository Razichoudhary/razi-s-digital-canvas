import { createFileRoute } from "@tanstack/react-router";

import { Background } from "@/components/portfolio/Background";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Journey } from "@/components/portfolio/Journey";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Mohd Razi Chaudhary | AIML Student & Aspiring Full-Stack Engineer";
const DESCRIPTION =
  "Portfolio of Mohd Razi Chaudhary, a B.Tech Artificial Intelligence & Machine Learning student building toward full-stack engineering and AI-integrated applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: "Mohd Razi Chaudhary" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohd Razi Chaudhary",
          email: "mailto:razigour06@gmail.com",
          telephone: "+91-8439677875",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dehradun",
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "JB Institute of Technology, Dehradun",
          },
          sameAs: ["https://www.linkedin.com/in/razi-chaudhary"],
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
