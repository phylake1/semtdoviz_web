import { getRates, formatTRY } from "@/lib/rates";

export default async function RatesTable({ compact = false }: { compact?: boolean }) {
  const { rates, asOf, live } = await getRates();

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy text-white shadow-[0_30px_60px_-30px_rgba(11,13,16,0.5)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-white/80">
          <span
            className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-white/30"}`}
            aria-hidden
          />
          {live ? "Canlı Kur" : "Kur Güncellenemedi"}
        </div>
        <span className="font-mono text-[11px] text-white/40">
          {asOf ? asOf : "şubeden öğrenin"}
        </span>
      </div>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
            <th className="px-5 py-2.5 font-medium">Döviz</th>
            <th className="px-5 py-2.5 font-medium text-right">Alış</th>
            <th className="px-5 py-2.5 font-medium text-right">Satış</th>
            {!compact && <th className="px-5 py-2.5 font-medium text-right">Ref.</th>}
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.code} className="border-t border-white/10">
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-gold-light/30 font-mono text-[10px] font-semibold text-gold-light">
                    {rate.code.slice(0, 2)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{rate.code}</p>
                    <p className="text-xs text-white/40">{rate.name}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-4 text-right font-mono text-[15px] tabular-nums text-gold-light">
                {formatTRY(rate.buy)}
              </td>
              <td className="px-5 py-4 text-right font-mono text-[15px] tabular-nums text-gold-light">
                {formatTRY(rate.sell)}
              </td>
              {!compact && (
                <td className="px-5 py-4 text-right font-mono text-xs tabular-nums text-white/40">
                  {formatTRY(rate.mid)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="border-t border-white/10 px-5 py-3 text-xs leading-relaxed text-white/40">
        Gösterilen alış/satış kurları, uluslararası referans kur üzerinden
        hesaplanan gösterge değerlerdir; yatırım tavsiyesi değildir. Şubede
        geçerli güncel kur için lütfen bizi arayın.
      </p>
    </div>
  );
}
