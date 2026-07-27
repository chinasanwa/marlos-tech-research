"use client";

import { motion } from "framer-motion";
import { researchAreas } from "@/data/research";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ResearchPreview() {
  return (
    <section className="bg-navy py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Research Centre"
          title="Applied Research Grounded in African Realities"
          description="Our research centre studies the technology problems facing African organizations directly, then feeds findings back into our training programs and consulting engagements."
          dark
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.id}
              id={area.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-navy p-6"
            >
              <span className="font-mono text-xs text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-white">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/research" variant="primary">
            Explore Research
          </Button>
        </div>
      </div>
    </section>
  );
}
