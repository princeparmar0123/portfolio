import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Drive Now",
    tech: ["Flutter", "Razorpay"],
    description:
      "Booking and trip management application with secure payment integration.",
    gradient: "from-violet-500/30 to-blue-500/30",
  },
  {
    title: "Figtion App",
    tech: ["Flutter", "Unity", "REST APIs"],
    description: "Integrated Unity modules and secure API communication.",
    gradient: "from-fuchsia-500/30 to-purple-500/30",
  },
  {
    title: "Enterprise Chat App",
    tech: ["Flutter", "Firebase", "Socket.io"],
    description: "Real-time communication and enterprise chat system.",
    gradient: "from-cyan-500/30 to-blue-500/30",
  },
  {
    title: "Athlete Gate",
    tech: ["Flutter", "Firebase"],
    description: "Sports booking and management platform.",
    gradient: "from-emerald-500/30 to-cyan-500/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          subtitle="A glimpse of the products I've helped design, build & ship."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-strong hover:bg-white/[0.06] transition-all"
            >
              {/* Image placeholder */}
              <div
                className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.gradient}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-6xl font-bold text-white/15 group-hover:scale-110 transition-transform duration-700">
                    {p.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>

              <div className="p-6 relative">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.22_290)] to-transparent opacity-40" />
                <h3 className="font-semibold text-xl text-white mb-2 group-hover:text-gradient transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md glass text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm text-white hover:text-gradient transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm text-white hover:text-gradient transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{
                boxShadow: "0 0 60px -10px oklch(0.65 0.25 290 / 0.5)"
              }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
