import { ATTRIBUTES, CONTACT } from "../lib/data";
import { IconCheck, IconClock, IconPin, Reveal } from "./ui";

import PORTRAIT from "../assets/thifany-sobre.jpg";
import DETAIL from "../assets/thifany-detalhe.jpg";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* images */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-[24rem] lg:mx-0 lg:max-w-none">
              <figure className="tint-wine relative overflow-hidden bg-wine-900">
                <img
                  src={PORTRAIT}
                  alt="Thifany Palacin, advogada em São Paulo"
                  className="h-[28rem] w-full object-cover sm:h-[34rem]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-wine-800/40 mix-blend-color" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wine-950/70 via-transparent to-transparent" />
              </figure>

              <figure className="tint-wine absolute -right-2 -bottom-12 hidden w-44 overflow-hidden border-4 border-paper shadow-[0_24px_60px_-30px_rgba(31,8,14,0.7)] sm:block lg:-right-10 lg:w-56">
                <img
                  src={DETAIL}
                  alt="Detalhe do escritório"
                  className="h-32 w-full object-cover lg:h-40"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-wine-700/35 mix-blend-multiply" />
              </figure>

              <div className="absolute -top-5 -left-5 hidden h-24 w-24 border-t border-l border-brass/50 lg:block" />
            </div>
          </Reveal>

          {/* copy */}
          <div className="lg:col-span-7 lg:pt-4">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-brass" />
                <p className="eyebrow text-wine-700">A advogada</p>
              </div>
              <h2 className="display mt-6 text-[clamp(2rem,4.8vw,3.5rem)] font-light text-ink">
                Mais do que orientação jurídica,{" "}
                <span className="text-wine-700 italic">presença</span> em cada
                decisão.
              </h2>
            </Reveal>

            <Reveal delay={110}>
              <div className="mt-8 max-w-xl space-y-5 text-[15.5px] leading-relaxed text-ink-soft sm:text-[16.5px]">
                <p>
                  À frente do escritório, Thifany Palacin atua com uma
                  abordagem próxima e estratégica, buscando tornar o Direito
                  mais claro e acessível para cada cliente.
                </p>
                <p>
                  Cada caso é tratado de maneira individual, com atenção aos
                  detalhes e compromisso com uma atuação responsável.
                </p>
              </div>
            </Reveal>

            <Reveal delay={170}>
              <ul className="mt-9 flex flex-wrap gap-3">
                {ATTRIBUTES.map((a) => (
                  <li
                    key={a}
                    className="inline-flex items-center gap-2.5 rounded-full border border-wine-700/25 px-4.5 py-2 text-[12px] font-semibold tracking-[0.12em] text-wine-800 uppercase"
                  >
                    <IconCheck className="h-3.5 w-3.5 text-brass" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-12 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="display text-[2.4rem] leading-none text-wine-800 italic">
                    Thifany Palacin
                  </p>
                  <span className="mt-3 block h-px w-28 bg-brass" />
                  <p className="mt-3 text-[12px] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                    {CONTACT.oab}
                  </p>
                  <p className="mt-2 max-w-sm text-[12.5px] leading-relaxed text-ink-soft/80">
                    Pós-graduação em Direito do Consumidor e Responsabilidade
                    Civil · Comissão de Defesa do Consumidor da OAB/SP
                  </p>
                </div>
                <div className="space-y-2.5 text-[13.5px] text-ink-soft">
                  <p className="flex items-center gap-2.5">
                    <IconPin className="h-4 w-4 text-brass" />
                    {CONTACT.address}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <IconClock className="h-4 w-4 text-brass" />
                    {CONTACT.hours}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
