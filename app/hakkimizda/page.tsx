import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "1998'den bu yana İstanbul'da hizmet veren Semt Döviz'in hikayesi, değerleri ve yetkinlikleri.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: `Hakkımızda | ${siteConfig.name}`,
    description:
      "1998'den bu yana İstanbul'da hizmet veren Semt Döviz'in hikayesi, değerleri ve yetkinlikleri.",
    url: `${siteConfig.url}/hakkimizda`,
  },
};

const milestones = [
  { year: "1998", title: "Kuruluş", text: "Kadıköy'de tek şubemizle yola çıktık." },
  { year: "2006", title: "Yetkili Müessese", text: "Hazine ve Maliye Bakanlığı yetki belgesini aldık." },
  { year: "2015", title: "Büyüme", text: "İstanbul genelinde 6 şubeye ulaştık." },
  { year: "2024", title: "Dijitalleşme", text: "Kurlarımızı çevrimiçi şeffaf şekilde paylaşmaya başladık." },
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
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Hakkımızda
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl text-navy sm:text-4xl">
            Komşuluk güveniyle başlayan, kurumsal disiplinle büyüyen bir hikaye
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-navy/60">
            Semt Döviz, 1998 yılında İstanbul Kadıköy&apos;de küçük bir
            şubeyle kuruldu. Bugün T.C. Hazine ve Maliye Bakanlığı yetkili
            müessesesi olarak, şeffaf kur politikamız ve deneyimli ekibimizle
            binlerce müşteriye hizmet veriyoruz.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <h2 className="font-display text-2xl text-navy sm:text-3xl">Yol Haritamız</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m) => (
            <div key={m.year} className="border-l-2 border-gold/40 pl-5">
              <p className="font-display text-xl text-gold">{m.year}</p>
              <p className="mt-1 text-sm font-semibold text-navy">{m.title}</p>
              <p className="mt-1 text-sm text-navy/60">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          <h2 className="font-display text-2xl text-navy sm:text-3xl">Değerlerimiz</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line p-7">
                <h3 className="text-base font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
