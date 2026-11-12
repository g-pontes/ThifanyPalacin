import { useEffect, useState } from "react";
import { waLink } from "../lib/data";
import { cn } from "../utils/cn";
import { IconWhatsApp } from "./ui";

export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const hint = window.setTimeout(() => setTip(true), 3200);
    const hide = window.setTimeout(() => setTip(false), 10000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(hint);
      window.clearTimeout(hide);
    };
  }, []);

  const wa = waLink("Olá! Vim pelo site e gostaria de falar com o escritório.");

  return (
    <>
      {/* desktop */}
      <div
        className={cn(
          "fixed right-7 bottom-7 z-50 hidden items-center gap-3 transition-all duration-700 sm:flex",
          show
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0",
        )}
      >
        <span
          className={cn(
            "rounded-full border border-wine-900/10 bg-paper/95 px-4 py-2.5 text-[12.5px] font-semibold text-wine-800 shadow-[0_14px_40px_-18px_rgba(31,8,14,0.6)] backdrop-blur transition-all duration-500",
            tip ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0",
          )}
        >
          Falar com a advogada no WhatsApp
        </span>
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com Thifany Palacin no WhatsApp"
          className="pulse-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_40px_-14px_rgba(37,211,102,0.75)] transition-transform duration-500 hover:scale-105 active:scale-95"
        >
          <IconWhatsApp className="h-7 w-7" />
        </a>
      </div>

      {/* mobile sticky bar */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 border-t border-wine-950/10 bg-paper/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-all duration-500 sm:hidden",
          show
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0",
        )}
      >
        <div className="flex items-center gap-2.5">
          <a
            href="#contato"
            className="flex-1 rounded-full bg-wine-800 py-3.5 text-center text-[13.5px] font-bold tracking-wide text-paper"
          >
            Fale com o escritório
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-[3.1rem] w-[3.1rem] items-center justify-center rounded-full bg-[#25d366] text-white"
          >
            <IconWhatsApp className="h-6 w-6" />
          </a>
        </div>
      </div>
    </>
  );
}
