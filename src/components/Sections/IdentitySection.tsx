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

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
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

            <div className="grid grid-cols-2 gap-4">
              {IDENTITY_TRAITS.map((trait, i) => (
                <ScrollReveal key={trait.label} delay={0.2 + i * 0.05}>
                  <DepthCard intensity={5}>
                    <div className="border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] px-4 py-3">
                      <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                        {trait.label}
                      </span>
                      <p className="mt-1 text-sm font-medium text-[#c0c4d0]">
                        {trait.value}
                      </p>
                    </div>
                  </DepthCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.3} direction="right">
              <DepthCard intensity={6}>
                <div className="border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] p-8 md:p-10">
                  <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                    Education
                  </span>
                  <h3 className="mt-4 text-2xl font-light leading-snug text-[#c0c4d0] md:text-3xl">
                    {EDUCATION.degree}
                  </h3>
                  <p className="mt-4 text-base text-[#00f0ff]/70">
                    {EDUCATION.school}
                  </p>
                  <div className="mt-6 space-y-2 border-t border-[#00f0ff]/10 pt-6">
                    <p className="text-sm text-[#c0c4d0]/50">
                      <span className="text-[#00f0ff]/40">Status — </span>
                      {EDUCATION.year}
                    </p>
                    <p className="text-sm text-[#c0c4d0]/50">
                      <span className="text-[#00f0ff]/40">
                        Expected Graduation —{" "}
                      </span>
                      {EDUCATION.graduation}
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
