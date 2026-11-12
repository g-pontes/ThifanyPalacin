import { TICKER } from "../lib/data";
import { IconSpark } from "./ui";

function Row({
  reverse = false,
  fast = false,
  small = false,
}: {
  reverse?: boolean;
  fast?: boolean;
  small?: boolean;
}) {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`marquee-track ${reverse ? "reverse" : ""} ${fast ? "fast" : ""}`}>
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex shrink-0 items-center gap-8 px-8"
            aria-hidden={i >= TICKER.length}
          >
            <span
              className={`display font-light whitespace-nowrap text-paper/90 ${
                small
                  ? "text-[clamp(0.95rem,1.8vw,1.35rem)] tracking-[0.18em] uppercase"
                  : "text-[clamp(1.6rem,3.4vw,2.9rem)]"
              }`}
            >
              {word}
            </span>
            <IconSpark className="h-3 w-3 shrink-0 text-brass-2" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  return (
    <section
      aria-label="Áreas de atuação"
      className="noise relative overflow-hidden border-y border-wine-950 bg-wine-950 py-7"
    >
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <div className="relative">
        <Row />
      </div>
      <div className="relative mt-4 opacity-40">
        <Row reverse fast small />
      </div>
    </section>
  );
}
