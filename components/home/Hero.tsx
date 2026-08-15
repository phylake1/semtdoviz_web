import { Suspense } from "react";
import Link from "next/link";
import ConverterPanel from "@/components/rates/ConverterPanel";
import Reveal from "@/components/motion/Reveal";

function ConverterFallback() {
  return (
    <div className="h-[360px] animate-pulse rounded-xl border border-line bg-navy/5" />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="container-page relative grid gap-14 py-20 md:grid-cols-2 md:items-center md:py-28">
        <Reveal>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-navy text-balance sm:text-5xl">
            Kurunuzu görün,
            <br />
            karar<span className="text-gold">ınızı</span> verin.
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-navy/60">
            Semt Döviz&apos;te alış-satış kurları anında görünür. Gizli
            komisyon yok, bekleme yok — sadece net rakamlar.
          </p>

          <div className="mt-9 flex flex-row flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/iletisim"
              className="whitespace-nowrap rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep sm:px-7"
            >
              Şubeyi Bul
            </Link>
            <Link
              href="/kurlar"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-navy hover:text-gold"
            >
              Kurları İncele
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Suspense fallback={<ConverterFallback />}>
            <ConverterPanel />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
