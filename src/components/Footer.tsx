import { AREAS, CONTACT, NAV_LINKS, waLink, WA_DEFAULT } from "../lib/data";
import { IconArrowRight, IconInstagram, Monogram } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#160509] pt-20 pb-8 text-paper">
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-paper/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Monogram className="h-10 w-10 text-brass-2" />
              <span className="display text-xl font-light">Thifany Palacin</span>
            </div>
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-paper/55">
              Advocacia estratégica e atendimento personalizado para pessoas e
              empresas — Direito do Consumidor, Direito Civil, Direito
              Empresarial, Contratos, Registro de Marcas e Consultoria
              Jurídica. {CONTACT.city}. Atendimento online em todo o Brasil.
            </p>
            <a
              href={waLink(WA_DEFAULT)}
              target="_blank"
              rel="noreferrer"
              className="btn-wipe light group mt-8 inline-flex items-center gap-3 rounded-full border border-paper/25 px-6 py-3.5 text-[13px] font-semibold tracking-wide text-paper"
            >
              <span className="flex items-center gap-3 transition-colors duration-500 group-hover:text-wine-950">
                Fale com o escritório
                <IconArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-brass-2">Navegação</p>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-draw text-[14px] text-paper/65 hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-brass-2">Áreas</p>
            <ul className="mt-5 space-y-2.5">
              {AREAS.map((a) => (
                <li key={a.id}>
                  <span className="text-[14px] text-paper/65">
                    {a.title}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13.5px] text-paper/50">
              <a href={`mailto:${CONTACT.email}`} className="link-draw">
                {CONTACT.email}
              </a>
            </p>
            <p className="mt-1 text-[13.5px] text-paper/50">
              <a
                href={`tel:+${CONTACT.phoneRaw}`}
                className="link-draw text-paper/70"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] text-paper/40">
            © {year} {CONTACT.firm} · {CONTACT.oab} · Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#topo"
              className="link-draw text-[12px] font-semibold tracking-wide text-paper/55 uppercase hover:text-paper"
            >
              Voltar ao topo
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-all duration-500 hover:border-brass-2 hover:bg-brass-2 hover:text-wine-950"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-[11px] leading-relaxed text-paper/25">
          Este site tem caráter meramente informativo, em conformidade com o
          Código de Ética e Disciplina da OAB e com o Provimento 205/2021. Não
          constitui promessa de resultado, captação de clientela ou oferta de
          serviços gratuitos. Cada caso é analisado individualmente.
        </p>
      </div>

      <span
        className="display pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 text-[clamp(4rem,17vw,15rem)] leading-none font-light whitespace-nowrap text-paper/[0.035] select-none"
        aria-hidden="true"
      >
        Palacin
      </span>
    </footer>
  );
}
