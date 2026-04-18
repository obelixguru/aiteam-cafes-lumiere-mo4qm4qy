import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafés Lumière — Abonnement Café de Spécialité",
  description: "Découvrez les meilleurs cafés de spécialité en abonnement mensuel. Micro-lots sélectionnés, torréfaction artisanale, livraison chez vous.",
  openGraph: {
    title: "Cafés Lumière — Abonnement Café de Spécialité",
    description: "Micro-lots sélectionnés, torréfaction artisanale.",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FFF8F0] text-[#2C1810]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
