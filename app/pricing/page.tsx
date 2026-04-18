"use client";
import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    id: "explorateur",
    name: "Explorateur",
    priceMonthly: 19,
    description: "Pour commencer l'aventure café de spécialité.",
    features: [
      "150g de café par mois",
      "1 origine par mois",
      "Fiche descriptive incluse",
      "Livraison offerte",
      "Sans engagement",
    ],
    featured: false,
    cta: "Choisir Explorateur",
  },
  {
    id: "connaisseur",
    name: "Connaisseur",
    priceMonthly: 29,
    description: "Notre formule la plus populaire pour les vrais amateurs.",
    features: [
      "300g de café par mois",
      "2 origines différentes",
      "Notes de dégustation détaillées",
      "Accès à la communauté privée",
      "Livraison offerte",
      "Sans engagement",
    ],
    featured: true,
    cta: "Choisir Connaisseur",
  },
  {
    id: "maitre",
    name: "Maître",
    priceMonthly: 45,
    description: "L'expérience ultime pour les passionnés exigeants.",
    features: [
      "500g de café par mois",
      "3 origines rares et exclusives",
      "Accès aux micro-lots limités",
      "Appel mensuel avec un expert",
      "Notes de dégustation premium",
      "Livraison express offerte",
      "Sans engagement",
    ],
    featured: false,
    cta: "Choisir Maître",
  },
];

const trustBadges = [
  "Satisfait ou remboursé 30j",
  "Sans engagement",
  "Paiement sécurisé",
  "500+ clients",
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  function displayPrice(monthly: number) {
    if (annual) {
      return (monthly * 0.85).toFixed(0);
    }
    return monthly.toFixed(0);
  }

  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2C1810] mb-4">Nos abonnements</h1>
          <p className="text-[#2C1810]/65 text-lg mb-8">
            Choisissez la formule qui correspond à votre passion. Sans engagement, modifiable à tout moment.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white border border-[#C8A96E]/30 rounded-full p-1 shadow-sm gap-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                !annual ? "bg-[#2C1810] text-[#FFF8F0]" : "text-[#2C1810] hover:bg-[#2C1810]/5"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 ${
                annual ? "bg-[#2C1810] text-[#FFF8F0]" : "text-[#2C1810] hover:bg-[#2C1810]/5"
              }`}
            >
              Annuel
              <span className="bg-[#C8A96E] text-[#FFF8F0] text-xs px-2 py-0.5 rounded-full font-bold">-15%</span>
            </button>
          </div>

          {annual && (
            <p className="text-sm text-[#C8A96E] font-semibold mt-3">
              Économisez 15% avec l&apos;abonnement annuel !
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col relative ${
                plan.featured
                  ? "border-2 border-[#C8A96E] bg-[#2C1810] text-[#FFF8F0] shadow-2xl scale-105"
                  : "border border-[#C8A96E]/20 bg-white text-[#2C1810] shadow-sm"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C8A96E] text-[#2C1810] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Le plus populaire
                  </span>
                </div>
              )}

              <h2 className={`text-xl font-bold mb-1 ${plan.featured ? "text-[#C8A96E]" : "text-[#2C1810]"}`}>
                {plan.name}
              </h2>
              <p className={`text-sm mb-6 ${plan.featured ? "text-[#FFF8F0]/70" : "text-[#2C1810]/60"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold">{displayPrice(plan.priceMonthly)}€</span>
                <span className={`text-sm ml-1 ${plan.featured ? "text-[#FFF8F0]/60" : "text-[#2C1810]/50"}`}>
                  /mois{annual ? " (facturé annuellement)" : ""}
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`shrink-0 mt-0.5 ${plan.featured ? "text-[#C8A96E]" : "text-[#C8A96E]"}`}>✓</span>
                    <span className={plan.featured ? "text-[#FFF8F0]/85" : "text-[#2C1810]/80"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`block text-center py-3 px-6 rounded-full font-semibold text-sm transition-colors ${
                  plan.featured
                    ? "bg-[#C8A96E] text-[#2C1810] hover:bg-[#FFF8F0]"
                    : "bg-[#2C1810] text-[#FFF8F0] hover:bg-[#C8A96E] hover:text-[#2C1810]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#2C1810]/70">
          {trustBadges.map((b) => (
            <span key={b} className="flex items-center gap-1">
              <span className="text-[#C8A96E] font-bold">✓</span> {b}
            </span>
          ))}
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-[#2C1810] border-t border-[#C8A96E]/30 px-4 py-3 z-40">
        <Link
          href="/signup"
          className="block w-full text-center bg-[#C8A96E] text-[#2C1810] py-3 rounded-full font-bold text-sm hover:bg-[#FFF8F0] transition-colors"
        >
          Commencer dès 19€/mois
        </Link>
      </div>
    </div>
  );
}
