import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Wave } from "@/components/Wave";

export function Projects() {
  return (
    <section id="projects" className="relative bg-[var(--bg)]">
      <Wave fill="#1b3c32" />
      <div className="bg-[var(--gold)] text-[var(--bg)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-8 md:py-24">
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--bg)]/70 sm:text-[12px]">
              04 — Selected work
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[2.15rem] italic sm:text-5xl">
              Products shipped for businesses and operators.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-8 md:mt-16">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 50}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`project-row floaty group block bg-[var(--bg)] p-6 text-[var(--ink)] sm:p-8 md:grid md:grid-cols-[120px_1fr_auto] md:items-end md:gap-8 ${
                    index % 2 === 0
                      ? "rounded-[2.4rem_1.2rem_2.8rem_1.6rem] md:ml-0"
                      : "rounded-[1.4rem_2.8rem_1.2rem_2.4rem] md:ml-10"
                  }`}
                >
                  <p className="font-display text-3xl italic text-[var(--gold)]">{project.number}</p>
                  <div className="mt-4 md:mt-0">
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--gold)]">
                      {project.type} · {project.year}
                    </p>
                    <h3 className="mt-2 text-2xl">{project.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full bg-[var(--bg-2)] px-3 py-1 text-[11px] text-[var(--muted)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight size={22} className="arrow mt-4 text-[var(--gold)] md:mt-0" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Wave fill="#1b3c32" flip />
    </section>
  );
}
