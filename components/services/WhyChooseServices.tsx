"use client";

import { motion } from "framer-motion";
import { Users, FlaskConical, BadgeCheck, Clock, Lightbulb, LifeBuoy } from "lucide-react";
import { whyChooseServices } from "@/data/services-why";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  Users,
  FlaskConical,
  BadgeCheck,
  Clock,
  Lightbulb,
  LifeBuoy,
};

export default function WhyChooseServices() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Our Services"
          title="A Partner That Delivers"
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseServices.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="rounded-xl2 border border-paper-line bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-navy">
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
