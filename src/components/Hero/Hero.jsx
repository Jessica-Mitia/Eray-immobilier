import './Hero.css';

function Hero() {
  return (
    <div className="hero-bloc">

      {/* Image principale */}
      <section className="hero">
        <div className="hero-img">
          <img src="/maison.jpg" alt="Terrain moderne" />
        </div>

        <div className="hero-texte">
          <h1>Find Your Dream Land</h1>
          <p>
            Découvrez des terrains d'exception soigneusement sélectionnés pour vous.
            Faites confiance à nos experts pour concrétiser votre projet en toute sérénité.
          </p>
        </div>
      </section>

      <div className="carte">

        <div className="carte-img">
          <img src="/maison.jpg" alt="Terrain en vedette" />
        </div>

        <div className="carte-info">

          <button className="carte-fermer" aria-label="Fermer">✕</button>

          <h2 className="carte-titre">
            Terrain d'Exception avec Vue Panoramique
          </h2>

          <p className="carte-desc">
            Magnifique terrain constructible idéalement situé, offrant une vue
            imprenable sur la ville. Viabilisé, prêt à bâtir, avec accès direct
            à la route principale.
          </p>

          <p className="carte-desc">
            Parfait pour un projet résidentiel ou d'investissement dans un
            quartier calme et sécurisé, proche des commodités.
          </p>

          <div className="carte-badges">

            <span className="badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
              </svg>
              350 m²
            </span>

            <span className="badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Viabilisé
            </span>

            <span className="badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Titre foncier
            </span>

            <button className="badge badge-cta">
              Détails →
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Hero;