import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

const badges = [
  { label: siteConfig.legal.licenseType, sub: siteConfig.legal.licenseAuthority },
  { label: "Faaliyet İzni", sub: siteConfig.legal.licenseDate },
  { label: "Döviz ve Altın", sub: "Alım-satım hizmeti" },
  { label: siteConfig.address.district, sub: siteConfig.address.city },
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-page grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {badges.map((badge, i) => (
          <Reveal key={badge.label} delay={i * 0.06} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gold/30 text-gold">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M8 1.5l5.5 2v3.2c0 3.4-2.2 6-5.5 7.3-3.3-1.3-5.5-3.9-5.5-7.3V3.5L8 1.5z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.7 8.1l1.6 1.6 3-3.4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight text-navy">{badge.label}</p>
              <p className="mt-0.5 text-xs leading-tight text-navy/50">{badge.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
