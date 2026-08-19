import { about, site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Wave } from "@/components/Wave";

export function About() {
  return (
    <section id="about" className="relative">
      <Wave fill="#ece5d4" />
      <div className="bg-[var(--bg-2)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-8 md:py-24">
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] sm:text-[12px]">
              01 — About
            </p>
            <h2 className="mt-4 font-display text-[2.35rem] italic leading-[0.95] text-[var(--ink)] sm:text-5xl md:text-6xl">
              Builder first.
              <br />
              Founder by design.
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <div className="blob grid h-16 w-16 place-items-center bg-[var(--gold)] font-display text-xl text-[var(--bg)] sm:h-20 sm:w-20">
                VR
              </div>
              <p className="max-w-[14rem] text-sm leading-6 text-[var(--muted)]">
                {site.role}, {site.company} · {site.location}
              </p>
            </div>
          </Reveal>

          <div>
            {about.paragraphs.map((p, index) => (
              <Reveal key={p} delay={index * 90}>
                <p className="mb-5 text-[15px] leading-7 text-[var(--muted)]">{p}</p>
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
