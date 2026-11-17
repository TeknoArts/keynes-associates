"use client";

import Image from "next/image";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export default function BookPage() {
  return (
    <section className="section-pad pt-32">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <Reveal>
          <div className="lux-card overflow-hidden">
            <div className="relative aspect-[16/11]">
              <Image
                src="/images/consultation.jpg"
                alt="Client consultation at Keynes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
            <div className="p-7 md:p-8">
              <p className="eyebrow">Consultation</p>
              <h1 className="display mt-3 text-4xl md:text-5xl">{site.cta}</h1>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                Share a little context. We prepare for a clarity session and
                follow with a tailored quote — never a one-size package forced
                upfront.
              </p>
              <div className="mt-8 space-y-3 text-sm text-[color:var(--muted)]">
                <p>
                  <span className="font-medium text-[color:var(--ink)]">Location:</span>{" "}
                  {site.location}
                </p>
                <p>
                  <span className="font-medium text-[color:var(--ink)]">Hours:</span>{" "}
                  {site.hours}
                </p>
                <p>
                  <span className="font-medium text-[color:var(--ink)]">WhatsApp:</span>{" "}
                  <a
                    href={site.whatsappHref}
                    className="text-[color:var(--brass-deep)] underline-offset-4 hover:underline"
                  >
                    {site.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-[color:var(--ink)]">Email:</span>{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[color:var(--brass-deep)] underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="lux-card p-6 md:p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
              Request your session
            </h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Takes under a minute. We respond with next steps.
            </p>
            <div className="mt-8">
              <ConsultationForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
