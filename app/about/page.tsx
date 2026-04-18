export default function AboutPage() {
  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block bg-[#C8A96E]/20 text-[#C8A96E] text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
          Notre Histoire
        </span>
        <h1 className="text-4xl font-bold text-[#2C1810] mb-6">
          Lumière sur les micro-lots
        </h1>

        <div className="prose prose-lg max-w-none text-[#2C1810]/80 leading-relaxed space-y-6">
          <p>
            Cafés Lumière est né d&apos;une conviction simple : le café de spécialité mérite d&apos;être accessible à tous les amateurs exigeants, pas seulement aux initiés des grandes villes. Fondée en 2023 par une équipe de passionnés — anciens baristas, importateurs et torréfacteurs — notre maison sélectionne chaque mois des micro-lots d&apos;exception en direct des producteurs.
          </p>

          <div className="bg-[#2C1810] text-[#FFF8F0] rounded-2xl p-8 my-8">
            <blockquote className="text-xl font-medium italic text-[#C8A96E] mb-4">
              &ldquo;Un bon café, c&apos;est une conversation entre le sol, le soleil et les mains qui l&apos;ont cultivé.&rdquo;
            </blockquote>
            <p className="text-[#FFF8F0]/70 text-sm">— Marie, co-fondatrice et directrice de la sélection</p>
          </div>

          <h2 className="text-2xl font-bold text-[#2C1810] mt-10 mb-4">Notre manifeste</h2>
          <p>
            Nous croyons que chaque tasse est une opportunité de découverte. Derrière chaque grain, il y a un producteur qui a consacré des années à comprendre son terroir, à choisir ses variétés, à peaufiner sa méthode de traitement. Notre rôle ? Être le pont entre ces artisans et vous.
          </p>

          <p>
            Nos achats respectent le principe du commerce direct : nous payons les producteurs entre 2 et 4 fois le prix du marché conventionnel. Ce n&apos;est pas de la charité — c&apos;est simplement la reconnaissance de la valeur réelle d&apos;un travail exceptionnel.
          </p>

          <h2 className="text-2xl font-bold text-[#2C1810] mt-10 mb-4">Les producteurs que nous soutenons</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: "Finca La Esperanza",
                country: "🇨🇴 Colombie",
                desc: "Altitude 1 900 m, variété Geisha, traitement naturel. La famille Restrepo cultive le café depuis quatre générations.",
              },
              {
                name: "Yirgacheffe Cooperative",
                country: "🇪🇹 Éthiopie",
                desc: "Berceau du café arabica. Petits exploitants regroupés en coopérative, traitement lavé traditionnel.",
              },
              {
                name: "Hacienda El Roble",
                country: "🇬🇹 Guatemala",
                desc: "Microclimat unique de la région d&apos;Huehuetenango. Notes de caramel et d&apos;agrumes.",
              },
              {
                name: "Fazenda Monte Alegre",
                country: "🇧🇷 Brésil",
                desc: "Spécialiste des cafés naturels de Minas Gerais. Douceur, chocolat noir, noisette.",
              },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-6 border border-[#C8A96E]/20 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{p.country.split(" ")[0]}</span>
                  <span className="text-[#C8A96E] text-xs font-semibold uppercase tracking-wide">{p.country.split(" ")[1]}</span>
                </div>
                <h3 className="font-bold text-[#2C1810] mb-2">{p.name}</h3>
                <p className="text-sm text-[#2C1810]/65">{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2C1810] mt-10 mb-4">Notre promesse</h2>
          <p>
            Chaque mois, vous recevez vos cafés accompagnés d&apos;une fiche complète : origine, altitude, variété, méthode de traitement, profil de torréfaction, et conseils de préparation. Parce qu&apos;un café compris est un café mieux apprécié.
          </p>
        </div>
      </div>
    </div>
  );
}
