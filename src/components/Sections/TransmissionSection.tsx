"use client";

import { motion } from "framer-motion";
import { CONTACT, CONTACT_CTA } from "@/lib/portfolio-data";
import ScrollReveal from "../Effects/ScrollReveal";
import CinematicButton from "../ui/CinematicButton";
import ExternalLink from "../ui/ExternalLink";

const contactLinks = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "jannel-suba",
    href: CONTACT.linkedIn,
    external: true,
  },
  {
    label: "Facebook",
    value: "chuchichu24",
    href: CONTACT.facebook,
    external: true,
  },
  {
    label: "Credly",
    value: "Digital Credentials",
    href: CONTACT.credly,
    external: true,
  },
] as const;

export default function TransmissionSection() {
  return (
    <section
      id="transmission"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/[0.02] to-transparent" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <ScrollReveal>
          <motion.span className="mb-6 block text-xs tracking-[0.3em] text-[#00f0ff]/50 uppercase">
            Transmission
          </motion.span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-8 text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-[#00f0ff]">GET IN</span>
            <br />
            <span className="text-[#c0c4d0]">TOUCH</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-[#c0c4d0]/40">
            {CONTACT_CTA}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mb-12 grid gap-4 text-left sm:grid-cols-2">
            {contactLinks.map((link) => (
              <ExternalLink
                key={link.label}
                href={link.href}
                className="group block border border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] px-5 py-4 transition-colors hover:border-[#00f0ff]/30"
              >
                <span className="text-[10px] tracking-[0.2em] text-[#00f0ff]/40 uppercase">
                  {link.label}
                </span>
                <p className="mt-1 text-sm text-[#c0c4d0]/70 transition-colors group-hover:text-[#00f0ff]">
                  {link.value}
                  {link.external && (
                    <span className="ml-1 text-[#00f0ff]/40">↗</span>
                  )}
                </p>
              </ExternalLink>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CinematicButton
              href={`mailto:${CONTACT.email}`}
              size="lg"
            >
              <span className="tracking-[0.2em]">Email Me</span>
              <span className="text-lg">→</span>
            </CinematicButton>
            <CinematicButton
              href={CONTACT.linkedIn}
              external
              variant="outline"
              size="lg"
            >
              <span className="tracking-[0.2em]">LinkedIn</span>
              <span className="text-lg">↗</span>
            </CinematicButton>
            <CinematicButton
              href={CONTACT.credly}
              external
              variant="ghost"
              size="lg"
            >
              <span className="tracking-[0.2em]">Credly</span>
              <span className="text-lg">↗</span>
            </CinematicButton>
          </div>
        </ScrollReveal>
      </div>

      <motion.div
        className="absolute bottom-12 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.p
          className="text-[10px] tracking-[0.3em] text-[#00f0ff]/20 uppercase"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Jannel Suba &copy; {new Date().getFullYear()} &mdash; Built Through
          Obsession
        </motion.p>
      </motion.div>
    </section>
  );
}
