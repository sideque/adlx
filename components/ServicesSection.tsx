"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 md:py-36 border-t hairline bg-ivory">
      <div className="container-editorial">
        {/* Header Grid */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-5 bg-bronze/70" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-dark font-medium">
                Our Services
              </p>
            </div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-7 md:col-start-6 font-serif text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.12] tracking-tight font-normal"
          >
            Legal clarity for complex business decisions.
          </motion.h2>
        </div>

        {/* Editorial Services List */}
        <div className="border-b hairline">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.65, 0, 0.35, 1] }}
              className="group relative border-t hairline py-9 md:py-11 grid md:grid-cols-12 gap-4 md:gap-10 items-start cursor-pointer transition-colors duration-300 hover:bg-ivory-dim/20"
            >
              {/* Number with subtle horizontal slide */}
              <span className="md:col-span-1 font-serif text-bronze text-xl md:text-2xl transition-transform duration-300 group-hover:translate-x-1 font-normal">
                {service.number}
              </span>

              {/* Service Title with subtle translate & hover color */}
              <div className="md:col-span-5 flex items-center gap-3">
                <h3 className="font-serif text-ink text-2xl sm:text-[1.75rem] leading-snug transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-bronze-dark font-normal">
                  {service.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-bronze opacity-0 -translate-x-2 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 shrink-0"
                />
              </div>

              {/* Service Description with opacity shift */}
              <p className="md:col-span-6 text-ink/65 group-hover:text-ink/90 text-[15px] sm:text-[16px] leading-[1.7] max-w-lg transition-colors duration-300 font-normal">
                {service.description}
              </p>

              {/* Animated bottom hairline accent */}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
