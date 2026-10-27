"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import MobileMenu, { MobileMenuButton } from "./MobileMenu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Identity", href: "#identity" },
  { label: "Experience", href: "#experience" },
  { label: "Archive", href: "#archive" },
  { label: "System", href: "#system" },
  { label: "Visions", href: "#visions" },
  { label: "Transmission", href: "#transmission" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-500 max-md:px-4 max-md:py-3 ${
          scrolled
            ? "bg-[#08080a]/80 shadow-lg shadow-[#00f0ff]/5 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <MagneticButton>
            <span
              className="cursor-pointer text-lg font-bold tracking-widest text-[#00f0ff] max-md:text-base max-md:tracking-[0.2em]"
              onClick={() => scrollTo("#home")}
            >
              JANNEL SUBA
            </span>
          </MagneticButton>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`relative px-3 py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-[#00f0ff]"
                    : "text-[#c0c4d0]/50 hover:text-[#c0c4d0]/80"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-3 right-3 h-[1px] bg-[#00f0ff]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <MobileMenuButton
            open={mobileOpen}
            onToggle={() => setMobileOpen((v) => !v)}
          />
        </div>
      </motion.nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollTo}
      />
    </>
  );
}
