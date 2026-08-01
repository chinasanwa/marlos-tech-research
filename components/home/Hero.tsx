"use client";

import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { Stat } from "@/types";

const stats: Stat[] = [
  { id: "students", label: "Students Trained", value: 1200, suffix: "+" },
  { id: "projects", label: "Research Projects", value: 38, suffix: "" },
  { id: "partners", label: "Industry Partners", value: 24, suffix: "+" },
  { id: "success", label: "Graduate Success Rate", value: 92, suffix: "%" },
];

function AnimatedStat({ stat }: { stat: Stat }) {
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
    <span ref={ref} className="font-display text-3xl font-semibold text-white md:text-4xl">
      {display}
      {stat.suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
      {/* signature: an ambient network of research "nodes" drifting behind the content */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.15]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="8" y1="20" x2="34" y2="42" stroke="#E53935" strokeWidth="0.15" />
          <line x1="34" y1="42" x2="62" y2="18" stroke="#E53935" strokeWidth="0.15" />
          <line x1="62" y1="18" x2="90" y2="35" stroke="#E53935" strokeWidth="0.15" />
          <line x1="34" y1="42" x2="55" y2="70" stroke="#E53935" strokeWidth="0.15" />
          <line x1="55" y1="70" x2="85" y2="80" stroke="#E53935" strokeWidth="0.15" />
        </svg>
        <div className="absolute left-[8%] top-[20%] h-1.5 w-1.5 animate-drift rounded-full bg-accent" />
        <div className="absolute left-[34%] top-[42%] h-2 w-2 animate-drift rounded-full bg-accent [animation-delay:1.2s]" />
        <div className="absolute left-[62%] top-[18%] h-1.5 w-1.5 animate-drift rounded-full bg-accent [animation-delay:2.1s]" />
        <div className="absolute left-[90%] top-[35%] h-1.5 w-1.5 animate-drift rounded-full bg-accent [animation-delay:0.6s]" />
        <div className="absolute left-[55%] top-[70%] h-2 w-2 animate-drift rounded-full bg-accent [animation-delay:1.8s]" />
        <div className="absolute left-[85%] top-[80%] h-1.5 w-1.5 animate-drift rounded-full bg-accent [animation-delay:0.3s]" />
      </div>

      <div className="container-x relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow text-white/50">Technology Research Institute</span>
          <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] text-white md:text-5xl lg:text-[3.4rem]">
            Building Africa&apos;s Future Through Research, Innovation &amp;
            Talent Development.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
            Marlos Tech Research trains engineers, runs applied technology
            research, and partners with organizations building the next
            generation of African infrastructure.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/apply" size="lg">
              Apply Now
            </Button>
            <Button href="/programs" variant="outline" size="lg" className="border-white/25 text-white hover:border-white">
              Explore Programs
            </Button>
            <Button href="/research" variant="ghost" size="lg" showArrow={false}>
              Research Areas →
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id}>
                <AnimatedStat stat={stat} />
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-cardHover">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop"
              alt="African software engineers collaborating on a research project"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl2 bg-white p-5 shadow-card md:block">
            <p className="font-display text-2xl font-semibold text-navy">7</p>
            <p className="text-xs font-medium text-ink-muted">Research-backed programs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
