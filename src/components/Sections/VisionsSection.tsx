"use client";

import { motion } from "framer-motion";
import { VISION_GOALS, VISION_NARRATIVE } from "@/lib/portfolio-data";
import ScrollReveal from "../Effects/ScrollReveal";

export default function VisionsSection() {
  return (
    <section
      id="visions"
      className="relative min-h-screen px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/[0.01] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <motion.span className="mb-4 block text-xs tracking-[0.3em] text-[#00f0ff]/50 uppercase">
            Future Trajectory
          </motion.span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-16 text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-[#c0c4d0]">WHAT I&apos;M</span>
            <br />
            <span className="text-[#00f0ff]">BUILDING TOWARD</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            {VISION_GOALS.map((goal, i) => (
              <ScrollReveal key={goal} delay={0.15 + i * 0.08}>
                <motion.div
                  className="group flex items-start gap-4 border-l border-[#00f0ff]/10 py-2 pl-6 transition-all duration-500 hover:border-[#00f0ff]/50"
                  whileHover={{ x: 8 }}
                >
                  <span className="mt-0.5 font-mono text-xs text-[#00f0ff]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-light leading-relaxed text-[#c0c4d0]/55 transition-colors duration-500 group-hover:text-[#c0c4d0]/85 md:text-xl">
                    {goal}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.3} direction="right">
              <div className="border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] p-8 md:p-12">
                <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                  Direction
                </span>
                <p className="mt-6 text-lg font-light leading-relaxed text-[#c0c4d0]/55 md:text-xl">
                  {VISION_NARRATIVE}
                </p>
                <div className="mt-8 h-px w-16 bg-gradient-to-r from-[#00f0ff]/50 to-transparent" />
                <p className="mt-6 text-sm italic text-[#00f0ff]/40">
                  Built from obsession — applied to engineering discipline.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />
    </section>
  );
}
