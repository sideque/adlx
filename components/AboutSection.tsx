"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-36 border-t hairline bg-ivory relative">
      <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Left Header Column */}
        <div className="md:col-span-5 lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-5 bg-bronze/70" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-dark font-medium">
              ADLX / Corporate Legal Counsel
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.65, 0, 0.35, 1] }}
            className="font-serif text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.12] tracking-tight font-normal"
          >
            Legal Counsel for Businesses in Saudi Arabia
          </motion.h2>
        </div>

        {/* Right Editorial Copy Column */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.65, 0, 0.35, 1] }}
          className="md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6 space-y-7"
        >
          <p className="text-[17px] sm:text-[18px] md:text-[19px] leading-[1.75] text-ink/80 max-w-2xl font-normal">
            ADLX supports <strong className="font-medium text-ink">companies</strong>,{" "}
            <strong className="font-medium text-ink">shareholders</strong>,{" "}
            <strong className="font-medium text-ink">investors</strong> and{" "}
            <strong className="font-medium text-ink">management teams</strong> across
            the corporate lifecycle — from the earliest decisions of incorporation
            through governance, growth and change. Our work is built on a clear
            understanding of the Saudi business environment and the practical legal
            needs of the companies operating within it.
          </p>

          <p className="text-[17px] sm:text-[18px] md:text-[19px] leading-[1.75] text-ink/80 max-w-2xl font-normal border-l-2 border-bronze/40 pl-6 py-1 italic">
            We advise on the matters that shape how a business is structured,
            governed and protected, translating regulatory complexity into
            decisions leadership teams can act on with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
