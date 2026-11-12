import { useEffect, useRef, useState } from "react";
import { CONTACT, WA_DEFAULT, waLink } from "../lib/data";
import { IconArrowRight, IconWhatsApp } from "./ui";

import PORTRAIT from "../assets/thifany-hero.jpg";

const TRUST = [
  "Atendimento personalizado",
  "Estratégia jurídica",
  "Compromisso com cada caso",
];

const EASE = "cubic-bezier(0.16,1,0.3,1)";

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [ready, setReady] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const rise = (delay: number, y = 26) => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "none" : `translate3d(0, ${y}px, 0)`,
    transition: `opacity 900ms ${EASE} ${delay}ms, transform 1000ms ${EASE} ${delay}ms`,
  });

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-paper pt-28 pb-14 lg:pt-40 lg:pb-20"
    >
      <p className="sr-only">
        Thifany Palacin Advocacia, em São Paulo: Direito do Consumidor,
        Direito Civil, Direito Empresarial, Contratos, Registro de Marcas e
        Consultoria Jurídica. Atendimento jurídico personalizado para pessoas
        e empresas, presencial e online em todo o Brasil.
      </p>

      {/* ambient layers */}
      <div className="glow-wine pointer-events-none absolute inset-0" />
      <div className="hairlines pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -top-24 -left-40 h-[30rem] w-[30rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "var(--color-wine-600)" }}
      />
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />

      {/* editorial side rail */}
      <div className="pointer-events-none absolute top-1/2 left-6 hidden -translate-y-1/2 xl:block">
        <p className="eyebrow origin-center rotate-180 text-ink-soft/45 [writing-mode:vertical-rl]">
          Advocacia estratégica · {CONTACT.city}
        </p>
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 xl:pl-24">
        {/* copy */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="flex items-center gap-4" style={rise(80)}>
            <span className="h-px w-12 bg-brass" />
            <p className="eyebrow text-wine-700">
              Escritório de advocacia · {CONTACT.city}
            </p>
          </div>

          <h1
            className="display mt-7 text-[clamp(2.9rem,8.2vw,6.4rem)] font-light text-ink"
            style={rise(160)}
          >
            <span className="block">
              Advocacia{" "}
              <span className="relative inline-block font-normal text-wine-700 italic">
                estratégica
                <svg
                  className="absolute -bottom-1 left-0 h-3 w-full text-brass"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8c48-6 96-6 146-3 18 1 34 2 50 1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
            <span className="block">para proteger</span>
            <span className="block">
              seus <span className="font-normal text-wine-800 italic">direitos.</span>
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-[16.5px] leading-relaxed text-ink-soft sm:text-[17.5px]"
            style={rise(280)}
          >
            Atendimento jurídico personalizado para pessoas e empresas, com
            atuação estratégica, clareza e segurança em cada etapa.
          </p>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={rise(380)}
          >
            <a
              href="#atuacao"
              className="btn-wipe group inline-flex items-center justify-center gap-3 rounded-full bg-wine-700 px-8 py-[1.15rem] text-[14.5px] font-bold tracking-wide text-paper shadow-[0_20px_45px_-24px_rgba(77,24,39,0.9)] transition-all duration-500 hover:shadow-[0_26px_55px_-22px_rgba(77,24,39,0.85)] hover:text-paper"
            >
              <span>Conheça nossa atuação</span>
              <span className="transition-transform duration-500 group-hover:translate-y-0.5">
                <IconArrowRight className="h-4 w-4 rotate-90" />
              </span>
            </a>
            <a
              href={waLink(WA_DEFAULT)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/20 px-7 py-[1.05rem] text-[14px] font-semibold tracking-wide text-ink transition-colors duration-500 hover:border-wine-700 hover:text-wine-700"
            >
              <IconWhatsApp className="h-[18px] w-[18px] transition-transform duration-500 group-hover:scale-110" />
              Fale com nosso escritório
            </a>
          </div>

          <ul
            className="mt-11 flex flex-wrap items-center gap-x-4 gap-y-2.5 border-t border-line pt-7 text-[13.5px] font-medium text-ink-soft"
            style={rise(470)}
          >
            {TRUST.map((text, i) => (
              <li key={text} className="flex items-center gap-4">
                {text}
                {i < TRUST.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-brass/80" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* portrait */}
        <div
          className="relative order-1 lg:order-2 lg:col-span-5"
          style={rise(240, 40)}
        >
          <div
            className="relative mx-auto max-w-[26rem] lg:max-w-none"
            style={{ transform: `translate3d(0, ${offset * -0.045}px, 0)` }}
          >
            <div className="absolute -inset-3 -z-10 rounded-[2px] border border-brass/40" />
            <div className="absolute -top-6 -left-6 -z-10 hidden h-28 w-28 border-t border-l border-wine-700/30 sm:block" />

            <figure className="tint-wine arch relative overflow-hidden bg-wine-900">
              <img
                src={PORTRAIT}
                alt="Thifany Palacin, advogada em São Paulo"
                className="h-[26rem] w-full object-cover object-top sm:h-[34rem] lg:h-[38rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-wine-800/45 mix-blend-color" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wine-950/85 via-wine-950/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="display text-2xl font-light text-paper italic">
                  Thifany Palacin
                </p>
                <p className="mt-1 text-[11px] tracking-[0.24em] text-paper/60 uppercase">
                  {CONTACT.oab} · Advogada
                </p>
              </figcaption>
            </figure>

            <div className="float-slow absolute -bottom-8 -left-4 w-[13.5rem] rounded-sm border border-line bg-paper/95 p-4 shadow-[0_18px_50px_-24px_rgba(51,16,26,0.55)] backdrop-blur sm:-left-12">
              <p className="display text-[1.3rem] leading-tight font-light text-wine-800 italic">
                Advocacia estratégica
              </p>
              <p className="mt-2 text-[11.5px] leading-snug text-ink-soft">
                Para pessoas e empresas, em todas as etapas
              </p>
              <div className="mt-3 h-px w-full bg-line" />
              <p className="mt-2.5 text-[11px] font-semibold tracking-[0.14em] text-wine-700 uppercase">
                {CONTACT.city} · Todo o Brasil
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 hidden max-w-[1400px] items-center gap-4 px-8 lg:flex">
        <span className="h-px flex-1 bg-line" />
        <span className="eyebrow text-ink-soft/60">
          Conheça o escritório
        </span>
        <span className="relative block h-9 w-px overflow-hidden bg-line">
          <span className="scroll-cue absolute inset-0 block bg-wine-700" />
        </span>
      </div>
    </section>
  );
}
