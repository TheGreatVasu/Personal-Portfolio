"use client";

import Image from "next/image";

type FounderPortraitProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
  focus?: "portrait" | "avatar";
};

export function FounderPortrait({
  className = "",
  sizes = "280px",
  priority = false,
  focus = "portrait",
}: FounderPortraitProps) {
  const position = focus === "avatar" ? "object-[center_42%]" : "object-[center_52%]";

  return (
    <Image
      src="/images/founder.png"
      alt="Vasu Rastogi, Founder & CEO of Rastogi CodeWorks"
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${position} ${className}`}
    />
  );
}
