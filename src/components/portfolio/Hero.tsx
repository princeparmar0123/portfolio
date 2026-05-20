import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const titles = [
  "Flutter Developer",
  "Mobile App Developer",
  "Android Developer",
  "Cross-Platform Engineer",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % titles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-[28rem] h-[28rem] bg-[oklch(0.5_0.25_290)] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob" />
        <div className="absolute top-1/3 -right-20 w-[28rem] h-[28rem] bg-[oklch(0.5_0.25_240)] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] bg-[oklch(0.55_0.22_310)] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob [animation-delay:-12s]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-muted-foreground mb-8"
        >
          <Sparkles size={14} className="text-[oklch(0.75_0.2_290)]" />
          Open to full-time job opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight"
        >
          <span className="block text-white/90">Prince</span>
          <span className="block text-gradient">Parmar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 h-9 sm:h-10 relative overflow-hidden"
        >
          {titles.map((t, i) => (
            <motion.p
              key={t}
              initial={false}
              animate={{
                y: i === idx ? 0 : i < idx ? -40 : 40,
                opacity: i === idx ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 text-lg sm:text-2xl font-medium text-white/80"
            >
              {t}
            </motion.p>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Flutter Developer with{" "}
          <span className="text-white font-semibold">4+ years</span> of
          experience building scalable enterprise and startup applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-medium glow-purple hover:scale-105 transition-all"
          >
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-strong text-white font-medium hover:bg-white/10 transition-all"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
