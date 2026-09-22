# ADLX — Corporate & Commercial Legal Advisory

Premium editorial Next.js homepage for ADLX, a Saudi corporate and commercial
legal advisory firm.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with a custom design-token palette
- Framer Motion for restrained entrance/reveal animation
- Lucide React icons
- Cormorant Garamond (display serif) + Inter (body/UI), loaded via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Homepage — composes all sections
  globals.css        Base styles, design tokens, hairline/lattice utilities
components/
  Navbar.tsx
  Hero.tsx
  AboutSection.tsx
  ServicesSection.tsx
  LifecycleSection.tsx
  ExpertiseSection.tsx
  PreventiveSupportSection.tsx
  AudienceSection.tsx
  InsightsSection.tsx
  CTASection.tsx
  Footer.tsx
lib/
  data.ts             Content arrays (services, lifecycle, audiences, insights)
```

## Design notes

- **Palette**: warm near-black (`#14120F`), ivory (`#F6F2EA`), muted bronze
  accent (`#9C7A45`) — no bright blues, no gradients.
- **Type**: Cormorant Garamond for headlines, Inter for UI/body — a
  deliberately different serif choice from the more common Playfair Display.
- **Imagery**: no stock photography or literal Saudi/legal iconography.
  The hero and "Saudi Expertise" section use restrained, custom line-based
  SVG motifs abstracted from geometric lattice proportion, drawn once on
  load rather than using decorative photography.
- **Motion**: a single orchestrated reveal on the hero load, plus
  `whileInView` fade/slide entrances scoped to each section — no per-card
  hover animation stacking.
- Only secondary pages (About, Services detail, Insights articles, Contact
  form) remain to be built — this delivers the homepage only, as scoped.
