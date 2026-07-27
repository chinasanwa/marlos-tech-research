"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="thread-node bg-paper py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden rounded-xl2 shadow-card"
        >
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt="Researchers reviewing findings at Marlos Tech Research"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="eyebrow">About Marlos Tech Research</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            A research institute built for Africa&apos;s next generation of
            engineers
          </h2>
          <p className="mt-5 leading-relaxed text-ink-muted">
            Founded in Aba, Abia State, Marlos Tech Research exists to close
            the gap between where African tech talent is today and where
            global industry needs it to be. We combine short, rigorous
            professional programs with an active research centre studying
            the problems our partners face in production.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-base font-semibold text-navy">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Train and place engineers, analysts, and consultants who can
                perform from day one inside real organizations.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-navy">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                A Nigeria whose research output and technical talent compete
                directly on the global stage.
              </p>
            </div>
          </div>
          <div className="mt-9">
            <Button href="/about" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
