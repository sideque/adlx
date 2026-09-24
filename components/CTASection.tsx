"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteImages } from "@/lib/images";

export default function CTASection() {
  return (
    <section id="contact" className="py-36 lg:py-48 bg-ink relative overflow-hidden border-t border-ink-line">
      {/* Full-width Dramatic Background Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.ctaBg.url}
          alt={siteImages.ctaBg.alt}
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.22] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink z-10 pointer-events-none" />
      </div>

      <div className="container-editorial relative z-20 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 border border-bronze/40 bg-ink/80 backdrop-blur-md mb-8"
        >
          <span className="h-px w-6 bg-bronze" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-bronze font-medium">
            Initiate Advisory Counsel
          </p>
          <span className="h-px w-6 bg-bronze" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="font-serif text-ivory text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.08] font-normal tracking-tight"
        >
          Let&rsquo;s Put the Right Legal
          <br />
          <span className="italic text-bronze-light font-light">Structure</span> Behind Your Business.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sand/80 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Speak with our corporate advisory team in Riyadh to discuss entity structuring, commercial contracts, governance, or market expansion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:contact@adlx.law"
            className="group inline-flex items-center gap-3 bg-bronze text-ink px-10 py-5 text-[12px] uppercase tracking-[0.22em] font-semibold hover:bg-ivory transition-all duration-300 shadow-2xl shadow-black/60"
          >
            <span>Request a Legal Consultation</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-ink-line/50 flex flex-col sm:flex-row items-center justify-between text-xs text-sand/60 gap-4"
        >
          <span>Riyadh, Kingdom of Saudi Arabia</span>
          <span className="font-serif italic text-bronze">ADLX Corporate &amp; Commercial Legal Advisory</span>
          <span>Vision 2030 Aligned Market Guidance</span>
        </motion.div>

      </div>
    </section>
  );
}
