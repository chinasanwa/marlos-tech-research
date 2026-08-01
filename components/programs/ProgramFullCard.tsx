"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Briefcase, Sparkles } from "lucide-react";
import { Program } from "@/types";
import Button from "@/components/ui/Button";

export default function ProgramFullCard({
  program,
  index,
}: {
  program: Program;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="grid overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover md:grid-cols-5"
    >
      <div className="relative aspect-[16/10] md:col-span-2 md:aspect-auto">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {program.category}
        </span>
      </div>

      <div className="flex flex-col p-7 md:col-span-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-accent">
          <Clock className="h-4 w-4" />
          {program.duration}
        </div>
        <h3 className="mt-2.5 font-display text-xl font-semibold text-navy">
          {program.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {program.description}
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
              <Briefcase className="h-3.5 w-3.5 text-accent" />
              Career Opportunities
            </div>
            <ul className="mt-2 space-y-1.5">
              {program.careerOutcomes.map((outcome) => (
                <li key={outcome} className="text-sm text-ink-muted">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Skills Gained
            </div>
            <ul className="mt-2 space-y-1.5">
              {program.skillsGained.map((skill) => (
                <li key={skill} className="text-sm text-ink-muted">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-paper-soft p-3.5 text-xs text-ink-muted">
          Registration Fee:{" "}
          <span className="font-semibold text-navy">
            ₦{program.registrationFee.toLocaleString()}
          </span>{" "}
          · Certification Fee:{" "}
          <span className="font-semibold text-navy">
            ₦{program.certificationFee.toLocaleString()}
          </span>
          <p className="mt-1 text-[11px] text-ink-faint">
            Course fees are separate and shared during enrollment.
          </p>
        </div>

        <div className="mt-6">
          <Button href={`/apply?program=${program.slug}`} size="sm">
            Apply for This Program
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
