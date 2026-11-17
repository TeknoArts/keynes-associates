"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const team = [
  {
    name: "Amara Otieno",
    role: "Lead tax consultant",
    bio: "Guides company setup, PIN onboarding, and compliance roadmaps for founders and growing SMEs.",
    image: "/images/team-amara.jpg",
  },
  {
    name: "Daniel Kariuki",
    role: "Senior tax advisor",
    bio: "Focuses on iTax audits, tax file diagnostics, and remediation plans for operators under pressure.",
    image: "/images/team-daniel.jpg",
  },
];

export default function AboutPage() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <>
      <section className="section-pad pt-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
              A modern Nairobi practice with luxury presence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              Keynes Consultant helps Kenyan businesses stay clean with KRA —
              through careful registration, accurate PIN work, structured iTax
              audits, dependable bookkeeping, and thorough tax file checks.
            </p>
          </Reveal>
        </div>
      </section>

      <section ref={ref} className="relative h-[48vh] overflow-hidden md:h-[56vh]">
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src="/images/office-interior.jpg"
            alt="Keynes office"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Speed with accuracy",
                text: "We move promptly without cutting corners on filings, documentation, or advice.",
              },
              {
                title: "Relationship-led",
                text: "You get human updates and plain-language guidance — not opaque tax theatre.",
              },
              {
                title: "Scoped after listening",
                text: "Consultation first. Quotes follow once we understand what you actually need.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <article className="lux-card h-full p-6 md:p-7">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {item.text}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-[color:var(--ink)] text-white">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Team"
            title="Advisors you can trust with the details."
            light
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <article className="lux-card !bg-white/8 !border-white/10 overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-[color:var(--brass)]">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="lux-card p-8 md:p-10">
              <p className="eyebrow">Visit</p>
              <h2 className="display mt-3 text-3xl md:text-4xl">{site.location}</h2>
              <p className="mt-3 text-[color:var(--muted)]">{site.hours}</p>
              <p className="mt-2 text-[color:var(--muted)]">
                Google rating {site.rating} · {site.reviewCount} reviews
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book" className="btn-primary">
                  {site.cta}
                </Link>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  Get directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
