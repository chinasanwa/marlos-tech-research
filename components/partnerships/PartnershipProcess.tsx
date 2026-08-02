"use client";

import { motion } from "framer-motion";
import { MessageSquare, Compass, FileSignature, Rocket } from "lucide-react";
import { partnershipProcess } from "@/data/partnership";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  MessageSquare,
  Compass,
  FileSignature,
  Rocket,
};

export default function PartnershipProcess() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple Partnership Process"
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipProcess.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-xl2 border border-paper-line bg-white p-6 shadow-card"
              >
                <span className="font-mono text-xs text-accent">{step.step}</span>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
