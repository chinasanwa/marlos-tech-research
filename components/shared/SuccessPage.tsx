"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SuccessPage({
  title,
  message,
  detail,
}: {
  title: string;
  message: string;
  detail?: string;
}) {
  return (
    <section className="flex min-h-[80vh] items-center bg-paper pb-24 pt-32 md:pt-40">
      <div className="container-x">
        <div className="mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft text-accent"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              <CheckCircle2 className="h-10 w-10" strokeWidth={2} />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-7 font-display text-3xl font-semibold text-navy md:text-4xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-5 text-base leading-relaxed text-ink-muted"
          >
            {message}
          </motion.p>

          {detail && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-3 text-sm leading-relaxed text-ink-faint"
            >
              {detail}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <Button href="/">Return Home</Button>
            <Button href="/programs" variant="outline">
              Explore Programs
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
