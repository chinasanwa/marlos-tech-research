"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { programs } from "@/data/programs";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ProgramsPreview() {
  return (
    <section className="thread-node bg-paper py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Short Professional Programs"
            title="Programs Built for Fast, Applied Skill"
            description="Every program runs on a fixed 2-hours-per-week schedule across 4, 8, or 13 weeks, and includes a professional certification on completion."
          />
          <Button href="/programs" variant="outline" className="shrink-0">
            View All Programs
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {program.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-accent">
                  <Clock className="h-3.5 w-3.5" />
                  {program.duration} · {program.classSchedule}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {program.description}
                </p>

                <div className="mt-5 rounded-lg bg-paper-soft p-3.5 text-xs text-ink-muted">
                  <p>
                    Registration Fee:{" "}
                    <span className="font-semibold text-navy">
                      ₦{program.registrationFee.toLocaleString()}
                    </span>
                  </p>
                  <p className="mt-1">
                    Certification Fee:{" "}
                    <span className="font-semibold text-navy">
                      ₦{program.certificationFee.toLocaleString()}
                    </span>
                  </p>
                  <p className="mt-2 text-[11px] text-ink-faint">
                    Course fees are separate and shared during enrollment.
                  </p>
                </div>

                <Link
                  href={`/programs/${program.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-accent"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
