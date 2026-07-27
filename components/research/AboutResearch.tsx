"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const coverageAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "Data Science",
  "Digital Transformation",
  "Smart Systems",
  "Business Innovation",
];

export default function AboutResearch() {
  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Our Research"
          title="Practical Research for African Challenges"
          description="Marlos Tech Research focuses on applied, practical research that addresses real challenges facing African organizations and communities through technology. Our work spans eight core domains, each grounded in problems our partners face in production, not abstract theory."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {coverageAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-paper-line bg-paper-soft px-4 py-2 text-sm font-medium text-navy"
            >
              {area}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
