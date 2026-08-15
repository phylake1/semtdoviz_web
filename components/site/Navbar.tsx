import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/lib/nav-links";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="relative z-40 border-b border-line/80 bg-background/90 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="text-[15px] font-semibold text-navy"
          >
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/iletisim"
            className="rounded-md bg-navy px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-navy-deep"
          >
            Şubeyi Bul
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
