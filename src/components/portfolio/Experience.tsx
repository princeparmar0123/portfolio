import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const experience = [
  {
    company: "Biztoso Technology Private Limited",
    role: "Android Developer",
    duration: "Oct 2025 – Present",
    points: [
      "Developed scalable Android applications using Kotlin and MVVM.",
      "Integrated real-time chat and analytics systems.",
      "Worked with enterprise architecture and Jetpack components.",
    ],
  },
  {
    company: "Saturncube Technology",
    role: "Mobile App Developer",
    duration: "Oct 2024 – Oct 2025",
    points: [
      "Built scalable Flutter applications.",
      "Integrated Firebase, payment gateways, and real-time features.",
      "Worked with UI/UX teams for responsive applications.",
    ],
  },
  {
    company: "Myriad Solution",
    role: "Mobile App Developer",
    duration: "Aug 2023 – Aug 2024",
    points: [
      "Developed Flutter apps for Android and iOS.",
      "Integrated APIs and cloud services.",
      "Optimized app performance using Firebase Crashlytics.",
    ],
  },
  {
    company: "iAppstack Solution",
    role: "Mobile App Developer",
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
    <section id="experience" className="relative py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Journey" title="Experience timeline" />
        <div className="relative">
          {/* line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[oklch(0.5_0.2_270)] to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative mb-12 sm:mb-16 flex ${
                i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* dot */}
              <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 size-4 rounded-full bg-gradient-primary glow-purple ring-4 ring-[#050816]" />

              <div
                className={`pl-14 sm:pl-0 sm:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                }`}
              >
                <div className="glass-strong rounded-2xl p-6 hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-center gap-2 text-xs text-[oklch(0.75_0.2_290)] mb-2">
                    <Briefcase size={12} />
                    {exp.duration}
                  </div>
                  <h3 className="font-semibold text-white text-lg">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((p) => (
                      <li key={p} className="text-sm text-white/75 flex gap-2">
                        <span className="text-[oklch(0.75_0.2_290)] mt-1.5">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
