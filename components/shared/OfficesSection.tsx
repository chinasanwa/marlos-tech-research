"use client";

import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import { offices } from "@/data/offices";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OfficesSection() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where We Are"
          title="Our Offices"
          description="Our head office is in Aba, with a growing presence across the South East and South South."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, i) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className={`rounded-xl2 border p-6 shadow-card transition-shadow hover:shadow-cardHover ${
                office.isHeadOffice
                  ? "border-accent/30 bg-navy text-white"
                  : "border-paper-line bg-white"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                  office.isHeadOffice ? "bg-accent/15 text-accent" : "bg-accent-soft text-accent"
                }`}
              >
                {office.isHeadOffice ? (
                  <Building2 className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <MapPin className="h-5 w-5" strokeWidth={2} />
                )}
              </div>
              <h3
                className={`mt-5 font-display text-lg font-semibold ${
                  office.isHeadOffice ? "text-white" : "text-navy"
                }`}
              >
                {office.city}
              </h3>
              {office.addressLines ? (
                <address className="mt-2 not-italic text-sm leading-relaxed text-white/70">
                  {office.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Address coming soon.
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
