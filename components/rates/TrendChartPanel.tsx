import { getRateHistory, type CurrencyCode } from "@/lib/rates";
import TrendChart from "@/components/rates/TrendChart";

export default async function TrendChartPanel({ code }: { code: CurrencyCode }) {
  const points = await getRateHistory(code, 14);
  return <TrendChart code={code} points={points} />;
}
