export const services = [
  {
    number: "01",
    title: "Corporate Structuring & Incorporation",
    description:
      "Guidance on entity formation, ownership structures and market-entry frameworks suited to your operating model in Saudi Arabia.",
  },
  {
    number: "02",
    title: "Corporate Documentation",
    description:
      "Drafting and review of articles of association, resolutions, registers and the documentation that keeps a company legally sound.",
  },
  {
    number: "03",
    title: "Commercial Contracts",
    description:
      "Negotiation and drafting of commercial agreements that protect your position while supporting the pace of business.",
  },
  {
    number: "04",
    title: "Corporate Governance",
    description:
      "Board structures, shareholder arrangements and governance frameworks built for accountability and long-term stability.",
  },
  {
    number: "05",
    title: "Employment & HR Legal",
    description:
      "Employment contracts, workforce policy and HR-related legal matters aligned with Saudi labor regulations.",
  },
  {
    number: "06",
    title: "Regulatory & Compliance",
    description:
      "Practical compliance support so your business operates within the regulatory frameworks that govern it.",
  },
] as const;

export const lifecycleStages = [
  {
    number: "01",
    title: "Establish",
    detail: "Incorporation & Structuring",
  },
  {
    number: "02",
    title: "Build",
    detail: "Contracts & Shareholder Arrangements",
  },
  {
    number: "03",
    title: "Govern",
    detail: "Board & Corporate Governance",
  },
  {
    number: "04",
    title: "Grow",
    detail: "Restructuring & Ownership Changes",
  },
  {
    number: "05",
    title: "Protect",
    detail: "Legal Review & Dispute Prevention",
  },
  {
    number: "06",
    title: "Transition",
    detail: "Corporate Changes & Closure",
  },
] as const;

export const preventiveSupport = [
  "Contract review",
  "Legal risk assessment",
  "Corporate documentation",
  "Shareholder arrangements",
  "Legal notices",
  "Governance documentation",
  "Compliance support",
] as const;

export const audiences = [
  {
    title: "Companies",
    description:
      "Ongoing legal counsel for day-to-day corporate and commercial matters.",
  },
  {
    title: "Shareholders & Investors",
    description:
      "Advice on ownership structure, shareholder rights and investment arrangements.",
  },
  {
    title: "Management Teams",
    description:
      "Practical legal support for decisions made at the operational and board level.",
  },
  {
    title: "Foreign Investors",
    description:
      "Guidance for businesses entering or expanding within the Saudi market.",
  },
  {
    title: "Growing Businesses",
    description:
      "Legal structure that keeps pace with companies scaling their operations.",
  },
] as const;

export const insights = [
  {
    category: "Corporate Structuring",
    title: "Choosing the Right Entity Structure in Saudi Arabia",
    date: "Coming soon",
  },
  {
    category: "Governance",
    title: "What Founders Should Know About Shareholder Agreements",
    date: "Coming soon",
  },
  {
    category: "Compliance",
    title: "Building Compliance Into Your Corporate Foundation",
    date: "Coming soon",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;
