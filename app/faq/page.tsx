"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Comment fonctionne l'abonnement Cafés Lumière ?",
    a: "Chaque mois, nous sélectionnons des micro-lots d'exception auprès de producteurs du monde entier. Votre café est torréfié artisanalement et expédié sous 48h après la torréfaction pour une fraîcheur optimale. Vous recevez votre colis directement chez vous, accompagné d'une fiche de dégustation complète.",
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "Non, aucun engagement ! Vous pouvez annuler votre abonnement à tout moment depuis votre espace client, sans frais ni pénalités. L'abonnement annuel bénéficie d'une remise de 15% mais reste résiliable — nous vous remboursons les mois non consommés.",
  },
  {
    q: "Puis-je mettre mon abonnement en pause ?",
    a: "Oui, tout à fait. Depuis votre espace client, vous pouvez mettre votre abonnement en pause pour 1 à 3 mois. Pratique si vous partez en vacances ou si vous avez encore des réserves. La pause ne génère aucun frais supplémentaire.",
  },
  {
    q: "Quelle est la politique de remboursement ?",
    a: "Nous offrons une garantie satisfait ou remboursé de 30 jours. Si votre premier mois ne vous satisfait pas entièrement, contactez-nous et nous vous remboursons intégralement, sans question. Au-delà, nous étudions chaque demande au cas par cas.",
  },
  {
    q: "Comment puis-je annuler mon abonnement ?",
    a: "L'annulation se fait en quelques clics depuis votre espace client > Mon abonnement > Annuler. L'annulation prend effet à la fin de la période en cours. Vous ne serez pas débité pour le mois suivant.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express) ainsi que PayPal. Le paiement est entièrement sécurisé par cryptage SSL. Vos coordonnées bancaires ne sont jamais stockées sur nos serveurs.",
  },
  {
    q: "Quand suis-je débité chaque mois ?",
    a: "Le prélèvement a lieu à la date anniversaire de votre inscription. Par exemple, si vous vous êtes abonné le 15 du mois, vous serez débité le 15 de chaque mois. Vous recevez un email de rappel 3 jours avant.",
  },
  {
    q: "Dans quelle zone livrez-vous ?",
    a: "Nous livrons en France métropolitaine, en Belgique, en Suisse et au Luxembourg. Les délais de livraison sont de 2 à 4 jours ouvrés après expédition. Les frais de livraison sont inclus dans tous nos abonnements.",
  },
  {
    q: "Puis-je choisir l'origine de mon café ?",
    a: "Avec les formules Connaisseur et Maître, vous pouvez indiquer vos préférences (Afrique, Amérique latine, Asie) dans votre profil gustatif. Nous nous engageons à en tenir compte dans la mesure du possible tout en vous surprenant avec de nouvelles découvertes.",
  },
  {
    q: "Le café est-il livré entier ou moulu ?",
    a: "Par défaut, nous expédions le café en grains entiers pour préserver au maximum les arômes. Si vous n'avez pas de moulin, précisez lors de votre inscription le type de mouture souhaitée (filtre, espresso, cafetière à piston) et nous moulerons à la commande.",
  },
  {
    q: "Comment modifier ma formule d'abonnement ?",
    a: "Vous pouvez passer d'une formule à une autre à tout moment depuis votre espace client. Le changement prend effet à votre prochain cycle de facturation. Si vous passez à une formule supérieure en milieu de mois, nous calculons le différentiel au prorata.",
  },
  {
    q: "Mes données personnelles sont-elles protégées ?",
    a: "Absolument. Nous respectons scrupuleusement le RGPD. Vos données ne sont jamais revendues à des tiers. Vous avez le droit d'accéder, de modifier et de supprimer vos données à tout moment. Consultez notre politique de confidentialité pour plus de détails.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C8A96E]/20 text-[#C8A96E] text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
            FAQ
          </span>
          <h1 className="text-4xl font-bold text-[#2C1810] mb-4">Questions fréquentes</h1>
          <p className="text-[#2C1810]/65">Tout ce que vous devez savoir sur votre abonnement Cafés Lumière.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#C8A96E]/20 overflow-hidden shadow-sm">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#FFF8F0] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#2C1810] text-sm sm:text-base">{faq.q}</span>
                <span className={`shrink-0 text-[#C8A96E] text-xl font-light transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-[#2C1810]/70 leading-relaxed border-t border-[#C8A96E]/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#2C1810] rounded-2xl p-8 text-center text-[#FFF8F0]">
          <h2 className="text-xl font-bold mb-3">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-[#FFF8F0]/70 text-sm mb-5">Notre équipe est disponible du lundi au vendredi de 9h à 18h.</p>
          <a
            href="/contact"
            className="inline-block bg-[#C8A96E] text-[#2C1810] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#FFF8F0] transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}
