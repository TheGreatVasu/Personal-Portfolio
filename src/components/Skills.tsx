import { education, skills } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] sm:text-[12px]">
            06 — Capabilities
          </p>
          <h2 className="mt-4 font-display text-[2.15rem] italic sm:text-5xl">The stack behind the studio.</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.group} delay={index * 80}>
              <h3 className="text-[12px] tracking-[0.22em] uppercase text-[var(--gold)]">{group.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--bg-2)] px-3 py-1.5 text-sm text-[var(--ink)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="soft-panel mt-14 rounded-[2.4rem_1.4rem_2.8rem_1.6rem] p-7 sm:p-10">
            <p className="text-[12px] tracking-[0.22em] uppercase text-[var(--gold)]">Education</p>
            <h3 className="mt-3 text-2xl text-[var(--ink)]">{education.program}</h3>
            <p className="mt-1 text-[var(--muted)]">
              {education.school} · {education.period}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">{education.location}</p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">{education.notes}</p>
          </div>
        </Reveal>
      </div>

      <div className="overflow-hidden py-5">
        <div className="marquee text-[12px] tracking-[0.28em] uppercase text-[var(--gold)]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10">
              {[
                "Software Development",
                "Security & Compliance",
                "IT Support",
                "Automation & AI",
                "Consulting",
                "Full-stack Delivery",
                "React · Node · Angular · Java",
              ].map((item) => (
                <span key={item + i} className="whitespace-nowrap">
                  {item} ·
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
