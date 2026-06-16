import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const experience = [
  {
    company: "Biztoso Technology Private Limited",
    role: "Android & Flutter Developer",
    duration: "Oct 2025 – Present",
    current: true,
    points: [
      "Lead Android development with Kotlin, MVVM, and Jetpack Compose.",
      "Integrated real-time chat and analytics systems.",
      "Worked with enterprise architecture and Jetpack components.",
    ],
  },
  {
    company: "Saturncube Technology",
    role: "Android & Flutter Developer",
    duration: "Nov 2024 – Oct 2025",
    points: [
      "Built scalable Flutter applications.",
      "Integrated Firebase, payment gateways, and real-time features.",
      "Worked with UI/UX teams for responsive applications.",
    ],
  },
  {
    company: "Myriad Solution",
    role: "Android & Flutter Developer",
    duration: "Aug 2023 – Aug 2024",
    points: [
      "Developed Flutter apps for Android and iOS.",
      "Integrated APIs and cloud services.",
      "Optimized app performance using Firebase Crashlytics.",
    ],
  },
  {
    company: "iAppstack Solution",
    role: "Android & Flutter Developer",
    duration: "Jan 2022 – Mar 2023",
    points: [
      "Built scalable Flutter applications.",
      "Implemented push notifications and deep linking.",
      "Managed Play Store deployments.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-alt py-20 sm:py-28 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="4+ years across Android and Flutter roles at product teams, agencies, and startups."
        />

        <div className="relative">
          {/* Vertical connector — desktop */}
          <div
            className="absolute left-[1.125rem] top-3 bottom-3 hidden w-px bg-border sm:block"
            aria-hidden
          />

          <ul className="space-y-4">
            {experience.map((exp, i) => (
              <motion.li
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06 }}
                className="relative sm:pl-12"
              >
                {/* Timeline node */}
                <span
                  className={`absolute left-0 top-7 hidden size-[0.625rem] rounded-full sm:block ${
                    exp.current
                      ? "bg-primary ring-4 ring-primary/20"
                      : "border-2 border-primary bg-background"
                  }`}
                  aria-hidden
                />

                <article
                  className={`card-surface overflow-hidden ${
                    exp.current ? "border-primary/40" : ""
                  }`}
                >
                  {exp.current && (
                    <div className="border-b border-border bg-accent px-5 py-2 text-xs font-medium text-primary">
                      Current role
                    </div>
                  )}

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold leading-snug text-foreground">
                          {exp.company}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary">
                          {exp.role}
                        </p>
                      </div>
                      <time
                        dateTime={exp.duration}
                        className="shrink-0 self-start rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {exp.duration}
                      </time>
                    </div>

                    <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                      {exp.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
