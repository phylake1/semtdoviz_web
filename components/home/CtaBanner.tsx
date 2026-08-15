import Link from "next/link";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/motion/Reveal";

export default function CtaBanner() {
  return (
    <section className="border-t border-line bg-white pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="container-page">
        <Reveal className="flex flex-col items-start gap-6 rounded-xl border border-line bg-surface px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-12 md:px-14">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
              Güncel kuru öğrenmek mi istiyorsunuz?
            </h2>
            <p className="mt-2 text-sm text-navy/60">
              Şubemizi arayın, dakikalar içinde net kur bilgisi alın.
            </p>
          </div>
          <div className="flex w-full flex-row flex-wrap gap-3 sm:w-auto">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="whitespace-nowrap rounded-md bg-navy px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep sm:px-7"
            >
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/iletisim"
              className="whitespace-nowrap rounded-md border border-navy/20 px-5 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy/5 sm:px-7"
            >
              Şubeyi Bul
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
