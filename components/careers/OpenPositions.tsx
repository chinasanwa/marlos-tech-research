"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Briefcase, Clock } from "lucide-react";
import { jobOpenings } from "@/data/careers";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OpenPositions() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Careers"
          title="Open Positions"
          description="We're hiring across research, engineering, and communications. Take a look at what's currently open."
        />

        <div className="mt-14 space-y-4">
          {jobOpenings.map((job, i) => {
            const isOpen = openId === job.id;
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                className="overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : job.id)}
                  aria-expanded={isOpen}
                  className="flex w-full flex-col gap-3 p-6 text-left sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-ink-muted">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-accent" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-faint transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-paper-line"
                    >
                      <div className="grid gap-6 p-6 sm:grid-cols-2">
                        <div>
                          <p className="text-sm leading-relaxed text-ink-muted">
                            {job.description}
                          </p>
                          <h4 className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy">
                            Responsibilities
                          </h4>
                          <ul className="mt-2 space-y-1.5">
                            {job.responsibilities.map((item) => (
                              <li key={item} className="text-sm text-ink-muted">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-navy">
                            Requirements
                          </h4>
                          <ul className="mt-2 space-y-1.5">
                            {job.requirements.map((item) => (
                              <li key={item} className="text-sm text-ink-muted">
                                • {item}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-5">
                            <Button href={`/contact?position=${job.slug}`} size="sm">
                              Apply for This Role
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
