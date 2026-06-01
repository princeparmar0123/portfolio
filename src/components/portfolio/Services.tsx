import { motion } from "motion/react";
import {
  Smartphone,
  Layers,
  Cloud,
  MessageSquare,
  CreditCard,
  Plug,
  Upload,
  AppWindow,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Smartphone,
    title: "Flutter development",
    desc: "Cross-platform apps with a native feel.",
  },
  {
    icon: AppWindow,
    title: "Android development",
    desc: "Kotlin and Jetpack for modern Android.",
  },
  {
    icon: Layers,
    title: "Cross-platform",
    desc: "One codebase for iOS, Android, and web.",
  },
  {
    icon: Cloud,
    title: "Firebase",
    desc: "Auth, Firestore, Cloud Functions, Analytics.",
  },
  {
    icon: MessageSquare,
    title: "Real-time chat",
    desc: "Socket.io and push notification systems.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    desc: "Razorpay, Stripe, and Flutterwave integration.",
  },
  {
    icon: Plug,
    title: "API integration",
    desc: "REST and GraphQL with clean data layers.",
  },
  {
    icon: Upload,
    title: "Store deployment",
    desc: "Play Store and App Store releases.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-alt py-20 sm:py-28 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Services" title="How I can help" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
              className="card-surface p-5"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent">
                <s.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
