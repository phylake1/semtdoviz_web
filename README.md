# Semt Döviz

Semt Döviz için Next.js (App Router) + Tailwind CSS ile geliştirilmiş kurumsal web sitesi. Anasayfada, uluslararası referans kurlar üzerinden hesaplanan güncel USD/EUR/GBP/CHF alış-satış kurlarını gösteren canlı bir kur bileşeni bulunur.

## Özellikler

- **Canlı kur widget'ı** — [Frankfurter API](https://frankfurter.dev) üzerinden 5 dakikada bir güncellenen (ISR) döviz kurları, veri alınamadığında zarif bir yedek duruma düşer.
- **Sade / premium tasarım** — Lacivert, altın ve fildişi renk paletiyle güven odaklı, sade bir finans markası kimliği.
- **SEO** — Metadata API, Open Graph & Twitter kartları, dinamik OG görseli, `sitemap.xml`, `robots.txt`, `FinancialService` JSON-LD yapılandırılmış verisi.
- **Sayfalar** — Anasayfa, Kurlar, Hakkımızda, İletişim.

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresini açarak sonucu görebilirsiniz.

## Build

```bash
npm run build
npm run start
```

## Deploy

Proje [Vercel](https://vercel.com) üzerinde deploy edilmek üzere yapılandırılmıştır.
