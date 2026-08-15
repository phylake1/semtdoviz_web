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
            <div className="flex h-48 items-center justify-center bg-surface text-sm text-navy/40">
              Harita — {siteConfig.address.district}, {siteConfig.address.city}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
