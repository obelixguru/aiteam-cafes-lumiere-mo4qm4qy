import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-[#FFF8F0] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <ellipse cx="16" cy="18" rx="12" ry="10" fill="#FFF8F0"/>
                <ellipse cx="16" cy="18" rx="8" ry="6.5" fill="#C8A96E"/>
                <path d="M16 8 C16 8, 20 4, 24 6 C22 8, 18 8, 16 8Z" fill="#FFF8F0"/>
                <path d="M13 18 Q16 15 19 18" stroke="#2C1810" strokeWidth="1" fill="none"/>
              </svg>
              Cafés Lumière
            </div>
            <p className="text-[#FFF8F0]/70 text-sm max-w-xs">
              L&apos;abonnement café de spécialité pour les amateurs exigeants. Micro-lots, torréfaction artisanale, livraison mensuelle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div>
              <p className="font-semibold mb-3 text-[#C8A96E]">Navigation</p>
              <ul className="space-y-2 text-[#FFF8F0]/80">
                <li><Link href="/" className="hover:text-[#C8A96E]">Accueil</Link></li>
                <li><Link href="/about" className="hover:text-[#C8A96E]">À propos</Link></li>
                <li><Link href="/blog" className="hover:text-[#C8A96E]">Blog</Link></li>
                <li><Link href="/pricing" className="hover:text-[#C8A96E]">Tarifs</Link></li>
                <li><Link href="/faq" className="hover:text-[#C8A96E]">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3 text-[#C8A96E]">Légal</p>
              <ul className="space-y-2 text-[#FFF8F0]/80">
                <li><Link href="/mentions-legales" className="hover:text-[#C8A96E]">Mentions légales</Link></li>
                <li><Link href="/confidentialite" className="hover:text-[#C8A96E]">Confidentialité</Link></li>
                <li><Link href="/cgv" className="hover:text-[#C8A96E]">CGV</Link></li>
                <li><Link href="/contact" className="hover:text-[#C8A96E]">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FFF8F0]/10 mt-8 pt-6 text-center text-sm text-[#FFF8F0]/50">
          © 2026 Cafés Lumière. Tous droits réservés. &nbsp;|&nbsp;
          <Link href="/mentions-legales" className="hover:text-[#C8A96E]">Mentions légales</Link>
          &nbsp;|&nbsp;
          <Link href="/confidentialite" className="hover:text-[#C8A96E]">Confidentialité</Link>
          &nbsp;|&nbsp;
          <Link href="/cgv" className="hover:text-[#C8A96E]">CGV</Link>
          &nbsp;|&nbsp;
          <Link href="/contact" className="hover:text-[#C8A96E]">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
