"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ name: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Semt Döviz web sitesi mesajı — ${values.name}`);
    const body = encodeURIComponent(
      `İsim: ${values.name}\nTelefon: ${values.phone}\n\nMesaj:\n${values.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Ad Soyad
        </label>
        <input
          id="name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-gold"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-navy">
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-gold"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Mesajınız
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-gold"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
      >
        Mesajı Gönder
      </button>

      {sent && (
        <p className="text-sm text-navy/60">
          E-posta uygulamanız açıldı — göndermek için son adımı tamamlayın.
        </p>
      )}
    </form>
  );
}
