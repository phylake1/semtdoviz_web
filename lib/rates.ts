export type CurrencyCode = "USD" | "EUR" | "GBP" | "CHF" | "GRA";

export type CurrencyRate = {
  code: CurrencyCode;
  name: string;
  flag: string;
  /** TRY per 1 unit of the currency, or null if unavailable. */
  mid: number | null;
  /** Alış (buy) rate — mid rate minus the margin. */
  buy: number | null;
  /** Satış (sell) rate — mid rate plus the margin. */
  sell: number | null;
};

export type RatesResult = {
  rates: CurrencyRate[];
  asOf: string | null;
  live: boolean;
};

// Altın için kendi kar marjımızı eklemiyoruz (margin: false) — Truncgil'in
// kendi alış/satış farkı zaten piyasa marjını yansıtıyor. Döviz kalemlerine
// ise MARGIN_TRY üzerinden kendi marjımızı uyguluyoruz.
const CURRENCIES: { code: CurrencyCode; name: string; flag: string; margin: boolean }[] = [
  { code: "USD", name: "Amerikan Doları", flag: "🇺🇸", margin: true },
  { code: "EUR", name: "Euro", flag: "🇪🇺", margin: true },
  { code: "GBP", name: "İngiliz Sterlini", flag: "🇬🇧", margin: true },
  { code: "CHF", name: "İsviçre Frangı", flag: "🇨🇭", margin: true },
  { code: "GRA", name: "Gram Altın (24 Ayar)", flag: "🟡", margin: false },
];

// Kar marjı: müşteriden 1 birim döviz başına yaklaşık MARGIN_TRY kadar
// kazanç hedeflenir, bu yüzden pay = MARGIN_TRY / mid kadar alıştan düşülür,
// satışa eklenir (örn. USD mid 45.30 iken pay ≈ 0.22 -> alış 45.08, satış 45.52).
const MARGIN_TRY = 10;

const TRUNCGIL_URL = "https://finans.truncgil.com/v4/today.json";

type TruncgilEntry = { Buying?: unknown; Selling?: unknown };
type TruncgilResponse = Record<string, unknown> & { Update_Date?: unknown };

async function fetchTruncgil(): Promise<{ data: TruncgilResponse; date: string } | null> {
  try {
    const res = await fetch(TRUNCGIL_URL, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = (await res.json()) as TruncgilResponse;
    const date = typeof data.Update_Date === "string" ? data.Update_Date : new Date().toISOString();
    return { data, date };
  } catch {
    return null;
  }
}

export async function getRates(): Promise<RatesResult> {
  const result = await fetchTruncgil();

  let asOf: string | null = null;
  let anyLive = false;

  const rates: CurrencyRate[] = CURRENCIES.map((meta) => {
    const entry = result?.data[meta.code] as TruncgilEntry | undefined;
    const buying = entry?.Buying;
    const selling = entry?.Selling;
    if (typeof buying !== "number" || typeof selling !== "number") {
      return { code: meta.code, name: meta.name, flag: meta.flag, mid: null, buy: null, sell: null };
    }

    anyLive = true;
    asOf = result!.date;
    const mid = (buying + selling) / 2;

    if (!meta.margin) {
      return { code: meta.code, name: meta.name, flag: meta.flag, mid, buy: buying, sell: selling };
    }

    const margin = MARGIN_TRY / mid;
    return {
      code: meta.code,
      name: meta.name,
      flag: meta.flag,
      mid,
      buy: mid - margin,
      sell: mid + margin,
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

/**
 * Convert an amount between TRY and a supported foreign currency using the
 * alış/satış (buy/sell) margin rates, not the raw mid rate.
 *
 * - TRY -> döviz: müşteri TL verip döviz alıyor, yani biz satıyoruz -> satış kuru.
 * - Döviz -> TRY: müşteri döviz verip TL alıyor, yani biz alıyoruz -> alış kuru.
 * - Döviz -> döviz: önce alış kuruyla TL'ye, sonra satış kuruyla hedef dövize çevrilir.
 */
export function convert(
  amount: number,
  from: CurrencyCode | "TRY",
  to: CurrencyCode | "TRY",
  rates: CurrencyRate[]
): number | null {
  if (from === to) return amount;

  const rateOf = (code: CurrencyCode | "TRY"): CurrencyRate | undefined =>
    code === "TRY" ? undefined : rates.find((r) => r.code === code);

  if (from === "TRY") {
    const r = rateOf(to);
    if (!r || r.sell === null) return null;
    return amount / r.sell;
  }

  if (to === "TRY") {
    const r = rateOf(from);
    if (!r || r.buy === null) return null;
    return amount * r.buy;
  }

  const rFrom = rateOf(from);
  const rTo = rateOf(to);
  if (!rFrom || rFrom.buy === null || !rTo || rTo.sell === null) return null;

  const amountInTRY = amount * rFrom.buy;
  return amountInTRY / rTo.sell;
}
