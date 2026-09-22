"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="py-32 md:py-44 border-t hairline-dark bg-ink text-ivory relative overflow-hidden">
      {/* Subtle ambient dark grain overlay */}
      <div className="absolute inset-0 editorial-grain opacity-20 pointer-events-none" />

      <div className="container-editorial relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-5 bg-bronze-light/70" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-light font-medium">
            Initiate Advisory Counsel
          </p>
          <span className="h-px w-5 bg-bronze-light/70" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-[3.5rem] leading-[1.08] max-w-3xl mx-auto font-normal tracking-tight"
        >
          Let&rsquo;s Put the Right Legal Structure Behind Your Business.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.65, 0, 0.35, 1] }}
          className="mt-14"
        >
          <a
            href="mailto:contact@adlx.example"
            className="inline-flex items-center justify-center bg-ivory text-ink px-10 py-4.5 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-bronze-light hover:text-ivory transition-all duration-300 border border-ivory/20"
          >
            Request a Legal Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
