"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Identity", href: "#identity" },
  { label: "Experience", href: "#experience" },
  { label: "Archive", href: "#archive" },
  { label: "System", href: "#system" },
  { label: "Visions", href: "#visions" },
  { label: "Transmission", href: "#transmission" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (href: string) => void;
}

export function MobileMenuButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onToggle}
      className="relative z-[60] flex h-12 w-12 flex-col items-center justify-center gap-[5px] rounded-full border border-[#00f0ff]/20 bg-[#08080a]/60 backdrop-blur-md md:hidden"
    >
      <span
        className={`absolute h-[2px] w-5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 ${
          open ? "translate-y-0 rotate-45" : "-translate-y-[6px] rotate-0"
        }`}
      />
      <span
        className={`h-[2px] w-5 rounded-full bg-[#c0c4d0]/80 transition-all duration-300 ${
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      <span
        className={`absolute h-[2px] w-5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 ${
          open ? "translate-y-0 -rotate-45" : "translate-y-[6px] rotate-0"
        }`}
      />
    </button>
  );
}

export default function MobileMenu({
  open,
  onClose,
  activeSection,
  onNavigate,
}: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[55] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#08080a]/97 backdrop-blur-2xl"
            onClick={onClose}
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,240,255,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,240,255,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f0ff]/10 blur-3xl"
          />

          <nav className="relative flex h-full flex-col justify-center px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(5rem,env(safe-area-inset-top))]">
            <p className="mb-8 text-center text-[10px] tracking-[0.35em] text-[#00f0ff]/40 uppercase">
              Navigate
            </p>
            <ul className="mx-auto flex w-full max-w-sm flex-col gap-2">
              {navItems.map((item, i) => {
                const id = item.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                  >
                    <button
                      type="button"
                      onClick={() => onNavigate(item.href)}
                      className={`flex min-h-[52px] w-full items-center justify-between rounded-lg border px-5 py-3 text-left transition-colors duration-300 ${
                        isActive
                          ? "border-[#00f0ff]/40 bg-[#00f0ff]/10 text-[#00f0ff]"
                          : "border-[#00f0ff]/10 bg-[#00f0ff]/[0.02] text-[#c0c4d0]/75 active:bg-[#00f0ff]/10"
                      }`}
                    >
                      <span className="text-lg font-light tracking-[0.2em] uppercase">
                        {item.label}
                      </span>
                      <span
                        className={`text-sm ${isActive ? "text-[#00f0ff]" : "text-[#00f0ff]/30"}`}
                      >
                        →
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-center text-[9px] tracking-[0.3em] text-[#c0c4d0]/25 uppercase"
            >
              Jannel Crespo Suba — Portfolio
            </motion.p>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
