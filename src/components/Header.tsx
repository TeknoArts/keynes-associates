"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 text-[color:var(--ink)] shadow-[0_10px_40px_rgba(20,17,14,0.06)] backdrop-blur-xl"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 md:h-[5rem] md:px-8">
        <Link href="/" className="group">
          <span className="font-[family-name:var(--font-display)] text-lg tracking-[-0.03em] md:text-xl">
            {site.name}
          </span>
          <span
            className={`mt-0.5 block text-[0.62rem] uppercase tracking-[0.22em] ${
              solid ? "text-[color:var(--muted)]" : "text-white/65"
            }`}
          >
            Nairobi · KRA tax
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm transition ${
                  active ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full ${
                      solid ? "bg-black/5" : "bg-white/12"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
          <Link
            href="/book"
            className="ml-3 rounded-full bg-[#1a1814] px-5 py-2.5 text-sm font-semibold !text-[#f3eee6] shadow-[0_8px_24px_rgba(20,17,14,0.35)] transition hover:bg-[#2a241e] hover:!text-white"
          >
            {site.cta}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/book"
            className="rounded-full bg-[#1a1814] px-3.5 py-2 text-xs font-semibold !text-[#f3eee6] shadow-[0_8px_20px_rgba(20,17,14,0.3)]"
          >
            Book
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex h-3.5 w-5 flex-col justify-between">
              <span
                className={`h-[1.5px] w-full origin-center transition ${
                  solid ? "bg-[color:var(--ink)]" : "bg-white"
                } ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-[1.5px] w-full transition ${
                  solid ? "bg-[color:var(--ink)]" : "bg-white"
                } ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-[1.5px] w-full origin-center transition ${
                  solid ? "bg-[color:var(--ink)]" : "bg-white"
                } ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-[color:var(--line)] bg-[color:var(--paper)] px-5 py-5 text-[color:var(--ink)] md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-[#14110e] hover:bg-black/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="mt-2 rounded-full bg-[#1a1814] px-4 py-3 text-center text-sm font-semibold !text-[#f3eee6]"
              >
                {site.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
