import { company } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Wave } from "@/components/Wave";

export function Company() {
  return (
    <section id="company" className="relative overflow-hidden bg-[var(--bg-2)]">
      <Wave fill="#f6f1e6" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] sm:text-[12px]">
              02 — Rastogi CodeWorks
            </p>
            <h2 className="mt-4 font-display text-[2.15rem] italic leading-[1.05] sm:text-5xl">
              {company.tagline}
            </h2>
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <span className="rounded-full bg-[var(--bg)] px-4 py-2">Founded {company.founded}</span>
            <span className="rounded-full bg-[var(--bg)] px-4 py-2">{company.hq}</span>
            <span className="rounded-full bg-[var(--bg)] px-4 py-2">IT Services & Consulting</span>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className="mt-10 max-w-3xl text-[15px] leading-7 text-[var(--muted)]">{company.description}</p>
        </Reveal>

        <div className="mt-14 space-y-8 md:space-y-0">
          {company.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60}>
              <article className="flex flex-col gap-3 border-b border-[var(--gold)]/10 py-5 last:border-b-0 md:grid md:grid-cols-[90px_1fr_1.4fr] md:items-start md:gap-8">
                <p className="font-display text-3xl italic text-[var(--gold)]">0{i + 1}</p>
                <h3 className="text-xl text-[var(--ink)]">{pillar.title}</h3>
                <p className="text-sm leading-6 text-[var(--muted)] md:pt-1">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
