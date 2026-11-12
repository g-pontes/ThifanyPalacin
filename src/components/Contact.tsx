import { CONTACT, waLink } from "../lib/data";
import { IconArrowRight, IconWhatsApp, Reveal } from "./ui";

export function Contact() {
  return (
    <section
      id="contato"
      className="noise relative overflow-hidden bg-wine-950 py-24 text-paper lg:py-32"
    >
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-[110px]"
        style={{ background: "var(--color-wine-600)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-brass-2" />
              <p className="eyebrow text-brass-2">Contato</p>
              <span className="h-px w-12 bg-brass-2" />
            </div>
            <h2 className="display mt-8 text-[clamp(2.6rem,6.5vw,5rem)] font-light text-paper">
              Vamos conversar sobre
              <span className="block text-brass-2 italic">o seu caso?</span>
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-[15.5px] leading-relaxed text-paper/65 sm:text-[16.5px]">
              Conte brevemente o que você precisa e nossa equipe entrará em
              contato para orientar os próximos passos.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={waLink(
                "Olá! Vim pelo site e gostaria de conversar sobre o meu caso.",
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-wipe light group mt-12 inline-flex items-center gap-3 rounded-full bg-brass-2 px-9 py-[1.15rem] text-[15px] font-bold tracking-wide text-wine-950"
            >
              <span className="flex items-center gap-3">
                <IconWhatsApp className="h-[19px] w-[19px]" />
                Falar com o escritório
                <IconArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </a>
            <p className="mt-5 text-[12.5px] text-paper/40">
              Resposta em até 2h úteis, em horário comercial.
            </p>
          </Reveal>

          <Reveal delay={190}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-paper/12 pt-9 text-[13.5px] text-paper/60">
              <a
                href={waLink(
                  "Olá! Vim pelo site e gostaria de falar com o escritório.",
                )}
                target="_blank"
                rel="noreferrer"
                className="link-draw font-semibold text-paper/85"
              >
                {CONTACT.phoneDisplay}
              </a>
              <span className="hidden h-3.5 w-px bg-paper/20 sm:inline-block" />
              <a href={`mailto:${CONTACT.email}`} className="link-draw">
                {CONTACT.email}
              </a>
              <span className="hidden h-3.5 w-px bg-paper/20 sm:inline-block" />
              <span>{CONTACT.address}</span>
              <span className="hidden h-3.5 w-px bg-paper/20 sm:inline-block" />
              <span>{CONTACT.hours}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
