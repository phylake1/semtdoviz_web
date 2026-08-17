import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

const aboutText = `Semt Döviz, ${siteConfig.legal.licenseAuthority} tarafından ${siteConfig.legal.licenseType} olarak faaliyet iznine sahiptir. ${siteConfig.address.district}, ${siteConfig.address.city}'daki şubemizde döviz ve altın alım-satımını şeffaf kurlar ve komşuluk sıcaklığıyla sürdürüyoruz.`;

export default function AboutSummary() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal className="relative overflow-hidden rounded-xl bg-navy p-10 text-white md:p-14">
            <p className="font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              &ldquo;Komşuluk anlayışıyla kurduğumuz güveni, her işlemde
              koruyoruz.&rdquo;
            </p>
            <p className="mt-6 text-sm text-white/50">Semt Döviz Ekibi</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              Mahallenin dövizcisinden, yetkili bir kuruma
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-navy/60">{aboutText}</p>
            <Link
              href="/hakkimizda"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold"
            >
              Hikayemizi okuyun
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
