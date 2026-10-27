"use client";

import { motion } from "framer-motion";
import { REFERENCES, WORK_EXPERIENCE } from "@/lib/portfolio-data";
import ScrollReveal from "../Effects/ScrollReveal";
import DepthCard from "../Effects/DepthCard";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <motion.span className="mb-4 block text-xs tracking-[0.3em] text-[#00f0ff]/50 uppercase">
            Professional Experience
          </motion.span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-[#c0c4d0]">WORK</span>
            <br />
            <span className="text-[#00f0ff]">EXPERIENCE</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-[#c0c4d0]/40 md:text-lg">
            Real operations experience alongside full-time studies—including
            spotting a manual record-keeping problem at work and building the
            system that now runs it daily.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {WORK_EXPERIENCE.map((job, i) => (
            <ScrollReveal key={`${job.company}-${job.role}`} delay={0.2 + i * 0.08}>
              <DepthCard intensity={5}>
                <article className="border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] p-6 md:p-10">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                        {job.company}
                      </span>
                      <h3 className="mt-2 text-2xl font-light leading-snug text-[#c0c4d0] md:text-3xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm text-[#c0c4d0]/40">
                        {job.location}
                      </p>
                    </div>
                    <span className="shrink-0 border border-[#00f0ff]/20 bg-[#00f0ff]/[0.05] px-3 py-1.5 text-[10px] tracking-[0.2em] text-[#00f0ff]/60 uppercase">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#c0c4d0]/50 md:text-base">
                    {job.description}
                  </p>
                </article>
              </DepthCard>
            </ScrollReveal>
          ))}
        </div>

        <div id="references" className="mt-20">
          <ScrollReveal>
            <motion.span className="mb-4 block text-xs tracking-[0.3em] text-[#00f0ff]/50 uppercase">
              Character References
            </motion.span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="mb-4 text-3xl font-light tracking-tight text-[#c0c4d0] md:text-4xl">
              <span className="text-[#00f0ff]">REFERENCES</span>
            </h3>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#c0c4d0]/40 md:text-base">
              Professional and academic references available upon request.
            </p>
          </ScrollReveal>

          <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
            {REFERENCES.map((reference, i) => (
              <ScrollReveal
                key={reference.name}
                delay={0.15 + i * 0.06}
                className="h-full"
              >
                <div className="flex h-full flex-col border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] p-5 md:p-6">
                  <h4 className="text-lg font-medium leading-snug text-[#c0c4d0]">
                    {reference.name}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#00f0ff]/50">
                    {reference.role}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#c0c4d0]/40">
                    {reference.company}
                  </p>
                  <a
                    href={`tel:${reference.phone.replace(/\s/g, "")}`}
                    className="mt-auto pt-5 text-xs tracking-wider text-[#00f0ff]/60 transition-colors hover:text-[#00f0ff]"
                  >
                    {reference.phone}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />
    </section>
  );
}
