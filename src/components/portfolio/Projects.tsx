import { motion } from "motion/react";
import { ExternalLink, Smartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import biztosoImg from "../../../assets/biztoso.jpeg";
import eventEliteImg from "../../../assets/eventelite.png";
import anavasiImg from "../../../assets/anavasi.jpeg";
import agriImg from "../../../assets/agri.png";
import kswiftImg from "../../../assets/kswift.png";
import driveNowImg from "../../../assets/drivenow.webp";

const projects = [
  {
    title: "Biztoso: Friends & Local",
    tech: ["Kotlin", "Firebase", "Real-time Chat"],
    description:
      "Friends-first social app where the default feed shows only posts from people you know. Hyperlocal discovery for city-wise posts and communities.",
    imageUrl: biztosoImg,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.biztoso.app",
  },
  {
    title: "Event Elite",
    tech: ["Kotlin", "Stripe"],
    description:
      "Event ticketing platform where admins publish events, attendees purchase tickets in-app, and organizers track sales and transactions.",
    imageUrl: eventEliteImg,
    liveDemoUrl: "https://eventelite.org/",
  },
  {
    title: "Anavasi mapp",
    tech: ["Flutter", "GPS", "In-App Purchase"],
    description:
      "Offline topo map viewer for Greece hiking routes with GPS, custom waypoints, difficulty-coded trails, and emergency SMS.",
    imageUrl: anavasiImg,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=gr.anavasieditions.pavla.anavasimapp&hl=en",
    appStoreUrl:
      "https://apps.apple.com/in/app/anavasi-mapp-hiking-maps/id1576403755",
  },
  {
    title: "Agri Tech Solution",
    tech: ["Flutter", "REST APIs", "Payments"],
    description:
      "Agricultural marketplace for certified inputs with secure checkout, delivery tracking, and multilingual support.",
    imageUrl: agriImg,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.agriorganic&hl=en",
    appStoreUrl:
      "https://apps.apple.com/in/app/agri-tech-solution/id6753874470",
  },
  {
    title: "Kswift Services",
    tech: ["Flutter", "Firebase", "Real-time Tracking"],
    description:
      "Vehicle service platform with verified mechanics, live updates, transparent pricing, and doorstep pickup.",
    imageUrl: kswiftImg,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.kswiftservice&hl=en",
  },
  {
    title: "Drive Now",
    tech: ["Flutter", "Razorpay", "UPI"],
    description:
      "Self-drive car rental for Ahmedabad with smart filters, doorstep delivery, UPI payments, and trip scheduling.",
    imageUrl: driveNowImg,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.freedomride&hl=en_IN",
    appStoreUrl:
      "https://apps.apple.com/in/app/drive-now-self-drive-cars/id6749510159",
  },
];

function ProjectLinks({
  p,
}: {
  p: (typeof projects)[number];
}) {
  const hasStore =
    ("playStoreUrl" in p && p.playStoreUrl) ||
    ("appStoreUrl" in p && p.appStoreUrl);
  const hasDemo = "liveDemoUrl" in p && p.liveDemoUrl;

  if (!hasStore && !hasDemo) return null;

  return (
    <div className="flex flex-wrap gap-4">
      {hasDemo && (
        <a
          href={p.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent inline-flex items-center gap-1.5"
        >
          <ExternalLink size={14} />
          Live demo
        </a>
      )}
      {"playStoreUrl" in p && p.playStoreUrl ? (
        <a
          href={p.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent inline-flex items-center gap-1.5"
        >
          <Smartphone size={14} />
          Google Play
        </a>
      ) : null}
      {"appStoreUrl" in p && p.appStoreUrl ? (
        <a
          href={p.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent inline-flex items-center gap-1.5"
        >
          <Smartphone size={14} />
          App Store
        </a>
      ) : null}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Shipped products"
          subtitle="Flutter and Android apps I've built — live on Play Store, App Store, and in production."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className="card-surface group overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <ProjectLinks p={p} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
