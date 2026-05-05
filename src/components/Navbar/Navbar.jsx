// Navbar.jsx
import { useEffect, useState } from 'react';
import './Navbar.css';
import { initNavbar } from './navbar';

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  useEffect(() => {
    const cleanup = initNavbar();
    return cleanup;
  }, []);

  return (
    <>
      {/* Zone de détection souris en haut */}
      <div className="navbar-detecteur"></div>

      {/* Barre principale */}
      <nav className="navbar">

        <a href="#" className="navbar-logo" translate='no'>
          Mada.<span>Home</span>
        </a>

        {/* Liens desktop */}
        <ul className="navbar-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#listings">Produits</a></li>
        </ul>

        {/* Conteneur des boutons */}
        <div className="navbar-buttons">
          <button className="navbar-button navbar-button-login">Se connecter</button>
          <button className="navbar-button navbar-button-signup">S'inscrire</button>
        </div>

        {/* Bouton burger */}
        <button
          className="navbar-burger"
          onClick={() => setMenuOuvert(prev => !prev)}
          aria-label="Ouvrir le menu"
        >
          {menuOuvert ? '✕' : '☰'}
        </button>

      </nav>

      {/* Menu déroulant mobile */}
      {menuOuvert && (
        <div className="navbar-menu-mobile">
          <a href="#" onClick={() => setMenuOuvert(false)}>Accueil</a>
          <a href="#about" onClick={() => setMenuOuvert(false)}>À propos</a>
          <a href="#blog" onClick={() => setMenuOuvert(false)}>Blog</a>
          <a href="#listings" onClick={() => setMenuOuvert(false)}>Propriétés</a>
          <a href="#contact" onClick={() => setMenuOuvert(false)}>Contact</a>
          
          {/* Boutons dans le menu mobile */}
          <div className="navbar-buttons-mobile">
            <button 
              className="navbar-button navbar-button-login"
              onClick={() => setMenuOuvert(false)}
            >
              Se connecter
            </button>
            <button 
              className="navbar-button navbar-button-signup"
              onClick={() => setMenuOuvert(false)}
            >
              S'inscrire
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;