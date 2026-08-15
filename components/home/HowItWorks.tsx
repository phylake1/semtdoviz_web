const steps = [
  {
    step: "01",
    title: "Kuru Kontrol Edin",
    description: "Anasayfadan güncel kurları inceleyin, dilerseniz şubeyi arayarak teyit alın.",
  },
  {
    step: "02",
    title: "Şubeye Gelin",
    description: "Size en yakın Semt Döviz şubesine kimliğinizle birlikte gelin.",
  },
  {
    step: "03",
    title: "İşleminizi Tamamlayın",
    description: "Alım veya satımınızı dakikalar içinde, komisyonsuz şekilde tamamlayın.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Nasıl Çalışır
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
            Üç adımda döviz işleminiz tamam
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((item, i) => (
            <div key={item.step} className="relative pl-0">
              <span className="font-display text-5xl text-navy/10">{item.step}</span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {item.description}
              </p>
              {i < steps.length - 1 && (
                <span
                  className="absolute right-[-1.25rem] top-6 hidden h-px w-10 bg-line md:block"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
