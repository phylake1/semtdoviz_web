"use client";

import { useMemo, useState } from "react";
import { convert, type CurrencyCode, type CurrencyRate } from "@/lib/rates";

type Code = CurrencyCode | "TRY";

const ALL_CODES: { code: Code; name: string }[] = [
  { code: "TRY", name: "Türk Lirası" },
  { code: "USD", name: "Amerikan Doları" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "İngiliz Sterlini" },
  { code: "CHF", name: "İsviçre Frangı" },
  { code: "GRA", name: "Gram Altın (24 Ayar)" },
];

function formatResult(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(value);
}

export default function Converter({ rates }: { rates: CurrencyRate[] }) {
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState<Code>("USD");
  const [to, setTo] = useState<Code>("TRY");

  const result = useMemo(() => {
    const n = parseFloat(amount.replace(",", "."));
    if (!Number.isFinite(n)) return null;
    return convert(n, from, to, rates);
  }, [amount, from, to, rates]);

  const hasLiveData = rates.some((r) => r.mid !== null);

  function swap() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy text-white shadow-[0_30px_60px_-30px_rgba(11,13,16,0.5)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-3.5">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${hasLiveData ? "bg-emerald-400" : "bg-white/30"}`}
          aria-hidden
        />
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/80 sm:text-xs">
          Kur Çevirici
        </span>
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3.5">
          <label htmlFor="amount" className="block text-[11px] uppercase tracking-wide text-white/40">
            Miktar
          </label>
          <div className="mt-1.5 flex items-center gap-2">
            <input
              id="amount"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full min-w-0 bg-transparent font-mono text-xl tabular-nums text-white outline-none sm:text-2xl"
              aria-label="Miktar"
            />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value as Code)}
              className="shrink-0 rounded-md border border-white/15 bg-navy-deep px-2.5 py-1.5 text-sm font-semibold text-white outline-none"
              aria-label="Kaynak birim"
            >
              {ALL_CODES.map((c) => (
                <option key={c.code} value={c.code} className="bg-navy-deep">
                  {c.code}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={swap}
            aria-label="Birimleri değiştir"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-gold-light transition-colors hover:bg-white/5"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 6l3-3 3 3M6 3v10M13 10l-3 3-3-3M10 13V3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3.5">
          <label htmlFor="result" className="block text-[11px] uppercase tracking-wide text-white/40">
            Sonuç
          </label>
          <div className="mt-1.5 flex items-center gap-2">
            <p
              id="result"
              className="w-full min-w-0 truncate font-mono text-xl tabular-nums text-gold-light sm:text-2xl"
            >
              {result !== null ? formatResult(result) : "—"}
            </p>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value as Code)}
              className="shrink-0 rounded-md border border-white/15 bg-navy-deep px-2.5 py-1.5 text-sm font-semibold text-white outline-none"
              aria-label="Hedef birim"
            >
              {ALL_CODES.map((c) => (
                <option key={c.code} value={c.code} className="bg-navy-deep">
                  {c.code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="border-t border-white/10 px-4 py-3 text-xs leading-relaxed text-white/40 sm:px-5">
        Gösterge niteliğinde referans kurdur. Kesin kur için şubeyi arayın.
      </p>
    </div>
  );
}
