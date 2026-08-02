"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Compass,
  BookOpen,
  FolderKanban,
  ClipboardCheck,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";
import { learningProcess } from "@/data/programs-content";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  ClipboardList,
  Compass,
  BookOpen,
  FolderKanban,
  ClipboardCheck,
  BadgeCheck,
  TrendingUp,
};

export default function LearningProcess() {
  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Learning Process"
          description="A consistent, structured path from registration to certification and career support, across every program."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {learningProcess.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="relative rounded-xl2 border border-paper-line bg-white p-6 shadow-card"
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
