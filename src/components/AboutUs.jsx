import React, { useEffect, useRef, useState } from "react";
import {
  Handshake,
  Award,
  Scale,
  Home,
  Star,
  Rocket,
  Gem,
  KeyRound,
  Building2,
  TrendingUp,
  Search,
  MessagesSquare,
  Mail,
  User,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import "./AboutUs.css";

/**
 * AboutUs - Page "À propos" pour Mada Home
 * Thème bleu (palette #012a4a → #a9d6e5).
 * + Animations au scroll, stagger services, hero animé, icônes animées, formulaire amélioré.
 */

/* Hook : détecte quand un élément entre dans le viewport */
function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.unobserve(el);
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

/* Wrapper réutilisable pour animer au scroll */
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default function AboutUs() {
  const pillars = [
    {
      icon: <Handshake strokeWidth={1.5} />,
      title: "CONFIANCE",
      text: "Nous bâtissons chaque relation client sur la transparence, l'écoute et le respect de vos engagements.",
    },
    {
      icon: <Award strokeWidth={1.5} />,
      title: "CRÉDIBILITÉ",
      text: "Une expertise reconnue du marché immobilier, soutenue par des résultats concrets et durables.",
    },
    {
      icon: <Scale strokeWidth={1.5} />,
      title: "ÉTHIQUE",
      text: "Un pilier fondamental qui guide nos décisions et la gestion des informations de nos clients.",
    },
  ];


  const values = [
    { icon: <Home strokeWidth={1.5} />, title: "Proximité", text: "Une équipe à l'écoute, disponible et engagée à vos côtés." },
    { icon: <Star strokeWidth={1.5} />, title: "Excellence", text: "Un service haut de gamme à chaque étape de votre projet." },
    { icon: <Rocket strokeWidth={1.5} />, title: "Innovation", text: "Des outils modernes pour simplifier votre recherche immobilière." },
    { icon: <Gem strokeWidth={1.5} />, title: "Qualité", text: "Une sélection rigoureuse de biens pour répondre à vos exigences." },
  ];

  const services = [
    { icon: <Home strokeWidth={1.5} />, title: "Achat", text: "Trouver le bien idéal." },
    { icon: <KeyRound strokeWidth={1.5} />, title: "Vente", text: "Valorisation et vente rapide." },
    { icon: <Building2 strokeWidth={1.5} />, title: "Location", text: "Gestion locative efficace." },
    { icon: <TrendingUp strokeWidth={1.5} />, title: "Gestion", text: "Suivi complet de vos biens." },
    { icon: <Search strokeWidth={1.5} />, title: "Estimation", text: "Évaluation fiable du marché." },
    { icon: <MessagesSquare strokeWidth={1.5} />, title: "Conseil", text: "Accompagnement stratégique." },
  ];


  /* ---- Formulaire ---- */
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Votre nom est requis";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email invalide";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message trop court (10 caractères min)";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  return (
    <section className="about-us">
      {/* HERO animé */}
      <div className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" alt=""
          className="about-hero__bg"
        />
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <h1 className="hero-anim hero-anim--1">
            À propos de <span>Mada Home</span>
          </h1>
          <span className="about-bar about-bar--center hero-anim hero-anim--2" />
          <p className="hero-anim hero-anim--3">
            Votre partenaire de confiance pour trouver le bien de vos rêves.
          </p>
          <a href="#about-contact" className="about-cta__btn hero-anim hero-anim--4" style={{ marginTop: 24 }}>
            Nous découvrir
          </a>
        </div>
        <div className="hero-scroll-indicator" aria-hidden="true">
          <span></span>
        </div>
      </div>

      {/* QUI SOMMES-NOUS */}
      <div className="about-section about-intro">
        <div className="about-intro__grid">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
              alt="Maison moderne"
              className="about-intro__img"
            />
          </Reveal>
          <Reveal delay={150}>
            <h2>Qui sommes-nous ?</h2>
            <span className="about-bar" />
            <p>
              Fondée avec la passion de l'immobilier, <strong>Mada Home</strong> est une agence
              dynamique qui accompagne particuliers et investisseurs dans tous leurs projets :
              achat, vente, location et gestion de biens.
            </p>
            <p>
              Grâce à notre expertise du marché local et à notre réseau d'agents qualifiés,
              nous offrons un service personnalisé, rapide et fiable.
            </p>
          </Reveal>
        </div>
      </div>

      {/* PILIERS */}
      <div className="about-pillars">
        <div className="about-pillars__grid">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 150} className="about-pillar">
              <div className="about-pillar__icon icon-animated">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>



      {/* MISSION & VISION */}
      <div className="about-section">
        <div className="about-mv">
          <Reveal className="about-card">
            <h3>Notre Mission</h3>
            <span className="about-bar about-bar--sm" />
            <p>
              Aider chaque client à concrétiser son projet immobilier avec sérénité,
              en proposant des biens de qualité et un accompagnement sur-mesure.
            </p>
          </Reveal>
          <Reveal delay={150} className="about-card">
            <h3>Notre Vision</h3>
            <span className="about-bar about-bar--sm" />
            <p>
              Devenir l'agence de référence en alliant tradition immobilière et innovation
              digitale, pour une expérience client unique.
            </p>
          </Reveal>
        </div>
      </div>

      {/* SERVICES (stagger) */}
      <div className="about-values">
        <div className="about-section">
          <Reveal className="about-center">
            <h2>Nos Services</h2>
            <span className="about-bar about-bar--center" />
            <p className="about-subtitle">Un accompagnement complet pour tous vos projets immobiliers.</p>
          </Reveal>
          <div className="about-values__grid about-services__grid">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="about-value">
                <div className="about-value__icon icon-animated">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      

      {/* FORMULAIRE CONTACT amélioré */}
      <div id="about-contact" className="about-section">
        <Reveal className="about-center">
          <h2>Contactez-nous</h2>
          <span className="about-bar about-bar--center" />
          <p className="about-subtitle">Une question ? Un projet ? Notre équipe vous répond rapidement.</p>
        </Reveal>

        <Reveal delay={150}>
          <form className="about-form" onSubmit={handleSubmit} noValidate>
            <div className="about-form__row">
              <div className={`about-field ${errors.name ? "has-error" : ""}`}>
                <User className="about-field__icon" size={18} strokeWidth={1.7} />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder=" "
                  id="f-name"
                />
                <label htmlFor="f-name">Nom complet</label>
                {errors.name && <small>{errors.name}</small>}
              </div>

              <div className={`about-field ${errors.email ? "has-error" : ""}`}>
                <Mail className="about-field__icon" size={18} strokeWidth={1.7} />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder=" "
                  id="f-email"
                />
                <label htmlFor="f-email">Adresse e-mail</label>
                {errors.email && <small>{errors.email}</small>}
              </div>
            </div>

            <div className="about-field">
              <Phone className="about-field__icon" size={18} strokeWidth={1.7} />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder=" "
                id="f-phone"
              />
              <label htmlFor="f-phone">Téléphone (optionnel)</label>
            </div>

            <div className={`about-field about-field--area ${errors.message ? "has-error" : ""}`}>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder=" "
                id="f-msg"
              />
              <label htmlFor="f-msg">Votre message</label>
              {errors.message && <small>{errors.message}</small>}
            </div>

            <button type="submit" className="about-form__btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner" /> Envoi…
                </>
              ) : sent ? (
                <>
                  <CheckCircle2 size={18} /> Message envoyé !
                </>
              ) : (
                <>
                  Envoyer<Send size={18} />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <div className="about-cta__inner">
          <Reveal>
            <h3>Prêt à trouver votre futur chez-vous ?</h3>
            <p>Contactez-nous dès aujourd'hui, nos experts sont à votre écoute.</p>
          </Reveal>
          <Reveal delay={150}>
            <a href="#about-contact" className="about-cta__btn">Nous contacter</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
