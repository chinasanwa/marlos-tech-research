"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Landmark,
  School,
  HeartHandshake,
  Building2,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { partnershipCategories } from "@/data/partnership";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  GraduationCap,
  Landmark,
  School,
  HeartHandshake,
  Building2,
  TrendingUp,
  Cpu,
};

export default function PartnerCategories() {
  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Who We Partner With"
          title="Partnership Categories"
          description="We work with organizations across sectors who share our commitment to building African technical capacity."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipCategories.map((category, i) => {
            const Icon = ICONS[category.icon];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                className="rounded-xl2 border border-paper-line bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
