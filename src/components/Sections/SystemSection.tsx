"use client";

import { motion } from "framer-motion";
import { PERSONAL, SKILL_GROUPS } from "@/lib/portfolio-data";
import ScrollReveal from "../Effects/ScrollReveal";
export default function SystemSection() {
  return (
    <section
      id="system"
      className="relative min-h-screen px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <motion.span className="mb-4 block text-xs tracking-[0.3em] text-[#00f0ff]/50 uppercase">
            Core System
          </motion.span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-[#c0c4d0]">SKILLS &</span>
            <br />
            <span className="text-[#00f0ff]">TECHNOLOGIES</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-16 max-w-3xl text-base leading-relaxed text-[#c0c4d0]/40 md:text-lg">
            {PERSONAL.skillStatement}
          </p>
        </ScrollReveal>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <ScrollReveal
              key={group.title}
              delay={0.15 + i * 0.08}
              className="h-full"
            >
              <motion.div
                className="group flex h-full min-h-[280px] flex-col border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] p-6 transition-all duration-500 hover:border-[#00f0ff]/30 md:min-h-[300px] md:p-8"
                whileHover={{ x: 4 }}
              >
                <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-4 mt-2 text-xl font-medium tracking-wide text-[#c0c4d0] transition-colors duration-500 group-hover:text-[#00f0ff]">
                  {group.title}
                </h3>
                <div className="flex flex-1 flex-wrap content-start gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#00f0ff]/10 px-3 py-1.5 text-xs text-[#c0c4d0]/55 transition-colors hover:border-[#00f0ff]/25 hover:text-[#00f0ff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <div className="h-px w-0 bg-gradient-to-r from-[#00f0ff]/40 to-transparent transition-all duration-700 group-hover:w-full" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />
    </section>
  );
}
