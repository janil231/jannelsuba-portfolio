"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CERTIFICATES, CREDLY_PROFILE_URL } from "@/lib/certificates";
import ScrollReveal from "../Effects/ScrollReveal";
import DepthCard from "../Effects/DepthCard";
import ExternalLink from "../ui/ExternalLink";
import CinematicButton from "../ui/CinematicButton";

function CertificatePreview({ cert }: { cert: (typeof CERTIFICATES)[number] }) {
  return (
    <div className="relative mb-5 flex h-[200px] shrink-0 items-center justify-center overflow-hidden border border-[#00f0ff]/10 bg-[#0c0e12] sm:h-[210px]">
      {cert.image ? (
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-contain object-center p-2 transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <span className="text-[10px] tracking-[0.3em] text-[#00f0ff]/40 uppercase">
            {cert.issuer}
          </span>
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent" />
          <span className="text-xs tracking-[0.2em] text-[#c0c4d0]/40 uppercase">
            Certificate
          </span>
        </div>
      )}
    </div>
  );
}

function CertificateLink({ cert }: { cert: (typeof CERTIFICATES)[number] }) {
  const href = cert.pdf ?? cert.href ?? cert.image;
  const label = cert.pdf || cert.image ? "View Certificate" : "View on Credly";

  if (!href) return null;

  return (
    <div className="relative z-10 mt-auto min-h-[2.75rem] border-t border-[#00f0ff]/10 pt-4">
      <ExternalLink
        href={href}
        external
        className="inline-flex cursor-pointer items-center gap-2 text-xs tracking-wider text-[#00f0ff]/70 uppercase underline-offset-4 transition-colors hover:text-[#00f0ff] hover:underline"
      >
        {label} ↗
      </ExternalLink>
    </div>
  );
}

export default function CertificationsBlock() {
  return (
    <div id="certifications" className="mt-16 max-md:mt-12 md:mt-24">
      <ScrollReveal>
        <motion.span className="mb-4 block text-xs tracking-[0.3em] text-[#00f0ff]/50 uppercase">
          Certifications
        </motion.span>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h3 className="mb-4 text-3xl font-light tracking-tight text-[#c0c4d0] max-md:text-[clamp(1.5rem,6vw,1.875rem)] md:text-4xl">
          <span className="text-[#00f0ff]">CREDENTIALS</span> & BADGES
        </h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[#c0c4d0]/40 md:text-base">
          Verified certificates and professional development credentials from
          coursework, events, and industry programs.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="mb-10 flex justify-center md:justify-start">
          <CinematicButton
            href={CREDLY_PROFILE_URL}
            external
            variant="outline"
            size="md"
          >
            <span className="tracking-[0.15em]">View Credly Profile</span>
            <span className="text-lg">↗</span>
          </CinematicButton>
        </div>
      </ScrollReveal>

      <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((cert, i) => (
          <ScrollReveal
            key={cert.id}
            delay={0.15 + i * 0.06}
            className="h-full"
          >
            <DepthCard intensity={5} className="h-full">
              <article className="group flex h-full min-h-[420px] flex-col border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] p-5 transition-colors duration-500 hover:border-[#00f0ff]/25 md:min-h-[440px] md:p-6">
                <CertificatePreview cert={cert} />

                <div className="flex min-h-0 flex-1 flex-col">
                  <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                    {cert.issuer}
                  </span>
                  <h4 className="mt-2 line-clamp-2 min-h-[3.25rem] text-lg font-medium leading-snug text-[#c0c4d0] transition-colors group-hover:text-[#00f0ff]">
                    {cert.title}
                  </h4>
                  {cert.issued && (
                    <p className="mt-1 shrink-0 text-xs text-[#c0c4d0]/35">
                      {cert.issued}
                    </p>
                  )}
                  {cert.description && (
                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[#c0c4d0]/40">
                      {cert.description}
                    </p>
                  )}
                  <CertificateLink cert={cert} />
                </div>
              </article>
            </DepthCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
