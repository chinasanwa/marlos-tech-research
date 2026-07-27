"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ResearchCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Ready to contribute to applied African research?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            Join our research community as a researcher, partner organization,
            or collaborator working on real technology challenges.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/apply?track=research" size="lg">
              Apply Now
            </Button>
            <Button
              href="/contact?team=research"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:border-white"
            >
              Contact Research Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
