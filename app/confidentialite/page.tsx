export default function ConfidentialitePage() {
  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-[#2C1810]">
        <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>

        <div className="space-y-8 text-sm text-[#2C1810]/75 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">1. Responsable du traitement</h2>
            <p>Cafés Lumière SAS, 12 rue de la Paix, 75001 Paris. Contact DPO : dpo@cafes-lumiere.fr</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">2. Données collectées</h2>
            <p>Nous collectons les données suivantes lors de votre inscription : adresse email, adresse postale de livraison, préférences de café. Ces données sont nécessaires à l&apos;exécution de votre abonnement.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">3. Finalités des traitements</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Gestion de votre abonnement et des livraisons</li>
              <li>Communication relative à votre commande</li>
              <li>Amélioration de nos services (statistiques anonymisées)</li>
              <li>Envoi de la newsletter (avec votre consentement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">4. Durée de conservation</h2>
            <p>Vos données sont conservées pendant la durée de votre abonnement, puis 3 ans après sa résiliation à des fins légales et comptables.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">5. Vos droits (RGPD)</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="mt-2">Pour exercer ces droits : dpo@cafes-lumiere.fr ou par courrier à notre siège social.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">6. Partage des données</h2>
            <p>Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec nos prestataires logistiques (transporteur) et notre prestataire de paiement, dans le strict nécessaire à l&apos;exécution du service.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2C1810] mb-3">7. Réclamation</h2>
            <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL : www.cnil.fr</p>
          </section>
        </div>

        <p className="text-xs text-[#2C1810]/40 mt-12">Dernière mise à jour : avril 2026</p>
      </div>
    </div>
  );
}
