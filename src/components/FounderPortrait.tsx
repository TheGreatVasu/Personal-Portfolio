"use client";

import Image from "next/image";

type FounderPortraitProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function FounderPortrait({ className = "", sizes = "280px", priority = false }: FounderPortraitProps) {
  return (
    <Image
      src="/images/founder-portrait.png"
      alt="Vasu Rastogi, Founder & CEO of Rastogi CodeWorks"
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover object-[center_18%] ${className}`}
    />
  );
}
