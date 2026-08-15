import { getRates, formatTRY } from "@/lib/rates";

export default async function RatesTable({ compact = false }: { compact?: boolean }) {
  const { rates, asOf, live } = await getRates();

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_-30px_rgba(14,32,56,0.35)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-navy px-5 py-3.5 text-white">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span
            className={`h-2 w-2 rounded-full ${live ? "bg-emerald-400" : "bg-white/40"}`}
            aria-hidden
          />
          {live ? "Canlı Kur" : "Kur verisi güncellenemedi"}
        </div>
        <span className="text-xs text-white/60">
          {asOf ? `Kaynak tarihi: ${asOf}` : "Şubeden güncel kuru öğrenin"}
        </span>
      </div>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="text-xs uppercase tracking-wide text-navy/50">
            <th className="px-5 py-3 font-medium">Birim</th>
            <th className="px-5 py-3 font-medium text-right">Alış</th>
            <th className="px-5 py-3 font-medium text-right">Satış</th>
            {!compact && <th className="px-5 py-3 font-medium text-right">Referans</th>}
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.code} className="border-t border-line">
              <td className="px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg" aria-hidden>
                    {rate.flag}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">{rate.code}</p>
                    <p className="text-xs text-navy/50">{rate.name}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-4 text-right font-display text-base text-navy">
                {formatTRY(rate.buy)}
              </td>
              <td className="px-5 py-4 text-right font-display text-base text-navy">
                {formatTRY(rate.sell)}
              </td>
              {!compact && (
                <td className="px-5 py-4 text-right text-sm text-navy/50">
                  {formatTRY(rate.mid)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="border-t border-line bg-[#faf8f4] px-5 py-3 text-xs leading-relaxed text-navy/50">
        Gösterilen alış/satış kurları, uluslararası referans kur üzerinden hesaplanan
        gösterge değerlerdir; yatırım tavsiyesi değildir. Şubede geçerli güncel kur için
        lütfen bizi arayın.
      </p>
    </div>
  );
}
