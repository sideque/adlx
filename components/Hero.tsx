"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { siteImages } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ink pt-24 pb-16">
      {/* Background Fullscreen Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.hero.url}
          alt={siteImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-pulse-slow filter brightness-[0.75] contrast-[1.05]"
        />
        {/* Subtle Dark Layered Gradient Overlay */}
        <div className="absolute inset-0 img-gradient-hero z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="container-editorial relative z-20 w-full grid lg:grid-cols-12 gap-8 items-center my-auto">
        <div className="lg:col-span-9 xl:col-span-8">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 border border-bronze/40 bg-ink/60 backdrop-blur-md mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-bronze animate-pulse" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-bronze font-medium">
              ADLX &mdash; Corporate &amp; Commercial Legal Advisory
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            className="font-serif text-ivory text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.04] tracking-tight font-normal"
          >
            Clarity in Law.
            <br />
            <span className="italic font-light text-bronze-light">Confidence</span> in Business.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-sand/90 font-normal border-l-2 border-bronze/50 pl-5"
          >
            Strategic corporate and commercial legal counsel for businesses operating, investing and growing in Saudi Arabia.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.65, 0, 0.35, 1] }}
            className="mt-12 flex flex-wrap items-center gap-5 sm:gap-7"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-bronze text-ink px-8 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-ivory transition-all duration-300 shadow-xl shadow-black/40"
            >
              <span>Speak to Our Legal Team</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-ivory/30 bg-ink/40 backdrop-blur-sm px-8 py-4 text-[12px] uppercase tracking-[0.2em] font-medium text-ivory hover:border-bronze hover:text-bronze hover:bg-ink/70 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>

        </div>

        {/* Floating Quick Stat / Editorial Note Card on Right Desktop */}
        <div className="hidden lg:block lg:col-span-3 xl:col-span-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="border border-ink-line bg-ink/70 backdrop-blur-xl p-8 max-w-sm ml-auto space-y-6 relative overflow-hidden group hover:border-bronze/50 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-bronze/10 rounded-full blur-2xl pointer-events-none group-hover:bg-bronze/20 transition-all" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-bronze font-semibold">
              Riyadh, Kingdom of Saudi Arabia
            </p>
            <p className="font-serif text-ivory text-xl leading-snug">
              &ldquo;Navigating Saudi Arabia&rsquo;s evolving commercial regulatory landscape with precision and strategic foresight.&rdquo;
            </p>
            <div className="pt-4 border-t border-ink-line flex items-center justify-between">
              <span className="text-[11px] text-sand/70 uppercase tracking-widest">Legal Counsel</span>
              <span className="text-[11px] text-bronze font-serif italic">Corporate Advisory</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-sand/60 hover:text-bronze transition-colors cursor-pointer"
      >
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center gap-1">
          <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll</span>
          <ChevronDown size={18} className="animate-bounce text-bronze" />
        </a>
      </motion.div>
    </section>
  );
}
