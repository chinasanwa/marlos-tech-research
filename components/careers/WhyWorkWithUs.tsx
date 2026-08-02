"use client";

import { motion } from "framer-motion";
import { Target, BookOpen, Users, TrendingUp } from "lucide-react";
import { whyWorkWithUs } from "@/data/careers";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  Target,
  BookOpen,
  Users,
  TrendingUp,
};

export default function WhyWorkWithUs() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Work With Us"
          title="Build Your Career at Marlos Tech Research"
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyWorkWithUs.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                className="rounded-xl2 border border-paper-line bg-white p-6 text-center shadow-card transition-shadow hover:shadow-cardHover"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
