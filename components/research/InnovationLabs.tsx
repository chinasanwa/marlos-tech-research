"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ShieldCheck, Cloud, ChartSpline, Cpu } from "lucide-react";
import { innovationLabs } from "@/data/innovation-labs";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  BrainCircuit,
  ShieldCheck,
  Cloud,
  ChartSpline,
  Cpu,
};

export default function InnovationLabs() {
  return (
    <section className="bg-navy py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Innovation Labs"
          title="Where Research Becomes Practice"
          description="Five dedicated labs give researchers and program graduates hands-on access to the tools used in real deployments."
          dark
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {innovationLabs.map((lab, i) => {
            const Icon = ICONS[lab.icon];
            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="rounded-xl2 border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.07]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {lab.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {lab.description}
                </p>

                <div className="mt-5 space-y-3 text-xs text-white/55">
                  <div>
                    <span className="font-semibold uppercase tracking-wide text-white/80">
                      Equipment
                    </span>
                    <p className="mt-1">{lab.equipment.join(" · ")}</p>
                  </div>
                  <div>
                    <span className="font-semibold uppercase tracking-wide text-white/80">
                      Activities
                    </span>
                    <p className="mt-1">{lab.activities.join(" · ")}</p>
                  </div>
                  <div>
                    <span className="font-semibold uppercase tracking-wide text-white/80">
                      Research Opportunities
                    </span>
                    <p className="mt-1">{lab.opportunities.join(" · ")}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
