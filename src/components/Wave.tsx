export function Wave({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      className={`wave ${flip ? "rotate-180" : ""}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill={fill}
        d="M0,72 C240,120 360,8 720,48 C1080,88 1200,16 1440,56 L1440,120 L0,120 Z"
      />
    </svg>
  );
}
