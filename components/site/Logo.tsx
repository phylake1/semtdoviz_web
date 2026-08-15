import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Semt Döviz anasayfa"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border ${
          dark ? "border-gold-light/60 text-gold-light" : "border-gold text-navy"
        } font-display text-sm font-semibold tracking-wide`}
      >
        SD
      </span>
      <span
        className={`font-display text-lg font-semibold leading-none ${dark ? "text-white" : "text-navy"}`}
      >
        Semt <span className="text-gold">Döviz</span>
      </span>
    </Link>
  );
}
