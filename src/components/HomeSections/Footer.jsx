import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col footer-brand">
          <a href="#" className="footer-logo" translate="no">
            Mada.<span>Home</span>
          </a>
          <p>
            Votre partenaire de confiance pour tous vos projets fonciers à Madagascar.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#services">Blog</a></li>
            <li><a href="#listings">Produits</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Achat</a></li>
            <li><a href="#">Vente</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Investissement</a></li>
            <li><a href="#">Estimation</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>📧 contact@madahome.mg</li>
            <li>📞 +261 20 00 000 00</li>
            <li>📍 Antananarivo, Madagascar</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Mada Home. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;