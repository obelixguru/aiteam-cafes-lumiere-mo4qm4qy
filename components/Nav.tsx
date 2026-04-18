"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF8F0] border-b border-[#2C1810]/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-[#2C1810] text-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <ellipse cx="16" cy="18" rx="12" ry="10" fill="#2C1810"/>
            <ellipse cx="16" cy="18" rx="8" ry="6.5" fill="#5C3A28"/>
            <path d="M16 8 C16 8, 20 4, 24 6 C22 8, 18 8, 16 8Z" fill="#2C1810"/>
            <ellipse cx="16" cy="18" rx="3" ry="2" fill="#2C1810"/>
            <path d="M13 18 Q16 15 19 18" stroke="#C8A96E" strokeWidth="1" fill="none"/>
          </svg>
          <span>Cafés Lumière</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#C8A96E] transition-colors">Accueil</Link>
          <Link href="/about" className="hover:text-[#C8A96E] transition-colors">À propos</Link>
          <Link href="/blog" className="hover:text-[#C8A96E] transition-colors">Blog</Link>
          <Link href="/pricing" className="hover:text-[#C8A96E] transition-colors">Tarifs</Link>
          <Link href="/faq" className="hover:text-[#C8A96E] transition-colors">FAQ</Link>
          <Link
            href="/signup"
            className="bg-[#2C1810] text-[#FFF8F0] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#C8A96E] transition-colors"
          >
            Commencer
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#2C1810] transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-[#2C1810] transition-opacity ${open ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-[#2C1810] transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FFF8F0] border-t border-[#2C1810]/10 px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/about" onClick={() => setOpen(false)}>À propos</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>Tarifs</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/signup" onClick={() => setOpen(false)} className="bg-[#2C1810] text-[#FFF8F0] px-4 py-2 rounded-full text-center font-semibold">Commencer</Link>
        </div>
      )}
    </nav>
  );
}
