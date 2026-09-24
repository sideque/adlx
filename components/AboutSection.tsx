"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteImages } from "@/lib/images";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 lg:py-40 bg-ink relative overflow-hidden border-t border-ink-line">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-bronze/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Asymmetric Dual Image Composition Column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] overflow-hidden border border-ink-line group"
            >
              <Image
                src={siteImages.about.primary.url}
                alt={siteImages.about.primary.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-bronze font-semibold bg-ink/80 px-3 py-1.5 border border-bronze/30 backdrop-blur-md">
                  Corporate Infrastructure &bull; KSA
                </span>
              </div>
            </motion.div>

            {/* Overlapping Smaller Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
              className="hidden sm:block absolute -bottom-10 -right-6 lg:-right-10 w-3/5 h-[260px] lg:h-[300px] overflow-hidden border-2 border-ink shadow-2xl shadow-black/80 z-20 group"
            >
              <Image
                src={siteImages.about.secondary.url}
                alt={siteImages.about.secondary.alt}
                fill
                sizes="35vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-bronze" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-bronze font-medium">
                ADLX &bull; Corporate Counsel
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
              className="font-serif text-ivory text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight font-normal"
            >
              Legal Counsel for Businesses in Saudi Arabia
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
              className="space-y-6 text-sand/85 text-base sm:text-lg leading-relaxed font-normal"
            >
              <p>
                ADLX supports <strong className="font-semibold text-ivory">companies</strong>,{" "}
                <strong className="font-semibold text-ivory">shareholders</strong>,{" "}
                <strong className="font-semibold text-ivory">investors</strong> and{" "}
                <strong className="font-semibold text-ivory">management teams</strong> across
                the corporate lifecycle &mdash; from the earliest decisions of incorporation
                through governance, growth and change.
              </p>

              <div className="border-l-2 border-bronze pl-6 py-2 bg-ink-soft/60">
                <p className="font-serif italic text-ivory text-lg sm:text-xl leading-snug">
                  &ldquo;We advise on the matters that shape how a business is structured, governed and protected, translating regulatory complexity into decisions leadership teams can act on with confidence.&rdquo;
                </p>
              </div>

              <p className="text-sand/75 text-sm sm:text-base">
                Our work is built on a deep understanding of the Saudi business environment, statutory frameworks, and the practical legal requirements of high-performing enterprises operating in the Kingdom.
              </p>
            </motion.div>

            {/* Asymmetric Info Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
              className="pt-6 border-t border-ink-line grid sm:grid-cols-2 gap-6"
            >
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-bronze font-semibold mb-1">
                  Jurisdiction
                </span>
                <span className="text-sm font-serif text-ivory">Kingdom of Saudi Arabia</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-bronze font-semibold mb-1">
                  Focus
                </span>
                <span className="text-sm font-serif text-ivory">Corporate &amp; Commercial Law</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
