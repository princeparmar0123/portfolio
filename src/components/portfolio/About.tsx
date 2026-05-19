import { motion } from "motion/react";
import { Code2, Rocket, Shield } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  { icon: Code2, label: "Clean Architecture", desc: "Scalable, maintainable codebases." },
  { icon: Rocket, label: "Performance", desc: "Optimized 60fps mobile apps." },
  { icon: Shield, label: "Secure", desc: "Hardened payments & auth flows." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="Building products people love" />
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[oklch(0.5_0.25_290)] rounded-full blur-3xl opacity-20" />
            <p className="text-lg text-white/85 leading-relaxed">
              I'm a <span className="text-gradient font-semibold">Flutter Developer</span> with 4+ years
              of experience building scalable, secure, and high-performance mobile
              and web applications for startups and enterprise clients.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I specialize in Flutter, Kotlin, Firebase, REST APIs, payment
              gateway integrations, real-time chat systems, Clean Architecture,
              and scalable mobile application development.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 flex items-start gap-4 hover:bg-white/[0.06] transition-colors"
              >
                <div className="size-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 glow-purple">
                  <h.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{h.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
