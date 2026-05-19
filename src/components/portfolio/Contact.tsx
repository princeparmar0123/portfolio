import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something great"
          subtitle="Open to full-time roles and exciting product opportunities."
        />
        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 glass-strong rounded-3xl p-7 flex flex-col gap-4 relative overflow-hidden"
          >
            <div className="absolute -bottom-24 -left-24 size-72 bg-[oklch(0.5_0.25_240)] rounded-full blur-3xl opacity-25" />
            <a
              href="mailto:princeparmar0234@gmail.com"
              className="relative group flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/[0.06] transition-colors"
            >
              <div className="size-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-purple">
                <Mail size={18} className="text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm text-white truncate">
                  princeparmar0234@gmail.com
                </div>
              </div>
            </a>
            <a
              href="https://github.com/princeparmar0123"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/[0.06] transition-colors"
            >
              <div className="size-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-purple">
                <Github size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="text-sm text-white">@princeparmar0123</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/prince-p-8a8505229"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/[0.06] transition-colors"
            >
              <div className="size-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-purple">
                <Linkedin size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-sm text-white">prince-p</div>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Your name"
                className="bg-white/5 border border-white/10 focus:border-[oklch(0.65_0.22_290)] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 focus:border-[oklch(0.65_0.22_290)] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors"
              />
            </div>
            <input
              placeholder="Subject"
              className="w-full bg-white/5 border border-white/10 focus:border-[oklch(0.65_0.22_290)] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors"
            />
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 focus:border-[oklch(0.65_0.22_290)] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground resize-none transition-colors"
            />
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-medium glow-purple hover:scale-[1.02] transition-transform"
            >
              {sent ? "Message Sent!" : "Send Message"}
              <Send
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
