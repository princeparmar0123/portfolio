import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const skills = [
  "Flutter", "Dart", "Kotlin", "Jetpack Compose", "Java", "Firebase", "REST APIs",
  "Socket.io", "Clean Architecture", "MVVM", "Android", "CI/CD",
  "GitHub", "PostgreSQL", "MongoDB", "Payment Gateway", "Razorpay", "Flutterwave",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build with"
          subtitle="A curated stack refined across enterprise & startup projects."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.03, type: "spring", stiffness: 200 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
              <div className="relative px-5 py-2.5 glass rounded-xl text-sm font-medium text-white/85 group-hover:text-white">
                {s}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
