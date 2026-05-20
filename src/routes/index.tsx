import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";

const About = lazy(() =>
  import("@/components/portfolio/About").then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import("@/components/portfolio/Skills").then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import("@/components/portfolio/Experience").then((m) => ({
    default: m.Experience,
  })),
);
const Projects = lazy(() =>
  import("@/components/portfolio/Projects").then((m) => ({
    default: m.Projects,
  })),
);
const Services = lazy(() =>
  import("@/components/portfolio/Services").then((m) => ({
    default: m.Services,
  })),
);
const Stats = lazy(() =>
  import("@/components/portfolio/Stats").then((m) => ({ default: m.Stats })),
);
const Contact = lazy(() =>
  import("@/components/portfolio/Contact").then((m) => ({
    default: m.Contact,
  })),
);
const Footer = lazy(() =>
  import("@/components/portfolio/Footer").then((m) => ({ default: m.Footer })),
);

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Prince Parmar — Flutter & Mobile App Developer" },
      {
        name: "description",
        content:
          "Prince Parmar — Flutter Developer with 4+ years building scalable mobile and web applications for startups and enterprise clients.",
      },
      { property: "og:title", content: "Prince Parmar — Flutter Developer" },
      {
        property: "og:description",
        content:
          "Premium Flutter, Android & cross-platform mobile development. View projects, experience and get in touch.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-app text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Stats />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
