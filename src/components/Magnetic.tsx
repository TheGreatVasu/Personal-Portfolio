"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const box = el.getBoundingClientRect();
    const x = event.clientX - box.left - box.width / 2;
    const y = event.clientY - box.top - box.height / 2;
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block will-change-transform"
      style={{ transition: "transform 0.22s ease" }}
    >
      {children}
    </div>
  );
}
