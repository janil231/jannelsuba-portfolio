"use client";

import { motion } from "framer-motion";
import type { PortfolioProject } from "@/lib/portfolio-data";
import ScrollReveal from "../Effects/ScrollReveal";
import DepthCard from "../Effects/DepthCard";
import ExternalLink from "../ui/ExternalLink";
import CinematicButton from "../ui/CinematicButton";

const TECH_GROUP_LABELS: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  security: "Authentication & Security",
  fileManagement: "File Management",
  reporting: "Reporting",
  visualization: "Visualization",
  deployment: "Deployment",
  styling: "Styling",
  maps: "Maps",
  backendData: "Backend / Data",
  securityUx: "Security / UX",
  ai: "AI & Vision",
  accessibility: "Accessibility",
};

interface FeaturedProjectCaseStudyProps {
  project: PortfolioProject;
  caseStudyNumber: number;
  revealDelay?: number;
}

export default function FeaturedProjectCaseStudy({
  project,
  caseStudyNumber,
  revealDelay = 0.15,
}: FeaturedProjectCaseStudyProps) {
  const techEntries = Object.entries(project.techStack);
  const caseLabel = String(caseStudyNumber).padStart(2, "0");
  const demoLabel =
    project.status === "in-development" ? "Live Preview" : "Live Demo";
  const meta = [
    `Role: ${project.role}`,
    project.timeline,
    project.client ? `Client: ${project.client}` : null,
    project.team,
  ].filter((item): item is string => Boolean(item));

  return (
    <ScrollReveal delay={revealDelay}>
      <DepthCard intensity={6}>
        <article className="group relative border border-[#00f0ff]/15 bg-[#08080a]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/[0.04] via-transparent to-transparent opacity-80" />

          <div className="relative border-b border-[#00f0ff]/10 px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <span className="text-[10px] tracking-[0.25em] text-[#00f0ff]/50 uppercase">
                  {project.badge} — {project.category}
                </span>
                {project.status === "in-development" && (
                  <span className="ml-3 inline-block border border-[#00f0ff]/25 bg-[#00f0ff]/[0.06] px-2 py-0.5 text-[9px] tracking-[0.2em] text-[#00f0ff]/70 uppercase">
                    Active Development
                  </span>
                )}
                {project.status === "prototype" && (
                  <span className="ml-3 inline-block border border-[#00f0ff]/25 bg-[#00f0ff]/[0.06] px-2 py-0.5 text-[9px] tracking-[0.2em] text-[#00f0ff]/70 uppercase">
                    Concept Prototype
                  </span>
                )}
                <h3 className="mt-3 text-3xl font-light tracking-tight text-[#c0c4d0] md:text-4xl lg:text-5xl">
                  {project.title}
                </h3>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] tracking-[0.18em] text-[#c0c4d0]/35 uppercase">
                  {meta.map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#00f0ff]/40" />
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#c0c4d0]/50 md:text-base">
                  {project.description}
                </p>
              </div>

              {project.liveUrl && (
                <CinematicButton
                  href={project.liveUrl}
                  external
                  size="md"
                  className="shrink-0"
                >
                  <span className="tracking-[0.15em]">{demoLabel}</span>
                  <span className="text-lg">↗</span>
                </CinematicButton>
              )}
            </div>
          </div>

          <div className="relative grid gap-0 lg:grid-cols-2">
            <div className="border-b border-[#00f0ff]/10 p-6 md:p-10 lg:border-b-0 lg:border-r">
              <h4 className="mb-4 text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                Tech Stack
              </h4>
              <div className="space-y-5">
                {techEntries.map(([group, items]) => (
                  <div key={group}>
                    <span className="text-[10px] tracking-[0.15em] text-[#c0c4d0]/30 uppercase">
                      {TECH_GROUP_LABELS[group] ?? group}
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="border border-[#00f0ff]/10 bg-[#00f0ff]/[0.03] px-3 py-1 text-xs text-[#c0c4d0]/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-10">
              <h4 className="mb-4 text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                Key Features
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs leading-relaxed text-[#c0c4d0]/45 md:text-sm"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00f0ff]/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative border-t border-[#00f0ff]/10 p-6 md:p-10">
            <h4 className="mb-4 text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
              Engineering Highlights
            </h4>
            <div className="grid gap-3 md:grid-cols-2">
              {project.highlights.map((highlight, i) => (
                <motion.div
                  key={highlight}
                  className="border-l border-[#00f0ff]/20 py-1 pl-4"
                  initial={{ opacity: 1, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  <p className="text-sm leading-relaxed text-[#c0c4d0]/50">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-between border-t border-[#00f0ff]/10 px-6 py-4 md:px-10">
            <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/30 uppercase">
              Case Study {caseLabel}
            </span>
            {project.liveUrl ? (
              <ExternalLink
                href={project.liveUrl}
                className="text-xs tracking-wider text-[#00f0ff]/60 uppercase transition-colors hover:text-[#00f0ff]"
              >
                Open {demoLabel} ↗
              </ExternalLink>
            ) : (
              <span className="text-[10px] tracking-[0.2em] text-[#c0c4d0]/30 uppercase">
                {project.status === "prototype"
                  ? "Concept Prototype"
                  : "Live — In Daily Use"}
              </span>
            )}
          </div>
        </article>
      </DepthCard>
    </ScrollReveal>
  );
}
