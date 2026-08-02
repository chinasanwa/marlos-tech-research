"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Landmark,
  Building2,
  HeartHandshake,
  Globe2,
  Rocket,
} from "lucide-react";
import { partnerCategories } from "@/data/partner-categories";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  GraduationCap,
  Landmark,
  Building2,
  HeartHandshake,
  Globe2,
  Rocket,
};

export default function IndustryCollaboration() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industry Collaboration"
          title="Research Built Through Partnership"
          description="Our research gains rigor and relevance from partners across sectors who bring real problems, data, and deployment opportunities."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerCategories.map((partner, i) => {
            const Icon = ICONS[partner.icon];
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="rounded-xl2 border border-paper-line bg-white p-6 text-center shadow-card transition-shadow hover:shadow-cardHover"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {partner.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {partner.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
