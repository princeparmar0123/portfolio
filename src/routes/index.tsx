import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Stats } from "@/components/portfolio/Stats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

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
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
