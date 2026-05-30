"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePerformance } from "@/contexts/PerformanceContext";
import { useMouseRef } from "@/hooks/useMouseRef";
import { PERSONAL } from "@/lib/portfolio-data";
import HeroBackground from "./HeroBackground";
import HeroCinematicOverlay from "./HeroCinematicOverlay";
import CinematicButton from "../ui/CinematicButton";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const profile = usePerformance();
  const mouseRef = useMouseRef();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const headlineRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (profile.reduceMotion) return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.querySelectorAll(".word"),
          { y: 120, opacity: 0, rotateX: 30 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out",
          }
        );
      }

      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 1.2,
            ease: "power3.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, [profile.reduceMotion]);

  const scrollToArchive = () => {
    const el = document.getElementById("archive");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("transmission");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {profile.enable3D ? (
        <>
          <Scene3D mouseRef={mouseRef} />
          <HeroCinematicOverlay mouseRef={mouseRef} />
        </>
      ) : (
        <HeroBackground />
      )}

      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/50 via-transparent to-[#08080a]/90" />
        <div className="absolute left-0 top-0 h-full w-2/5 bg-gradient-to-r from-[#08080a]/70 via-[#08080a]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08080a] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,transparent_0%,#08080a_75%)] opacity-60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 md:px-12 lg:px-24">
        <motion.div
          className="mb-4 flex items-center gap-2"
          initial={profile.reduceMotion ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: profile.reduceMotion ? 0 : 0.8, delay: 0.3 }}
        >
          <span className="h-[1px] w-8 bg-[#00f0ff]/40" />
          <span className="text-[10px] tracking-[0.3em] text-[#00f0ff]/60 uppercase">
            {PERSONAL.role}
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="max-w-5xl text-6xl font-light leading-[1.05] tracking-tight md:text-8xl lg:text-9xl"
        >
          {["JANNEL", "SUBA"].map((word, i) => (
            <span
              key={word}
              className="word inline-block overflow-hidden"
              style={{ perspective: "800px" }}
            >
              <span
                className="inline-block"
                style={{ color: i === 1 ? "#00f0ff" : "#c0c4d0" }}
              >
                {word}{" "}
              </span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-4 overflow-hidden"
          initial={profile.reduceMotion ? false : { width: 0 }}
          animate={{ width: "6rem" }}
          transition={{
            duration: profile.reduceMotion ? 0 : 0.8,
            delay: 0.6,
            ease: "easeInOut",
          }}
        >
          <div className="h-px bg-gradient-to-r from-[#00f0ff] to-transparent" />
        </motion.div>

        <p
          ref={headlineRef}
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[#c0c4d0]/70 md:text-xl"
        >
          {PERSONAL.heroHeadline}
        </p>

        <p
          ref={subtitleRef}
          className="mt-4 max-w-xl text-base leading-relaxed text-[#c0c4d0]/40 md:text-lg"
        >
          {PERSONAL.heroDescription}
        </p>

        <p className="mt-3 text-[10px] tracking-[0.25em] text-[#00f0ff]/30 uppercase">
          Built from obsession
        </p>

        <div
          ref={ctaRef}
          className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <CinematicButton size="lg" onClick={scrollToArchive}>
            <span className="tracking-[0.2em]">View Projects</span>
            <span className="text-lg">→</span>
          </CinematicButton>
          <CinematicButton variant="ghost" size="md" onClick={scrollToContact}>
            <span className="tracking-[0.2em]">Contact Me</span>
          </CinematicButton>
        </div>
      </div>

      {!profile.reduceMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[8px] tracking-[0.3em] text-[#00f0ff]/30 uppercase">
              Scroll
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-[#00f0ff]/40 to-transparent" />
          </div>
        </motion.div>
      )}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-64 bg-gradient-to-t from-[#08080a] via-[#08080a]/80 to-transparent" />
    </section>
  );
}
