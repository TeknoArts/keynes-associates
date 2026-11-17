"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { site, services } from "@/lib/site";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-[color:var(--line)] bg-white/70 px-6 py-10 text-center"
      >
        <p className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.03em] text-[color:var(--ink)]">
          Consultation request received
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[color:var(--muted)]">
          Thank you. We will review your details and follow up with next steps
          for your clarity session and quote.
        </p>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block text-sm font-semibold text-[color:var(--brass-deep)] underline-offset-4 hover:underline"
        >
          Prefer WhatsApp? Message us now
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" required />
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
            Primary interest
          </label>
          <select
            name="interest"
            required
            defaultValue=""
            className="w-full rounded-xl border border-[color:var(--line)] bg-white/80 px-4 py-3.5 text-sm text-[color:var(--ink)] outline-none transition focus:border-[color:var(--brass)]"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
          Tell us briefly what you need
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Company stage, timeline, and any KRA/iTax context that helps us prepare."
          className="w-full resize-y rounded-xl border border-[color:var(--line)] bg-white/80 px-4 py-3.5 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--muted)]/70 focus:border-[color:var(--brass)]"
        />
      </div>
      <button type="submit" className="btn-primary w-full md:w-auto">
        {site.cta}
        <span aria-hidden>→</span>
      </button>
      <p className="text-xs leading-relaxed text-[color:var(--muted)]">
        Consultation only — we quote after understanding your needs.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-[color:var(--line)] bg-white/80 px-4 py-3.5 text-sm text-[color:var(--ink)] outline-none transition focus:border-[color:var(--brass)]"
      />
    </div>
  );
}
