import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Semt Döviz aydınlatma metni.",
  alternates: { canonical: "/gizlilik" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "1. Veri Sorumlusu",
    body: `${siteConfig.legalName} ("Semt Döviz"), 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca veri sorumlusu sıfatıyla, aşağıda açıklanan kapsamda kişisel verilerinizi işlemektedir. Adres: ${siteConfig.address.street}, ${siteConfig.address.district}/${siteConfig.address.city}.`,
  },
  {
    title: "2. İşlenen Kişisel Veriler",
    body: "İletişim formunu kullandığınızda ad-soyad, telefon numarası ve mesaj içeriğiniz; sitemizi ziyaret ettiğinizde ise tarayıcı ve cihaz bilgileri gibi teknik veriler işlenebilir.",
  },
  {
    title: "3. İşleme Amaçları",
    body: "Kişisel verileriniz; talebinize dönüş yapılması, müşteri ilişkilerinin yürütülmesi, yasal yükümlülüklerin yerine getirilmesi ve hizmet kalitesinin artırılması amaçlarıyla işlenir.",
  },
  {
    title: "4. Hukuki Sebep",
    body: "Verileriniz, KVKK madde 5'te belirtilen; sözleşmenin kurulması/ifası, hukuki yükümlülüğün yerine getirilmesi ve meşru menfaat işleme şartlarına dayanılarak işlenmektedir.",
  },
  {
    title: "5. Aktarım",
    body: "Kişisel verileriniz, yasal zorunluluk halleri dışında ve açık rızanız olmaksızın üçüncü kişilerle paylaşılmaz. Yetkili kamu kurum ve kuruluşlarının talebi halinde mevzuat kapsamında paylaşım yapılabilir.",
  },
  {
    title: "6. Saklama Süresi",
    body: "Kişisel verileriniz, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen zamanaşımı süreleri boyunca saklanır, sonrasında silinir veya anonim hale getirilir.",
  },
  {
    title: "7. Haklarınız (KVKK m. 11)",
    body: "KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme, eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini isteme ve bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme haklarına sahipsiniz.",
  },
  {
    title: "8. Başvuru Yöntemi",
    body: `Haklarınızı kullanmak için ${siteConfig.email} adresine e-posta gönderebilir veya şubemize yazılı olarak başvurabilirsiniz.`,
  },
];

export default function GizlilikPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Gizlilik</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
          KVKK Aydınlatma Metni
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-navy/60">
          Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
          {" "}{siteConfig.name} tarafından kişisel verilerinizin işlenmesine
          ilişkin sizi bilgilendirmek amacıyla hazırlanmıştır.
        </p>
      </div>

      <div className="mt-12 max-w-2xl space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-base font-semibold text-navy">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
