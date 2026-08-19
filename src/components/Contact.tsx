"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";

export function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <section id="contact" className="px-4 pb-6 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.2rem] bg-[var(--bg-2)] px-5 py-14 sm:rounded-[3rem] sm:px-10 md:grid-cols-[1fr_1.05fr] md:gap-14 md:py-20">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] sm:text-[12px]">07 — Contact</p>
          <h2 className="mt-4 font-display text-[2.15rem] italic leading-[1.05] sm:text-5xl md:text-6xl">
            Let’s build something that lasts.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)]">
            Open to product work, consulting, and partnerships through Rastogi CodeWorks.
            Share a brief and I’ll get back with a clear next step.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all text-[var(--ink)]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--bg)]">
                  <Mail size={16} className="text-[var(--gold)]" />
                </span>
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-[var(--ink)]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--bg)]">
                  <Phone size={16} className="text-[var(--gold)]" />
                </span>
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-[var(--ink)]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--bg)]">
                <MapPin size={16} className="text-[var(--gold)]" />
              </span>
              {site.location}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem_1.2rem_2.4rem_1.6rem] bg-[var(--bg)] p-6 sm:p-8"
          >
            <label className="block text-[11px] tracking-[0.18em] uppercase text-[var(--muted)]">
              Name
              <input
                name="name"
                required
                className="mt-2 mb-5 w-full border-b border-[var(--line)] bg-transparent py-3 text-base text-[var(--ink)] outline-none focus:border-[var(--gold)]"
              />
            </label>
            <label className="block text-[11px] tracking-[0.18em] uppercase text-[var(--muted)]">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-2 mb-5 w-full border-b border-[var(--line)] bg-transparent py-3 text-base text-[var(--ink)] outline-none focus:border-[var(--gold)]"
              />
            </label>
            <label className="block text-[11px] tracking-[0.18em] uppercase text-[var(--muted)]">
              Project notes
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 mb-6 w-full resize-none border-b border-[var(--line)] bg-transparent py-3 text-base text-[var(--ink)] outline-none focus:border-[var(--gold)]"
              />
            </label>
            <Magnetic>
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-medium text-[var(--bg)] sm:w-auto"
              >
                Send message
                <ArrowUpRight size={16} />
              </button>
            </Magnetic>
            {status && <p className="mt-4 text-xs text-[var(--muted)]">{status}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
