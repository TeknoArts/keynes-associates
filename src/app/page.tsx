"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Hero } from "@/components/home/Hero";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  audiences,
  knowledgeArticles,
  processSteps,
  reviews,
  services,
  site,
} from "@/lib/site";

const serviceImages = [
  "/images/documents-desk.jpg",
  "/images/consultation.jpg",
  "/images/office-interior.jpg",
  "/images/documents-desk.jpg",
  "/images/consultation.jpg",
];

export default function HomePage() {
  const processRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start end", "end start"],
  });
  const processY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      <Hero />
      <Marquee />

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Why Keynes"
            title="Tax advisory that feels premium — and converts with clarity."
            description="Speed, accuracy, relationship-led advice, and transparent scoping. You get a calm consultation first. We quote only after we understand your needs."
          />

          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Speed with accuracy",
                text: "Prompt filings and clean documentation — without cutting corners that create later risk.",
              },
              {
                title: "Relationship-led",
                text: "Human updates, plain language, and a practice that treats every client like a long-term partner.",
              },
              {
                title: "Scoped after listening",
                text: "No forced packages. Consultation first, tailored quote second, execution with follow-through.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <article className="lux-card h-full p-6 md:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--ink)] text-[color:var(--brass)]">
                    ◆
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {item.text}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-5 pb-6 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] mesh-dark p-3 shadow-[var(--shadow-lg)] md:p-4">
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StaggerItem className="sm:col-span-2 lg:col-span-1">
              <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-[color:var(--brass)]/35 bg-gradient-to-br from-[color:var(--brass)]/25 via-white/5 to-transparent p-6 text-white">
                <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[color:var(--brass)]/30 blur-2xl" />
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[color:var(--brass)]">
                  Google rating
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <AnimatedCounter
                    value={site.rating}
                    decimals={1}
                    className="font-[family-name:var(--font-display)] text-6xl leading-none tracking-[-0.05em]"
                  />
                  <span className="mb-2 text-[color:var(--brass)]">★★★★★</span>
                </div>
                <p className="mt-3 text-sm text-white/60">
                  Trusted across {site.reviewCount} client reviews
                </p>
              </div>
            </StaggerItem>

            {[
              {
                value: site.reviewCount,
                decimals: 0,
                suffix: "+",
                label: "Client reviews",
                note: "Verified Google feedback",
                icon: "◎",
              },
              {
                value: 5,
                decimals: 0,
                suffix: "",
                label: "Core services",
                note: "Registration to file checks",
                icon: "▣",
              },
              {
                value: 100,
                decimals: 0,
                suffix: "%",
                label: "Consultation first",
                note: "Quote only after clarity",
                icon: "✦",
              },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="group relative h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[color:var(--brass)]/45 hover:bg-white/10">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[color:var(--brass)] transition group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    className="font-[family-name:var(--font-display)] text-4xl tracking-[-0.04em] md:text-5xl"
                  />
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm text-white/45">{stat.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Who we serve"
              title="One practice. A full mix of Kenyan clients."
            />
            <Reveal delay={0.1}>
              <Link
                href="/book"
                className="rounded-full bg-[#1a1814] px-5 py-2.5 text-sm font-semibold !text-[#f3eee6] shadow-[0_8px_24px_rgba(20,17,14,0.28)] transition hover:bg-[#2a241e] hover:!text-white"
              >
                {site.cta}
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {audiences.map((item) => (
              <StaggerItem key={item.title}>
                <article className="lux-card group flex h-full flex-col justify-between p-6 md:p-8">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em] transition group-hover:text-[color:var(--brass-deep)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
                      {item.text}
                    </p>
                  </div>
                  <div className="mt-8 h-px w-full bg-[color:var(--line)]" />
                  <p className="mt-4 text-sm font-medium text-[color:var(--brass-deep)]">
                    Built for your stage →
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-[color:var(--ink)] text-white">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Five services. Designed as conversion cards."
              description="Tap into the work you need — then book a consultation for a scoped quote."
              light
            />
            <Reveal delay={0.08}>
              <Link
                href="/services"
                className="btn-ghost !border-white/25 hover:!bg-white hover:!text-[color:var(--ink)]"
              >
                View all services
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <StaggerItem
                key={service.slug}
                className={i === 0 ? "md:col-span-2 xl:col-span-2" : ""}
              >
                <Link href={`/services#${service.slug}`} className="group block h-full">
                  <article className="relative h-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-2 hover:border-[color:var(--brass)]/50">
                    <div className={`relative overflow-hidden ${i === 0 ? "aspect-[2/1]" : "aspect-[16/10]"}`}>
                      <Image
                        src={serviceImages[i]}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0b] via-[#0f0d0b]/35 to-transparent" />
                    </div>
                    <div className="relative p-6 md:p-7">
                      <p className="text-xs tracking-[0.2em] text-[color:var(--brass)]">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em] md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
                        {service.summary}
                      </p>
                      <span className="mt-5 inline-flex text-sm font-medium text-[color:var(--brass)] transition group-hover:gap-2">
                        Learn more →
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section ref={processRef} className="relative overflow-hidden section-pad">
        <motion.div className="absolute inset-0" style={{ y: processY }}>
          <Image
            src="/images/office-interior.jpg"
            alt="Office atmosphere"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f3eee6_0%,rgba(243,238,230,0.88)_40%,#f3eee6_100%)]" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="Consultation. Clarity. Then a quote."
            description="A conversion flow designed to feel premium — not pushy."
          />

          <Stagger className="mt-12 grid gap-5 md:grid-cols-4">
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <article className="lux-card h-full p-6">
                  <p className="font-[family-name:var(--font-display)] text-4xl text-[color:var(--brass)]">
                    {step.step}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {step.text}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Knowledge"
            title="Learn first. Convert with confidence."
            description="An information-rich hub that builds trust before the consultation."
          />

          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {knowledgeArticles.slice(0, 3).map((article) => (
              <StaggerItem key={article.slug}>
                <Link href={`/knowledge/${article.slug}`} className="block h-full">
                  <article className="lux-card flex h-full flex-col p-6">
                    <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      {article.category} · {article.readTime}
                    </p>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl tracking-[-0.03em]">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                      {article.excerpt}
                    </p>
                    <span className="mt-6 text-sm font-semibold text-[color:var(--brass-deep)]">
                      Read guide →
                    </span>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-8">
            <Link href="/knowledge" className="btn-outline">
              Browse the knowledge hub
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad mesh-dark">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Google reviews"
            title="Trusted at 4.9 — and designed to show it."
            light
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal variant="scale">
              <div className="lux-card !bg-white/8 !border-white/10 p-8 text-white backdrop-blur-xl">
                <AnimatedCounter
                  value={site.rating}
                  decimals={1}
                  className="font-[family-name:var(--font-display)] text-7xl tracking-[-0.05em]"
                />
                <p className="mt-2 text-sm text-white/60">
                  Average from {site.reviewCount} Google reviews
                </p>
                <div className="mt-6 flex gap-1 text-[color:var(--brass)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Stagger className="grid gap-4 sm:grid-cols-2">
              {reviews.map((review) => (
                <StaggerItem key={review.name}>
                  <figure className="lux-card !bg-white/8 !border-white/10 h-full p-6 text-white backdrop-blur-xl">
                    <div className="flex gap-1 text-[color:var(--brass)] text-sm">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-white/80">
                      “{review.quote}”
                    </blockquote>
                    <figcaption className="mt-5 text-sm">
                      <span className="font-semibold text-white">{review.name}</span>
                      <span className="text-white/50"> · {review.role}</span>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
          <Stagger className="grid grid-cols-2 gap-4">
            <StaggerItem>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.35rem] shadow-[var(--shadow-lg)]">
                <Image
                  src="/images/team-amara.jpg"
                  alt="Amara Otieno"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-[1.35rem] shadow-[var(--shadow-lg)]">
                <Image
                  src="/images/team-daniel.jpg"
                  alt="Daniel Kariuki"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
            </StaggerItem>
          </Stagger>

          <Reveal delay={0.1}>
            <p className="eyebrow">The practice</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">
              Nairobi-based. Detail-obsessed. Built to convert.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--muted)]">
              Keynes Consultant combines warm Nairobi modernity with luxury
              advisory energy — clear scopes, human updates, and follow-through
              from Taifa Road.
            </p>
            <Link href="/about" className="btn-primary mt-8">
              Meet the team
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/consultation.jpg"
            alt="Consultation"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,13,11,0.92)_0%,rgba(15,13,11,0.55)_100%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
          <Reveal>
            <div className="lux-card max-w-2xl !bg-white/10 !border-white/15 p-8 text-white backdrop-blur-xl md:p-10">
              <p className="eyebrow !text-white/55">Next step</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">
                Ready for clarity on your tax position?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                Book a consultation. We listen first, then quote — so the work
                fits your stage, risk, and timeline.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="btn-primary !bg-white !text-[color:var(--ink)] hover:!bg-[color:var(--brass)] hover:!text-white"
                >
                  {site.cta}
                </Link>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
