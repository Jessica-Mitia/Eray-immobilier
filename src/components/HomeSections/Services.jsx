import './Services.css';

function Services() {
  const services = [
    {
      icon: '🌍',
      titre: 'Achat de terrain',
      desc: 'Trouvez le terrain idéal pour construire la maison de vos rêves ou investir.'
    },
    {
      icon: '💰',
      titre: 'Vente de terrain',
      desc: 'Vendez votre terrain au meilleur prix grâce à notre expertise du marché foncier.'
    },
    {
      icon: '📋',
      titre: 'Viabilisation',
      desc: 'Terrains viabilisés, prêts à construire avec tous les raccordements nécessaires.'
    },
    {
      icon: '📊',
      titre: 'Investissement foncier',
      desc: 'Maximisez votre rendement avec nos conseils en investissement foncier à Madagascar.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-tag">NOS SERVICES</span>
          <h2>Des solutions complètes pour votre projet foncier</h2>
          <p>
            Que vous souhaitiez acheter, vendre ou investir dans le foncier, 
            notre équipe vous accompagne à chaque étape.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.titre}</h3>
              <p>{service.desc}</p>
              <a href="#" className="service-link">
                En savoir plus <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;