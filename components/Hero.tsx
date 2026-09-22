"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden bg-ivory">
      {/* Background ambient architectural grain */}
      <div className="absolute inset-0 editorial-grain opacity-40 pointer-events-none" />

      <div className="container-editorial relative grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Copy Column */}
        <div className="md:col-span-7 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-6 bg-bronze/70" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-dark font-medium">
              ADLX — Corporate &amp; Commercial Legal Advisory
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            className="font-serif text-ink text-[2.85rem] leading-[1.08] sm:text-6xl md:text-[4.35rem] md:leading-[1.04] tracking-tight font-normal"
          >
            Clarity in Law.
            <br />
            <span className="italic font-light text-ink/90">Confidence</span> in Business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.65, 0, 0.35, 1] }}
            className="mt-8 max-w-lg text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-ink/75 font-normal"
          >
            Strategic corporate and commercial legal counsel for businesses
            operating, investing and growing in Saudi Arabia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="mt-11 flex flex-wrap items-center gap-6 sm:gap-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-ink text-ivory px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-bronze-dark transition-all duration-300 shadow-sm"
            >
              Speak to Our Legal Team
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border-b border-ink/40 pb-1 text-[11px] uppercase tracking-[0.18em] font-medium text-ink hover:border-bronze hover:text-bronze-dark transition-colors duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>

        {/* Right Architectural Visual Column */}
        <div className="md:col-span-5 lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
            className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] rounded-sm overflow-hidden border hairline bg-ivory-dim/40 p-4 sm:p-6"
          >
            <SaudiArchitecturalVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Desaturated, cinematic Saudi architectural composition.
 * Combines modern Riyadh corporate structural forms (cut stone facades, glass plane shadows, 
 * geometric lattice proportions, and subtle bronze architectural accents).
 * Blends naturally into the cream (#F6F2EA) palette with total restraint.
 */
function SaudiArchitecturalVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background gradient fade to blend with cream */}
      <div className="absolute inset-0 bg-gradient-to-tr from-ivory-dim/80 via-transparent to-ivory/50 z-10 pointer-events-none" />

      <svg
        viewBox="0 0 460 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover text-ink"
        aria-hidden="true"
      >
        {/* Soft shadow background plane */}
        <rect x="40" y="40" width="380" height="480" fill="#EDE7D9" opacity="0.6" />

        {/* Vertical Architectural Facade Pillars (Desaturated Stone & Glass Geometry) */}
        <motion.rect
          x="70"
          y="70"
          width="80"
          height="420"
          fill="#DAD2BF"
          opacity="0.45"
          initial={{ height: 0 }}
          animate={{ height: 420 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.rect
          x="175"
          y="110"
          width="110"
          height="380"
          fill="#211E19"
          opacity="0.06"
          initial={{ height: 0 }}
          animate={{ height: 380 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.rect
          x="310"
          y="40"
          width="85"
          height="450"
          fill="#9C7A45"
          opacity="0.12"
          initial={{ height: 0 }}
          animate={{ height: 450 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* Geometric Shadow Slats (Modern Riyadh Facade Detail) */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.line
            key={`slat-${i}`}
            x1="70"
            y1={90 + i * 32}
            x2="395"
            y2={90 + i * 32}
            stroke="#14120F"
            strokeWidth="0.75"
            strokeOpacity="0.18"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            transition={{ duration: 0.6, delay: 0.7 + i * 0.04 }}
          />
        ))}

        {/* Fine Architectural Elevation Grid & Bronze Accent Lines */}
        <motion.line
          x1="40"
          y1="220"
          x2="420"
          y2="220"
          stroke="#9C7A45"
          strokeWidth="1.25"
          strokeOpacity="0.75"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.line
          x1="40"
          y1="370"
          x2="420"
          y2="370"
          stroke="#9C7A45"
          strokeWidth="1"
          strokeOpacity="0.45"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.line
          x1="160"
          y1="40"
          x2="160"
          y2="520"
          stroke="#3A362E"
          strokeWidth="0.75"
          strokeOpacity="0.3"
        />
        <motion.line
          x1="300"
          y1="40"
          x2="300"
          y2="520"
          stroke="#3A362E"
          strokeWidth="0.75"
          strokeOpacity="0.3"
        />

        {/* Minimal geometric architectural intersection markers */}
        <circle cx="160" cy="220" r="3" fill="#9C7A45" />
        <circle cx="300" cy="220" r="3" fill="#9C7A45" />
        <circle cx="300" cy="370" r="2.5" fill="#3A362E" opacity="0.6" />
      </svg>

      {/* Subtle bottom editorial caption overlay */}
      <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between border-t hairline-dark/20 pt-2.5">
        <span className="text-[10px] uppercase tracking-[0.22em] text-ink/50 font-medium">
          Riyadh Architectural Form
        </span>
        <span className="text-[10px] font-serif italic text-bronze-dark">
          Kingdom of Saudi Arabia
        </span>
      </div>
    </div>
  );
}
