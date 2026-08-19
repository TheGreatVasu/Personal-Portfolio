import { about, site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Wave } from "@/components/Wave";
import { FounderPortrait } from "@/components/FounderPortrait";

export function About() {
  return (
    <section id="about" className="relative">
      <Wave fill="#ece5d4" />
      <div className="bg-[var(--bg-2)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="relative mx-auto w-[min(100%,20rem)] lg:mx-0 lg:w-[22rem]">
              <div className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 blob bg-[var(--gold)]/15" />
              <div className="relative aspect-[4/5] overflow-hidden portrait-frame border-[6px] border-[var(--gold)] bg-[var(--gold)] shadow-[0_24px_60px_rgba(20,36,30,0.14)]">
                <FounderPortrait sizes="(max-width: 1024px) 80vw, 352px" />
              </div>
              <div className="absolute -bottom-4 -right-2 rounded-full bg-[var(--gold)] px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-[var(--bg)] sm:-right-6">
                {site.role}
              </div>
            </div>
            <p className="mt-8 text-sm text-[var(--muted)]">
              {site.name} · {site.company} · {site.location}
            </p>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] sm:text-[12px]">
                01 — About
              </p>
              <h2 className="mt-4 font-display text-[2.35rem] italic leading-[0.95] text-[var(--ink)] sm:text-5xl md:text-6xl">
                Builder first.
                <br />
                Founder by design.
              </h2>
            </Reveal>

            {about.paragraphs.map((p, index) => (
              <Reveal key={p} delay={index * 90}>
                <p className="mt-5 text-[15px] leading-7 text-[var(--muted)]">{p}</p>
              </Reveal>
            ))}

            <div className="mt-8 flex flex-wrap gap-2.5">
              {about.focus.map((item, index) => (
                <Reveal key={item} delay={180 + index * 60} className="inline-flex">
                  <span className="rounded-full bg-[var(--bg)] px-4 py-2 text-sm text-[var(--ink)]">
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
