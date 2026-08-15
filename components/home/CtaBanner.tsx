import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="container-page">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-line bg-[#f4f0e6] px-8 py-12 sm:flex-row sm:items-center sm:justify-between md:px-14">
          <div>
            <h2 className="font-display text-2xl text-navy sm:text-3xl">
              Güncel kuru öğrenmek mi istiyorsunuz?
            </h2>
            <p className="mt-2 text-sm text-navy/60">
              Şubemizi arayın, dakikalar içinde net kur bilgisi alın.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
            >
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/iletisim"
              className="rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
            >
              Şubeleri Gör
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
