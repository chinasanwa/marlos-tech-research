"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PricingSection() {
  return (
    <section className="bg-navy py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Fees"
          description="Two fixed fees apply to every program. Course fees vary by program and are shared directly with applicants during enrollment."
          dark
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="rounded-xl2 border border-white/10 bg-white/5 p-8 text-center"
          >
            <p className="eyebrow text-white/50">Registration Fee</p>
            <p className="mt-3 font-display text-4xl font-semibold text-white">
              ₦10,000
            </p>
            <p className="mt-3 text-sm text-white/60">
              Paid once to secure your seat in a cohort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-xl2 border border-white/10 bg-white/5 p-8 text-center"
          >
            <p className="eyebrow text-white/50">Certification Fee</p>
            <p className="mt-3 font-display text-4xl font-semibold text-white">
              ₦10,000
            </p>
            <p className="mt-3 text-sm text-white/60">
              Paid on completion to receive your certificate.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-2.5 rounded-lg bg-white/5 p-4 text-sm text-white/60">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          Registration and certification fees are separate from course fees.
          Course fees vary by program and are shared with you during
          enrollment.
        </div>
      </div>
    </section>
  );
}
