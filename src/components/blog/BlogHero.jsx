import "./BlogHero.css";

export default function BlogHero() {
  return (
    <header className="blog-hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Blog Immobilier</h1>
        <p className="hero-subtitle">
          Explorez nos derniers articles, conseils d'experts et actualités du marché foncier
        </p>
      </div>
    </header>
  );
}