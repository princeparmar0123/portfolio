import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "./SectionHeading";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const accessKey = "b592b2f3-81ad-4060-bc17-c0e6617e5aab";

    if (!accessKey?.trim()) {
      setStatus("error");
      setErrorText(
        "Add VITE_WEB3FORMS_ACCESS_KEY to your .env file (see .env.example). Get a free key at web3forms.com.",
      );
      return;
    }

    setStatus("sending");
    setErrorText("");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          subject: subject.trim() || `Portfolio: message from ${name.trim()}`,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorText(
          data.message ?? "Something went wrong. Try email or phone instead.",
        );
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setErrorText("Network error. Check your connection and try again.");
    }
  }

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
              href="tel:+919016455487"
              className="relative group flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/[0.06] transition-colors"
            >
              <div className="size-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-purple">
                <Phone size={18} className="text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="text-sm text-white truncate">
                  +91 9016455487
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
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="bg-white/5 border border-white/10 focus:border-[oklch(0.65_0.22_290)] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors"
              />
              <input
                required
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-white/5 border border-white/10 focus:border-[oklch(0.65_0.22_290)] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors"
              />
            </div>
            <input
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full bg-white/5 border border-white/10 focus:border-[oklch(0.65_0.22_290)] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors"
            />
            <textarea
              required
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 focus:border-[oklch(0.65_0.22_290)] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground resize-none transition-colors"
            />
            {status === "error" && errorText ? (
              <p className="text-sm text-red-400/90" role="alert">
                {errorText}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-medium glow-purple hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:pointer-events-none disabled:hover:scale-100"
            >
              {status === "success"
                ? "Message sent!"
                : status === "sending"
                  ? "Sending…"
                  : "Send Message"}
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
