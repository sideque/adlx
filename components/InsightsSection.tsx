"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/lib/data";

export default function InsightsSection() {
  return (
    <section id="insights" className="py-28 md:py-36 border-t hairline bg-ivory">
      <div className="container-editorial">
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-5 bg-bronze/70" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-bronze-dark font-medium">
                Legal Analysis &amp; Commentary
              </p>
            </div>
            <h2 className="font-serif text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.12] tracking-tight font-normal">
              Insights
            </h2>
          </div>
        </div>

        {/* 3 Column Article Grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-10">
          {insights.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.65, 0, 0.35, 1] }}
              className="group relative border-t hairline pt-7 flex flex-col justify-between cursor-pointer"
            >
              {/* Top border accent on hover */}
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-bronze w-0 group-hover:w-full transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-bronze-dark">
                    {post.category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-bronze opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 shrink-0"
                  />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-ink leading-snug mb-6 group-hover:text-bronze-dark transition-colors duration-300 font-normal">
                  {post.title}
                </h3>
              </div>

              <div className="pt-4 border-t hairline-dark/10 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.18em] text-ink/50 font-medium">
                  {post.date}
                </span>
                <span className="text-[11px] font-serif italic text-bronze-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read briefing →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
