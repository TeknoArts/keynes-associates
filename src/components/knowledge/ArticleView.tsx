"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { ArticleBody } from "@/lib/knowledge-content";
import { site } from "@/lib/site";

export function ArticleView({ article }: { article: ArticleBody }) {
  return (
    <article className="section-pad pt-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <Link
            href="/knowledge"
            className="text-sm text-[color:var(--muted)] underline-offset-4 hover:text-[color:var(--ink)] hover:underline"
          >
            ← Knowledge hub
          </Link>
          <div className="lux-card mt-8 p-8 md:p-10">
            <p className="eyebrow">
              {article.category} · {article.readTime}
            </p>
            <h1 className="display mt-4 text-4xl md:text-5xl">{article.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--muted)]">
              {article.excerpt}
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-8 space-y-5">
          {article.sections.map((section) => (
            <StaggerItem key={section.heading}>
              <section className="lux-card p-7 md:p-8">
                <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="text-base leading-relaxed text-[color:var(--muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="lux-card mt-10 p-8 md:p-10">
            <h2 className="display text-2xl md:text-3xl">
              Talk through your situation
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
              {site.name} offers consultation-first advisory from {site.location}.
            </p>
            <Link href="/book" className="btn-primary mt-6">
              {site.cta}
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
