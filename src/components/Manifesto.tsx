import { principles } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Manifesto() {
  return (
    <section className="px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.4rem] bg-[var(--gold)] px-6 py-14 text-[var(--bg)] sm:rounded-[3rem] sm:px-12 sm:py-20">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--bg)]/65">A founder’s line</p>
          <h2 className="mt-5 max-w-3xl font-display text-[2rem] italic leading-[1.1] sm:text-5xl">
            Built with a startup mindset. Guided by enterprise standards.
          </h2>
        </Reveal>
        <div className="mt-10 space-y-5">
          {principles.map((line, index) => (
            <Reveal key={line} delay={index * 90}>
              <p className="font-display text-xl italic leading-snug text-[var(--bg)]/90 sm:text-2xl">
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
