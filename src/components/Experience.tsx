import { experience } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="work" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] sm:text-[12px]">
            03 — Experience
          </p>
          <h2 className="mt-4 font-display text-[2.15rem] italic sm:text-5xl">Where the work was done.</h2>
        </Reveal>

        <div className="relative mt-12 md:mt-16">
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-[var(--gold)]/20 sm:left-[9px]" />

          <div className="space-y-10 md:space-y-14">
            {experience.map((job, index) => (
              <Reveal key={job.org + job.role} delay={index * 80}>
                <article className="relative grid grid-cols-[18px_1fr] gap-4 sm:grid-cols-[22px_1fr] sm:gap-6 md:grid-cols-[22px_200px_1fr] md:gap-10">
                  <div className="relative pt-2">
                    <span className="absolute left-0 top-2 z-10 h-[15px] w-[15px] rounded-full border-[3px] border-[var(--bg)] bg-[var(--gold)] sm:h-[18px] sm:w-[18px]" />
                  </div>

                  <div className="min-w-0 pt-1 md:pt-0">
                    <p className="text-sm text-[var(--gold-2)]">{job.period}</p>
                    <p className="mt-1 text-xs tracking-[0.16em] uppercase text-[var(--muted)]">
                      {job.location}
                    </p>
                  </div>

                  <div
                    className={`soft-panel col-start-2 min-w-0 p-6 sm:p-8 md:col-start-3 ${
                      index % 2 === 0
                        ? "rounded-[2rem_1.2rem_2.4rem_1.4rem]"
                        : "rounded-[1.2rem_2.6rem_1.4rem_2.2rem]"
                    }`}
                  >
                    <h3 className="text-xl text-[var(--ink)]">{job.role}</h3>
                    <p className="mt-1 text-[var(--muted)]">{job.org}</p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="text-sm leading-6 text-[var(--muted)]">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
