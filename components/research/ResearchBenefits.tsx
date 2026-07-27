"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileText,
  Presentation,
  Banknote,
  TrendingUp,
  Network,
  FlaskConical,
  Rocket,
} from "lucide-react";
import { researchBenefits } from "@/data/research-benefits";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  Users,
  FileText,
  Presentation,
  Banknote,
  TrendingUp,
  Network,
  FlaskConical,
  Rocket,
};

export default function ResearchBenefits() {
  return (
    <section className="bg-navy py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Benefits of Joining Research"
          title="What Researchers Gain"
          dark
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchBenefits.map((benefit, i) => {
            const Icon = ICONS[benefit.icon];
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="rounded-xl2 border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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
