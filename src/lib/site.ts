export const site = {
  name: "Keynes Consultant",
  shortName: "Keynes",
  tagline: "KRA tax clarity for Kenyan businesses",
  description:
    "Premium KRA tax consulting in Nairobi — company registration, KRA PIN, iTax audits, bookkeeping, and tax file checks. Consultation first. Quote after we understand your needs.",
  location: "Taifa Rd, Nairobi, Kenya",
  hours: "Open · Closes 8 pm",
  rating: 4.9,
  reviewCount: 7,
  email: "hello@keynesconsultant.co.ke",
  phone: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  whatsapp: "254700000000",
  whatsappHref: "https://wa.me/254700000000",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Taifa+Rd+Nairobi+Kenya",
  cta: "Book a consultation",
} as const;

export const services = [
  {
    slug: "company-registration",
    title: "Company registration",
    summary:
      "Register your limited company, business name, or NGO with clean filings and a compliance-ready foundation.",
    detail:
      "From name search to certificate of incorporation, we guide founders and established operators through Kenyan company registration with accurate documentation, KRA alignment, and a clear next-step checklist for banking and operations.",
    outcomes: [
      "Name reservation & documentation",
      "Incorporation filings",
      "Post-registration compliance roadmap",
    ],
  },
  {
    slug: "kra-pin",
    title: "KRA PIN",
    summary:
      "Individual and business KRA PIN registration, updates, and reactivation — handled carefully and correctly.",
    detail:
      "Whether you are onboarding staff, opening a business account, or fixing PIN issues, we manage KRA PIN registration and amendments so your tax identity stays accurate across iTax and related filings.",
    outcomes: [
      "New PIN registration",
      "Amendments & reactivation",
      "Linked business obligations guidance",
    ],
  },
  {
    slug: "itax-audits",
    title: "iTax audits",
    summary:
      "Structured iTax reviews that surface risk early — before notices, penalties, or rushed filings create pressure.",
    detail:
      "We audit your iTax profile, returns history, and filing posture. You receive a clear risk picture, remediation priorities, and a calm plan for corrections — built for SMEs and growing corporates alike.",
    outcomes: [
      "Return & ledger review",
      "Risk ranking & remediation plan",
      "Support through corrections",
    ],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    summary:
      "Clean monthly books that make tax season predictable — not a scramble.",
    detail:
      "Our bookkeeping support keeps ledgers current, expense categories consistent, and reports usable for management decisions and KRA obligations. Ideal for startups, SMEs, and founders who want discipline without hiring a full in-house team.",
    outcomes: [
      "Monthly books & reconciliations",
      "Management-ready reports",
      "Tax-aligned coding",
    ],
  },
  {
    slug: "tax-file-checks",
    title: "Tax file checks",
    summary:
      "A health check for your tax file — filings, mismatches, and silent gaps that create future exposure.",
    detail:
      "We review your tax file end-to-end: registrations, returns submitted, payment status, and inconsistencies. You leave with a written picture of where you stand and what to fix first.",
    outcomes: [
      "Full tax-file diagnostic",
      "Mismatch & gap identification",
      "Prioritised action list",
    ],
  },
] as const;

export const knowledgeArticles = [
  {
    slug: "kra-pin-for-new-businesses",
    title: "KRA PIN for new businesses in Kenya: what to set up first",
    excerpt:
      "A practical sequence for founders — PIN, obligations, and the filings that usually come next.",
    category: "Getting started",
    readTime: "6 min",
  },
  {
    slug: "company-registration-checklist",
    title: "Company registration checklist for Nairobi founders",
    excerpt:
      "Documents, timing, and post-incorporation steps that keep banking and tax onboarding smooth.",
    category: "Company setup",
    readTime: "8 min",
  },
  {
    slug: "itax-audit-what-to-expect",
    title: "What an iTax audit should actually cover",
    excerpt:
      "Beyond login access: the signals, mismatches, and remediation order that matter.",
    category: "Compliance",
    readTime: "7 min",
  },
  {
    slug: "bookkeeping-before-tax-season",
    title: "Bookkeeping habits that make KRA season quieter",
    excerpt:
      "Monthly discipline that reduces year-end stress for SMEs and growing teams.",
    category: "Operations",
    readTime: "5 min",
  },
  {
    slug: "tax-file-health-check",
    title: "How a tax file check protects you before KRA does",
    excerpt:
      "Silent gaps compound. A structured file review finds them while options are still calm.",
    category: "Risk",
    readTime: "6 min",
  },
  {
    slug: "when-to-book-a-tax-consultation",
    title: "When to book a tax consultation (and what to bring)",
    excerpt:
      "Signals that it is time to talk — and the documents that make the first conversation useful.",
    category: "Advisory",
    readTime: "4 min",
  },
] as const;

export const reviews = [
  {
    name: "Grace W.",
    role: "Founder, retail SME",
    quote:
      "Registration and PIN setup were handled with care. Clear communication throughout — exactly what we needed as first-time founders.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Operations lead",
    quote:
      "The iTax review surfaced issues we would have missed. Keynes made remediation feel structured, not stressful.",
    rating: 5,
  },
  {
    name: "Amina N.",
    role: "Freelance consultant",
    quote:
      "Professional, warm, and precise. Tax file check gave me confidence before a big client engagement.",
    rating: 5,
  },
  {
    name: "Peter M.",
    role: "Managing director",
    quote:
      "Bookkeeping support has been dependable. Our filings are cleaner and management reports finally make sense.",
    rating: 5,
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Book a consultation",
    text: "Share your situation — new company, cleanup, audit pressure, or ongoing compliance.",
  },
  {
    step: "02",
    title: "Clarity session",
    text: "We map obligations, risks, and priorities across registration, PIN, iTax, books, and filings.",
  },
  {
    step: "03",
    title: "Tailored quote",
    text: "You receive a scoped proposal after the consultation — no generic packages forced upfront.",
  },
  {
    step: "04",
    title: "Execution & follow-through",
    text: "We execute with updates you can trust, and leave you with a cleaner compliance posture.",
  },
] as const;

export const audiences = [
  {
    title: "Startups & founders",
    text: "Clean registration, PIN setup, and a compliance path that scales with you.",
  },
  {
    title: "SMEs",
    text: "Bookkeeping discipline, tax file health, and filings that stay current.",
  },
  {
    title: "Growing corporates",
    text: "iTax audits, remediation, and advisory that reduces operational tax risk.",
  },
  {
    title: "Professionals & freelancers",
    text: "PIN, returns, and file checks handled with clarity — without corporate jargon.",
  },
] as const;
