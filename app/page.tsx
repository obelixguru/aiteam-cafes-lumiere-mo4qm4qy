import Link from "next/link";

const trustBadges = [
  { icon: "✓", label: "Satisfait ou remboursé 30j" },
  { icon: "✓", label: "Sans engagement" },
  { icon: "🔒", label: "Paiement sécurisé" },
  { icon: "☕", label: "500+ clients" },
];

const steps = [
  {
    num: "01",
    title: "Choisissez votre formule",
    desc: "Explorateur, Connaisseur ou Maître — adaptez votre abonnement à votre passion.",
  },
  {
    num: "02",
    title: "Nous sélectionnons vos cafés",
    desc: "Chaque mois, nos experts choisissent des micro-lots d'exception en direct des producteurs.",
  },
  {
    num: "03",
    title: "Livraison à domicile",
    desc: "Votre café torréfié artisanalement arrive chez vous, frais et prêt à être dégusté.",
  },
];

const jtbds = [
  { q: "Je veux découvrir de nouveaux cafés", a: "Chaque mois une nouvelle origine, une nouvelle histoire." },
  { q: "Je cherche un cadeau original", a: "Offrez un abonnement et laissez le café parler." },
  { q: "Je veux la qualité sans les tracas", a: "Sélection experte, livraison ponctuelle, sans prise de tête." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FFF8F0] py-20 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#C8A96E]/20 text-[#C8A96E] text-sm font-semibold px-4 py-1 rounded-full mb-6 tracking-wide uppercase">
            Abonnement Café de Spécialité
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C1810] leading-tight mb-6">
            Le meilleur café du monde,<br />
            <span className="text-[#C8A96E]">livré chaque mois</span>
          </h1>
          <p className="text-lg text-[#2C1810]/70 mb-8 max-w-xl mx-auto">
            Micro-lots sélectionnés à la source, torréfaction artisanale, expédition sous 48h. Rejoignez la communauté des amateurs exigeants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/pricing"
              className="bg-[#2C1810] text-[#FFF8F0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#C8A96E] hover:text-[#2C1810] transition-colors shadow-lg"
            >
              Voir les offres — dès 19€
            </Link>
            <Link
              href="/about"
              className="border-2 border-[#2C1810] text-[#2C1810] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2C1810] hover:text-[#FFF8F0] transition-colors"
            >
              Notre histoire
            </Link>
          </div>
          {/* Social proof */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#C8A96E]/30 rounded-full px-5 py-2 shadow-sm text-sm text-[#2C1810]">
            <span className="text-[#C8A96E]">⭐⭐⭐⭐⭐</span>
            <span className="font-semibold">Déjà 50+ pré-commandes</span>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-[#2C1810] py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-10">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-[#FFF8F0] text-sm font-medium">
              <span className="text-[#C8A96E] text-base">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2C1810] text-center mb-4">Comment ça marche ?</h2>
        <p className="text-center text-[#2C1810]/60 mb-12">Simple, transparent, délicieux.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-2xl p-8 shadow-sm border border-[#C8A96E]/20 text-center">
              <div className="text-4xl font-bold text-[#C8A96E] mb-4">{s.num}</div>
              <h3 className="text-lg font-bold text-[#2C1810] mb-3">{s.title}</h3>
              <p className="text-[#2C1810]/65 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JTBD */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C1810] text-center mb-4">Fait pour vous si…</h2>
          <p className="text-center text-[#2C1810]/60 mb-12">Cafés Lumière répond à vos besoins réels.</p>
          <div className="space-y-4">
            {jtbds.map((j) => (
              <div key={j.q} className="flex items-start gap-4 bg-[#FFF8F0] rounded-xl p-6 border border-[#C8A96E]/20">
                <div className="shrink-0 w-7 h-7 rounded-full bg-[#C8A96E] flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <p className="font-semibold text-[#2C1810]">{j.q}</p>
                  <p className="text-[#2C1810]/60 text-sm mt-1">{j.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 text-center bg-[#2C1810]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#FFF8F0] mb-4">Prêt à élever votre rituel café ?</h2>
          <p className="text-[#FFF8F0]/70 mb-8">Rejoignez dès maintenant les amateurs de café de spécialité.</p>
          <Link
            href="/signup"
            className="inline-block bg-[#C8A96E] text-[#2C1810] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFF8F0] transition-colors shadow-xl"
          >
            Commencer mon abonnement
          </Link>
        </div>
      </section>
    </>
  );
}
