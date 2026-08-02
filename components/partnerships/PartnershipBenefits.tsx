"use client";

import { motion } from "framer-motion";
import {
  Users,
  FlaskConical,
  Megaphone,
  Settings2,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { partnershipBenefits } from "@/data/partnership";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  Users,
  FlaskConical,
  Megaphone,
  Settings2,
  Rocket,
  HeartHandshake,
};

export default function PartnershipBenefits() {
  return (
    <section className="bg-navy py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Partner With Us"
          title="What Partners Gain"
          dark
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnershipBenefits.map((benefit, i) => {
            const Icon = ICONS[benefit.icon];
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="rounded-xl2 border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
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
