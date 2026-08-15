"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navLinks } from "@/lib/nav-links";
import { siteConfig } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="Menüyü aç"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy"
      >
        <span className="sr-only">Menü</span>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
          <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Site menüsü"
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col bg-background shadow-2xl"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <span className="font-display text-lg font-semibold text-navy">
                  Semt <span className="text-gold">Döviz</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Menüyü kapat"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-navy"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-1 flex-col px-5 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-line/70 py-4 text-lg font-medium text-navy last:border-none"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="space-y-3 border-t border-line px-5 py-5">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="block text-sm font-semibold text-navy"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <Link
                  href="/iletisim"
                  onClick={() => setOpen(false)}
                  className="block rounded-md bg-navy px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
                >
                  Şubeyi Bul
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
