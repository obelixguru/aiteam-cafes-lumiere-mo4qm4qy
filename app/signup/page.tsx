"use client";
import { useState } from "react";

const plans = [
  { id: "explorateur", name: "Explorateur", price: "19€/mois", desc: "150g · 1 origine" },
  { id: "connaisseur", name: "Connaisseur", price: "29€/mois", desc: "300g · 2 origines", featured: true },
  { id: "maitre", name: "Maître", price: "45€/mois", desc: "500g · 3 origines exclusives" },
];

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({ line1: "", city: "", zip: "", country: "France" });
  const [plan, setPlan] = useState("connaisseur");
  const [done, setDone] = useState(false);

  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    setStep(2);
  }

  function handleStep2(e: React.FormEvent) {
    e.preventDefault();
    setStep(3);
  }

  function handleStep3(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="py-24 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-5xl mb-6">☕</div>
          <h1 className="text-3xl font-bold text-[#2C1810] mb-4">Bienvenue dans la lumière !</h1>
          <p className="text-[#2C1810]/65 mb-8">
            Votre pré-inscription a bien été enregistrée. Nous vous contacterons à l&apos;adresse <strong>{email}</strong> pour finaliser votre abonnement.
          </p>
          <a href="/" className="inline-block bg-[#2C1810] text-[#FFF8F0] px-8 py-3 rounded-full font-semibold hover:bg-[#C8A96E] hover:text-[#2C1810] transition-colors">
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-[#2C1810] text-center mb-2">Créer mon abonnement</h1>
        <p className="text-center text-[#2C1810]/60 mb-8 text-sm">Sans engagement · Modifiable à tout moment</p>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-[#2C1810]/50 mb-2">
            <span className={step >= 1 ? "text-[#2C1810] font-semibold" : ""}>Étape 1/3 — Email</span>
            <span className={step >= 2 ? "text-[#2C1810] font-semibold" : ""}>Étape 2/3 — Adresse</span>
            <span className={step >= 3 ? "text-[#2C1810] font-semibold" : ""}>Étape 3/3 — Formule</span>
          </div>
          <div className="h-2 bg-[#C8A96E]/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C8A96E] rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#C8A96E]/20 p-8">
          {/* Step 1 */}
          {step === 1 && (
            <form onSubmit={handleStep1} className="space-y-5">
              <div>
                <p className="text-xs text-[#C8A96E] font-semibold uppercase tracking-wide mb-4">Étape 1 — Votre adresse email</p>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">Adresse email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@exemple.fr"
                  className="w-full border border-[#C8A96E]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-[#FFF8F0]"
                />
              </div>
              <p className="text-xs text-[#2C1810]/50">
                Vos données sont protégées conformément au RGPD. Consultez notre{" "}
                <a href="/confidentialite" className="underline hover:text-[#C8A96E]">politique de confidentialité</a>.
              </p>
              <button type="submit" className="w-full bg-[#2C1810] text-[#FFF8F0] py-3 rounded-full font-semibold hover:bg-[#C8A96E] hover:text-[#2C1810] transition-colors">
                Continuer →
              </button>
            </form>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <form onSubmit={handleStep2} className="space-y-5">
              <div>
                <p className="text-xs text-[#C8A96E] font-semibold uppercase tracking-wide mb-4">Étape 2 — Adresse de livraison</p>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">Adresse *</label>
                <input
                  type="text"
                  required
                  value={address.line1}
                  onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                  placeholder="12 rue de la Paix"
                  className="w-full border border-[#C8A96E]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-[#FFF8F0] mb-3"
                />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-[#2C1810] mb-2">Code postal *</label>
                    <input
                      type="text"
                      required
                      value={address.zip}
                      onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                      placeholder="75001"
                      className="w-full border border-[#C8A96E]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-[#FFF8F0]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2C1810] mb-2">Ville *</label>
                    <input
                      type="text"
                      required
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      placeholder="Paris"
                      className="w-full border border-[#C8A96E]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-[#FFF8F0]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 border border-[#2C1810] text-[#2C1810] py-3 rounded-full font-semibold text-sm hover:bg-[#2C1810]/5 transition-colors">
                  ← Retour
                </button>
                <button type="submit" className="flex-1 bg-[#2C1810] text-[#FFF8F0] py-3 rounded-full font-semibold text-sm hover:bg-[#C8A96E] hover:text-[#2C1810] transition-colors">
                  Continuer →
                </button>
              </div>
            </form>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <form onSubmit={handleStep3} className="space-y-5">
              <p className="text-xs text-[#C8A96E] font-semibold uppercase tracking-wide mb-4">Étape 3 — Choisissez votre formule</p>
              <div className="space-y-3">
                {plans.map((p) => (
                  <label
                    key={p.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      plan === p.id
                        ? "border-[#C8A96E] bg-[#C8A96E]/10"
                        : "border-[#C8A96E]/20 hover:border-[#C8A96E]/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={p.id}
                      checked={plan === p.id}
                      onChange={() => setPlan(p.id)}
                      className="accent-[#C8A96E]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#2C1810]">{p.name}</span>
                        {p.featured && <span className="bg-[#C8A96E] text-[#2C1810] text-xs font-bold px-2 py-0.5 rounded-full">Populaire</span>}
                      </div>
                      <span className="text-sm text-[#2C1810]/60">{p.desc}</span>
                    </div>
                    <span className="font-bold text-[#2C1810] text-sm">{p.price}</span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-[#2C1810]/50">
                En continuant, vous acceptez nos{" "}
                <a href="/cgv" className="underline hover:text-[#C8A96E]">CGV</a> et notre{" "}
                <a href="/confidentialite" className="underline hover:text-[#C8A96E]">politique de confidentialité</a>.
              </p>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="flex-1 border border-[#2C1810] text-[#2C1810] py-3 rounded-full font-semibold text-sm hover:bg-[#2C1810]/5 transition-colors">
                  ← Retour
                </button>
                <button type="submit" className="flex-1 bg-[#C8A96E] text-[#2C1810] py-3 rounded-full font-bold text-sm hover:bg-[#2C1810] hover:text-[#FFF8F0] transition-colors">
                  Finaliser ma pré-inscription
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
