"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ContactCTA({
  eyebrow = "Get in Touch",
  title = "Let's talk about what you're building",
  description = "Reach out and our team will get back to you within one business day.",
  primaryLabel = "Contact Us",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  tone = "navy",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tone?: "navy" | "deep";
}) {
  return (
    <section
      className={`relative overflow-hidden py-24 ${
        tone === "deep" ? "bg-navy-deep" : "bg-navy"
      }`}
    >
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
          <span className="eyebrow text-white/50">{eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:border-white"
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
