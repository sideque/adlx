"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteImages } from "@/lib/images";

const points = [
  {
    title: "Saudi Legal Expertise",
    body: "Grounded knowledge of the laws and regulatory bodies that govern corporate activity in the Kingdom.",
  },
  {
    title: "Corporate Experience",
    body: "Familiarity with the structures and decisions companies face from formation through maturity.",
  },
  {
    title: "Commercial Understanding",
    body: "Legal advice framed around how businesses actually operate, not abstract legal theory.",
  },
  {
    title: "Practical Advice",
    body: "Guidance that leadership teams can act on, delivered in clear and direct terms.",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-28 lg:py-40 bg-ink border-t border-ink-line relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & 4 Points */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-8 bg-bronze" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-bronze font-medium">
                Regional Grounding &bull; KSA
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
              className="font-serif text-ivory text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight font-normal mb-12"
            >
              Saudi Legal Expertise.
              <br />
              <span className="italic text-bronze-light">Business-Focused</span> Advice.
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group border-t border-ink-line pt-6 hover:border-bronze transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-bronze group-hover:scale-125 transition-transform duration-300" />
                    <h3 className="font-serif text-xl text-ivory font-normal group-hover:text-bronze transition-colors duration-300">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sand/80 text-sm leading-relaxed font-normal">
                    {point.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium High-Res Architectural Photography */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
              className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] overflow-hidden border border-ink-line group shadow-2xl shadow-black/60"
            >
              <Image
                src={siteImages.expertise.url}
                alt={siteImages.expertise.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between border-t border-ivory/20 pt-4 bg-ink/60 backdrop-blur-md px-4 py-3">
                <span className="text-[11px] uppercase tracking-[0.2em] text-ivory font-medium">
                  Riyadh Corporate Sector
                </span>
                <span className="text-[11px] font-serif italic text-bronze">
                  Strategic Advisory
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
