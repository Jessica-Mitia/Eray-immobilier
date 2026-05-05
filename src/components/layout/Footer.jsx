import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">MADA HOME</h3>
          <p className="footer-description">
            Trouvez la maison de vos rêves ou le terrain idéal pour votre projet, avec simplicité et confiance.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A propos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/produits">Nos produits</Link></li>
          </ul>
        </div>
        
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>15 Avenue Montaigne, 75008 Paris</p>
          <p>+33 (0)1 23 45 67 89</p>
          <p>contact@madahome.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 MADA HOME. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
