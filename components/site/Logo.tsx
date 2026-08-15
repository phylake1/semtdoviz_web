import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center shrink-0"
      aria-label="Semt Döviz anasayfa"
    >
      <span
        className={`font-display text-lg font-semibold leading-none ${dark ? "text-white" : "text-navy"}`}
      >
        Semt <span className="text-gold">Döviz</span>
      </span>
    </Link>
  );
}
