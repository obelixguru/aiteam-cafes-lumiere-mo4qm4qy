import Link from "next/link";

const articles = [
  {
    slug: "guide-preparation-cafe-filtre",
    title: "Le guide complet de la préparation café filtre",
    excerpt: "Du grind à la tasse : maîtrisez les paramètres essentiels pour extraire le meilleur de vos cafés de spécialité.",
    category: "Préparation",
    date: "12 avril 2026",
    readTime: "7 min",
  },
  {
    slug: "micro-lots-colombie",
    title: "Pourquoi les micro-lots de Colombie révolutionnent le café",
    excerpt: "Altitude, variétés exotiques, fermentations contrôlées : la Colombie s&apos;impose comme la nouvelle terre de promesse du café de spécialité.",
    category: "Origines",
    date: "5 avril 2026",
    readTime: "5 min",
  },
  {
    slug: "guide-acheteur-cafe-specialite",
    title: "Comment choisir son café de spécialité : le guide de l&apos;acheteur",
    excerpt: "Score SCA, traitement, altitude, variété : on décrypte les informations sur les paquets pour vous aider à faire le bon choix.",
    category: "Guide",
    date: "28 mars 2026",
    readTime: "6 min",
  },
  {
    slug: "torrefaction-artisanale-vs-industrielle",
    title: "Torréfaction artisanale vs industrielle : quelle différence dans votre tasse ?",
    excerpt: "De la torréfaction légère qui préserve les arômes floraux à la torréfaction foncée qui développe amertume et corps : tout ce qu&apos;il faut savoir.",
    category: "Torréfaction",
    date: "20 mars 2026",
    readTime: "8 min",
  },
  {
    slug: "ethiopie-berceau-cafe",
    title: "L&apos;Éthiopie : voyage au berceau du café",
    excerpt: "Yirgacheffe, Sidama, Harrar… Découvrez les régions caféières éthiopiennes qui ont donné naissance à la boisson la plus consommée au monde.",
    category: "Origines",
    date: "14 mars 2026",
    readTime: "9 min",
  },
  {
    slug: "comment-conserver-cafe-fraicheur",
    title: "Comment conserver son café pour préserver la fraîcheur",
    excerpt: "Lumière, air, humidité, chaleur : les 4 ennemis du café frais. Nos conseils pratiques pour que chaque tasse soit aussi bonne que la première.",
    category: "Conseils",
    date: "7 mars 2026",
    readTime: "4 min",
  },
];

const categoryColors: Record<string, string> = {
  Préparation: "bg-blue-100 text-blue-700",
  Origines: "bg-green-100 text-green-700",
  Guide: "bg-purple-100 text-purple-700",
  Torréfaction: "bg-orange-100 text-orange-700",
  Conseils: "bg-yellow-100 text-yellow-700",
};

export default function BlogPage() {
  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C8A96E]/20 text-[#C8A96E] text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
            Le Blog
          </span>
          <h1 className="text-4xl font-bold text-[#2C1810] mb-4">Café, culture & découvertes</h1>
          <p className="text-[#2C1810]/65 text-lg">Guides, origines, conseils de préparation — tout pour devenir un vrai connaisseur.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <article
              key={article.slug}
              className={`bg-white rounded-2xl overflow-hidden border border-[#C8A96E]/20 shadow-sm hover:shadow-md transition-shadow ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Placeholder image */}
              <div className={`bg-gradient-to-br from-[#2C1810] to-[#5C3A28] ${i === 0 ? "h-48" : "h-32"} flex items-center justify-center`}>
                <span className="text-5xl opacity-40">☕</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-[#2C1810]/40">{article.date}</span>
                  <span className="text-xs text-[#2C1810]/40">· {article.readTime} de lecture</span>
                </div>
                <h2 className={`font-bold text-[#2C1810] mb-2 ${i === 0 ? "text-2xl" : "text-lg"}`}>
                  {article.title}
                </h2>
                <p className="text-sm text-[#2C1810]/65 leading-relaxed mb-4">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-sm font-semibold text-[#C8A96E] hover:text-[#2C1810] transition-colors"
                >
                  Lire l&apos;article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
