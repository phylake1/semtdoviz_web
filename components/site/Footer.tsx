import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white/70">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display text-xl font-semibold text-white">
            Semt <span className="text-gold-light">Döviz</span>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
          <p className="mt-6 text-xs uppercase tracking-widest text-white/40">
            {siteConfig.legal.licenseAuthority} · {siteConfig.legal.licenseType}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Kurumsal</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">İletişim</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              {siteConfig.address.street}, {siteConfig.address.district}/{siteConfig.address.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Tüm hakları saklıdır. ·
            Tic. Sicil No: {siteConfig.legal.tradeRegistryNo} · Mersis No: {siteConfig.legal.mersisNo}
          </p>
          <p>Kurlar gösterge niteliğindedir, yatırım tavsiyesi değildir.</p>
        </div>
      </div>
    </footer>
  );
}
