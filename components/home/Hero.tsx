import { Suspense } from "react";
import Link from "next/link";
import RatesTable from "@/components/rates/RatesTable";

function RatesTableFallback() {
  return (
    <div className="h-[340px] animate-pulse rounded-2xl border border-line bg-white" />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid gap-14 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-light/30 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-light">
            1998&apos;den beri hizmetinizde
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-balance sm:text-5xl">
            Kurunuz şeffaf,
            <br />
            işleminiz <span className="italic text-gold-light">hızlı.</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
            Semt Döviz, mahallenizdeki güvenilir döviz bürosudur. Rekabetçi
            kurlar, anında işlem ve şeffaf hizmet anlayışıyla dövizinizi
            güvenle değerlendirin.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/iletisim"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              Şubemizi Ziyaret Edin
            </Link>
            <Link
              href="/kurlar"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Tüm Kurları Gör
            </Link>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/50">Deneyim</dt>
              <dd className="mt-1 font-display text-2xl text-gold-light">25+ yıl</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/50">Şube</dt>
              <dd className="mt-1 font-display text-2xl text-gold-light">6</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/50">Müşteri</dt>
              <dd className="mt-1 font-display text-2xl text-gold-light">40K+</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <Suspense fallback={<RatesTableFallback />}>
            <RatesTable />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
