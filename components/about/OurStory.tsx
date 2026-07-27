"use client";

import { motion } from "framer-motion";
import { storyTimeline } from "@/data/about";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OurStory() {
  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Story"
          title="Why Marlos Tech Research Exists"
          description="We started with a simple observation: Nigeria produces enormous technical talent, but too few institutions connect that talent to research, industry, and real career outcomes. Marlos Tech Research exists to close that gap through applied technology research, innovation, and hands-on talent development."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-paper-line md:left-1/2" />

          <div className="space-y-12">
            {storyTimeline.map((milestone, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                    isEven
                      ? "md:pr-14 md:text-right"
                      : "md:ml-auto md:pl-14"
                  }`}
                >
                  <span
                    className={`absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-white md:left-auto ${
                      isEven ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                    }`}
                  />
                  <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
                    {milestone.year}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {milestone.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {milestone.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
