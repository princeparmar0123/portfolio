import { motion } from "motion/react";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Biztoso: Friends & Local",
    tech: ["Kotlin", "Firebase", "Real-time Chat"],
    description:
      "Friends-first social app where the default feed shows only posts from people you know. Hyperlocal discovery for city-wise posts and communities, with reactions, stories, and in-app purchases.",
    gradient: "from-fuchsia-500/30 to-purple-500/30",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.biztoso.app&hl=en_IN",
  },
  {
    title: "Event Elite",
    tech: ["Kotlin", "Stripe"],
    description:
      "Event ticketing platform where admins create and publish events, attendees browse and purchase tickets in-app, and organizers track sales, payouts, and transaction history in one place.",
    gradient: "from-rose-500/30 to-indigo-500/30",
  },
  {
    title: "Anavasi mapp",
    tech: ["Flutter", "GPS", "In-App Purchase"],
    description:
      "Offline topo map viewer for Greece hiking and touring routes. GPS positioning without network, custom waypoints with photos, difficulty-coded trails, and emergency SMS with live coordinates.",
    gradient: "from-emerald-500/30 to-teal-500/30",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=gr.anavasieditions.pavla.anavasimapp&hl=en",
  },
  {
    title: "Agri Tech Solution",
    tech: ["Flutter", "REST APIs", "Payments"],
    description:
      "Agricultural marketplace helping farmers order certified pesticides, fertilizers, and growth products from verified suppliers—with secure checkout, delivery tracking, and multilingual support.",
    gradient: "from-lime-500/30 to-green-500/30",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.agriorganic&hl=en",
  },
  {
    title: "Kswift Services",
    tech: ["Flutter", "Firebase", "Real-time Tracking"],
    description:
      "Vehicle service platform connecting drivers with verified mechanics. Live service updates with photos, transparent pricing, genuine spare parts, and doorstep pickup and drop for cars and bikes.",
    gradient: "from-orange-500/30 to-amber-500/30",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.kswiftservice&hl=en",
  },

  {
    title: "Drive Now",
    tech: ["Flutter", "Razorpay", "UPI"],
    description:
      "Self-drive car rental platform for Ahmedabad. Smart filters, doorstep delivery and pickup, seamless UPI and card payments, trip scheduling, and 24/7 support for renters and car hosts.",
    gradient: "from-violet-500/30 to-blue-500/30",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.freedomride&hl=en_IN",
  },
 
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          subtitle="A glimpse of the products I've helped design, build & ship."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-strong hover:bg-white/[0.06] transition-all"
            >
              {/* Image placeholder */}
              <div
                className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.gradient}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-6xl font-bold text-white/15 group-hover:scale-110 transition-transform duration-700">
                    {p.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>

              <div className="p-6 relative">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.22_290)] to-transparent opacity-40" />
                <h3 className="font-semibold text-xl text-white mb-2 group-hover:text-gradient transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md glass text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {"playStoreUrl" in p && p.playStoreUrl ? (
                    <a
                      href={p.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white hover:text-gradient transition-colors"
                    >
                      <Smartphone size={14} /> Google Play
                    </a>
                  ) : (
                    <>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-sm text-white hover:text-gradient transition-colors"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-sm text-white hover:text-gradient transition-colors"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    </>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{
                boxShadow: "0 0 60px -10px oklch(0.65 0.25 290 / 0.5)"
              }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
