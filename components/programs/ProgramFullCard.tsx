"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { Program } from "@/types";
import Button from "@/components/ui/Button";
import LevelBadge from "@/components/programs/LevelBadge";

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
      className="grid h-full overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover md:grid-cols-5"
    >
      <div className="relative aspect-[16/10] md:col-span-2 md:aspect-auto">
        <Image
          src={program.image}
          alt={`${program.title} program at Marlos Tech Research`}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {program.category}
        </span>
      </div>

      <div className="flex h-full flex-col p-7 md:col-span-3">
        <div className="flex flex-wrap items-center gap-3">
          <LevelBadge level={program.level} />
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
          {program.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-ink-muted">
          {program.description}
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
              <Briefcase className="h-4 w-4 text-accent" />
              Career Opportunities
            </div>
            <ul className="mt-3 space-y-2">
              {program.careerOutcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2 text-sm text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
              <Sparkles className="h-4 w-4 text-accent" />
              Skills Gained
            </div>
            <ul className="mt-3 space-y-2">
              {program.skillsGained.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-sm text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-paper-soft p-4 text-sm text-ink-muted">
          Registration Fee:{" "}
          <span className="font-semibold text-navy">
            ₦{program.registrationFee.toLocaleString()}
          </span>{" "}
          · Certification Fee:{" "}
          <span className="font-semibold text-navy">
            ₦{program.certificationFee.toLocaleString()}
          </span>
          <p className="mt-1.5 text-xs text-ink-faint">
            Course fees are separate and shared during enrollment.
          </p>
        </div>

        <div className="mt-auto pt-6">
          <Button href={`/apply?program=${program.slug}`} size="sm">
            Apply for This Program
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
