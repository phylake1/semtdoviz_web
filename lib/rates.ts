export type CurrencyCode = "USD" | "EUR" | "GBP" | "CHF";

export type CurrencyRate = {
  code: CurrencyCode;
  name: string;
  flag: string;
  /** TRY per 1 unit of the currency, or null if unavailable. */
  mid: number | null;
  /** Indicative buy (alış) rate — mid rate minus a small illustrative spread. */
  buy: number | null;
  /** Indicative sell (satış) rate — mid rate plus a small illustrative spread. */
  sell: number | null;
};

export type RatesResult = {
  rates: CurrencyRate[];
  asOf: string | null;
  live: boolean;
};

const CURRENCIES: { code: CurrencyCode; name: string; flag: string }[] = [
  { code: "USD", name: "Amerikan Doları", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "İngiliz Sterlini", flag: "🇬🇧" },
  { code: "CHF", name: "İsviçre Frangı", flag: "🇨🇭" },
];

// Illustrative spread applied around the reference mid-rate to show a
// buy/sell pair. Real branch rates are set at the counter.
const SPREAD_RATIO = 0.006;

async function fetchMidRate(code: CurrencyCode): Promise<{ mid: number; date: string } | null> {
  try {
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=${code}&symbols=TRY`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const mid = data?.rates?.TRY;
    if (typeof mid !== "number" || !Number.isFinite(mid)) return null;
    return { mid, date: data.date as string };
  } catch {
    return null;
  }
}

export async function getRates(): Promise<RatesResult> {
  const results = await Promise.all(CURRENCIES.map((c) => fetchMidRate(c.code)));

  let asOf: string | null = null;
  let anyLive = false;

  const rates: CurrencyRate[] = CURRENCIES.map((meta, i) => {
    const r = results[i];
    if (!r) {
      return { ...meta, mid: null, buy: null, sell: null };
    }
    anyLive = true;
    asOf = r.date;
    return {
      ...meta,
      mid: r.mid,
      buy: r.mid * (1 - SPREAD_RATIO),
      sell: r.mid * (1 + SPREAD_RATIO),
    };
  });

  return { rates, asOf, live: anyLive };
}

export function formatTRY(value: number | null): string {
  if (value === null) return "—";
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  }).format(value);
}

export type RatePoint = { date: string; value: number };

function toISODate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Daily TRY-per-unit history for a currency over the last N days. */
export async function getRateHistory(
  code: CurrencyCode,
  days = 14
): Promise<RatePoint[]> {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - days);

  try {
    const res = await fetch(
      `https://api.frankfurter.dev/v1/${toISODate(start)}..${toISODate(end)}?base=${code}&symbols=TRY`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const rates = data?.rates as Record<string, { TRY?: number }> | undefined;
    if (!rates) return [];

    return Object.entries(rates)
      .filter(([, v]) => typeof v.TRY === "number")
      .map(([date, v]) => ({ date, value: v.TRY as number }))
      .sort((a, b) => a.date.localeCompare(b.date));
  } catch {
    return [];
  }
}

/** Convert an amount between TRY and a supported foreign currency using mid rates. */
export function convert(
  amount: number,
  from: CurrencyCode | "TRY",
  to: CurrencyCode | "TRY",
  rates: CurrencyRate[]
): number | null {
  const midOf = (code: CurrencyCode | "TRY"): number | null => {
    if (code === "TRY") return 1;
    return rates.find((r) => r.code === code)?.mid ?? null;
  };

  const fromMid = midOf(from);
  const toMid = midOf(to);
  if (fromMid === null || toMid === null) return null;

  const amountInTRY = amount * fromMid;
  return amountInTRY / toMid;
}
