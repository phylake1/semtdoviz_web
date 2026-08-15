import Reveal from "@/components/motion/Reveal";

const stats = [
  { value: "25+", label: "Yıl deneyim" },
  { value: "6", label: "Şube" },
  { value: "40K+", label: "Müşteri" },
  { value: "1998", label: "Kuruluş" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-page grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <p className="font-mono text-2xl font-semibold tabular-nums text-navy sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-navy/50">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
