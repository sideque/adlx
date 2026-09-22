"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      
      const sections = navLinks.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/92 backdrop-blur-md border-b hairline py-0 shadow-sm"
          : "bg-transparent border-b border-transparent py-1"
      }`}
    >
      <nav className="container-editorial flex items-center justify-between h-18 md:h-[76px]">
        {/* Brand Mark */}
        <a
          href="#"
          className="font-serif text-2xl md:text-[1.75rem] tracking-wider text-ink font-normal flex items-center gap-3 group"
        >
          <span>ADLX</span>
          <span className="h-1.5 w-1.5 rounded-full bg-bronze opacity-80 group-hover:scale-125 transition-transform duration-300" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative py-1.5 ${
                  isActive ? "text-ink font-semibold" : "text-ink/75 hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-[1.5px] bg-bronze transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center border border-ink/80 px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium text-ink hover:bg-ink hover:text-ivory hover:border-ink transition-all duration-300"
        >
          Speak to Our Legal Team
        </a>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink hover:text-bronze transition-colors"
        >
          {open ? <X size={24} strokeWidth={1.25} /> : <Menu size={24} strokeWidth={1.25} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="md:hidden overflow-hidden bg-ivory border-b hairline shadow-xl"
          >
            <div className="container-editorial flex flex-col py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-serif text-ink tracking-wide hover:text-bronze transition-colors flex items-center justify-between border-b hairline pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-[11px] tracking-widest text-bronze uppercase">Explore</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center border border-ink px-6 py-3.5 text-[12px] uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-ivory transition-all duration-300"
              >
                Speak to Our Legal Team
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
