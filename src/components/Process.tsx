import { useEffect, useRef, useState } from "react";
import { STEPS } from "../lib/data";
import { Reveal } from "./ui";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.75 - rect.top) / (rect.height * 0.7);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="abordagem"
      className="hairlines relative overflow-hidden bg-paper-2 py-20 lg:py-28"
    >
      <div className="noise pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-brass" />
              <p className="eyebrow text-wine-700">Nossa abordagem</p>
            </div>
            <h2 className="display mt-6 max-w-2xl text-[clamp(2.1rem,5vw,3.8rem)] font-light text-ink">
              Uma atuação <span className="text-wine-700 italic">próxima</span> em cada
              etapa.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Quatro movimentos, da primeira conversa ao acompanhamento — simples,
              claros e sempre explicados antes.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16 lg:mt-20">
          {/* rail */}
          <div className="absolute top-6 left-0 hidden h-px w-full bg-line lg:block">
            <div
              className="h-px bg-wine-700 transition-[width] duration-300 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => {
              const reached = progress >= (i + 0.35) / STEPS.length;
              return (
                <Reveal key={step.n} delay={i * 110} y={22}>
                  <div className="group relative lg:pr-6">
                    <div className="flex items-center gap-4 lg:block">
                      <span
                        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-paper-2 transition-all duration-700 ${
                          reached
                            ? "border-wine-700 text-wine-800"
                            : "border-line text-ink-soft/60"
                        }`}
                      >
                        <span className="display text-[15px] font-medium">
                          {step.n}
                        </span>
                      </span>
                      <span className="h-px flex-1 bg-line lg:hidden" />
                    </div>

                    <h3 className="display mt-7 text-[1.55rem] font-normal text-ink italic transition-colors duration-500 group-hover:text-wine-700">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[16rem] text-[14.5px] leading-relaxed text-ink-soft">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
