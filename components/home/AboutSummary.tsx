import Link from "next/link";

export default function AboutSummary() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white md:p-14">
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
            aria-hidden
          />
          <p className="font-display text-2xl italic leading-snug text-white/90 sm:text-3xl">
            &ldquo;Komşuluk anlayışıyla kurduğumuz güveni, 25 yıldır her işlemde
            koruyoruz.&rdquo;
          </p>
          <p className="mt-6 text-sm text-white/50">Semt Döviz Kurucu Ortağı</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Hakkımızda
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
            Mahallenin dövizcisinden, güvenilir bir kuruma
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-navy/60">
            1998 yılında tek bir şube ile başladığımız yolculuğumuzda bugün
            İstanbul genelinde 6 şubemizle binlerce müşterimize hizmet
            veriyoruz. Yetkili müessese statümüzle mevzuata tam uyum
            sağlarken, komşuluk sıcaklığını hiç kaybetmedik.
          </p>
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
        </div>
      </div>
    </section>
  );
}
