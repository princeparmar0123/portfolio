import { motion } from "motion/react";
import { Code2, Rocket, Shield } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  {
    icon: Code2,
    label: "Clean architecture",
    desc: "Maintainable codebases that scale with your team.",
  },
  {
    icon: Rocket,
    label: "Performance",
    desc: "Smooth 60fps experiences on real devices.",
  },
  {
    icon: Shield,
    label: "Security",
    desc: "Solid auth flows and payment integrations.",
  },
];

export function About() {
  return (
    <section id="about" className="section-alt py-20 sm:py-28 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Building products people rely on"
        />
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="card-surface lg:col-span-3 p-8 sm:p-10"
          >
            <p className="text-lg leading-relaxed text-foreground">
              I'm a{" "}
              <span className="font-semibold text-accent">mobile developer</span>{" "}
              with 4+ years building Flutter and native Android apps for startups
              and enterprise clients.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              I work across Flutter, Kotlin, Firebase, REST APIs, payments,
              real-time messaging, and store releases — from architecture through
              production support.
            </p>
          </motion.div>

          <div className="grid gap-4 lg:col-span-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08 }}
                className="card-surface flex gap-4 p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <h.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{h.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
