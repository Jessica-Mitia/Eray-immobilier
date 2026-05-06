import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '🌍',
      titre: 'Achat de terrain',
      desc: 'Trouvez le terrain idéal pour construire la maison de vos rêves ou investir à Madagascar.'
    },
    {
      icon: '💰',
      titre: 'Vente de terrain',
      desc: 'Vendez votre terrain au meilleur prix grâce à notre expertise du marché foncier local.'
    },
    {
      icon: '📋',
      titre: 'Viabilisation',
      desc: 'Terrains viabilisés, prêts à construire avec tous les raccordements nécessaires.'
    },
    {
      icon: '📊',
      titre: 'Investissement',
      desc: 'Maximisez votre rendement avec nos conseils en investissement foncier à Madagascar.'
    }
  ];

  const delais = ['animate--d1', 'animate--d2', 'animate--d3', 'animate--d4'];

  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* En-tête : monte depuis le bas */}
        <div className="services-header animate animate--bas">
          <span className="services-tag">NOS SERVICES</span>
          <h2>Des solutions complètes pour votre projet foncier</h2>
          <p>
            Que vous souhaitiez acheter, vendre ou investir dans le foncier,
            notre équipe vous accompagne à chaque étape.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            /* Chaque carte monte en cascade avec délai croissant */
            <div
              className={`service-card animate animate--bas ${delais[i]}`}
              key={i}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.titre}</h3>
              <p>{s.desc}</p>
              <Link to="/blog" className="service-link">
                En savoir plus <span>→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
