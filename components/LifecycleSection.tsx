"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { lifecycleStages } from "@/lib/data";
import { siteImages } from "@/lib/images";

export default function LifecycleSection() {
  return (
    <section className="py-28 lg:py-40 bg-ink relative overflow-hidden border-t border-ink-line">
      {/* Background Cinematic Image with Layered Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.lifecycleBg.url}
          alt={siteImages.lifecycleBg.alt}
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.25] contrast-[1.1] blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink z-10 pointer-events-none" />
      </div>

      <div className="container-editorial relative z-20">
        
        {/* Header */}
        <div className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 border border-bronze/30 bg-ink/70 backdrop-blur-md mb-4"
          >
            <span className="h-px w-6 bg-bronze" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-bronze font-medium">
              End-to-End Corporate Journey
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            className="font-serif text-ivory text-3xl sm:text-4xl lg:text-5xl leading-[1.12] font-normal tracking-tight"
          >
            Legal Counsel Across the Corporate Lifecycle
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sand/80 text-base sm:text-lg"
          >
            From foundation and governance to scaling and corporate restructuring in Saudi Arabia.
          </motion.p>
        </div>

        {/* Desktop: Connected 6-Stage Visual Grid Panels */}
        <div className="hidden lg:block relative pt-6">
          {/* Connecting Line */}
          <div className="absolute left-6 right-6 top-[28px] h-[2px] bg-ink-line z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute left-6 right-6 top-[28px] h-[2px] bg-gradient-to-r from-bronze/40 via-bronze to-bronze/40 origin-left z-0"
          />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {lifecycleStages.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.65, 0, 0.35, 1] }}
                className="group relative pt-12 p-6 border border-ink-line bg-ink/80 backdrop-blur-md hover:border-bronze hover:bg-ink-soft transition-all duration-500 flex flex-col justify-between h-[280px]"
              >
                {/* Node Connector Dot */}
                <div className="absolute left-1/2 -top-[9px] -translate-x-1/2 w-4 h-4 rounded-full bg-ink border-2 border-bronze group-hover:bg-bronze group-hover:scale-125 transition-all duration-300 shadow-md shadow-bronze/20" />

                <div>
                  <span className="block text-[11px] font-mono tracking-widest text-bronze mb-3 uppercase font-semibold">
                    {stage.number}
                  </span>
                  <h3 className="font-serif text-2xl text-ivory mb-2 group-hover:text-bronze transition-colors duration-300 font-normal">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-sand/75 leading-relaxed group-hover:text-ivory transition-colors duration-300">
                    {stage.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-ink-line/50 flex items-center justify-between text-[10px] uppercase tracking-widest text-sand/50 group-hover:text-bronze transition-colors">
                  <span>Stage {stage.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze/40 group-hover:bg-bronze" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Visual Cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6 relative">
          {lifecycleStages.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 border border-ink-line bg-ink/80 backdrop-blur-md relative"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono tracking-widest text-bronze uppercase font-semibold">
                  Stage {stage.number}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
              </div>
              <h3 className="font-serif text-2xl text-ivory mb-2 font-normal">
                {stage.title}
              </h3>
              <p className="text-sm text-sand/80 leading-relaxed">
                {stage.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
