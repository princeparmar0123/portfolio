import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";

const titles = [
  "Flutter Developer",
  "Mobile App Developer",
  "Android Developer",
  "Cross-Platform Engineer",
];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % titles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative border-b border-border pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage: `linear-gradient(var(--hero-grid) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Open to full-time opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Prince Parmar
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="relative mt-4 h-8 overflow-hidden sm:h-9"
          >
            {titles.map((t, i) => (
              <motion.p
                key={t}
                initial={false}
                animate={{
                  y: i === idx ? 0 : i < idx ? -32 : 32,
                  opacity: i === idx ? 1 : 0,
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute text-lg font-medium text-accent sm:text-xl"
              >
                {t}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I build reliable mobile products for startups and enterprise teams —
            with <span className="font-medium text-foreground">4+ years</span>{" "}
            shipping Flutter and native Android apps end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              View projects
              <ArrowRight size={16} />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="btn-secondary"
            >
              <Download size={16} />
              Resume
            </a>
            <a
              href={`${import.meta.env.BASE_URL}portfolio.pdf`}
              download
              className="btn-secondary"
            >
              <Download size={16} />
              Portfolio PDF
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
