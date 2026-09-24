import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 lg:py-28 bg-ink border-t border-ink-line text-sand relative">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-ink-line">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-28">
                <Image
                  src="/adlxlogo.png"
                  alt="ADLX Logo"
                  fill
                  sizes="112px"
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-sm text-sand/75 leading-relaxed max-w-sm font-normal">
              ADLX is a premier corporate and commercial legal advisory practice providing strategic counsel for businesses operating, investing and growing in Saudi Arabia.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-bronze">
              <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
              <span>Riyadh, Kingdom of Saudi Arabia</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze font-semibold mb-6">
              Navigation
            </p>
            <ul className="space-y-3 text-sm text-sand/80 font-normal">
              <li>
                <a href="#about" className="hover:text-ivory hover:underline underline-offset-4 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ivory hover:underline underline-offset-4 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-ivory hover:underline underline-offset-4 transition-colors">
                  Expertise
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze font-semibold mb-6">
              Practice Areas
            </p>
            <ul className="space-y-3 text-sm text-sand/80 font-normal">
              <li>Corporate Incorporation</li>
              <li>Commercial Contracts</li>
              <li>Board Governance</li>
              <li>Regulatory Compliance</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-3 lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze font-semibold mb-6">
              Resources
            </p>
            <ul className="space-y-3 text-sm text-sand/80 font-normal">
              <li>
                <a href="#insights" className="hover:text-ivory hover:underline underline-offset-4 transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ivory hover:underline underline-offset-4 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-sand/50">
          <p className="max-w-3xl leading-relaxed">
            &copy; {new Date().getFullYear()} ADLX Corporate &amp; Commercial Legal Advisory. All rights reserved. This website is for general informational purposes and does not constitute formal legal advice.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <a href="#" className="hover:text-sand transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-sand transition-colors">Terms of Advisory</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
