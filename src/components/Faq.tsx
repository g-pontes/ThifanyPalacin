import { useState } from "react";
import { FAQS } from "../lib/data";
import { cn } from "../utils/cn";
import { IconPlus, Reveal } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-brass" />
                  <p className="eyebrow text-wine-700">Dúvidas frequentes</p>
                </div>
                <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.1rem)] font-light text-ink">
                  O que mais nos{" "}
                  <span className="text-wine-700 italic">perguntam</span>.
                </h2>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink-soft">
                  Respondido com a mesma clareza que usamos na conversa com
                  cada cliente.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={item.q} delay={i * 50} y={16}>
                    <div
                      className={cn(
                        "row-shift border-b border-line",
                        isOpen ? "bg-wine-50/60" : "hover:bg-paper-2/50",
                      )}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start gap-5 py-6 pr-2 pl-3 text-left sm:gap-7 sm:pl-6"
                      >
                        <span
                          className={cn(
                            "display mt-1 text-[12px] tracking-widest transition-colors duration-500",
                            isOpen ? "text-wine-700" : "text-brass",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "flex-1 text-[16.5px] leading-snug font-semibold transition-colors duration-500 sm:text-[18px]",
                            isOpen
                              ? "text-wine-800"
                              : "text-ink hover:text-wine-700",
                          )}
                        >
                          {item.q}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                            isOpen
                              ? "rotate-45 border-wine-700 bg-wine-700 text-paper"
                              : "border-line text-wine-700",
                          )}
                        >
                          <IconPlus className="h-4 w-4" />
                        </span>
                      </button>
                      <div
                        className="grid transition-[grid-template-rows] duration-[600ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-2xl pb-7 pl-3 text-[15px] leading-relaxed text-ink-soft sm:pl-[3.6rem]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
