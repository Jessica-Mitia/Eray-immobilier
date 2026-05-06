import { useEffect } from 'react';
import { Navbar } from '../layout';
import Properties from '../HomeSections/Properties';
import Services from '../HomeSections/Services';
import { initScrollAnimations } from '../../utils/scrollAnimations';
import './Hero.css';

function Hero() {

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="hero-bloc">
      <Navbar />

      {/* ── Image principale ── */}
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

      {/* ── Carte vedette ──
          .animate--gauche = vient de la gauche
          .animate--droite = vient de la droite
          Les 2 entrent dans l'écran en même temps depuis des côtés opposés
      ── */}
      <div className="carte">

        <div className="carte-img animate animate--gauche">
          <img src="/maison.jpg" alt="Terrain en vedette" />
        </div>

        <div className="carte-info animate animate--droite">
          <button className="carte-fermer" aria-label="Fermer">✕</button>

          <h2 className="carte-titre">
            Terrain d'Exception avec Vue Panoramique
          </h2>

          <p className="carte-desc">
            Magnifique terrain constructible idéalement situé, offrant une vue
            imprenable sur la ville. Viabilisé, prêt à bâtir, accès direct route principale.
          </p>

          <p className="carte-desc">
            Parfait pour un projet résidentiel ou d'investissement dans un
            quartier calme et sécurisé, proche des commodités.
          </p>

          <div className="carte-badges">
            <span className="badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
              </svg>
              350 m²
            </span>
            <span className="badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Viabilisé
            </span>
            <span className="badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              Titre foncier
            </span>
            <button className="badge badge-cta">Voir détails →</button>
          </div>
        </div>

      </div>

      <Properties />
      <Services />
    </div>
  );
}

export default Hero;
