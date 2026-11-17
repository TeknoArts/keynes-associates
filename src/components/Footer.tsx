import Link from "next/link";
import { site, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mesh-dark text-[color:var(--stone)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.35fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-3xl tracking-[-0.03em]">
            {site.name}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Premium KRA tax consulting from Taifa Road — registration, PIN,
            iTax, bookkeeping, and file checks with consultation-first clarity.
          </p>
          <Link href="/book" className="btn-primary mt-8 !bg-[color:var(--brass)] !text-white hover:!bg-white hover:!text-[color:var(--ink)]">
            {site.cta}
          </Link>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Services</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Visit</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>{site.location}</li>
            <li>{site.hours}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/knowledge" className="hover:text-white">
                Knowledge hub
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>
            Google {site.rating} · {site.reviewCount} reviews
          </p>
        </div>
      </div>
    </footer>
  );
}
