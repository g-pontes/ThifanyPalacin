import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS, WA_DEFAULT, waLink } from "../lib/data";
import { cn } from "../utils/cn";
import { IconClose, IconMenu, IconWhatsApp, Monogram } from "./ui";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "hidden overflow-hidden border-b border-wine-900/10 bg-wine-950 text-wine-100 transition-all duration-500 lg:block",
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
          )}
        >
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-2.5 text-[11px] tracking-[0.16em] uppercase">
            <p className="text-wine-200/80">
              {CONTACT.city} · Atendimento presencial e online em todo o Brasil
            </p>
            <div className="flex items-center gap-7">
              <span className="text-wine-200/60">{CONTACT.oab}</span>
              <a
                href={`tel:+${CONTACT.phoneRaw}`}
                className="link-draw text-wine-50"
              >
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-500",
            scrolled
              ? "border-b border-line/80 bg-paper/85 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/70"
              : "border-b border-transparent",
          )}
        >
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
            <a
              href="#topo"
              className="group flex items-center gap-3"
              aria-label="Thifany Palacin — início"
            >
              <Monogram className="h-9 w-9 text-wine-700 transition-transform duration-700 group-hover:rotate-[18deg]" />
              <span className="leading-none">
                <span className="display block text-[17px] font-medium text-ink">
                  Thifany Palacin
                </span>
                <span className="mt-1 block text-[9.5px] tracking-[0.26em] text-ink-soft/80 uppercase">
                  Advocacia estratégica
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-9 lg:flex">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-active={active === l.href.slice(1)}
                  className={cn(
                    "link-draw text-[13.5px] font-medium tracking-wide transition-colors",
                    active === l.href.slice(1)
                      ? "text-wine-700"
                      : "text-ink-soft hover:text-ink",
                  )}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={waLink(WA_DEFAULT)}
                target="_blank"
                rel="noreferrer"
                className="btn-wipe group hidden items-center gap-2.5 rounded-full bg-wine-700 px-5 py-2.5 text-[12.5px] font-semibold tracking-wide text-paper hover:text-paper sm:inline-flex"
              >
                <IconWhatsApp className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
                <span>Fale com o escritório</span>
                <span className="ml-0.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#25d366]" />
              </a>
              <a
                href={`tel:+${CONTACT.phoneRaw}`}
                className="link-draw hidden text-[12.5px] font-semibold text-ink-soft hover:text-wine-700 md:block lg:hidden"
              >
                {CONTACT.phoneDisplay}
              </a>
              <button
                onClick={() => setOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-wine-700 hover:text-wine-700 lg:hidden"
                aria-label="Abrir menu"
              >
                <IconMenu className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="h-px w-full bg-wine-900/10">
            <div
              className="h-px origin-left bg-wine-600 transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-wine-950/60 backdrop-blur-sm transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "noise absolute inset-y-0 right-0 flex w-full max-w-sm flex-col justify-between overflow-hidden bg-wine-900 px-7 py-6 text-paper transition-transform duration-[600ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-brass-2">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 transition-colors hover:bg-paper/10"
                aria-label="Fechar menu"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-10 flex flex-col">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display border-b border-paper/10 py-4 text-[30px] font-light text-paper/90 transition-all duration-500 hover:pl-2 hover:text-brass-2"
                  style={{
                    transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(14px)",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="relative space-y-4">
            <a
              href={waLink(WA_DEFAULT)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-brass-2 px-6 py-3.5 text-sm font-bold tracking-wide text-wine-950"
            >
              <IconWhatsApp className="h-4 w-4" />
              {CONTACT.phoneDisplay}
            </a>
            <p className="text-center text-[11px] tracking-[0.18em] text-paper/45 uppercase">
              {CONTACT.oab} · {CONTACT.city}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
