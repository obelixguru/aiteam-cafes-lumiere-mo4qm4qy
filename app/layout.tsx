import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
