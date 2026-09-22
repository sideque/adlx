export default function Footer() {
  return (
    <footer className="py-20 md:py-24 bg-ivory border-t hairline relative">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 pb-16 border-b hairline">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-2xl md:text-3xl text-ink font-normal">ADLX</span>
              <span className="h-1.5 w-1.5 rounded-full bg-bronze opacity-80" />
            </div>
            <p className="text-[14px] text-ink/65 leading-[1.65] max-w-xs font-normal">
              Corporate &amp; Commercial Legal Advisory practice advising businesses operating and growing in Saudi Arabia.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-bronze-dark font-medium mb-5">
              Navigation
            </p>
            <ul className="space-y-3 text-[13px] text-ink/75 font-normal">
              <li>
                <a href="#about" className="hover:text-ink hover:underline underline-offset-4 transition-all duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ink hover:underline underline-offset-4 transition-all duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-ink hover:underline underline-offset-4 transition-all duration-300">
                  Expertise
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-bronze-dark font-medium mb-5">
              Resources
            </p>
            <ul className="space-y-3 text-[13px] text-ink/75 font-normal">
              <li>
                <a href="#insights" className="hover:text-ink hover:underline underline-offset-4 transition-all duration-300">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ink hover:underline underline-offset-4 transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-bronze-dark font-medium mb-5">
              Legal Information
            </p>
            <ul className="space-y-3 text-[13px] text-ink/75 font-normal">
              <li>
                <a href="#" className="hover:text-ink hover:underline underline-offset-4 transition-all duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ink hover:underline underline-offset-4 transition-all duration-300">
                  Terms of Practice
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[12px] text-ink/50 max-w-3xl leading-[1.65]">
            ADLX is a corporate and commercial legal advisory practice based in Saudi Arabia.
            This website is for general information purposes only and does not constitute legal advice or formal attorney-client retention.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze/70" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink/60 font-medium">
              Kingdom of Saudi Arabia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
