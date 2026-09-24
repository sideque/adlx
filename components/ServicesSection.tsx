"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { siteImages } from "@/lib/images";

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 lg:py-40 bg-ink-soft relative border-t border-ink-line overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-bronze/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-bronze" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-bronze font-medium">
                Core Legal Practice Areas
              </p>
            </div>
            <h2 className="font-serif text-ivory text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight font-normal">
              Legal Clarity for Complex Corporate Decisions
            </h2>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 text-sand/80 text-base sm:text-lg leading-relaxed">
            <p>
              We deliver strategic counsel across the full spectrum of corporate and commercial matters, tailoring frameworks to safeguard value and support business growth in the Kingdom of Saudi Arabia.
            </p>
          </div>
        </div>

        {/* Large Image-Based Service Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const imgData = siteImages.services[i] || siteImages.services[0];

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.65, 0, 0.35, 1] }}
                className="group relative border border-ink-line bg-ink overflow-hidden flex flex-col h-full hover:border-bronze/60 transition-colors duration-500 cursor-pointer shadow-xl shadow-black/40"
              >
                {/* Image Block with Subtle Zoom */}
                <div className="relative w-full h-[260px] overflow-hidden">
                  <Image
                    src={imgData.url}
                    alt={imgData.alt || service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-editorial group-hover:scale-110 filter contrast-[1.05]"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                  
                  {/* Service Number Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-ink/85 border border-bronze/40 px-3 py-1 text-bronze font-serif text-sm">
                    {service.number}
                  </div>

                  {/* Top Right Hover Arrow */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 border border-ivory/20 bg-ink/60 rounded-full flex items-center justify-center text-ivory transition-all duration-300 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink">
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <h3 className="font-serif text-ivory text-2xl leading-snug mb-3 group-hover:text-bronze transition-colors duration-300 group-hover:translate-x-1">
                    {service.title}
                  </h3>

                  <p className="text-sand/75 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-ink-line flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-bronze group-hover:text-ivory transition-colors">
                    <span>Explore Advisory</span>
                    <span className="h-[1.5px] w-6 bg-bronze transition-all duration-300 group-hover:w-12 group-hover:bg-ivory" />
                  </div>
                </div>

                {/* Bronze accent bottom line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
