import { useMemo, useState, useEffect, useRef } from "react";
import './Produits.css';

/* IMAGES */
import heroBg from "../assets/property-1.jpg";
import p1 from "../assets/property-1.jpg";
import p2 from "../assets/property-2.jpg";
import p3 from "../assets/property-3.jpg";
import p4 from "../assets/property-4.jpg";
import p5 from "../assets/property-5.jpg";
import p6 from "../assets/property-6.jpg";

/* ── HOOK: apparition au scroll ── */
const useFadeIn = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

/* ── STAR RATING ── */
const Stars = ({ rating }) => (
  <div className="pc-stars">
    {[1,2,3,4,5].map((i) => (
      <span key={i} className={i <= rating ? "pc-star filled" : "pc-star"}>★</span>
    ))}
  </div>
);

/* ── DATA ── */
const properties = [
  { id:1, name:"Cozy Room",    price:"$200", image:p1, location:"New York", rating:4, beds:2 },
  { id:2, name:"Modern Room",  price:"$300", image:p2, location:"Paris",    rating:5, beds:3 },
  { id:3, name:"Luxury Room",  price:"$500", image:p3, location:"Dubai",    rating:4, beds:4 },
  { id:4, name:"Simple Room",  price:"$150", image:p4, location:"London",   rating:3, beds:1 },
  { id:5, name:"Elegant Room", price:"$350", image:p5, location:"Rome",     rating:5, beds:3 },
  { id:6, name:"Classic Room", price:"$220", image:p6, location:"Tokyo",    rating:4, beds:2 },
];

/* ── CARD ── */
const PropertyCard = ({ property, index }) => (
  <div className="pc-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="pc-img-wrap">
      <img src={property.image} alt={property.name} className="pc-img" />
      <div className="pc-img-overlay">
        <button className="pc-overlay-btn">Voir détails →</button>
      </div>
    </div>
    <div className="pc-body">
      <div className="pc-row-top">
        <span className="pc-name">{property.name}</span>
        <span className="pc-beds">🛏 {property.beds}</span>
      </div>
      <p className="pc-location">📍 {property.location}</p>
      <div className="pc-row-bottom">
        <Stars rating={property.rating} />
        <span className="pc-price">{property.price}<span>/nuit</span></span>
      </div>
    </div>
  </div>
);

/* ── SECTION WRAPPER animé ── */
const AnimSection = ({ children, className = "" }) => {
  const ref = useFadeIn();
  return <section ref={ref} className={`fade-section ${className}`}>{children}</section>;
};

/* ── MAIN ── */
const Produits = () => {
  const [query, setQuery]           = useState("");
  const [activeFilter, setFilter]   = useState("Tout");
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  /* header scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filters = ["Tout","Appartement","Villa","Studio"];

  const filtered = useMemo(() =>
    properties.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );
  const featured = filtered.slice(0, 3);
  const latest   = filtered.slice(3);

  return (
    <div className="pc-root">      

      {/* ══════════════ HERO ══════════════ */}
      <section className="pc-hero" style={{ backgroundImage:`url(${heroBg})` }}>
        <div className="pc-hero-particles">
          {[...Array(6)].map((_,i) => <div key={i} className="pc-particle"/>)}
        </div>
        <div className="pc-hero-inner">
          <h1 className="pc-hero-title">
            Découvrez les meilleurs biens à votre image
          </h1>
          <button className="pc-hero-cta">Voir les annonces →</button>

          <div className="pc-hero-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`pc-hero-filter${activeFilter === f ? " active" : ""}`}
                onClick={() => setFilter(f)}
              >{f}</button>
            ))}
            <button className="pc-hero-filter dark">Historique</button>
          </div>

          {/* SEARCH dans hero */}
          <div className="pc-search">
            <span className="pc-search-icon">🔍</span>
            <input
              className="pc-search-input"
              placeholder="Rechercher une propriété..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <div className="pc-stats-wrap">
        <div className="pc-stats">
          {[
            { icon:"🏠", label:"Beach Guiding",  sub:"Au Nogeth",       num:"1 200+" },
            { icon:"🏢", label:"Home Listing",   sub:"Tout Roboca",     num:"850+"   },
            { icon:"🔑", label:"Short Letting",  sub:"Hoodie Store",    num:"3 400+" },
            { icon:"⭐", label:"Premium Nap",    sub:"1 The First",     num:"99%"    },
          ].map((s, i) => (
            <div className="pc-stat" key={s.label} style={{ animationDelay:`${i*0.1}s` }}>
              <span className="pc-stat-icon">{s.icon}</span>
              <div>
                <strong>{s.label}</strong>
                <p>{s.sub}</p>
              </div>
              <span className="pc-stat-num">{s.num}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════ SECTION 1 ══════════════ */}
      <AnimSection className="pc-section">
        <h2 className="pc-section-title">
          <span>Browse the Stars</span>
        </h2>
        <div className="pc-grid">
          {featured.length
            ? featured.map((p, i) => <PropertyCard key={p.id} property={p} index={i}/>)
            : <p className="pc-empty">Aucun résultat</p>}
        </div>
      </AnimSection>

      {/* ══════════════ BANNER CTA ══════════════ */}
      <AnimSection className="pc-banner">
        <div className="pc-banner-inner">
          <div>
            <h3>Vous avez un bien à louer ?</h3>
            <p>Rejoignez nos 3 400+ propriétaires et publiez votre annonce gratuitement.</p>
          </div>
          <a href="/inscription" className="pc-banner-btn">Publier une annonce →</a>
        </div>
      </AnimSection>

      {/* ══════════════ SECTION 2 ══════════════ */}
      <AnimSection className="pc-section">
        <h2 className="pc-section-title">
          <span>Celebrate Latest Resorts</span>
        </h2>
        <div className="pc-grid">
          {latest.length
            ? latest.map((p, i) => <PropertyCard key={p.id} property={p} index={i}/>)
            : <p className="pc-empty">Aucun résultat</p>}
        </div>
      </AnimSection>

      

    </div>
  );
};

export default Produits;