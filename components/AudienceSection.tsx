"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { audiences } from "@/lib/data";
import { siteImages } from "@/lib/images";

export default function AudienceSection() {
  return (
    <section className="py-28 lg:py-40 bg-ink-soft border-t border-ink-line relative overflow-hidden">
      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-bronze" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-bronze font-medium">
                Targeted Legal Partnership
              </p>
            </div>
            <h2 className="font-serif text-ivory text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight font-normal">
              Built Around the Businesses We Advise
            </h2>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 text-sand/80 text-base sm:text-lg leading-relaxed">
            <p>
              Tailored legal frameworks engineered specifically for corporate stakeholders navigating the commercial landscape of Saudi Arabia.
            </p>
          </div>
        </div>

        {/* 5 Photographic Editorial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {audiences.map((audience, i) => {
            const imgData = siteImages.audiences[i] || siteImages.audiences[0];

            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.65, 0, 0.35, 1] }}
                className="group relative h-[360px] lg:h-[400px] border border-ink-line bg-ink overflow-hidden flex flex-col justify-end p-6 hover:border-bronze transition-all duration-500 shadow-xl"
              >
                {/* Photographic Background */}
                <Image
                  src={imgData.url}
                  alt={imgData.alt || audience.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-cover object-center filter brightness-[0.45] contrast-[1.08] transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Layered Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-bronze uppercase bg-ink/80 px-2.5 py-1 border border-bronze/30">
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-serif text-ivory text-2xl leading-snug mb-3 group-hover:text-bronze transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-sand/80 text-xs sm:text-sm leading-relaxed font-normal opacity-90 group-hover:opacity-100 transition-opacity">
                    {audience.description}
                  </p>
                  
                  {/* Subtle hover accent line */}
                  <div className="mt-4 h-[1.5px] w-8 bg-bronze transition-all duration-300 group-hover:w-full" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
