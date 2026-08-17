import type { RatePoint } from "@/lib/rates";

function formatShortDate(iso: string): string {
  const [, m, d] = iso.split("-");
  return `${d}.${m}`;
}

export default function TrendChart({
  code,
  points,
}: {
  code: string;
  points: RatePoint[];
}) {
  if (points.length < 2) {
    return (
      <div className="flex h-full min-h-[240px] items-center justify-center rounded-xl border border-line bg-white text-sm text-navy/40">
        Grafik verisi şu anda alınamadı.
      </div>
    );
  }

  const values = points.map((p) => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const width = 600;
  const height = 140;
  const padX = 8;
  const padY = 12;

  const coords = points.map((p, i) => {
    const x = padX + (i / (points.length - 1)) * (width - padX * 2);
    const y = padY + (1 - (p.value - min) / range) * (height - padY * 2);
    return { x, y };
  });

  const linePath = coords
    .map((c, i) => `${i === 0 ? "M" : "L"} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`)
    .join(" ");

  const areaPath = `${linePath} L ${coords[coords.length - 1].x.toFixed(1)} ${height - padY} L ${coords[0].x.toFixed(1)} ${height - padY} Z`;

  const first = values[0];
  const last = values[values.length - 1];
  const changePct = ((last - first) / first) * 100;
  const isUp = changePct >= 0;

  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-navy">{code}/TRY — Son {points.length} gün</p>
          <p className="mt-1 font-mono text-2xl font-semibold tabular-nums text-navy">
            {last.toLocaleString("tr-TR", { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
          </p>
        </div>
        <span
          className={`rounded-md px-2 py-1 font-mono text-xs font-semibold tabular-nums ${
            isUp ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
        >
          {isUp ? "▲" : "▼"} %{Math.abs(changePct).toFixed(2)}
        </span>
      </div>

      <div className="mt-4 min-h-0 flex-1">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-full w-full text-gold"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d={areaPath} fill="currentColor" opacity="0.08" />
          <path d={linePath} fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="mt-1 flex justify-between font-mono text-[11px] text-navy/40">
        <span>{formatShortDate(points[0].date)}</span>
        <span>{formatShortDate(points[points.length - 1].date)}</span>
      </div>
    </div>
  );
}
