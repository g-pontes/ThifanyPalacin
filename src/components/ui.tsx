import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type SVGProps,
} from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ reveal */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn("transition-opacity duration-[900ms]", className)}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translate3d(0, ${y}px, 0)`,
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ monogram */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect
        x="1.25"
        y="1.25"
        width="45.5"
        height="45.5"
        rx="23"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <path
        d="M12 17h11v15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
      <path
        d="M17.5 17v15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
      <path
        d="M28 32V17h5.5a4.5 4.5 0 0 1 0 9H28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
      <path d="M31 26l4.6 6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/* ------------------------------------------------------------------- icons */
type I = SVGProps<SVGSVGElement>;
const base = (p: I) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const IconWhatsApp = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.16h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.24 8.24 0 1 1 6.97 3.84Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12s-.64.8-.79.97c-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.17 1.72 2.62 4.16 3.68.58.25 1.04.4 1.39.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

export const IconArrow = (p: I) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const IconArrowRight = (p: I) => (
  <svg {...base(p)}>
    <path d="M4 12h15m-6-6 6 6-6 6" />
  </svg>
);

export const IconPlus = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconCheck = (p: I) => (
  <svg {...base(p)}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
);

export const IconPhone = (p: I) => (
  <svg {...base(p)}>
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
  </svg>
);

export const IconMail = (p: I) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m3.6 6.3 8.4 6.4 8.4-6.4" />
  </svg>
);

export const IconPin = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconClock = (p: I) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.4 2" />
  </svg>
);

export const IconShield = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 3 5 5.8v5.4c0 4.3 2.9 8.2 7 9.4 4.1-1.2 7-5.1 7-9.4V5.8L12 3Z" />
    <path d="m9 12 2.2 2.2L15.4 10" />
  </svg>
);

export const IconScales = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 4v16M7 20h10M4 8h16M8 8l-3.5 6a3.6 3.6 0 0 0 7 0L8 8Zm8 0-3.5 6a3.6 3.6 0 0 0 7 0L16 8ZM12 4a1.4 1.4 0 1 0 0 .1" />
    <path d="M6 8h12" />
  </svg>
);

export const IconQuote = (p: I) => (
  <svg viewBox="0 0 48 32" fill="currentColor" {...p}>
    <path d="M0 32V18.4C0 8.8 5.4 2.2 15.6 0l2 4.4c-5.8 1.8-8.8 5.4-9 10.8h8.6V32H0Zm30.4 0V18.4C30.4 8.8 35.8 2.2 46 0l2 4.4c-5.8 1.8-8.8 5.4-9 10.8h8.6V32H30.4Z" />
  </svg>
);

export const IconStar = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m12 2.6 2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.8l-5.8 3.4 1.5-6.5-5-4.4 6.6-.6L12 2.6Z" />
  </svg>
);

export const IconMenu = (p: I) => (
  <svg {...base(p)}>
    <path d="M3 7h18M3 12h18M3 17h11" />
  </svg>
);

export const IconClose = (p: I) => (
  <svg {...base(p)}>
    <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
  </svg>
);

export const IconChevron = (p: I) => (
  <svg {...base(p)}>
    <path d="m8 10 4 4 4-4" />
  </svg>
);

export const IconInstagram = (p: I) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconSpark = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z" />
  </svg>
);
