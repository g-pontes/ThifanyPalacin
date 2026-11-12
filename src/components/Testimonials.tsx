import { TESTIMONIALS } from "../lib/data";
import { IconQuote, Reveal } from "./ui";

export function Testimonials() {
  return (
    <section className="hairlines relative overflow-hidden bg-paper-2 py-20 lg:py-28">
      <div className="noise pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-brass" />
              <p className="eyebrow text-wine-700">Depoimentos</p>
            </div>
            <h2 className="display mt-6 text-[clamp(2rem,4.8vw,3.5rem)] font-light text-ink">
              A experiência de quem já{" "}
              <span className="text-wine-700 italic">esteve conosco</span>.
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="max-w-xs text-[13.5px] leading-relaxed text-ink-soft">
              Relatos de clientes atendidos pelo escritório, compartilhados
              com autorização.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} y={20}>
              <figure className="group relative md:px-10 md:first:pl-0 md:last:pr-0">
                <IconQuote className="h-6 w-9 text-wine-300 transition-colors duration-500 group-hover:text-wine-400" />
                <blockquote className="display mt-7 text-[1.25rem] leading-[1.45] font-light text-ink italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="h-px w-9 bg-brass transition-all duration-500 group-hover:w-14" />
                  <span className="text-[12.5px] font-semibold tracking-[0.16em] text-wine-800 uppercase">
                    {t.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
