import Reveal from "@/components/motion/Reveal";

const features = [
  {
    title: "Şeffaf Kur Politikası",
    description:
      "Gizli komisyon yok. Şubede gördüğünüz kur, işleminizde uyguladığımız kurdur.",
    icon: (
      <path
        d="M4 12h16M4 12l5-5M4 12l5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Hızlı İşlem",
    description:
      "Şubemizde bekleme yapmadan dakikalar içinde döviz alım satım işleminizi tamamlayın.",
    icon: (
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Yetkili ve Güvenli",
    description:
      "T.C. Hazine ve Maliye Bakanlığı yetkili müessesesi olarak mevzuata tam uyum sağlıyoruz.",
    icon: (
      <path
        d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Uzman Kadro",
    description:
      "25 yılı aşkın sektör deneyimine sahip ekibimizle her zaman doğru yönlendirme.",
    icon: (
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Neden Semt Döviz
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
            Sade bir işlem, güvenilir bir ortaklık
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-line text-navy">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
