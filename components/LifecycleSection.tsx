"use client";

import { motion } from "framer-motion";
import { lifecycleStages } from "@/lib/data";

export default function LifecycleSection() {
  return (
    <section className="py-28 md:py-36 border-t hairline-dark bg-ink text-ivory relative overflow-hidden">
      {/* Background ambient dark grain */}
      <div className="absolute inset-0 editorial-grain opacity-20 pointer-events-none" />

      <div className="container-editorial relative">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-5 bg-bronze-light/70" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-light font-medium">
              Corporate Journey
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.65, 0, 0.35, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.12] max-w-2xl font-normal tracking-tight"
          >
            Legal Counsel Across the Corporate Lifecycle
          </motion.h2>
        </div>

        {/* Desktop: Connected horizontal timeline with progressive line fill */}
        <div className="hidden md:block relative pt-4">
          {/* Base timeline line */}
          <div className="absolute left-0 right-0 top-[18px] h-px bg-ivory/15" />

          {/* Animated bronze progress fill */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute left-0 right-0 top-[18px] h-px bg-gradient-to-r from-bronze to-bronze-light origin-left"
          />

          <div className="grid grid-cols-6 gap-6">
            {lifecycleStages.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.65, 0, 0.35, 1] }}
                className="group relative pt-10 transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-0 top-3 w-[11px] h-[11px] rounded-full bg-bronze border-2 border-ink group-hover:bg-ivory group-hover:scale-125 transition-all duration-300" />

                <p className="text-[11px] font-mono tracking-widest text-bronze-light mb-3 uppercase">
                  {stage.number}
                </p>
                <h3 className="font-serif text-xl md:text-2xl mb-2 text-ivory group-hover:text-bronze-light transition-colors duration-300 font-normal">
                  {stage.title}
                </h3>
                <p className="text-[13px] text-ivory/65 leading-relaxed group-hover:text-ivory/90 transition-colors duration-300">
                  {stage.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical connected timeline */}
        <div className="md:hidden relative pl-8">
          {/* Base vertical line */}
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-ivory/20" />

          {/* Animated vertical fill line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute left-[3px] top-2 bottom-2 w-px bg-bronze origin-top"
          />

          <div className="flex flex-col gap-10">
            {lifecycleStages.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                {/* Node marker */}
                <div className="absolute -left-[37px] top-1.5 w-[9px] h-[9px] rounded-full bg-bronze border-2 border-ink" />

                <p className="text-[11px] font-mono tracking-widest text-bronze-light mb-1.5 uppercase">
                  {stage.number}
                </p>
                <h3 className="font-serif text-xl text-ivory mb-1 font-normal">
                  {stage.title}
                </h3>
                <p className="text-[13px] text-ivory/65 leading-relaxed">
                  {stage.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
