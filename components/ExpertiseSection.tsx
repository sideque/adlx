"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Saudi legal expertise",
    body: "Grounded knowledge of the laws and regulatory bodies that govern corporate activity in the Kingdom.",
  },
  {
    title: "Corporate experience",
    body: "Familiarity with the structures and decisions companies face from formation through maturity.",
  },
  {
    title: "Commercial understanding",
    body: "Legal advice framed around how businesses actually operate, not abstract legal theory.",
  },
  {
    title: "Practical advice",
    body: "Guidance that leadership teams can act on, delivered in clear and direct terms.",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-28 md:py-36 border-t hairline bg-ivory relative">
      <div className="container-editorial grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & 4 Points */}
        <div className="md:col-span-7 lg:col-span-6 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-5 bg-bronze/70" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-dark font-medium">
              Regional Grounding
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.65, 0, 0.35, 1] }}
            className="font-serif text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.12] tracking-tight font-normal mb-12"
          >
            Saudi Legal Expertise.
            <br />
            <span className="italic text-ink/90">Business-Focused</span> Advice.
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group border-t hairline pt-5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze/70 group-hover:scale-125 transition-transform duration-300" />
                  <h3 className="font-serif text-xl text-ink font-normal group-hover:text-bronze-dark transition-colors duration-300">
                    {point.title}
                  </h3>
                </div>
                <p className="text-[14px] text-ink/70 leading-[1.65] font-normal">
                  {point.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Desaturated Saudi Architectural Visual */}
        <div className="md:col-span-5 lg:col-span-6 order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            className="relative w-full h-[340px] sm:h-[400px] md:h-[480px] rounded-sm overflow-hidden border hairline bg-ivory-dim/30 p-4 sm:p-6"
          >
            <SaudiModernFacadeVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Desaturated Saudi Modern Architectural Facade Visual.
 * Abstracted representation of modern Riyadh architectural stone elevations,
 * geometric shadow bands, and warm bronze trim accents.
 */
function SaudiModernFacadeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ivory/60 via-transparent to-ivory-dim/40 pointer-events-none z-10" />

      <svg
        viewBox="0 0 460 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        {/* Base stone elevation plane */}
        <rect x="30" y="30" width="400" height="420" fill="#EDE7D9" opacity="0.5" stroke="#DAD2BF" strokeWidth="1" />

        {/* Architectural Facade Columns */}
        <rect x="60" y="60" width="90" height="360" fill="#DAD2BF" opacity="0.5" />
        <rect x="185" y="60" width="90" height="360" fill="#211E19" opacity="0.05" />
        <rect x="310" y="60" width="90" height="360" fill="#9C7A45" opacity="0.12" />

        {/* Horizontal Shadow Striations */}
        {Array.from({ length: 9 }).map((_, row) => (
          <line
            key={`row-${row}`}
            x1="30"
            y1={60 + row * 45}
            x2="430"
            y2={60 + row * 45}
            stroke="#14120F"
            strokeWidth="0.75"
            strokeOpacity="0.18"
          />
        ))}

        {/* Diagonal Architectural Shadow Angle */}
        <polygon points="60,60 310,60 400,420 150,420" fill="#9C7A45" fillOpacity="0.04" />

        {/* Bronze Axis Line & Nodes */}
        <line x1="30" y1="240" x2="430" y2="240" stroke="#9C7A45" strokeWidth="1.5" strokeOpacity="0.8" />
        <circle cx="105" cy="240" r="3.5" fill="#9C7A45" />
        <circle cx="230" cy="240" r="3.5" fill="#9C7A45" />
        <circle cx="355" cy="240" r="3.5" fill="#9C7A45" />
      </svg>

      <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between border-t hairline-dark/20 pt-2.5">
        <span className="text-[10px] uppercase tracking-[0.22em] text-ink/50 font-medium">
          Modern Saudi Architectural Detail
        </span>
        <span className="text-[10px] font-serif italic text-bronze-dark">
          Contextual Legal Advisory
        </span>
      </div>
    </div>
  );
}
