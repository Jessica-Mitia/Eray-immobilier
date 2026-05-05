import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`hd-header${scrolled ? " hd-scrolled" : ""}`}>
      <div className="hd-inner">
        {/* LOGO */}
        <Link to="/" className="hd-brand">
          <div className="hd-logo-box">
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#01497c" />
              <path d="M16 5L29 16v13H21v-8h-10v8H3V16z" fill="white" />
            </svg>
          </div>
          <span className="hd-site-name">Mada Home</span>
        </Link>

        {/* NAV */}
        <nav className={`hd-nav${menuOpen ? " open" : ""}`}>
          <Link
            to="/"
            className={`hd-link ${isActive("/") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/produits"
            className={`hd-link ${isActive("/produits") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Produits
          </Link>
          <Link
            to="/blog"
            className={`hd-link ${isActive("/blog") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className={`hd-link ${isActive("/about") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            À propos
          </Link>
        </nav>

        {/* ACTIONS */}
        <div className="hd-actions">
          <Link to="/blog" className="hd-login">
            Se connecter
          </Link>
          <Link to="/blog" className="hd-register">
            S'inscrire
          </Link>
        </div>

        {/* BURGER */}
        <button
          className={`hd-burger${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
