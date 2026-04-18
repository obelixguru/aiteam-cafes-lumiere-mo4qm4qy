export default function MentionsLegalesPage() {
  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto prose prose-sm text-[#2C1810]">
        <h1 className="text-3xl font-bold text-[#2C1810] mb-8">Mentions légales</h1>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#2C1810] mb-3">Éditeur du site</h2>
          <p className="text-[#2C1810]/70 text-sm leading-relaxed">
            <strong>Cafés Lumière SAS</strong><br />
            Capital social : 10 000 €<br />
            Siège social : 12 rue de la Paix, 75001 Paris, France<br />
            SIRET : 123 456 789 00001<br />
            RCS Paris : 123 456 789<br />
            Directeur de la publication : Marie Dupont
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#2C1810] mb-3">Hébergement</h2>
          <p className="text-[#2C1810]/70 text-sm leading-relaxed">
            Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#2C1810] mb-3">Contact</h2>
          <p className="text-[#2C1810]/70 text-sm leading-relaxed">
            Email : contact@cafes-lumiere.fr<br />
            Téléphone : +33 1 23 45 67 89<br />
            Horaires : lundi au vendredi, 9h-18h
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#2C1810] mb-3">Propriété intellectuelle</h2>
          <p className="text-[#2C1810]/70 text-sm leading-relaxed">
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels) est la propriété exclusive de Cafés Lumière SAS, à l&apos;exception des marques, logos ou contenus appartenant à d&apos;autres sociétés partenaires. Toute reproduction ou représentation, totale ou partielle, du site ou de son contenu est strictement interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#2C1810] mb-3">Cookies</h2>
          <p className="text-[#2C1810]/70 text-sm leading-relaxed">
            Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire ou de traçage n&apos;est déposé sans votre consentement explicite. Conformément à la réglementation CNIL, vous pouvez retirer votre consentement à tout moment.
          </p>
        </section>

        <p className="text-xs text-[#2C1810]/40 mt-12">Dernière mise à jour : avril 2026</p>
      </div>
    </div>
  );
}
