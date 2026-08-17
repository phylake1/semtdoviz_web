import { Suspense } from "react";
import RatesTable from "@/components/rates/RatesTable";
import TrendChartPanel from "@/components/rates/TrendChartPanel";
import Reveal from "@/components/motion/Reveal";

function PanelFallback() {
  return <div className="h-[360px] animate-pulse rounded-xl border border-line bg-white" />;
}

function ChartFallback() {
  return <div className="h-[360px] animate-pulse rounded-xl border border-line bg-white" />;
}

export default function RatesOverview() {
  return (
    <section id="kurlar" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Kurlar</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
            Güncel Döviz Kurları
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/60">
            Uluslararası referans kurlar üzerinden hesaplanan gösterge
            değerleri 5 dakikada bir güncellenir. Şubede geçerli kesin kur
            için lütfen bizi arayın.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <Reveal className="h-full">
            <Suspense fallback={<PanelFallback />}>
              <RatesTable />
            </Suspense>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <Suspense fallback={<ChartFallback />}>
              <TrendChartPanel code="USD" />
            </Suspense>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="mt-6 rounded-xl border border-line bg-white p-6">
          <h3 className="text-base font-semibold text-navy">Kur nasıl belirlenir?</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/60">
            Şubelerimizdeki alış-satış kurları; uluslararası piyasa verileri,
            arz-talep dengesi ve günlük işlem hacmine göre belirlenir. Büyük
            hacimli işlemlerde özel kur talebinde bulunabilirsiniz.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
