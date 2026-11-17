"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { knowledgeArticles, site } from "@/lib/site";

export default function KnowledgePage() {
  return (
    <section className="section-pad pt-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow">Knowledge hub</p>
          <h1 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
            Clear guidance before you commit.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
            Practical cards on KRA PIN, company registration, iTax audits,
            bookkeeping, and tax file health — then book when ready.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {knowledgeArticles.map((article) => (
            <StaggerItem key={article.slug}>
              <Link href={`/knowledge/${article.slug}`} className="block h-full">
                <article className="lux-card flex h-full flex-col p-6 md:p-7">
                  <div className="mb-5 inline-flex w-fit rounded-full bg-[color:var(--ink)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-[color:var(--brass)]">
                    {article.category}
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em]">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                    {article.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-[color:var(--muted)]">{article.readTime}</span>
                    <span className="font-semibold text-[color:var(--brass-deep)]">
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="lux-card mt-14 p-8 md:p-10">
            <h2 className="display text-2xl md:text-3xl">Prefer a conversation?</h2>
            <p className="mt-3 max-w-lg text-sm text-[color:var(--muted)]">
              Bring your questions to a consultation. We quote after we
              understand your needs.
            </p>
            <Link href="/book" className="btn-primary mt-6">
              {site.cta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
