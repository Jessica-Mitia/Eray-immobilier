import './Properties.css';

function Properties() {
  const properties = [
    {
      image: '/maison.jpg',
      titre: 'Terrain Résidentiel Premium',
      prix: '45 000 €',
      lieu: 'Antananarivo, Madagascar',
      surface: '500 m²',
      statut: 'Viabilisé',
      titre_foncier: 'Oui'
    },
    {
      image: '/maison.jpg',
      titre: 'Terrain Constructible',
      prix: '32 000 €',
      lieu: 'Ivandry, Madagascar',
      surface: '350 m²',
      statut: 'Prêt à bâtir',
      titre_foncier: 'Oui'
    },
    {
      image: '/maison.jpg',
      titre: 'Grand Terrain Agricole',
      prix: '78 000 €',
      lieu: 'Ambohibao, Madagascar',
      surface: '1200 m²',
      statut: 'Non viabilisé',
      titre_foncier: 'En cours'
    }
  ];

  return (
    <section className="properties" id="listings">
      <div className="properties-container">
        <div className="properties-header">
          <span className="properties-tag">TERRAINS EN VEDETTE</span>
          <h2>Découvrez nos meilleures parcelles</h2>
          <p>
            Une sélection rigoureuse de terrains répondant aux plus hauts standards de qualité.
          </p>
        </div>

        <div className="properties-grid">
          {properties.map((property, index) => (
            <div className="property-card" key={index}>
              <div className="property-image">
                <img src={property.image} alt={property.titre} />
                <span className="property-badge">Exclusivité</span>
              </div>
              <div className="property-content">
                <h3>{property.titre}</h3>
                <p className="property-lieu">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {property.lieu}
                </p>
                <div className="property-specs">
                  <span>📐 {property.surface}</span>
                  <span>🔌 {property.statut}</span>
                  <span>📜 Titre : {property.titre_foncier}</span>
                </div>
                <div className="property-footer">
                  <span className="property-prix">{property.prix}</span>
                  <button className="property-btn">Visiter</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;