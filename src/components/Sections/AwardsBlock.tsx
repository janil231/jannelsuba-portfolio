"use client";

import { motion } from "framer-motion";
import { AWARDS } from "@/lib/portfolio-data";
import ScrollReveal from "../Effects/ScrollReveal";

export default function AwardsBlock() {
  return (
    <div id="awards" className="mt-16 max-md:mt-12 md:mt-24">
      <ScrollReveal>
        <motion.span className="mb-4 block text-xs tracking-[0.3em] text-[#00f0ff]/50 uppercase">
          Recognition
        </motion.span>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h3 className="mb-4 text-3xl font-light tracking-tight text-[#c0c4d0] max-md:text-[clamp(1.5rem,6vw,1.875rem)] md:text-4xl">
          <span className="text-[#00f0ff]">AWARDS</span> & COMPETITIONS
        </h3>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#c0c4d0]/40 md:text-base">
          Recognition and competition experience from academic and industry
          events.
        </p>
      </ScrollReveal>

      <div className="grid gap-4 md:grid-cols-2">
        {AWARDS.map((award, i) => (
          <ScrollReveal key={`${award.event}-${award.title}`} delay={0.15 + i * 0.07}>
            <article className="group flex h-full flex-col border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] p-6 transition-colors duration-500 hover:border-[#00f0ff]/25 md:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                  {award.type === "award" ? "Award" : "Participation"}
                </span>
                <span className="text-[10px] tracking-[0.15em] text-[#c0c4d0]/30 uppercase">
                  {award.date}
                </span>
              </div>
              <h4 className="mt-4 text-xl font-medium leading-snug text-[#c0c4d0] transition-colors duration-500 group-hover:text-[#00f0ff] md:text-2xl">
                {award.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#c0c4d0]/45">
                {award.event}
              </p>
              <p className="mt-auto pt-5 text-[10px] tracking-[0.2em] text-[#00f0ff]/35 uppercase">
                {award.detail}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
