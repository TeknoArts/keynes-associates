"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, site } from "@/lib/site";

const images = [
  "/images/documents-desk.jpg",
  "/images/consultation.jpg",
  "/images/office-interior.jpg",
  "/images/documents-desk.jpg",
  "/images/consultation.jpg",
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0">
          <Image
            src="/images/documents-desk.jpg"
            alt="Tax documents"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[color:var(--ink)]/75" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-8 md:pb-28">
          <Reveal>
            <p className="eyebrow !text-white/55">Services</p>
            <h1 className="display mt-4 max-w-3xl text-4xl text-white md:text-6xl">
              Full-spectrum KRA support — designed to convert.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Every engagement starts with consultation. Explore the cards,
              then book for a tailored quote.
            </p>
            <Link
              href="/book"
              className="btn-primary mt-8 !bg-white !text-[color:var(--ink)] hover:!bg-[color:var(--brass)] hover:!text-white"
            >
              {site.cta}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Stagger className="grid gap-6">
            {services.map((service, i) => (
              <StaggerItem key={service.slug}>
                <article
                  id={service.slug}
                  className="lux-card scroll-mt-28 grid overflow-hidden md:grid-cols-2"
                >
                  <div className={`relative min-h-[240px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={images[i]}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-7 md:p-10">
                    <p className="text-xs tracking-[0.2em] text-[color:var(--brass-deep)]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="display mt-3 text-3xl md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                      {service.detail}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.outcomes.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl border border-[color:var(--line)] bg-white/50 px-4 py-3 text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/book" className="btn-primary mt-8">
                      {site.cta}
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-[color:var(--paper)]/80">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <SectionHeading
            eyebrow="Not sure yet?"
            title="That is exactly what the consultation is for."
            description="Bring your questions. We map the right path and quote after clarity."
          />
          <Reveal className="mt-8">
            <Link href="/book" className="btn-primary">
              {site.cta}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
