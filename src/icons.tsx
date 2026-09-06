import type { ComponentType } from "react";

type P = { className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IStar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 2.8l2.85 5.8 6.4.93-4.63 4.5 1.1 6.37L12 17.4l-5.72 3l1.1-6.37-4.63-4.5 6.4-.93L12 2.8z"
      fill="currentColor"
    />
  </svg>
);

export function StarRow({ value, className = "w-4 h-4" }: { value: number; className?: string }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <span className="relative inline-flex" aria-label={`${value} out of 5 stars`}>
      <span className="flex gap-[3px] text-line">
        {[...Array(5)].map((_, i) => (
          <IStar key={i} className={className} />
        ))}
      </span>
      <span
        className="absolute inset-0 flex gap-[3px] overflow-hidden text-gold"
        style={{ width: `${pct}%` }}
      >
        {[...Array(5)].map((_, i) => (
          <IStar key={i} className={`${className} shrink-0`} />
        ))}
      </span>
    </span>
  );
}

export const IPhone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M5.5 3.5h3l1.7 4.2-2.1 1.6a12.6 12.6 0 0 0 6.6 6.6l1.6-2.1 4.2 1.7v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2z" />
  </svg>
);

export const IPin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M12 21s7-6.1 7-11.2A7 7 0 0 0 5 9.8C5 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.8" r="2.6" />
  </svg>
);

export const IArrow = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M7 17L17 7M9.5 7H17v7.5" />
  </svg>
);

export const IClock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const ICoffee = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M4.5 9.5h12V15a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V9.5z" />
    <path d="M16.5 11h1.8a2.7 2.7 0 0 1 0 5.4h-2" />
    <path d="M8 3.5c-.8 1.1-.8 2 0 3M12.5 3.5c-.8 1.1-.8 2 0 3" />
  </svg>
);

export const ISunrise = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M4 18h16M7 15a5 5 0 0 1 10 0" />
    <path d="M12 5v2.5M4.5 10.5l1.8 1.3M19.5 10.5l-1.8 1.3M2.5 15H5M19 15h2.5" />
  </svg>
);

export const ILeaf = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M5 19C5 9 11 4.5 19.5 4.5c0 9-4.5 14.5-14.5 14.5z" />
    <path d="M5 19c2.5-4.5 6-8 10-10.5" />
  </svg>
);

export const IKids = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <circle cx="12" cy="8" r="5" />
    <path d="M12 13v3.5M12 21c-.8-1.5-.8-3 0-4.5M9.8 6.2c.5-.7 1.3-1 2.2-1" />
  </svg>
);

export const IAccess = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <circle cx="12" cy="4.5" r="1.8" />
    <path d="M12 7v5.5h4.5l2 5" />
    <path d="M12 9.5h4" />
    <path d="M14.5 14.5a5.5 5.5 0 1 1-6.7-4.6" />
  </svg>
);

export const ICar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M4 16v-3.5L5.8 7h12.4L20 12.5V16" />
    <path d="M4 12.5h16M6.5 16v1.8M17.5 16v1.8" />
    <circle cx="8" cy="14.4" r="0.4" fill="currentColor" />
    <circle cx="16" cy="14.4" r="0.4" fill="currentColor" />
  </svg>
);

export const ICalendar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
    <path d="M4 10h16M8.5 3.5v3.5M15.5 3.5v3.5M9 14.5l2 2 4-4" />
  </svg>
);

export const IBag = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M5.5 8.5h13l-1 11.5h-11l-1-11.5z" />
    <path d="M9 10.5V7a3 3 0 0 1 6 0v3.5" />
  </svg>
);

export const ICard = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="M3.5 10h17M7 14.5h4" />
  </svg>
);

export const IBurger = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IX = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ICheck = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const IQuote = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M9.5 6.5c-3.2 1.2-5 3.6-5 7v4h5.6v-5.6H7.2c.2-1.9 1.2-3.2 3-4l-.7-1.4zm9 0c-3.2 1.2-5 3.6-5 7v4h5.6v-5.6h-2.9c.2-1.9 1.2-3.2 3-4l-.7-1.4z"
      fill="currentColor"
    />
  </svg>
);

export const IFish = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M3.5 12c3.5-4.5 8-6 12-4.5 2 .8 3.6 2.4 5 4.5-1.4 2.1-3 3.7-5 4.5-4 1.5-8.5 0-12-4.5z" />
    <path d="M20.5 12L23 9.5v5L20.5 12zM8 11h.01" />
  </svg>
);

export const IEgg = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M12 3.5c3.5 0 7.5 5.5 7.5 10.2A7.4 7.4 0 0 1 12 21a7.4 7.4 0 0 1-7.5-7.3C4.5 9 8.5 3.5 12 3.5z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export const AMENITY_ICONS: Record<string, ComponentType<P>> = {
  coffee: ICoffee,
  sunrise: ISunrise,
  leaf: ILeaf,
  kids: IKids,
  access: IAccess,
  car: ICar,
  calendar: ICalendar,
  bag: IBag,
  card: ICard,
};
