import { CONTACT } from "../lib/data";
import { Reveal } from "./ui";

import PORTRAIT from "../assets/thifany-escritorio.jpg";

export function Position() {
  return (
    <section
      id="escritorio"
      className="hairlines relative overflow-hidden bg-paper-2 py-20 lg:py-28"
    >
      <div className="noise pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* photo */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-[24rem] lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-3 -z-10 rounded-[2px] border border-brass/40" />
              <figure className="tint-wine relative overflow-hidden bg-wine-900">
                <img
                  src={PORTRAIT}
                  alt="Escritório de Thifany Palacin Advocacia em São Paulo"
                  className="h-[24rem] w-full object-cover sm:h-[30rem]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-wine-800/40 mix-blend-color" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wine-950/55 via-transparent to-transparent" />
              </figure>
              <figcaption className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-ink-soft uppercase">
                  Presencial e online
                </span>
                <span className="display text-[13px] text-wine-700 italic">
                  {CONTACT.address.split("·")[0]}, São Paulo
                </span>
              </figcaption>
            </div>
          </Reveal>

          {/* copy */}
          <div className="lg:col-span-7 lg:pt-2">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-brass" />
                <p className="eyebrow text-wine-700">O Escritório</p>
              </div>
              <h2 className="display mt-6 max-w-xl text-[clamp(2.1rem,5vw,3.7rem)] font-light text-ink">
                Direito com estratégia.{" "}
                <span className="text-wine-700 italic">Atendimento com proximidade.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">
                Cada situação exige uma análise cuidadosa e uma estratégia
                adequada. Nosso trabalho é compreender cada caso de forma
                individual e buscar soluções jurídicas seguras, claras e
                eficientes — com presença do primeiro contato ao último
                documento.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
