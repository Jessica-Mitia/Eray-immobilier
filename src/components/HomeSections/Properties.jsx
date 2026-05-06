import { Link } from 'react-router-dom';
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

  // Délais pour animer les cartes en cascade : d1, d2, d3
  const delais = ['animate--d1', 'animate--d2', 'animate--d3'];

  return (
    <section className="properties" id="listings">
      <div className="properties-container">

        {/* En-tête : monte depuis le bas */}
        <div className="properties-header animate animate--bas">
          <span className="properties-tag">TERRAINS EN VEDETTE</span>
          <h2>Découvrez nos meilleures parcelles</h2>
          <p>
            Une sélection rigoureuse de terrains répondant aux plus hauts standards de qualité.
          </p>
        </div>

        <div className="properties-grid">
          {properties.map((p, i) => (
            /* Chaque carte monte depuis le bas avec un délai croissant
               → effet de cascade : carte 1 puis 2 puis 3 */
            <div
              className={`property-card animate animate--bas ${delais[i]}`}
              key={i}
            >
              <div className="property-image">
                <img src={p.image} alt={p.titre} />
                <span className="property-badge">Exclusivité</span>
              </div>
              <div className="property-content">
                <h3>{p.titre}</h3>
                <p className="property-lieu">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {p.lieu}
                </p>
                <div className="property-specs">
                  <span>📐 {p.surface}</span>
                  <span>🔌 {p.statut}</span>
                  <span>📜 Titre : {p.titre_foncier}</span>
                </div>
                <div className="property-footer">
                  <span className="property-prix">{p.prix}</span>
                  <Link to="/produits" className="property-btn">Visiter</Link>
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
