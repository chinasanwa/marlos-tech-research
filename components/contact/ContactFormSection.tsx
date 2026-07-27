"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactFormSection() {
  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Send a Message"
          title="Tell Us What You Need"
          description="Fill out the form and our team will follow up within one business day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-xl2 border border-paper-line bg-navy p-8 text-center shadow-card">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <MapPin className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold text-white">
                Marlos Tech Research
              </h3>
              <p className="relative mt-2 max-w-xs text-sm leading-relaxed text-white/60">
                Aba, Abia State, Nigeria
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aba+Abia+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
