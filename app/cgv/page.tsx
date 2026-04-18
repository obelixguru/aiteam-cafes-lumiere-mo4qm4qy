export default function CGVPage() {
  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-[#2C1810]">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>

        <div className="space-y-8 text-sm text-[#2C1810]/75 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">Article 1 — Objet</h2>
            <p>Les présentes CGV régissent les relations contractuelles entre Cafés Lumière SAS (ci-après « le vendeur ») et tout client (ci-après « l&apos;acheteur ») souscrivant un abonnement sur le site cafes-lumiere.fr.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">Article 2 — Abonnements et tarifs</h2>
            <p>Trois formules d&apos;abonnement sont proposées :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Explorateur</strong> : 19€/mois — 150g, 1 origine</li>
              <li><strong>Connaisseur</strong> : 29€/mois — 300g, 2 origines</li>
              <li><strong>Maître</strong> : 45€/mois — 500g, 3 origines exclusives</li>
            </ul>
            <p className="mt-2">L&apos;abonnement annuel bénéficie d&apos;une remise de 15% sur le tarif mensuel. Les prix sont indiqués en euros TTC.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">Article 3 — Commande et paiement</h2>
            <p>La commande est validée à la réception du paiement. Le prélèvement mensuel est effectué à la date anniversaire de l&apos;inscription. Le paiement est sécurisé par protocole SSL.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">Article 4 — Livraison</h2>
            <p>Les livraisons sont effectuées en France métropolitaine, Belgique, Suisse et Luxembourg. Délai : 2 à 4 jours ouvrés après expédition. Les frais de livraison sont inclus dans l&apos;abonnement.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">Article 5 — Rétractation</h2>
            <p>Conformément à l&apos;article L221-18 du Code de la consommation, vous disposez d&apos;un délai de 14 jours à compter de la validation de votre commande pour exercer votre droit de rétractation. Passé ce délai, notre garantie satisfait ou remboursé 30 jours s&apos;applique pour le premier envoi.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">Article 6 — Résiliation</h2>
            <p>L&apos;abonnement peut être résilié à tout moment depuis l&apos;espace client. La résiliation prend effet à la fin de la période en cours. Aucune pénalité n&apos;est appliquée.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">Article 7 — Réclamations et service client</h2>
            <p>Pour toute réclamation : contact@cafes-lumiere.fr ou via notre formulaire de contact. Nous nous engageons à répondre sous 48 heures ouvrées.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">Article 8 — Droit applicable</h2>
            <p>Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux de Paris sont compétents. Conformément à l&apos;article L612-1 du Code de la consommation, vous pouvez recourir à la médiation conventionnelle.</p>
          </section>
        </div>

        <p className="text-xs text-[#2C1810]/40 mt-12">Dernière mise à jour : avril 2026</p>
      </div>
    </div>
  );
}
