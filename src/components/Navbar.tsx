"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { nav, site } from "@/data/site";
import { usePageReady } from "@/components/MotionProvider";

const appleEase = "transform 0.55s cubic-bezier(0.32, 0.72, 0, 1), width 0.55s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.28s ease";

export function Navbar() {
  const ready = usePageReady();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [pill, setPill] = useState({ x: 0, width: 0, visible: false });
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const activeRef = useRef("");
  const scrolledRef = useRef(false);

  useLenis((instance) => {
    const y = instance.scroll;
    const nextScrolled = y > 10;
    if (scrolledRef.current !== nextScrolled) {
      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);
    }

    const offset = 108;
    if (y < 70) {
      if (activeRef.current !== "") {
        activeRef.current = "";
        setActive("");
      }
      return;
    }

    let current = nav[0].href;
    for (const item of nav) {
      const section = document.getElementById(item.href.slice(1));
      if (!section) continue;
      if (section.getBoundingClientRect().top - offset <= 0) {
        current = item.href;
      }
    }

    if (instance.progress > 0.97) {
      current = nav[nav.length - 1].href;
    }

    if (activeRef.current !== current) {
      activeRef.current = current;
      setActive(current);
    }
  });

  useEffect(() => {
    function measure() {
      const parent = navRef.current;
      const index = nav.findIndex((item) => item.href === active);
      const el = linkRefs.current[index];

      if (!parent || !el || !active) {
        setPill((prev) => ({ ...prev, visible: false }));
        return;
      }

      setPill({
        x: el.offsetLeft,
        width: el.offsetWidth,
        visible: true,
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) lenis?.stop();
    else if (ready) lenis?.start();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, lenis, ready]);

  function goTo(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setOpen(false);
    setActive(href);
    activeRef.current = href;
    lenis?.scrollTo(href, {
      offset: -88,
      lerp: 0.07,
    });
  }

  function goHome(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setOpen(false);
    setActive("");
    activeRef.current = "";
    lenis?.scrollTo(0, { lerp: 0.07 });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] px-3 pt-[max(0.75rem,env(safe-area-inset-top))] transition duration-700 md:px-5 ${
        ready ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full px-2 py-1.5 transition-[background-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:px-3 ${
          scrolled
            ? "bg-[var(--bg)]/70 shadow-[0_10px_40px_rgba(20,36,30,0.08)] backdrop-blur-[22px] backdrop-saturate-150"
            : "bg-[var(--bg)]/40 backdrop-blur-[14px] backdrop-saturate-150"
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2.5 py-0.5 pr-2" onClick={goHome}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--gold)] font-display text-sm tracking-[0.12em] text-[var(--bg)]">
            VR
          </span>
          <span className="min-w-0 leading-none">
            <span className="block text-[9px] tracking-[0.22em] uppercase text-[var(--gold)] sm:text-[10px] sm:tracking-[0.28em]">
              {site.role}
            </span>
            <span className="mt-1 block truncate font-display text-[1.05rem] italic leading-none text-[var(--ink)] sm:text-[1.2rem]">
              Rastogi CodeWorks
            </span>
          </span>
        </a>

        <nav
          ref={navRef}
          className="relative hidden items-center rounded-full bg-[var(--bg)]/55 p-1 lg:flex"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute top-1 bottom-1 rounded-full bg-[var(--gold)] will-change-transform"
            style={{
              width: pill.width,
              transform: `translate3d(${pill.x}px, 0, 0)`,
              opacity: pill.visible ? 1 : 0,
              transition: appleEase,
            }}
          />
          {nav.map((item, index) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                ref={(node) => {
                  linkRefs.current[index] = node;
                }}
                href={item.href}
                onClick={(event) => goTo(event, item.href)}
                className={`relative z-10 rounded-full px-3.5 py-2 text-[11px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                  isActive ? "text-[var(--bg)]" : "text-[var(--ink)]/70 hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href="#contact"
            onClick={(event) => goTo(event, "#contact")}
            className="hidden items-center gap-1 rounded-full bg-[var(--gold)] px-4 py-2.5 text-[11px] tracking-[0.14em] uppercase text-[var(--bg)] md:inline-flex"
          >
            Let’s talk
            <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-[var(--gold)] text-[var(--bg)] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[var(--gold)] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] text-[var(--bg)] lg:hidden">
          <div className="flex items-center justify-between">
            <p className="font-display text-2xl italic">Rastogi CodeWorks</p>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full bg-[var(--bg)] text-[var(--gold)]"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="mt-10 flex flex-1 flex-col justify-center gap-2">
            {nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => goTo(event, item.href)}
                className="flex items-baseline justify-between py-2"
              >
                <span className="font-display text-4xl italic sm:text-5xl">{item.label}</span>
                <span className="text-[11px] tracking-[0.2em] uppercase opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={(event) => goTo(event, "#contact")}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--bg)] px-5 py-4 text-sm tracking-[0.16em] uppercase text-[var(--gold)]"
          >
            Let’s talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
