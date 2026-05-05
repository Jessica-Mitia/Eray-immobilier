import CategoryBadge from "./CategoryBadge";
import "./FeaturedArticle.css";
import { useNavigate } from "react-router-dom";

export default function FeaturedArticle({ article }) {
  const navigate = useNavigate();
  return (
    <article className="featured-article">
      <div className="featured-image-wrap">
        <img
          src={article.image}
          alt={article.titre}
          className="featured-image"
        />
      </div>

      <div className="featured-body">
        <div className="featured-meta">
          <span className="meta-date">{article.date}</span>
          <CategoryBadge categorie={article.categorie} />
        </div>

        <h2 className="featured-title">{article.titre}</h2>
        <p className="featured-excerpt">{article.extrait}</p>

        <div className="featured-author">
          <img
            src={article.auteur.avatar}
            alt={article.auteur.nom}
            className="author-avatar"
          />
          <div className="author-info">
            <span className="author-name">{article.auteur.nom}</span>
            <span className="author-role">{article.auteur.role}</span>
          </div>
        </div>
        <button 
          className="btn-read" 
          onClick={() => navigate(`/blog/${article.id}`)}
        >
          Voir plus →
        </button>
      </div>
    </article>
  );
}