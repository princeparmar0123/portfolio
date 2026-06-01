import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const skillGroups = [
  {
    title: "Mobile",
    description: "Cross-platform and native Android",
    skills: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Jetpack Compose",
      "Java",
      "Android",
    ],
  },
  {
    title: "Backend & data",
    description: "APIs, realtime, and databases",
    skills: ["Firebase", "REST APIs", "Socket.io", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Architecture",
    description: "Structure, patterns, and delivery",
    skills: ["Clean Architecture", "MVVM", "CI/CD", "GitHub"],
  },
  {
    title: "Payments",
    description: "In-app and web checkout flows",
    skills: ["Razorpay", "Stripe"],
  },
  {
    title: "AI",
    description: "Intelligent product features",
    skills: ["AI", "AI Chatbot"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I work with"
          subtitle="Grouped by what I use most often on real projects."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="card-surface flex flex-col p-5 sm:p-6"
            >
              <div className="mb-4 border-b border-border pb-4">
                <h3 className="font-semibold text-foreground">{group.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <ul className="flex flex-1 flex-wrap content-start gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-md bg-muted px-2.5 py-1 text-sm font-medium text-foreground ring-1 ring-inset ring-border">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick scan row — core stack */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mt-6 card-surface p-5 sm:p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Core focus
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <span className="font-medium text-foreground">Flutter</span>
            {" · "}
            <span className="font-medium text-foreground">Kotlin</span>
            {" · "}
            <span className="font-medium text-foreground">Firebase</span>
            {" · "}
            <span className="font-medium text-foreground">REST APIs</span>
            {" · "}
            <span className="font-medium text-foreground">Payments</span>
            {" · "}
            <span className="font-medium text-foreground">AI features</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
