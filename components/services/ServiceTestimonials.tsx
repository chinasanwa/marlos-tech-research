"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { serviceTestimonials } from "@/data/service-testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServiceTestimonials() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" align="center" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceTestimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl2 border border-paper-line bg-white p-7 shadow-card"
            >
              <Quote className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <p className="mt-5 text-sm leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image src={t.image} alt={t.name} fill sizes="44px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
