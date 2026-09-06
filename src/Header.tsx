import { useId, useState } from "react";
import { BIZ, NAV_LINKS, TICKER_ITEMS } from "./data";
import { IBurger, IPhone, IX } from "./icons";
import { useScrolled } from "./hooks";

/* ---------- scrolling ticker ---------- */
export function Ticker({
  tone = "red",
  slow = false,
  items = TICKER_ITEMS,
}: {
  tone?: "red" | "navy";
  slow?: boolean;
  items?: string[];
}) {
  const row = (hidden: boolean) => (
    <span aria-hidden={hidden} className="inline-flex items-center">
      {items.map((t, i) => (
        <span key={i} className="inline-flex items-center">
          <span className="px-5 text-[13px] font-extrabold uppercase tracking-[0.22em]">{t}</span>
          <svg viewBox="0 0 24 24" className="h-3 w-3 opacity-70" aria-hidden="true">
            <path
              d="M12 2.8l2.85 5.8 6.4.93-4.63 4.5 1.1 6.37L12 17.4l-5.72 3l1.1-6.37-4.63-4.5 6.4-.93L12 2.8z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </span>
  );
  return (
    <div
      className={`overflow-hidden whitespace-nowrap py-2 ${
        tone === "red" ? "bg-red text-paper" : "bg-navy text-chalk"
      }`}
    >
      <div className={`inline-flex will-change-transform ${slow ? "animate-marquee-slow" : "animate-marquee"}`}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/* ---------- striped awning scallop ---------- */
export function Awning({ c1 = "var(--color-red)", c2 = "var(--color-paper)" }: { c1?: string; c2?: string }) {
  const uid = useId().replace(/[:]/g, "");
  return (
    <svg className="block w-full" height="22" aria-hidden="true">
      <defs>
        <pattern id={`awn${uid}`} width="48" height="22" patternUnits="userSpaceOnUse">
          <rect width="24" height="11" fill={c1} />
          <rect x="24" width="24" height="11" fill={c2} />
          <path d="M0 11a12 11 0 0 0 24 0z" fill={c1} />
          <path d="M24 11a12 11 0 0 0 24 0z" fill={c2} />
        </pattern>
      </defs>
      <rect width="100%" height="22" fill={`url(#awn${uid})`} />
    </svg>
  );
}

/* ---------- sticky nav ---------- */
export function Header() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <Ticker />
      <div
        className={`border-b-2 border-line bg-paper/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_-18px_rgba(23,38,59,0.5)]" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border-2 border-navy bg-red text-paper shadow-[3px_3px_0_var(--color-navy)] transition-transform duration-300 group-hover:-rotate-6">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M4.5 9.5h12V15a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V9.5zM16.5 11h1.8a2.7 2.7 0 0 1 0 5.4h-2M8 3.5c-.8 1.1-.8 2 0 3M12.5 3.5c-.8 1.1-.8 2 0 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="leading-none">
              <span className="block font-display text-lg tracking-wide text-navy">LUXEMBOURG</span>
              <span className="block text-[11px] font-extrabold uppercase tracking-[0.42em] text-red">Cafe · Belgium WI</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[13px] font-extrabold uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-navy"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-[3px] w-0 bg-red transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={BIZ.phoneHref}
              className="btn-press hidden items-center gap-2 border-2 border-navy bg-red px-4 py-2.5 text-[13px] font-extrabold uppercase tracking-[0.14em] text-paper sm:inline-flex"
              style={{ "--shadow-lip": "var(--color-navy)" } as React.CSSProperties}
            >
              <IPhone className="h-4 w-4" />
              {BIZ.phoneDisplay}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center border-2 border-navy bg-card text-navy lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <IX className="h-5 w-5" /> : <IBurger className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <ul className="space-y-1 border-t-2 border-dashed border-line px-5 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-2.5 text-sm font-extrabold uppercase tracking-[0.18em] text-navy"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={BIZ.phoneHref}
                  className="btn-press inline-flex items-center gap-2 border-2 border-navy bg-red px-4 py-2.5 text-[13px] font-extrabold uppercase tracking-[0.14em] text-paper"
                  style={{ "--shadow-lip": "var(--color-navy)" } as React.CSSProperties}
                >
                  <IPhone className="h-4 w-4" /> Call {BIZ.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
