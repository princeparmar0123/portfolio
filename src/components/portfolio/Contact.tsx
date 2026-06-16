import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "./SectionHeading";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "princeparmar0234@gmail.com",
    href: "mailto:princeparmar0234@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9016455487",
    href: "tel:+919016455487",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@princeparmar0123",
    href: "https://github.com/princeparmar0123",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "prince-p",
    href: "https://linkedin.com/in/prince-p-8a8505229",
    external: true,
  },
];

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
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
      | string
      | undefined;

    if (!accessKey?.trim()) {
      setStatus("error");
      setErrorText(
        "Contact form is not configured. Email me directly at princeparmar0234@gmail.com.",
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
    <section id="contact" className="section-alt py-20 sm:py-28 px-5 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Open to Android, Flutter, and mobile engineering roles."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-3 lg:col-span-2"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="card-surface flex items-center gap-4 p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <c.icon size={18} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="truncate text-sm font-medium text-foreground">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.08 }}
            onSubmit={handleSubmit}
            className="card-surface space-y-4 p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="input-field"
              />
              <input
                required
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="input-field"
              />
            </div>
            <input
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="input-field"
            />
            <textarea
              required
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about the role or project…"
              className="input-field resize-none"
            />
            {status === "error" && errorText ? (
              <p className="text-sm text-destructive" role="alert">
                {errorText}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === "success"
                ? "Message sent"
                : status === "sending"
                  ? "Sending…"
                  : "Send message"}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
