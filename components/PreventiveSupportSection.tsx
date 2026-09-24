"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { preventiveSupport } from "@/lib/data";
import { siteImages } from "@/lib/images";

export default function PreventiveSupportSection() {
  return (
    <section className="py-32 lg:py-44 bg-ink relative overflow-hidden border-t border-ink-line">
      {/* Full-width Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.preventiveBg.url}
          alt={siteImages.preventiveBg.alt}
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.22] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/90 z-10 pointer-events-none" />
      </div>

      <div className="container-editorial relative z-20">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 border border-bronze/40 bg-ink/70 backdrop-blur-md mb-8"
        >
          <span className="h-px w-6 bg-bronze" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-bronze font-medium">
            Preventive Legal Counsel
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="font-serif text-ivory text-4xl sm:text-6xl lg:text-7xl leading-[1.06] tracking-tight max-w-5xl font-normal"
        >
          Solve legal risks before they become <span className="italic text-bronze-light font-light">legal disputes</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sand/80 text-lg sm:text-xl max-w-2xl font-normal"
        >
          Proactive legal review, risk mitigation frameworks, and contract precision designed to protect enterprise value in Saudi Arabia.
        </motion.p>

        {/* Elegant Interactive Services Grid / Pills */}
        <div className="mt-16 lg:mt-24 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {preventiveSupport.map((item, i) => (
            <motion.a
              key={item}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.65, 0, 0.35, 1] }}
              className="group relative border border-ink-line bg-ink/70 backdrop-blur-md p-6 hover:border-bronze hover:bg-ink-soft transition-all duration-300 flex items-center justify-between shadow-lg"
            >
              <span className="text-base sm:text-lg text-sand/90 font-serif group-hover:text-ivory transition-colors duration-300">
                {item}
              </span>
              
              <div className="w-8 h-8 rounded-full border border-bronze/30 flex items-center justify-center text-bronze group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink transition-all duration-300">
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Bottom line glow */}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
