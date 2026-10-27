"use client";

import { motion } from "framer-motion";
import {
  PERSONAL,
  EDUCATION,
  IDENTITY_TRAITS,
} from "@/lib/portfolio-data";
import ScrollReveal from "../Effects/ScrollReveal";
import DepthCard from "../Effects/DepthCard";

export default function IdentitySection() {
  return (
    <section
      id="identity"
      className="relative min-h-screen px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <motion.span className="mb-4 block text-xs tracking-[0.3em] text-[#00f0ff]/50 uppercase">
            Identity Protocol
          </motion.span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-16 text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-[#c0c4d0]">ABOUT</span>
            <br />
            <span className="text-[#00f0ff]">ME</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-24">
          <div className="flex flex-col gap-8">
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed text-[#c0c4d0]/60 md:text-xl">
                {PERSONAL.summary}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-base leading-relaxed text-[#c0c4d0]/45 md:text-lg">
                {PERSONAL.aboutNarrative}
              </p>
            </ScrollReveal>

            <div className="grid auto-rows-fr grid-cols-1 gap-3 min-[420px]:grid-cols-2 min-[420px]:gap-4">
              {IDENTITY_TRAITS.map((trait, i) => (
                <ScrollReveal
                  key={trait.label}
                  delay={0.2 + i * 0.05}
                  className={`h-full ${
                    i === IDENTITY_TRAITS.length - 1
                      ? "min-[420px]:col-span-2"
                      : ""
                  }`}
                >
                  <DepthCard intensity={5} className="h-full">
                    <div className="flex h-full min-h-[5.5rem] flex-col justify-center border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] px-4 py-4 sm:min-h-[6rem] sm:px-5 sm:py-4">
                      <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                        {trait.label}
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-snug text-[#c0c4d0] sm:text-base">
                        {trait.value}
                      </p>
                    </div>
                  </DepthCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:min-h-0">
            <ScrollReveal
              delay={0.3}
              direction="right"
              className="h-full min-h-0 flex-1"
            >
              <DepthCard intensity={6} className="h-full">
                <div className="flex h-full min-h-[280px] flex-col border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] p-6 sm:min-h-[300px] sm:p-8 md:min-h-0 md:p-10">
                  <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                    Education
                  </span>
                  <h3 className="mt-4 text-xl font-light leading-snug text-[#c0c4d0] sm:text-2xl md:text-3xl">
                    {EDUCATION.degree} — {EDUCATION.year}
                  </h3>
                  <p className="mt-3 text-sm text-[#00f0ff]/70 sm:text-base">
                    {EDUCATION.school}, {EDUCATION.address}
                  </p>
                  <div className="mt-auto space-y-2 border-t border-[#00f0ff]/10 pt-6">
                    <p className="text-sm text-[#c0c4d0]/50">
                      <span className="text-[#00f0ff]/40">Status — </span>
                      {EDUCATION.status}
                    </p>
                    <p className="text-sm text-[#c0c4d0]/50">
                      <span className="text-[#00f0ff]/40">
                        Expected Graduation —{" "}
                      </span>
                      {EDUCATION.graduation}
                    </p>
                    <p className="text-sm leading-relaxed text-[#c0c4d0]/50">
                      <span className="text-[#00f0ff]/40">Dean&apos;s Lister — </span>
                      {EDUCATION.honorsPeriod}
                    </p>
                    <p className="text-sm text-[#c0c4d0]/50">
                      <span className="text-[#00f0ff]/40">
                        General Average —{" "}
                      </span>
                      {EDUCATION.generalAverage}
                    </p>
                  </div>
                </div>
              </DepthCard>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />
    </section>
  );
}
