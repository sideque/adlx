"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
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
          ? "bg-ink/95 backdrop-blur-md border-b border-ink-line py-3 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <nav className="container-editorial flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
        >
          <div className="relative h-9 md:h-10 w-28 md:w-32">
            <Image
              src="/adlxlogo.png"
              alt="ADLX Logo"
              fill
              sizes="128px"
              className="object-contain brightness-0 invert transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 relative py-1 ${
                  isActive ? "text-bronze font-semibold" : "text-ivory/80 hover:text-ivory"
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
          className="hidden md:inline-flex items-center gap-2 border border-bronze/60 bg-bronze/10 px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium text-bronze hover:bg-bronze hover:text-ink transition-all duration-300 shadow-sm"
        >
          <span>Speak to Our Legal Team</span>
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile Toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ivory hover:text-bronze transition-colors"
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
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
            className="md:hidden overflow-hidden bg-ink/98 border-b border-ink-line shadow-2xl backdrop-blur-xl"
          >
            <div className="container-editorial flex flex-col py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-serif text-ivory tracking-wide hover:text-bronze transition-colors flex items-center justify-between border-b border-ink-line pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} className="text-bronze" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 border border-bronze bg-bronze/10 px-6 py-3.5 text-[12px] uppercase tracking-[0.2em] text-bronze hover:bg-bronze hover:text-ink transition-all duration-300"
              >
                <span>Speak to Our Legal Team</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
