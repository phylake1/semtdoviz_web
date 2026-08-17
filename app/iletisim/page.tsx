import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Semt Döviz şube adresi, telefon numarası ve çalışma saatleri. Bize ulaşın, en yakın şubemizi bulun.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: `İletişim | ${siteConfig.name}`,
    description:
      "Semt Döviz şube adresi, telefon numarası ve çalışma saatleri. Bize ulaşın, en yakın şubemizi bulun.",
    url: `${siteConfig.url}/iletisim`,
  },
};

export default function IletisimPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">İletişim</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">Bize Ulaşın</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-navy/60">
          Sorularınız için formu doldurun ya da doğrudan şubemizi arayın. Ekibimiz
          size en kısa sürede geri dönüş yapacaktır.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <Reveal className="rounded-xl border border-line bg-white p-7">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-navy/50">
              Merkez Şube
            </h2>
            <p className="mt-2 text-[15px] text-navy">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.district} / {siteConfig.address.city}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-navy/50">
              Telefon &amp; E-posta
            </h2>
            <p className="mt-2 text-[15px] text-navy">
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-gold">
                {siteConfig.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-navy/50">
              Çalışma Saatleri
            </h2>
            <dl className="mt-2 space-y-1 text-[15px] text-navy">
              <div className="flex justify-between gap-4 max-w-xs">
                <dt className="text-navy/60">Hafta içi</dt>
                <dd>{siteConfig.hours.weekdays}</dd>
              </div>
              <div className="flex justify-between gap-4 max-w-xs">
                <dt className="text-navy/60">Cumartesi</dt>
                <dd>{siteConfig.hours.saturday}</dd>
              </div>
              <div className="flex justify-between gap-4 max-w-xs">
                <dt className="text-navy/60">Pazar</dt>
                <dd>{siteConfig.hours.sunday}</dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-xl border border-line">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6883.083230357674!2d29.133781926988302!3d41.0171828664929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8d2efe4322d%3A0xa3837bbadb031e40!2sSemt%20D%C3%B6viz%20ve%20Altin%20A.S.!5e1!3m2!1sen!2str!4v1786963328803!5m2!1sen!2str"
              className="h-64 w-full sm:h-72"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`${siteConfig.name} Konum`}
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
