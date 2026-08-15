import type { Metadata } from "next";
import { Suspense } from "react";
import RatesTable from "@/components/rates/RatesTable";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Güncel Döviz Kurları",
  description:
    "Dolar, Euro, Sterlin ve İsviçre Frangı için güncel alış-satış kurlarını canlı takip edin.",
  alternates: { canonical: "/kurlar" },
  openGraph: {
    title: `Güncel Döviz Kurları | ${siteConfig.name}`,
    description:
      "Dolar, Euro, Sterlin ve İsviçre Frangı için güncel alış-satış kurlarını canlı takip edin.",
    url: `${siteConfig.url}/kurlar`,
  },
};

function TableFallback() {
  return <div className="h-[340px] animate-pulse rounded-xl border border-line bg-white" />;
}

export default function KurlarPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Kurlar</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
          Güncel Döviz Kurları
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-navy/60">
          Aşağıdaki tablo, uluslararası referans kurlar üzerinden hesaplanan
          gösterge alış-satış değerlerini 5 dakikada bir günceller. Şubede
          geçerli kesin kur için lütfen bizi arayın veya şubemize uğrayın.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 max-w-2xl">
        <Suspense fallback={<TableFallback />}>
          <RatesTable />
        </Suspense>
      </Reveal>

      <Reveal delay={0.15} className="mt-10 max-w-2xl rounded-xl border border-line bg-white p-6">
        <h2 className="text-base font-semibold text-navy">Kur nasıl belirlenir?</h2>
        <p className="mt-2 text-sm leading-relaxed text-navy/60">
          Şubelerimizdeki alış-satış kurları; uluslararası piyasa verileri,
          arz-talep dengesi ve günlük işlem hacmine göre belirlenir. Büyük
          hacimli işlemlerde özel kur talebinde bulunabilirsiniz.
        </p>
      </Reveal>
    </div>
  );
}
