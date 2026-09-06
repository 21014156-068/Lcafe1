import { BIZ, IMAGES } from "./data";
import { IArrow, IPhone, IPin, StarRow } from "./icons";
import { Reveal, useOpenNow } from "./hooks";
import { Awning } from "./Header";

function burstPoints(cx: number, cy: number, outer: number, inner: number, spikes: number) {
  const pts: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

function OpenBadge() {
  return (
    <div className="relative z-20 h-32 w-32 md:h-36 md:w-36">
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slower" aria-hidden="true">
        <polygon
          points={burstPoints(60, 60, 58, 46, 14)}
          fill="var(--color-gold)"
          stroke="var(--color-navy)"
          strokeWidth="2.5"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <p className="text-center font-display leading-tight text-navy">
          <span className="block text-lg">OPEN</span>
          <span className="block text-xl">6 AM</span>
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const status = useOpenNow();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient corner shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[28px] border-sky-soft" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-16 bottom-24 h-40 w-40 rounded-full bg-gold-soft/50 blur-2xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-8">
        {/* ---- left: the sign ---- */}
        <div className="relative z-10 lg:col-span-7">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="h-[3px] w-12 bg-red" />
              <p className="text-[12px] font-extrabold uppercase tracking-[0.3em] text-ink-soft">
                100 Main St · Belgium, Wisconsin
              </p>
              <span className="border-2 border-navy bg-card px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-navy">
                {BIZ.price}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display leading-[0.92] text-navy">
              <span className="block text-[clamp(2.6rem,7.2vw,5.2rem)]">LUXEMBOURG</span>
              <span className="mt-1 flex items-center gap-4">
                <span className="block text-[clamp(2.6rem,7.2vw,5.2rem)] text-red">CAFE</span>
                <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 text-gold md:h-12 md:w-12" aria-hidden="true">
                  <path
                    d="M12 2.8l2.85 5.8 6.4.93-4.63 4.5 1.1 6.37L12 17.4l-5.72 3l1.1-6.37-4.63-4.5 6.4-.93L12 2.8z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-ink-soft md:text-xl">
              A cozy small-town diner where <strong className="font-extrabold text-navy">breakfast runs all day</strong>,
              the coffee never goes empty, and Friday nights smell like a proper Wisconsin fish fry.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={BIZ.reviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3"
                aria-label="4.7 stars from 508 Google reviews"
              >
                <span className="font-display text-4xl text-navy">{BIZ.rating}</span>
                <span className="leading-tight">
                  <StarRow value={BIZ.rating} className="h-5 w-5" />
                  <span className="mt-1 block text-[12px] font-bold uppercase tracking-[0.14em] text-ink-soft underline decoration-gold decoration-2 underline-offset-4 group-hover:text-red">
                    {BIZ.reviewCount} Google reviews
                  </span>
                </span>
              </a>
              <span
                className={`inline-flex items-center gap-2.5 border-2 px-3.5 py-2 text-[12px] font-extrabold uppercase tracking-[0.16em] ${
                  status.open ? "border-navy bg-card text-navy" : "border-navy bg-navy text-chalk"
                }`}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className={`absolute inline-flex h-full w-full animate-pulse-dot rounded-full ${
                      status.open ? "bg-emerald-500" : "bg-red"
                    }`}
                  />
                  <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${status.open ? "bg-emerald-500" : "bg-red"}`} />
                </span>
                {status.label}
              </span>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BIZ.phoneHref}
                className="btn-press inline-flex items-center gap-2.5 border-2 border-navy bg-red px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.16em] text-paper"
                style={{ "--shadow-lip": "var(--color-navy)" } as React.CSSProperties}
              >
                <IPhone className="h-5 w-5" /> Call the cafe
              </a>
              <a
                href={BIZ.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-press inline-flex items-center gap-2.5 border-2 border-navy bg-card px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.16em] text-navy"
                style={{ "--shadow-lip": "var(--color-red)" } as React.CSSProperties}
              >
                <IPin className="h-5 w-5" /> Directions
              </a>
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-red"
              >
                See the board
                <IArrow className="h-4 w-4 rotate-45 transition-transform duration-300 group-hover:rotate-90" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10 flex items-end gap-4">
              <svg viewBox="0 0 120 60" className="h-10 w-20 shrink-0 text-red" aria-hidden="true">
                <path
                  d="M6 8c30 4 62 16 96 40M92 42l12 7 1-14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="max-w-xs font-hand text-2xl leading-snug text-blue">
                "You can't go wrong with the LUX Bowl, I'm telling ya!" — a regular, right on the visitor board
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---- right: photo collage ---- */}
        <div className="relative lg:col-span-5">
          <Reveal delay={150} className="relative">
            <div className="absolute -left-3 -top-8 sm:-left-8 md:-left-12">
              <OpenBadge />
            </div>

            <figure className="group relative rotate-1 border-4 border-navy bg-card p-2.5 shadow-[10px_12px_0_var(--color-red)] transition-transform duration-500 hover:rotate-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.benedict}
                  alt="The Bacado eggs benedict with hash browns and coffee at Luxembourg Cafe"
                  className="h-full w-full animate-kenburns object-cover"
                  loading="eager"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-1.5 pb-1 pt-3">
                <span className="font-hand text-xl text-ink">The Bacado Benedict — gone by noon most days</span>
                <span className="whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.2em] text-red">Belgium, WI</span>
              </figcaption>
            </figure>

            {/* scattered polaroids */}
            <div
              className="absolute -left-6 bottom-16 hidden w-36 -rotate-6 transition-transform duration-500 hover:z-30 hover:-translate-y-2 hover:rotate-0 sm:block md:w-44 md:-left-14"
              style={{ "--bob-rot": "-6deg" } as React.CSSProperties}
            >
              <div className="animate-bob border-[3px] border-navy bg-card p-1.5 shadow-[6px_7px_0_rgba(23,38,59,0.25)]">
                <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
                <img src={IMAGES.pancakes} alt="Golden pancakes with powdered sugar" className="aspect-square w-full object-cover" loading="lazy" />
                <p className="px-1 pb-0.5 pt-1.5 font-hand text-lg leading-none text-ink">stack of goldens</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-2 hidden w-36 rotate-[5deg] transition-transform duration-500 hover:z-30 hover:-translate-y-2 hover:rotate-0 md:block md:-right-8">
              <div className="border-[3px] border-navy bg-card p-1.5 shadow-[6px_7px_0_rgba(214,69,61,0.35)]">
                <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-6" />
                <img src={IMAGES.coffee} alt="Fresh drip coffee being poured" className="aspect-square w-full object-cover" loading="lazy" />
                <p className="px-1 pb-0.5 pt-1.5 font-hand text-lg leading-none text-ink">refills on the house</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Awning />
    </section>
  );
}
