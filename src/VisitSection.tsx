import { AMENITIES, BIZ, HOURS, fmtTime } from "./data";
import { AMENITY_ICONS, IArrow, IClock, IPhone, IPin } from "./icons";
import { Reveal, useInViewFlag, useOpenNow } from "./hooks";

const SUNDAY_TRAFFIC = [
  { t: "6a", v: 18 },
  { t: "7a", v: 52 },
  { t: "8a", v: 88 },
  { t: "9a", v: 100 },
  { t: "10a", v: 84 },
  { t: "11a", v: 62 },
  { t: "12p", v: 44 },
  { t: "1p", v: 26 },
];

function SundayChart() {
  const { ref, inView } = useInViewFlag<HTMLDivElement>(0.35);
  return (
    <div ref={ref} className="border-2 border-navy bg-card p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-red">Popular times · Sundays</p>
        <p className="font-hand text-xl text-blue">brunch rush is real</p>
      </div>
      <div className="mt-5 flex h-28 items-end gap-2">
        {SUNDAY_TRAFFIC.map((b, i) => (
          <div key={b.t} className="group/bar flex flex-1 flex-col items-center gap-2">
            <div className="flex w-full flex-1 items-end">
              <div
                className="bar-fill w-full border-2 border-navy bg-gold transition-colors group-hover/bar:bg-red"
                style={{
                  height: inView ? `${b.v}%` : "4%",
                  "--bar-delay": `${i * 70}ms`,
                } as React.CSSProperties}
              />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-wide text-ink-soft">{b.t}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs font-semibold text-ink-soft">
        Peak tables around 8–10 AM. Beat the line at 6, or linger past noon.
      </p>
    </div>
  );
}

export function HoursSection() {
  const status = useOpenNow();
  const dayNames = HOURS.map((h) => h.day);

  return (
    <section id="hours" className="relative bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-3 flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.3em] text-red">
                <span className="h-[3px] w-10 bg-red" /> Hours
              </p>
              <h2 className="font-display text-4xl leading-[0.95] text-navy md:text-5xl">
                THE GRIDDLE
                <br />
                FIRES UP
                <br />
                <span className="text-red">AT 6 AM</span>
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-ink-soft">
                Early for the highway crowd, late for the Friday fish fry. Breakfast is served the whole time — that's
                the whole point.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div
                className={`mt-8 inline-flex items-center gap-3 border-2 border-navy px-5 py-3.5 ${
                  status.open ? "bg-card" : "bg-navy text-chalk"
                }`}
              >
                <IClock className={`h-6 w-6 ${status.open ? "text-red" : "text-gold"}`} />
                <div>
                  <p className={`font-display text-lg leading-none ${status.open ? "text-navy" : "text-paper"}`}>
                    {status.open ? "Open right now" : "Closed right now"}
                  </p>
                  <p className={`mt-1 text-[12px] font-bold uppercase tracking-[0.14em] ${status.open ? "text-ink-soft" : "text-chalk/70"}`}>
                    {status.label}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8">
                <SundayChart />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="border-4 border-navy bg-card shadow-[10px_12px_0_var(--color-navy)]">
                <div className="flex items-center justify-between border-b-2 border-navy bg-navy px-6 py-4">
                  <p className="font-display text-xl text-paper">THE WEEK ON MAIN ST</p>
                  <p className="hidden font-hand text-xl text-gold sm:block">today's row is lit up</p>
                </div>
                <ul>
                  {HOURS.map((h) => {
                    const isToday = dayNames[status.todayIdx] === h.day;
                    return (
                      <li
                        key={h.day}
                        className={`group flex items-center gap-4 border-b border-dashed border-line px-6 py-4 transition-colors last:border-0 hover:bg-sky-soft ${
                          isToday ? "bg-navy text-chalk hover:bg-navy" : ""
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {isToday && <span className="h-2.5 w-2.5 animate-pulse-dot rounded-full bg-gold" />}
                          <span
                            className={`w-28 font-extrabold uppercase tracking-[0.12em] ${
                              isToday ? "text-paper" : "text-navy"
                            }`}
                          >
                            {h.day}
                          </span>
                        </span>
                        <span
                          className="leader-dots"
                          style={
                            isToday
                              ? { borderBottomColor: "color-mix(in srgb, var(--color-chalk) 38%, transparent)" }
                              : undefined
                          }
                        />
                        <span className={`font-display text-lg ${isToday ? "text-gold" : "text-navy"}`}>
                          {fmtTime(h.open)} – {fmtTime(h.close)}
                        </span>
                        {h.note && (
                          <span
                            className={`hidden text-[10px] font-extrabold uppercase tracking-[0.14em] md:inline ${
                              isToday ? "text-chalk/70" : "text-red"
                            }`}
                          >
                            {h.note}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <p className="border-t-2 border-navy bg-gold-soft/50 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                  Hours can shift with the season — ring {BIZ.phoneDisplay} before a long drive.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisitSection() {
  return (
    <section id="visit" className="relative bg-navy text-chalk">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-3 flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.3em] text-gold">
                <span className="h-[3px] w-10 bg-gold" /> Find Us
              </p>
              <h2 className="font-display text-4xl leading-[0.95] text-paper md:text-5xl">
                RIGHT ON
                <br />
                <span className="text-gold">MAIN ST</span>
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-chalk/75">
                Belgium sits between Milwaukee and Green Bay — we're the kind of stop that turns a drive into a story.
                Free lot and street parking, usually plenty of it.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <address className="mt-8 space-y-4 not-italic">
                <p className="flex items-start gap-4">
                  <IPin className="mt-1 h-6 w-6 shrink-0 text-gold" />
                  <span>
                    <span className="block font-display text-xl text-paper">{BIZ.address}</span>
                    <span className="mt-1 block text-[12px] font-bold uppercase tracking-[0.16em] text-chalk/60">
                      Plus code: {BIZ.plusCode}
                    </span>
                  </span>
                </p>
                <p className="flex items-center gap-4">
                  <IPhone className="h-6 w-6 shrink-0 text-gold" />
                  <a href={BIZ.phoneHref} className="font-display text-xl text-paper underline decoration-red decoration-4 underline-offset-4 transition-colors hover:text-gold">
                    {BIZ.phoneDisplay}
                  </a>
                </p>
              </address>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={BIZ.phoneHref}
                  className="btn-press inline-flex items-center gap-2.5 border-2 border-paper bg-red px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.16em] text-paper"
                  style={{ "--shadow-lip": "var(--color-paper)" } as React.CSSProperties}
                >
                  <IPhone className="h-5 w-5" /> Call ahead
                </a>
                <a
                  href={BIZ.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-press inline-flex items-center gap-2.5 border-2 border-gold bg-navy px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.16em] text-gold"
                  style={{ "--shadow-lip": "var(--color-gold)" } as React.CSSProperties}
                >
                  <IPin className="h-5 w-5" /> Open in Maps
                  <IArrow className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-8 border-l-4 border-red pl-4 text-sm leading-relaxed text-chalk/70">
                Reservations welcome for groups · private dining room available · good for kids, trucks, and
                everything in between.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <div className="relative border-4 border-paper/90 bg-navy-deep p-2.5 shadow-[10px_12px_0_var(--color-red)]">
                <div className="relative overflow-hidden">
                  <iframe
                    title="Map to Luxembourg Cafe, 100 Main St, Belgium, WI 53004"
                    src={BIZ.osmEmbed}
                    className="h-[420px] w-full border-0 grayscale-[35%] md:h-[500px]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 border-2 border-navy bg-gold px-3 py-1.5 font-display text-sm text-navy shadow-[3px_3px_0_var(--color-navy)]">
                    F5X8+XC
                  </span>
                </div>
                <p className="flex flex-wrap items-center justify-between gap-2 px-1.5 pb-1 pt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-chalk/60">
                  <span>100 Main St · Belgium, WI 53004</span>
                  <a href={BIZ.mapsUrl} target="_blank" rel="noreferrer" className="text-gold hover:text-paper">
                    Get turn-by-turn →
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* amenities */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h3 className="font-display text-3xl text-paper md:text-4xl">
                GOOD TO <span className="text-gold">KNOW</span>
              </h3>
              <p className="font-hand text-2xl text-sky">everything below comes straight from the listing</p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((a, i) => {
              const Icon = AMENITY_ICONS[a.icon];
              return (
                <Reveal key={a.title} delay={(i % 3) * 90}>
                  <div className="group flex h-full items-start gap-4 border-2 border-chalk/20 bg-navy-soft p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold">
                    <span className="grid h-12 w-12 shrink-0 place-items-center border-2 border-gold/60 bg-navy-deep text-gold transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-extrabold uppercase tracking-[0.1em] text-paper">{a.title}</p>
                      <p className="mt-1 text-sm leading-snug text-chalk/65">{a.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
