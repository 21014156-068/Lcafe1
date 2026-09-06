import { useEffect, useRef, useState, type ReactNode } from "react";
import { HOURS, fmtTime } from "./data";

/* ---------- scroll reveal ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}

/* ---------- live open/closed status ---------- */
export function useOpenNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const dayIdx = now.getDay(); // 0 = Sunday, matching HOURS order
  const mins = now.getHours() * 60 + now.getMinutes();
  const today = HOURS[dayIdx];
  const open = mins >= today.open && mins < today.close;

  let label: string;
  if (open) {
    label = `Open now · kitchen till ${fmtTime(today.close)}`;
  } else if (mins < today.open) {
    label = `Closed · opens ${fmtTime(today.open)} today`;
  } else {
    const next = HOURS[(dayIdx + 1) % 7];
    label = `Closed · opens ${fmtTime(next.open)} ${next.day}`;
  }

  return { open, label, todayIdx: dayIdx };
}

/* ---------- navbar shadow after scroll ---------- */
export function useScrolled(px = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > px);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [px]);
  return scrolled;
}

/* ---------- bar fills once visible ---------- */
export function useInViewFlag<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}
