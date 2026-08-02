"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  FolderKanban,
  BadgeCheck,
  Users,
  Building2,
  Network,
  TrendingUp,
  FlaskConical,
} from "lucide-react";
import { programBenefits } from "@/data/programs-content";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  Wrench,
  FolderKanban,
  BadgeCheck,
  Users,
  Building2,
  Network,
  TrendingUp,
  FlaskConical,
};

export default function ProgramBenefits() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Program Benefits"
          title="What Every Program Includes"
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programBenefits.map((benefit, i) => {
            const Icon = ICONS[benefit.icon];
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="rounded-xl2 border border-paper-line bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
