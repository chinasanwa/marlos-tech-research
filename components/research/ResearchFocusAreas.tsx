"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Network,
  ChartSpline,
  Cloud,
  ShieldCheck,
  Cpu,
  RefreshCcw,
  LineChart,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { researchFocusAreas } from "@/data/research-focus";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ElementType> = {
  BrainCircuit,
  Network,
  ChartSpline,
  Cloud,
  ShieldCheck,
  Cpu,
  RefreshCcw,
  LineChart,
};

export default function ResearchFocusAreas() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Research Focus Areas"
          title="Where We Concentrate Our Work"
          description="Eight domains where our research produces findings that feed directly back into our programs, consulting, and partner projects."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchFocusAreas.map((area, i) => {
            const Icon = ICONS[area.icon];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-accent backdrop-blur">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {area.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {area.objectives.map((objective) => (
                      <li key={objective} className="flex items-start gap-2 text-xs text-ink-muted">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/research#${area.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-accent"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
