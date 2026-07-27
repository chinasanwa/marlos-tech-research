"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbLabel,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbLabel: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 md:pt-40 md:pb-28">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumb items={[{ label: breadcrumbLabel }]} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-8 max-w-2xl"
        >
          <span className="eyebrow text-white/50">{eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            {description}
          </p>
          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </motion.div>
      </div>
    </section>
  );
}
