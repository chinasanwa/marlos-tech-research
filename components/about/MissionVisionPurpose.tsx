"use client";

import { motion } from "framer-motion";
import { Eye, Target, Compass, Check } from "lucide-react";
import { purposeItems } from "@/data/about";

export default function MissionVisionPurpose() {
  return (
    <section className="bg-navy py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-xl2 border border-white/10 bg-white/5 p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Eye className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-white">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              To become Africa&apos;s leading technology research and
              innovation institute, producing globally competitive technology
              professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-xl2 border border-white/10 bg-white/5 p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Target className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-white">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              To advance technology through research, education, innovation,
              and industry collaboration.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6 rounded-xl2 border border-white/10 bg-white/5 p-8"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Compass className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-white">True Purpose</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {purposeItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
