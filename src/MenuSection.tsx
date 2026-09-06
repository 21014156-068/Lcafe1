import { IMAGES, MENTIONS, MENU } from "./data";
import { IFish, IStar } from "./icons";
import { Reveal, useInViewFlag } from "./hooks";
import { Awning } from "./Header";

export function MenuSection() {
  return (
    <section id="menu" className="on-dark relative bg-navy text-chalk">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* sticky rail */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="mb-3 flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.3em] text-gold">
                  <span className="h-[3px] w-10 bg-gold" /> The Board
                </p>
                <h2 className="font-display text-4xl leading-[0.95] text-paper md:text-5xl">
                  WHAT'S
                  <br />
                  COOKIN'
                </h2>
                <p className="mt-5 max-w-sm leading-relaxed text-chalk/75">
                  Comfort food the small-town way: generous, honest, and on the table fast.
                  Breakfast never stops being breakfast here — order it at 4 PM if the mood strikes.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="chalk-border mt-8 p-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-gold">Reading the board</p>
                  <ul className="mt-3 space-y-2 text-sm text-chalk/80">
                    <li className="flex items-baseline gap-3">
                      <span className="font-display text-gold">$</span> light plates & sides
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="font-display text-gold">$$</span> most plates land $10–20
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="font-display text-gold">$$$</span> steakhouse appetite required
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-6 flex items-center gap-4 border-2 border-gold bg-navy-soft p-5">
                  <IFish className="h-10 w-10 shrink-0 text-gold" />
                  <p className="text-sm leading-snug text-chalk/85">
                    <strong className="font-extrabold uppercase tracking-wider text-paper">Friday fish fry</strong>
                    <br />
                    golden cod, Wisconsin style — kitchen stays open till 8 PM.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* the menu groups */}
          <div className="space-y-14 lg:col-span-8">
            {MENU.map((group, gi) => (
              <Reveal key={group.id} delay={gi % 2 === 0 ? 0 : 90}>
                <div className="border-b-2 border-dashed border-chalk/20 pb-12">
                  <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="flex items-center gap-3 font-display text-2xl text-gold md:text-3xl">
                      <span className="grid h-9 w-9 place-items-center border-2 border-gold bg-navy-deep text-base text-paper">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      {group.title}
                    </h3>
                    <p className="max-w-xs text-right font-hand text-xl leading-tight text-sky">{group.blurb}</p>
                  </div>

                  <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item.name} className="menu-row group/item">
                        <div className="flex items-baseline">
                          <span className="font-extrabold uppercase tracking-wide text-paper transition-colors group-hover/item:text-gold">
                            {item.name}
                          </span>
                          <span className="leader-dots" />
                          <span className="font-display text-lg text-gold">{item.band}</span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-2.5 pr-8">
                          {item.desc && <p className="text-sm leading-snug text-chalk/65">{item.desc}</p>}
                          {item.tag && (
                            <span className="inline-flex items-center gap-1 border border-gold/45 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold-soft">
                              <IStar className="h-2.5 w-2.5" /> {item.tag}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <p className="flex flex-wrap items-center gap-2 pt-2 text-sm text-chalk/60">
                <IStar className="h-3.5 w-3.5 text-gold" />
                Tags mark dishes guests mention by name in their Google reviews. Menus shift with the seasons — call
                ahead if you're crossing the county for one.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <Awning c1="var(--color-red)" c2="var(--color-navy)" />
    </section>
  );
}

export function MostLoved() {
  const { ref, inView } = useInViewFlag<HTMLDivElement>(0.2);
  const max = Math.max(...MENTIONS.map((m) => m.count));

  return (
    <section id="favorites" className="relative overflow-hidden bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-3 flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.3em] text-red">
                <span className="h-[3px] w-10 bg-red" /> Most Loved
              </p>
              <h2 className="font-display text-4xl leading-[0.95] text-navy md:text-5xl">
                WHAT THE
                <br />
                REVIEWS KEEP
                <br />
                <span className="text-red">NAMING</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                Pulled straight from the words guests leave on Google — how often each dish (and that fresh dining
                room) gets a shout-out.
              </p>
            </Reveal>

            <div ref={ref} className="mt-10 space-y-5">
              {MENTIONS.map((m, i) => (
                <div key={m.label} className="group">
                  <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-extrabold uppercase tracking-[0.12em] text-navy">
                      {m.label}
                      <span className="ml-3 hidden font-hand text-lg normal-case tracking-normal text-ink-soft sm:inline">
                        {m.note}
                      </span>
                    </p>
                    <span className="font-display text-lg text-red">×{m.count}</span>
                  </div>
                  <div className="h-4 border-2 border-navy bg-card p-[2px]">
                    <div
                      className="bar-fill h-full bg-red transition-transform duration-300 group-hover:bg-blue"
                      style={{
                        width: inView ? `${(m.count / max) * 100}%` : "0%",
                        "--bar-delay": `${i * 90}ms`,
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <figure className="group -rotate-1 border-4 border-navy bg-card p-2.5 shadow-[10px_12px_0_var(--color-blue)] transition-transform duration-500 hover:rotate-0">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={IMAGES.hashbowl}
                    alt="Corned beef hash bowl topped with sunny-side eggs"
                    className="h-full w-full animate-kenburns object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-1.5 pb-1 pt-3">
                  <span className="font-hand text-xl text-ink">corned beef hash bowl — LUX bloodline</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue">hash ×3</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={260}>
              <div className="ticket-edge mt-10 border-2 border-navy bg-gold-soft/60 p-6 pl-8">
                <p className="font-display text-3xl leading-none text-navy">508</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-ink-soft">
                  Google reviews and counting — 4.7 stars strong
                </p>
                <p className="mt-4 font-hand text-2xl leading-snug text-blue">
                  "Never a bad experience!" — posted on the visitor board, and repeated in the reviews ever since.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
