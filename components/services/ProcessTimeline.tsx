"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ClipboardList,
  Compass,
  Hammer,
  FlaskConical,
  PackageCheck,
  LifeBuoy,
} from "lucide-react";
import { servicesProcess } from "@/data/services-process";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  MessageSquare,
  ClipboardList,
  Compass,
  Hammer,
  FlaskConical,
  PackageCheck,
  LifeBuoy,
};

export default function ProcessTimeline() {
  return (
    <section className="bg-navy py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Deliver"
          description="A consistent seven-stage process keeps every engagement transparent and on schedule."
          dark
          align="center"
        />

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="relative flex min-w-[900px] justify-between gap-2 lg:min-w-0">
            <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />
            {servicesProcess.map((step, i) => {
              const Icon = ICONS[step.icon];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative flex flex-1 flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-navy">
                    {Icon && <Icon className="h-5 w-5 text-accent" strokeWidth={2} />}
                  </div>
                  <span className="mt-4 font-mono text-xs text-accent">{step.step}</span>
                  <h3 className="mt-1.5 font-display text-sm font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[11rem] text-xs leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
