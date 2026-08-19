"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const PageReadyContext = createContext(true);

export function usePageReady() {
  return useContext(PageReadyContext);
}

const lenisOptions = {
  lerp: 0.072,
  smoothWheel: true,
  wheelMultiplier: 0.82,
  touchMultiplier: 1.15,
  syncTouch: false,
  autoRaf: true,
};

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [intro, setIntro] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setReady(true);
      return;
    }
    setIntro(true);
    document.body.style.overflow = "hidden";
    const leave = window.setTimeout(() => setLeaving(true), 1700);
    const done = window.setTimeout(() => {
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
      setReady(true);
      setIntro(false);
    }, 2400);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, []);

  return (
    <ReactLenis root options={lenisOptions}>
      <PageReadyContext.Provider value={ready}>
        <LenisGate stopped={intro} />
        {intro && (
          <div className={`intro-screen ${leaving ? "is-leaving" : ""}`} aria-hidden>
            <p className="intro-kicker">Founder & CEO · New Delhi · Est. 2025</p>
            <p className="intro-title font-display">
              Rastogi
              <em> CodeWorks</em>
            </p>
            <span className="intro-line" />
          </div>
        )}
        {children}
      </PageReadyContext.Provider>
    </ReactLenis>
  );
}

function LenisGate({ stopped }: { stopped: boolean }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
    if (stopped) lenis.stop();
    else lenis.start();
  }, [lenis, stopped]);

  return null;
}
