import { BIZ, IMAGES, PULL_QUOTE, RATING_BARS, REVIEWS, REVIEW_THEMES } from "./data";
import { IArrow, IQuote, StarRow } from "./icons";
import { Reveal, useInViewFlag } from "./hooks";
import { Awning } from "./Header";

function SummaryCard() {
  const { ref, inView } = useInViewFlag<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="on-dark border-2 border-navy bg-navy p-7 text-chalk shadow-[8px_10px_0_var(--color-gold)] md:p-8">
      <div className="flex items-end gap-5">
        <p className="font-display text-7xl leading-none text-paper">{BIZ.rating}</p>
        <div className="pb-1.5">
          <StarRow value={BIZ.rating} className="h-5 w-5" />
          <p className="mt-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-chalk/70">
            {BIZ.reviewCount} Google reviews
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2.5">
        {RATING_BARS.map((b, i) => (
          <div key={b.stars} className="flex items-center gap-3">
            <span className="w-4 text-right font-display text-sm text-gold">{b.stars}</span>
            <div className="h-3 flex-1 border border-chalk/25 bg-navy-deep p-[2px]">
              <div
                className="bar-fill h-full bg-gold"
                style={{ width: inView ? `${b.pct}%` : "0%", "--bar-delay": `${i * 100}ms` } as React.CSSProperties}
              />
            </div>
            <span className="w-9 text-[11px] font-bold text-chalk/60">{b.pct}%</span>
          </div>
        ))}
      </div>

      <p className="mt-6 border-t border-dashed border-chalk/25 pt-5 text-sm leading-relaxed text-chalk/75">
        {REVIEW_THEMES}
      </p>
      <a
        href={BIZ.reviewsUrl}
        target="_blank"
        rel="noreferrer"
        className="group mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-gold"
      >
        Read them all on Google
        <IArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative bg-sky-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.3em] text-blue">
                <span className="h-[3px] w-10 bg-blue" /> Word Around Town
              </p>
              <h2 className="font-display text-4xl leading-[0.95] text-navy md:text-5xl">
                FOLKS DRIVE FROM
                <br />
                <span className="text-red">CHICAGO</span> FOR THIS
              </h2>
            </div>
            <p className="max-w-sm font-hand text-2xl leading-snug text-blue">
              …and from Green Bay, and from the truck stop up the road. Here's the gist, in their words (lightly
              retold).
            </p>
          </div>
        </Reveal>

        {/* postcards */}
        <div className="mb-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={80}>
            <figure className="group rotate-[0.75deg] border-4 border-navy bg-card p-2.5 shadow-[10px_12px_0_var(--color-navy)] transition-transform duration-500 hover:rotate-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES.interior}
                  alt="The updated, cozy dining room at Luxembourg Cafe"
                  className="h-full w-full animate-kenburns object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-1.5 pb-1 pt-3">
                <span className="font-hand text-xl text-ink">the dining room — recently spruced up, reviewers noticed</span>
                <span className="whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.2em] text-red">"remodeled" ×4</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={180}>
            <figure className="group -rotate-1 border-4 border-navy bg-card p-2.5 shadow-[10px_12px_0_var(--color-red)] transition-transform duration-500 hover:rotate-0 lg:mt-10">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={IMAGES.fishfry}
                  alt="Friday cod fish fry with fries and coleslaw"
                  className="h-full w-full animate-kenburns object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-1.5 pb-1 pt-3">
                <span className="font-hand text-xl text-ink">Friday's fish fry — the reason supper service exists</span>
                <span className="whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue">"fish fry" ×11</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* summary + cards */}
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={100}>
            <SummaryCard />
            <div className="mt-8 border-l-4 border-gold bg-card p-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-red">Server shout-outs</p>
              <p className="mt-2 font-hand text-2xl leading-snug text-ink">
                Brynn, Sierra & Jennifer — named by grateful guests, more than once.
              </p>
            </div>
          </Reveal>

          <div className="grid content-start gap-6 sm:grid-cols-2 lg:col-span-7">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 110}>
                <article
                  className={`relative h-full border-2 border-navy bg-card p-6 shadow-[6px_7px_0_rgba(23,38,59,0.85)] transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[8px_10px_0_var(--color-red)] ${r.rot}`}
                >
                  <span className="tape -top-3.5 left-6 -rotate-3" />
                  <div className="flex items-center justify-between gap-3">
                    <StarRow value={r.stars} className="h-4 w-4" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink-soft">Google</span>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink">"{r.text}"</p>
                  <footer className="mt-5 border-t border-dashed border-line pt-4">
                    <p className="font-extrabold uppercase tracking-[0.1em] text-navy">{r.name}</p>
                    <p className="text-[12px] font-semibold text-ink-soft">{r.meta}</p>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* pull quote band */}
      <div className="bg-red text-paper">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:gap-10">
          <IQuote className="h-14 w-14 shrink-0 text-gold" />
          <div>
            <p className="font-hand text-3xl leading-snug md:text-[2.6rem] md:leading-[1.15]">{PULL_QUOTE.text}</p>
            <p className="mt-3 text-[12px] font-extrabold uppercase tracking-[0.24em] text-paper/80">{PULL_QUOTE.source}</p>
          </div>
        </div>
      </div>
      <Awning c1="var(--color-navy)" c2="var(--color-red)" />
    </section>
  );
}
