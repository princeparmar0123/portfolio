import { motion } from "motion/react";
import {
  Smartphone, Layers, Cloud, MessageSquare, CreditCard, Plug, Upload, AppWindow
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Smartphone, title: "Flutter App Development", desc: "Beautiful cross-platform apps with native feel." },
  { icon: AppWindow, title: "Android App Development", desc: "Modern Kotlin + Jetpack architecture." },
  { icon: Layers, title: "Cross Platform Development", desc: "One codebase. iOS, Android & web." },
  { icon: Cloud, title: "Firebase Integration", desc: "Auth, Firestore, Functions, Analytics." },
  { icon: MessageSquare, title: "Real-time Chat Systems", desc: "Socket.io & FCM powered messaging." },
  { icon: CreditCard, title: "Payment Gateway Integration", desc: "Razorpay, Stripe, Flutterwave." },
  { icon: Plug, title: "API Integration", desc: "REST & GraphQL with clean data layers." },
  { icon: Upload, title: "App Deployment", desc: "Play Store & App Store releases." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Services I offer"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative glass-strong rounded-2xl p-6 overflow-hidden hover:bg-white/[0.06] transition-colors"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="relative size-11 rounded-xl glass flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all">
                <s.icon size={20} className="text-white" />
              </div>
              <h3 className="relative font-semibold text-white mb-1.5">{s.title}</h3>
              <p className="relative text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
