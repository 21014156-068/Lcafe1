import { BIZ, NAV_LINKS } from "./data";
import { IArrow, IPhone, IPin } from "./icons";
import { Ticker } from "./Header";

function SteamCup() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 text-paper" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 30h30v12a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12V30z" />
        <path d="M44 34h4.5a6.5 6.5 0 0 1 0 13H43" />
        <path d="M10 58h38" />
      </g>
      <g fill="none" stroke="var(--color-gold)" strokeWidth="2.4" strokeLinecap="round">
        <path className="animate-steam" style={{ animationDelay: "0s" }} d="M22 12c-2 2.6-2 5 0 7.5" />
        <path className="animate-steam" style={{ animationDelay: "0.7s" }} d="M30 10c-2 2.6-2 5 0 7.5" />
        <path className="animate-steam" style={{ animationDelay: "1.4s" }} d="M38 12c-2 2.6-2 5 0 7.5" />
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-chalk">
      <Ticker tone="navy" slow items={["See you at 6 AM", "Belgium, Wisconsin", "Bottomless coffee", "Friday fish fry", "The LUX Bowl"]} />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <SteamCup />
              <p className="font-display leading-[0.95]">
                <span className="block text-3xl text-paper">LUXEMBOURG</span>
                <span className="block text-3xl text-red">CAFE</span>
              </p>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-chalk/65">
              A cozy diner on Main Street in Belgium, Wisconsin — breakfast all day, Friday fish fry, great coffee,
              and 4.7 stars worth of regulars.
            </p>
            <a
              href="#top"
              className="group mt-6 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-gold"
            >
              Back to the top
              <IArrow className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-gold">Around the site</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm font-bold text-chalk/75 transition-colors hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-gold">The essentials</p>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <IPin className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                <span className="text-chalk/75">{BIZ.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <IPhone className="h-5 w-5 shrink-0 text-red" />
                <a href={BIZ.phoneHref} className="font-display text-lg text-paper hover:text-gold">
                  {BIZ.phoneDisplay}
                </a>
              </li>
              <li className="text-chalk/60">
                Sun–Thu 6 AM – 2 PM · Fri & Sat 6 AM – 8 PM
                <span className="mt-1 block text-[11px] uppercase tracking-wider text-chalk/40">
                  call to confirm — kitchens have moods
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-chalk/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-[11px] font-bold uppercase tracking-[0.16em] text-chalk/45">
          <p>Luxembourg Cafe · Belgium, Wisconsin · {BIZ.plusCode}</p>
          <p>
            Menu highlights, hours & reviews drawn from the cafe's Google listing ·{" "}
            <a href={BIZ.reviewsUrl} target="_blank" rel="noreferrer" className="text-gold hover:text-paper">
              read the original reviews
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
