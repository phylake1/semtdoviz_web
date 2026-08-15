import { getRates } from "@/lib/rates";
import Converter from "@/components/rates/Converter";

export default async function ConverterPanel() {
  const { rates } = await getRates();
  return <Converter rates={rates} />;
}
