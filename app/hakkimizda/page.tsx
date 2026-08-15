import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Semt Döviz, T.C. Hazine ve Maliye Bakanlığı onaylı B Grubu Yetkili Müessese olarak Ümraniye, İstanbul'da döviz ve altın alım-satım hizmeti verir.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: `Hakkımızda | ${siteConfig.name}`,
    description:
      "Semt Döviz, T.C. Hazine ve Maliye Bakanlığı onaylı B Grubu Yetkili Müessese olarak Ümraniye, İstanbul'da döviz ve altın alım-satım hizmeti verir.",
    url: `${siteConfig.url}/hakkimizda`,
  },
};

const credentials = [
  { label: "Yetki Türü", value: siteConfig.legal.licenseType },
  { label: "Yetkilendiren Kurum", value: siteConfig.legal.licenseAuthority },
  { label: "Faaliyet İzni Tarihi", value: siteConfig.legal.licenseDate },
  { label: "Vergi Dairesi", value: siteConfig.legal.taxOffice },
  { label: "Vergi No", value: siteConfig.legal.taxNo },
  { label: "Ticaret Sicil No", value: siteConfig.legal.tradeRegistryNo },
  { label: "Mersis No", value: siteConfig.legal.mersisNo },
  { label: "Merkez Adres", value: `${siteConfig.address.district}, ${siteConfig.address.city}` },
];

const values = [
  { title: "Şeffaflık", text: "Kur ve komisyon bilgimiz her zaman açık ve nettir." },
  { title: "Güven", text: "Yasal mevzuata tam uyumla, kayıtlı ve denetlenebilir işlem." },
  { title: "Yakınlık", text: "Mahalle esnafı sıcaklığıyla, kişiye özel yönlendirme." },
];

export default function HakkimizdaPage() {
  return (
    <div>
      <section className="border-b border-line bg-white">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Hakkımızda
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-navy sm:text-4xl">
              Komşuluk güveniyle çalışan, yasal olarak yetkilendirilmiş bir müessese
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-navy/60">
              Semt Döviz, {siteConfig.legal.licenseAuthority} tarafından{" "}
              {siteConfig.legal.licenseType} statüsüyle faaliyet iznine
              sahiptir. {siteConfig.address.district}, {siteConfig.address.city}{"'"}
              daki şubemizde şeffaf kur politikamız ve deneyimli ekibimizle
              döviz ve altın alım-satım hizmeti veriyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            Yasal Statü ve Belgelerimiz
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-navy/60">
            Resmi ruhsat ve sicil bilgilerimiz; şeffaflık ilkemiz gereği
            herkese açıktır.
          </p>
        </Reveal>
        <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.04} className="border-l-2 border-gold/40 pl-4">
              <dt className="text-xs uppercase tracking-wide text-navy/50">{c.label}</dt>
              <dd className="mt-1 font-mono text-sm font-semibold text-navy break-words">
                {c.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Değerlerimiz</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-xl border border-line p-7">
                <h3 className="text-base font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
