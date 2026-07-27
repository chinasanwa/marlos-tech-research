"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection({
  title = "Ready to build your future in technology?",
  description = "Applications for our next cohort are open. Join a program built on real research, real projects, and real outcomes.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
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
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/apply" size="lg">
              Apply Now
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/25 text-white hover:border-white">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
