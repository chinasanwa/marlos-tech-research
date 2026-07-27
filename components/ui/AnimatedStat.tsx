"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { Stat } from "@/types";

export default function AnimatedStat({
  stat,
  dark = true,
}: {
  stat: Stat;
  dark?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  return (
    <div>
      <span
        ref={ref}
        className={`font-display text-3xl font-semibold md:text-4xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {display}
        {stat.suffix}
      </span>
      <p
        className={`mt-1.5 text-xs font-medium uppercase tracking-wide ${
          dark ? "text-white/45" : "text-ink-faint"
        }`}
      >
        {stat.label}
      </p>
    </div>
  );
}
