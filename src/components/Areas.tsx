import { AREAS } from "../lib/data";
import { Reveal } from "./ui";

export function Areas() {
  return (
    <section id="atuacao" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="glow-wine pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-brass" />
              <p className="eyebrow text-wine-700">Áreas de atuação</p>
            </div>
            <h2 className="display mt-6 text-[clamp(2.2rem,5.4vw,4rem)] font-light text-ink">
              Nossa <span className="text-wine-700 italic">atuação</span>.
            </h2>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-5">
            <p className="max-w-md text-[15.5px] leading-relaxed text-ink-soft lg:ml-auto lg:text-right">
              Soluções jurídicas para diferentes momentos e necessidades —
              pessoas e empresas, no consultivo e no contencioso.
            </p>
            <p className="mt-4 max-w-md text-[12.5px] text-ink-soft/60 lg:ml-auto lg:text-right">
              Atendimento presencial na Av. Paulista e online em todo o Brasil.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {AREAS.map((area, i) => (
            <Reveal key={area.id} delay={i * 50} y={16}>
              <div className="group row-shift grid grid-cols-12 gap-x-6 gap-y-2 border-b border-line py-7 pl-3 hover:bg-wine-50/70 sm:items-center sm:pl-6 sm:hover:pl-8 lg:py-8">
                <span className="display col-span-2 text-[14px] font-medium tracking-widest text-brass transition-colors duration-500 group-hover:text-wine-700 sm:col-span-1 sm:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display col-span-10 text-[clamp(1.4rem,3vw,2.1rem)] font-light text-ink transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-wine-800 sm:col-span-5 lg:col-span-4">
                  {area.title}
                </h3>
                <p className="col-span-10 col-start-3 text-[14px] leading-relaxed text-ink-soft/85 sm:col-span-5 sm:col-start-7 lg:col-span-4 lg:col-start-7 lg:text-[14.5px]">
                  {area.description}
                </p>
                <span className="hidden h-8 w-px bg-line transition-all duration-500 group-hover:h-10 group-hover:bg-brass lg:col-span-1 lg:col-start-12 lg:block lg:w-px" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
