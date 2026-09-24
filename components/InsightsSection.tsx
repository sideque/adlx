"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/lib/data";
import { siteImages } from "@/lib/images";

export default function InsightsSection() {
  return (
    <section id="insights" className="py-28 lg:py-40 bg-ink border-t border-ink-line relative overflow-hidden">
      <div className="container-editorial relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-bronze" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-bronze font-medium">
                Legal Analysis &amp; Briefings
              </p>
            </div>
            <h2 className="font-serif text-ivory text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight font-normal">
              Corporate Insights
            </h2>
          </div>
          
          <p className="text-sand/70 text-sm sm:text-base max-w-md">
            Strategic analysis on Saudi commercial regulations, entity structuring, and corporate governance for business leaders.
          </p>
        </div>

        {/* 3 Column Article Card Grid with Large Visual Thumbnails */}
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((post, i) => {
            const imgData = siteImages.insights[i] || siteImages.insights[0];

            return (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.65, 0, 0.35, 1] }}
                className="group relative border border-ink-line bg-ink-soft overflow-hidden flex flex-col justify-between cursor-pointer hover:border-bronze transition-colors duration-500 shadow-xl"
              >
                <div>
                  {/* Top Image Thumbnail */}
                  <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden">
                    <Image
                      src={imgData.url}
                      alt={imgData.alt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center filter brightness-[0.8] contrast-[1.05] transition-transform duration-700 ease-editorial group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4 z-10 bg-ink/85 border border-bronze/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-bronze">
                      {post.category}
                    </div>

                    <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full border border-ivory/20 bg-ink/60 flex items-center justify-center text-ivory group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink transition-all duration-300">
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="font-serif text-ivory text-xl sm:text-2xl leading-snug mb-4 group-hover:text-bronze transition-colors duration-300 font-normal">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="p-7 pt-0 flex items-center justify-between border-t border-ink-line/40">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-sand/60 font-medium">
                    {post.date}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-bronze group-hover:text-ivory transition-colors">
                    Read Briefing &rarr;
                  </span>
                </div>

                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
