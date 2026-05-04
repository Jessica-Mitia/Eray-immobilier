import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">ERAY IMMOBILIER</h3>
          <p className="footer-description">
            L'immobilier d'exception, redéfini par l'élégance et l'expertise.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">A propos</a></li>
            <li><a href="/blog">Journal</a></li>
            <li><a href="/contact">Nos produits</a></li>
          </ul>
        </div>
        
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>15 Avenue Montaigne, 75008 Paris</p>
          <p>+33 (0)1 23 45 67 89</p>
          <p>contact@erayimmobilier.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Eray Immobilier. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
