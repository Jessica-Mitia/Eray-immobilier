import CategoryBadge from "./CategoryBadge";
import "./ArticleCard.css";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article, style }) {
  const navigate = useNavigate();

  const handleVoirPlus = () => {
    navigate(`/blog/${article.id}`);
  };

  return (
    <article className="article-card" style={style}>
      <div className="card-img-wrap">
        <img
          src={article.image}
          alt={article.titre}
          className="card-img"
          loading="lazy"
        />
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span className="card-date">{article.date}</span>
          <CategoryBadge categorie={article.categorie} />
        </div>

        <h3 className="card-title">{article.titre}</h3>
        <p className="card-excerpt">{article.extrait}</p>

        <div className="card-author">
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
        <button className="btn-read" onClick={handleVoirPlus}>Voir plus →</button>
      </div>
    </article>
  );
}