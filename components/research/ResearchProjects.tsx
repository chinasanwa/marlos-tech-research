"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, Tag } from "lucide-react";
import { researchProjects } from "@/data/research-projects";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<string, string> = {
  Ongoing: "bg-accent-soft text-accent",
  Completed: "bg-navy/10 text-navy",
  Recruiting: "bg-navy text-white",
};

export default function ResearchProjects() {
  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Current Research Projects"
          title="What Our Researchers Are Working On"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span
                  className={cn(
                    "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold",
                    STATUS_STYLES[project.status]
                  )}
                >
                  {project.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <div className="mt-5 space-y-2 text-xs text-ink-muted">
                  <div className="flex items-center gap-2">
                    <Tag className="h-3.5 w-3.5 text-accent" />
                    {project.area}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-accent" />
                    {project.teamSize}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
