"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { contactFAQs } from "@/data/contact";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>(contactFAQs[0]?.id ?? null);

  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          align="center"
        />

        <div className="mx-auto mt-14 max-w-2xl divide-y divide-paper-line rounded-xl2 border border-paper-line bg-white shadow-card">
          {contactFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span>
                    <span className="eyebrow">{faq.category}</span>
                    <span className="mt-1 block font-display text-lg font-semibold text-navy">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-faint transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
