"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Layers, TrendingUp } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProjects() {
  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected Engagements"
          description="A sample of the kind of work our consulting and engineering teams deliver for partner organizations."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
              className="overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.projectType}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
                    {project.industry}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-accent">
                  <Building2 className="h-3.5 w-3.5" />
                  {project.client}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy">
                  {project.projectType}
                </h3>
                <div className="mt-3 flex items-start gap-2 text-sm text-ink-muted">
                  <Layers className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {project.technologies.join(" · ")}
                </div>
                <div className="mt-3 flex items-start gap-2 text-sm text-ink-muted">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {project.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
