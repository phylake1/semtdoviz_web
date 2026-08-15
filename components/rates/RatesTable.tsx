import { getRates, formatTRY } from "@/lib/rates";

export default async function RatesTable() {
  const { rates, asOf, live } = await getRates();

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy text-white shadow-[0_30px_60px_-30px_rgba(11,13,16,0.5)]">
      <div className="flex items-center justify-between gap-2 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-3.5">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-white/80 sm:text-xs">
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${live ? "bg-emerald-400" : "bg-white/30"}`}
            aria-hidden
          />
          {live ? "Canlı Kur" : "Kur Güncellenemedi"}
        </div>
        {asOf && (
          <span className="hidden shrink-0 font-mono text-[11px] text-white/40 sm:inline">
            {asOf}
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[380px] border-collapse text-left">
          <thead>
            <tr className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
              <th className="px-4 py-2.5 font-medium sm:px-5">Döviz</th>
              <th className="px-4 py-2.5 font-medium text-right sm:px-5">Alış</th>
              <th className="px-4 py-2.5 font-medium text-right sm:px-5">Satış</th>
              <th className="hidden px-5 py-2.5 font-medium text-right sm:table-cell">Ref.</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate) => (
              <tr key={rate.code} className="border-t border-white/10">
                <td className="px-4 py-3.5 sm:px-5 sm:py-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gold-light/30 font-mono text-[10px] font-semibold text-gold-light sm:h-8 sm:w-8">
                      {rate.code.slice(0, 2)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{rate.code}</p>
                      <p className="hidden text-xs text-white/40 sm:block">{rate.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-right font-mono text-sm tabular-nums text-gold-light sm:px-5 sm:py-4 sm:text-[15px]">
                  {formatTRY(rate.buy)}
                </td>
                <td className="px-4 py-3.5 text-right font-mono text-sm tabular-nums text-gold-light sm:px-5 sm:py-4 sm:text-[15px]">
                  {formatTRY(rate.sell)}
                </td>
                <td className="hidden px-5 py-4 text-right font-mono text-xs tabular-nums text-white/40 sm:table-cell">
                  {formatTRY(rate.mid)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="border-t border-white/10 px-4 py-3 text-xs leading-relaxed text-white/40 sm:px-5">
        Kurlar gösterge niteliğindedir. Kesin kur için şubeyi arayın.
      </p>
    </div>
  );
}
