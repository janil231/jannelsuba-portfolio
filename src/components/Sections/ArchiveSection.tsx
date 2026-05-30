"use client";

import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/lib/portfolio-data";
import ScrollReveal from "../Effects/ScrollReveal";
import FeaturedProjectCaseStudy from "../Projects/FeaturedProjectCaseStudy";

export default function ArchiveSection() {
  return (
    <section
      id="archive"
      className="relative min-h-screen px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/[0.01] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <motion.span className="mb-4 block text-xs tracking-[0.3em] text-[#00f0ff]/50 uppercase">
            Project Archive
          </motion.span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-[#c0c4d0]">FEATURED</span>
            <br />
            <span className="text-[#00f0ff]">PROJECTS</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-[#c0c4d0]/40 md:text-lg">
            Production-ready and in-progress systems built with security,
            scalability, and real-world workflows in mind.
          </p>
        </ScrollReveal>

        <div className="space-y-12 md:space-y-16">
          {FEATURED_PROJECTS.map((project, index) => (
            <FeaturedProjectCaseStudy
              key={project.id}
              project={project}
              caseStudyNumber={index + 1}
              revealDelay={0.15 + index * 0.08}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />
    </section>
  );
}
