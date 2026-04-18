"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C8A96E]/20 text-[#C8A96E] text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
            Contact
          </span>
          <h1 className="text-4xl font-bold text-[#2C1810] mb-4">Nous contacter</h1>
          <p className="text-[#2C1810]/65">Notre équipe vous répond sous 48 heures ouvrées.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { icon: "📧", label: "Email", value: "contact@cafes-lumiere.fr" },
            { icon: "📞", label: "Téléphone", value: "+33 1 23 45 67 89" },
            { icon: "🕐", label: "Horaires", value: "Lun–Ven, 9h–18h" },
            { icon: "📍", label: "Adresse", value: "12 rue de la Paix, 75001 Paris" },
          ].map((info) => (
            <div key={info.label} className="bg-white rounded-xl p-5 border border-[#C8A96E]/20 flex items-start gap-3 shadow-sm">
              <span className="text-2xl">{info.icon}</span>
              <div>
                <p className="font-semibold text-[#2C1810] text-sm">{info.label}</p>
                <p className="text-[#2C1810]/65 text-sm">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {sent ? (
          <div className="bg-[#2C1810] rounded-2xl p-10 text-center text-[#FFF8F0]">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-3">Message envoyé !</h2>
            <p className="text-[#FFF8F0]/70">Merci {form.name}. Nous vous répondrons à l&apos;adresse {form.email} sous 48 heures ouvrées.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[#C8A96E]/20 shadow-sm space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">Nom *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Votre nom"
                  className="w-full border border-[#C8A96E]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-[#FFF8F0]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="vous@exemple.fr"
                  className="w-full border border-[#C8A96E]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-[#FFF8F0]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2C1810] mb-2">Sujet *</label>
              <select
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border border-[#C8A96E]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-[#FFF8F0]"
              >
                <option value="">Choisir un sujet</option>
                <option>Mon abonnement</option>
                <option>Livraison</option>
                <option>Facturation</option>
                <option>Produits</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2C1810] mb-2">Message *</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Votre message..."
                className="w-full border border-[#C8A96E]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-[#FFF8F0] resize-none"
              />
            </div>
            <p className="text-xs text-[#2C1810]/50">
              En soumettant ce formulaire, vous acceptez notre{" "}
              <a href="/confidentialite" className="underline hover:text-[#C8A96E]">politique de confidentialité</a>.
            </p>
            <button type="submit" className="w-full bg-[#2C1810] text-[#FFF8F0] py-3 rounded-full font-semibold hover:bg-[#C8A96E] hover:text-[#2C1810] transition-colors">
              Envoyer le message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
