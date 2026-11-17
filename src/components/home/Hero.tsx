"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="/images/hero-nairobi.jpg"
          alt="Nairobi skyline at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,13,11,0.62)_0%,rgba(15,13,11,0.28)_40%,rgba(15,13,11,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(196,163,106,0.22),transparent_45%)]" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:pb-20 md:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/85 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--brass)]" />
              Google {site.rating} · Taifa Rd, Nairobi
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,9vw,6rem)] leading-[0.9] tracking-[-0.045em] text-white"
            >
              {site.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg font-normal leading-relaxed text-white/88 md:text-xl"
            >
              Luxury-grade KRA tax consulting for Kenya&apos;s founders, SMEs,
              and growing teams.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 md:text-base"
            >
              Consultation first. Quote after clarity — company registration,
              PIN, iTax audits, bookkeeping, and tax file checks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="/book" className="btn-primary !bg-white !text-[color:var(--ink)] hover:!bg-[color:var(--brass)] hover:!text-white">
                {site.cta}
                <span aria-hidden>→</span>
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
          >
            {[
              { label: "Google rating", value: `${site.rating}`, note: `${site.reviewCount} reviews` },
              { label: "Engagement model", value: "Consult", note: "Quote after session" },
              { label: "Core focus", value: "KRA", note: "Nairobi · Kenya" },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
                  {card.label}
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-3xl tracking-[-0.03em] text-white">
                  {card.value}
                </p>
                <p className="mt-1 text-sm text-white/60">{card.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
