"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  ShieldCheck,
  Users,
  Handshake,
  Award,
  HeartHandshake,
} from "lucide-react";
import { coreValues } from "@/data/values";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  Lightbulb,
  Target,
  ShieldCheck,
  Users,
  Handshake,
  Award,
  HeartHandshake,
};

export default function CoreValues() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our Core Values"
          description="Seven principles that shape every program, research project, and partnership we build."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) => {
            const Icon = ICONS[value.icon];
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="group rounded-xl2 border border-paper-line bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
