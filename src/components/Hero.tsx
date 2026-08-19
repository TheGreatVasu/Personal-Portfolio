"use client";

import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Magnetic } from "@/components/Magnetic";
import { usePageReady } from "@/components/MotionProvider";
import { FounderPortrait } from "@/components/FounderPortrait";

function SplitWord({ text, start = 0, className = "" }: { text: string; start?: number; className?: string }) {
  const ready = usePageReady();

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={`char ${ready ? "is-on" : ""}`}
          style={{ animationDelay: `${start + index * 0.045}s` }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const ready = usePageReady();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 blob bg-[var(--gold)]/10 blur-2xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -right-16 bottom-24 h-72 w-72 blob-alt bg-emerald-800/10 blur-2xl" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-start px-5 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="min-w-0 flex-1">
            <div className={`flex items-center gap-3 ${ready ? "animate-[fade-up_0.7s_ease_both]" : "opacity-0"}`}>
              <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--gold)]" />
              <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--gold)] sm:text-[12px] sm:tracking-[0.32em]">
                Available for select partnerships
              </p>
            </div>

            <h1 className="mt-5 font-display text-[clamp(3.1rem,16vw,7.6rem)] leading-[0.86] tracking-tight text-[var(--ink)]">
              <SplitWord text="Vasu" />
              <br />
              <SplitWord text="Rastogi" start={0.22} className="italic text-[var(--gold-2)]" />
            </h1>
          </div>

          <div
            className={`relative mx-auto w-[min(100%,16.5rem)] shrink-0 sm:w-[18.5rem] lg:mx-0 ${
              ready ? "animate-[fade-up_0.8s_ease_0.2s_both]" : "opacity-0"
            }`}
          >
            <div className="absolute inset-3 translate-x-4 translate-y-5 rounded-[2rem] bg-[var(--gold)] sm:translate-x-5" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[var(--bg-2)] shadow-[0_20px_50px_rgba(20,36,30,0.12)]">
              <div className="relative aspect-[4/5]">
                <FounderPortrait sizes="(max-width: 1024px) 70vw, 296px" priority />
              </div>
              <div className="flex items-center justify-between bg-[var(--gold)] px-4 py-3 text-[var(--bg)]">
                <p className="font-display text-lg italic">Vasu Rastogi</p>
                <p className="text-[10px] tracking-[0.18em] uppercase">Founder</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-7 flex flex-col gap-7 md:mt-8 md:flex-row md:items-end md:justify-between ${
            ready ? "animate-[fade-up_0.8s_ease_0.35s_both]" : "opacity-0"
          }`}
        >
          <div className="max-w-xl">
            <p className="text-base leading-snug text-[var(--ink)] sm:text-lg md:text-2xl">
              {site.role} of {site.company}.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-base">
              I build structured, secure, and scalable systems for businesses that want
              software with discipline — not just delivery.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-medium text-[var(--bg)] sm:w-auto"
              >
                Start a project
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--bg-2)] px-5 py-3 text-sm text-[var(--ink)] sm:w-auto"
              >
                View the work
              </a>
            </Magnetic>
          </div>
        </div>

        <div
          className={`mt-10 flex snap-x gap-4 overflow-x-auto pb-2 sm:mt-14 sm:grid sm:grid-cols-4 sm:gap-6 sm:overflow-visible ${
            ready ? "animate-[fade-up_0.8s_ease_0.5s_both]" : "opacity-0"
          }`}
        >
          {[
            { k: "Studio", v: "Rastogi CodeWorks" },
            { k: "Role", v: "Founder & CEO" },
            { k: "Practice", v: "Software · Security · AI" },
            { k: "Base", v: "New Delhi" },
          ].map((item) => (
            <div key={item.k} className="min-w-[11rem] snap-start sm:min-w-0">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--gold)]">{item.k}</p>
              <p className="mt-2 text-sm text-[var(--ink)]">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
