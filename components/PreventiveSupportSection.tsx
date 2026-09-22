"use client";

import { motion } from "framer-motion";
import { preventiveSupport } from "@/lib/data";

export default function PreventiveSupportSection() {
  return (
    <section className="py-28 md:py-36 border-t hairline bg-ivory-dim/50 relative overflow-hidden">
      <div className="container-editorial relative">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-5 bg-bronze/70" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-dark font-medium">
            Preventive Legal Counsel
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="font-serif text-ink text-4xl sm:text-5xl md:text-[3.8rem] leading-[1.08] tracking-tight max-w-4xl font-normal"
        >
          Solve legal risks before they become legal disputes.
        </motion.h2>

        {/* Interactive Preventive Support Service Tags */}
        <div className="mt-16 md:mt-22 flex flex-wrap items-center gap-x-10 gap-y-6">
          {preventiveSupport.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.65, 0, 0.35, 1] }}
              className="group relative cursor-pointer py-1"
            >
              <span className="text-[15px] sm:text-[16px] md:text-[17px] text-ink/75 group-hover:text-ink transition-colors duration-300 font-normal">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-ink/20 group-hover:bg-bronze transition-colors duration-300" />
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
