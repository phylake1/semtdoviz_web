"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const STORAGE_KEY = "semtdoviz-kvkk-consent";

export default function KvkkConsent() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    // One-time read of an external system (localStorage) on mount to decide
    // whether the banner has already been dismissed in this browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!window.localStorage.getItem(STORAGE_KEY));
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="KVKK aydınlatma bildirimi"
          className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
          initial={reduce ? { opacity: 0 } : { y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-line bg-white p-5 shadow-[0_20px_50px_-20px_rgba(11,13,16,0.25)] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-navy/70">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında,
              sitemizi kullanırken kişisel verileriniz hizmet kalitesini
              artırmak amacıyla işlenebilir.{" "}
              <Link href="/gizlilik" className="font-semibold text-navy underline underline-offset-2">
                Aydınlatma metnini
              </Link>{" "}
              inceleyebilirsiniz.
            </p>
            <button
              type="button"
              onClick={accept}
              className="shrink-0 whitespace-nowrap rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
            >
              Anladım
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
