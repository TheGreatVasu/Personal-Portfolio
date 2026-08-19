import { process } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 blob bg-[var(--gold)]/8 blur-2xl" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] sm:text-[12px]">
            05 — Process
          </p>
          <h2 className="mt-4 max-w-lg font-display text-[2.15rem] italic sm:text-5xl">
            How a founder-led studio actually works.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {process.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <article
                className={`soft-panel h-full p-7 sm:p-8 ${
                  index % 2 === 0
                    ? "rounded-[2.8rem_1.4rem_2.2rem_1.8rem]"
                    : "rounded-[1.4rem_2.8rem_1.6rem_2.4rem] sm:mt-8"
                }`}
              >
                <p className="font-display text-4xl italic text-[var(--gold)]">{step.n}</p>
                <h3 className="mt-4 text-2xl text-[var(--ink)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
