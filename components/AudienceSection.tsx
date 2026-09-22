"use client";

import { motion } from "framer-motion";
import { audiences } from "@/lib/data";

export default function AudienceSection() {
  return (
    <section className="py-28 md:py-36 border-t hairline bg-ivory">
      <div className="container-editorial">
        {/* Header Grid */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-5 bg-bronze/70" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-dark font-medium">
                Who We Serve
              </p>
            </div>
          </div>
          <h2 className="md:col-span-7 md:col-start-6 font-serif text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.12] tracking-tight font-normal">
            Built Around the Businesses We Advise
          </h2>
        </div>

        {/* 5 Column Editorial Layout */}
        <div className="grid md:grid-cols-5 border-t hairline">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.65, 0, 0.35, 1] }}
              className="group relative py-9 md:py-12 px-0 md:px-7 border-b md:border-b-0 md:border-r last:border-r-0 hairline transition-colors duration-300 hover:bg-ivory-dim/20"
            >
              {/* Top subtle bronze line reveal */}
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-bronze w-0 group-hover:w-full transition-all duration-300" />

              <h3 className="font-serif text-xl sm:text-[1.35rem] text-ink mb-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-bronze-dark font-normal">
                {audience.title}
              </h3>
              <p className="text-[14px] text-ink/65 group-hover:text-ink/90 leading-[1.65] transition-colors duration-300 font-normal">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
