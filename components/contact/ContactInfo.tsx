"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: "Aba, Abia State, Nigeria",
    href: undefined,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "+234 704 458 1634",
    href: "tel:+2347044581634",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "info@marlostechresearch.com.ng",
    href: "mailto:info@marlostechresearch.com.ng",
  },
  {
    id: "hours",
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday, 9AM – 5PM",
    href: undefined,
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-paper py-20">
      <div className="container-x">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  {item.label}
                </p>
                <p className="mt-1.5 font-display text-base font-semibold text-navy">
                  {item.value}
                </p>
              </>
            );
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-xl2 border border-paper-line bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover"
              >
                {item.href ? (
                  <a href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
