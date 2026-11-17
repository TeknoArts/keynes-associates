export type ArticleBody = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const articleBodies: ArticleBody[] = [
  {
    slug: "kra-pin-for-new-businesses",
    title: "KRA PIN for new businesses in Kenya: what to set up first",
    excerpt:
      "A practical sequence for founders — PIN, obligations, and the filings that usually come next.",
    category: "Getting started",
    readTime: "6 min",
    sections: [
      {
        heading: "Start with identity, then obligations",
        paragraphs: [
          "A KRA PIN is the foundation of your tax identity in Kenya. For new businesses, getting this right early prevents banking delays, payroll friction, and filing mismatches later.",
          "Founders often jump straight to incorporation paperwork and only discover PIN gaps when a bank, supplier, or payroll provider asks for proof. Sequence matters.",
        ],
      },
      {
        heading: "A clean first-week sequence",
        paragraphs: [
          "Confirm whether you need an individual PIN, a business PIN, or both. Many founders need both — personal and entity — depending on structure.",
          "Align company registration details with PIN records: legal name, directors, and contact information should match. Small inconsistencies create large headaches on iTax.",
          "Once PIN is active, map the obligations that typically follow: VAT thresholds, PAYE if hiring, and return calendars relevant to your activity.",
        ],
      },
      {
        heading: "When to get advisory help",
        paragraphs: [
          "If you are incorporating, hiring, opening a business account, or reactivating an old PIN, a short consultation can prevent weeks of corrective work.",
          "Keynes Consultant handles KRA PIN registration, amendments, and reactivation as part of a broader compliance roadmap — not as an isolated form-filling exercise.",
        ],
      },
    ],
  },
  {
    slug: "company-registration-checklist",
    title: "Company registration checklist for Nairobi founders",
    excerpt:
      "Documents, timing, and post-incorporation steps that keep banking and tax onboarding smooth.",
    category: "Company setup",
    readTime: "8 min",
    sections: [
      {
        heading: "Before you file",
        paragraphs: [
          "Decide structure first: private limited company, business name, or another vehicle. The wrong structure is expensive to unwind.",
          "Prepare directors’ IDs, proposed names, registered office details, and shareholding clarity. Incomplete packs are the most common cause of delay.",
        ],
      },
      {
        heading: "During registration",
        paragraphs: [
          "Name reservation should be distinctive and available. Have alternatives ready.",
          "Ensure filing data is consistent across every document. Typos in names, ID numbers, or addresses create downstream KRA and banking friction.",
        ],
      },
      {
        heading: "After incorporation",
        paragraphs: [
          "Treat the certificate as the start, not the finish. PIN setup, bank account readiness, and a basic compliance calendar should follow immediately.",
          "A post-registration roadmap from Keynes Consultant connects company registration to KRA PIN, bookkeeping setup, and early tax-file hygiene.",
        ],
      },
    ],
  },
  {
    slug: "itax-audit-what-to-expect",
    title: "What an iTax audit should actually cover",
    excerpt:
      "Beyond login access: the signals, mismatches, and remediation order that matter.",
    category: "Compliance",
    readTime: "7 min",
    sections: [
      {
        heading: "More than a password check",
        paragraphs: [
          "A useful iTax audit looks at your profile posture: returns history, payment status, registration accuracy, and inconsistencies between books and filings.",
          "The goal is not fear — it is a ranked picture of risk so you can remediate calmly.",
        ],
      },
      {
        heading: "Signals we prioritise",
        paragraphs: [
          "Missing or late returns, unexplained variances, dormant obligations that should be active (or vice versa), and identity mismatches across records.",
          "We also look at whether your current books can support the story your returns tell. Filing without ledger discipline invites future notices.",
        ],
      },
      {
        heading: "Remediation that stays orderly",
        paragraphs: [
          "After the audit, you should receive a clear order of work: what to fix first, what can wait, and what needs documentation before action.",
          "Keynes Consultant’s iTax audits are built for SMEs and growing corporates who want structure before pressure arrives.",
        ],
      },
    ],
  },
  {
    slug: "bookkeeping-before-tax-season",
    title: "Bookkeeping habits that make KRA season quieter",
    excerpt:
      "Monthly discipline that reduces year-end stress for SMEs and growing teams.",
    category: "Operations",
    readTime: "5 min",
    sections: [
      {
        heading: "Monthly beats yearly panic",
        paragraphs: [
          "Tax season feels chaotic when books are rebuilt from memory. Monthly reconciliations turn filing into a review — not an excavation.",
          "Consistent expense coding, invoice capture, and bank reconciliation are the quiet habits that protect both management decisions and KRA readiness.",
        ],
      },
      {
        heading: "What ‘tax-aligned’ books look like",
        paragraphs: [
          "Categories should map cleanly to how returns are prepared. Ambiguous ‘miscellaneous’ buckets create questions you do not want under time pressure.",
          "Reports should be readable by a non-accountant founder: cash position, burn, VAT-relevant activity, and payroll obligations at a glance.",
        ],
      },
      {
        heading: "Outsourced without losing control",
        paragraphs: [
          "You do not need a full in-house finance team to stay disciplined. You need a cadence, a responsible partner, and reports you actually use.",
          "Keynes Consultant provides bookkeeping support designed to keep ledgers current and filings predictable.",
        ],
      },
    ],
  },
  {
    slug: "tax-file-health-check",
    title: "How a tax file check protects you before KRA does",
    excerpt:
      "Silent gaps compound. A structured file review finds them while options are still calm.",
    category: "Risk",
    readTime: "6 min",
    sections: [
      {
        heading: "Silent gaps compound",
        paragraphs: [
          "Many businesses only discover tax-file problems when a notice arrives, a tender requires clearance, or a bank asks awkward questions.",
          "A tax file check is preventive medicine: registrations, returns, payments, and mismatches reviewed while you still have room to act.",
        ],
      },
      {
        heading: "What a thorough check includes",
        paragraphs: [
          "We review whether your registrations match reality, whether returns are complete, and whether payments and ledgers tell a coherent story.",
          "You leave with a written picture of where you stand and a prioritised action list — not a vague warning.",
        ],
      },
      {
        heading: "Ideal moments to run one",
        paragraphs: [
          "Before fundraising, a major contract, leadership change, or year-end. Also after a period of neglected filings or rapid growth.",
          "Book a consultation with Keynes Consultant if you want a calm diagnostic before the stakes rise.",
        ],
      },
    ],
  },
  {
    slug: "when-to-book-a-tax-consultation",
    title: "When to book a tax consultation (and what to bring)",
    excerpt:
      "Signals that it is time to talk — and the documents that make the first conversation useful.",
    category: "Advisory",
    readTime: "4 min",
    sections: [
      {
        heading: "Signals it is time",
        paragraphs: [
          "You are incorporating, hiring, expanding, receiving KRA correspondence, preparing for a tender, or simply unsure whether your file is clean.",
          "Uncertainty itself is a signal. Consultation-only advisory exists so you can get clarity before committing budget.",
        ],
      },
      {
        heading: "What to bring",
        paragraphs: [
          "Company documents if any, PIN details, recent returns, bookkeeping exports or bank summaries, and a short note on what success looks like for you.",
          "You do not need a perfect pack. A partial picture is enough for a useful first session.",
        ],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "We listen, map priorities, and quote only after the consultation. No generic package pressure.",
          "From Taifa Road, Nairobi, Keynes Consultant works with startups, SMEs, corporates, and professionals who want premium clarity.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articleBodies.find((a) => a.slug === slug);
}
