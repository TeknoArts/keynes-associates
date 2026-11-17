"use client";

const items = [
  "Company registration",
  "KRA PIN",
  "iTax audits",
  "Bookkeeping",
  "Tax file checks",
  "Nairobi advisory",
  "Consultation first",
  "Quote after clarity",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[color:var(--line)] bg-[color:var(--ink)] py-4 text-[color:var(--stone)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--ink)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--ink)] to-transparent" />
      <div className="marquee">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 text-sm font-medium tracking-wide text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brass)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
