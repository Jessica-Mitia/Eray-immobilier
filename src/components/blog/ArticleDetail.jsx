import { useParams, useNavigate } from "react-router-dom";
import articles from "../../data/articles";
import CategoryBadge from "./CategoryBadge";
import { Navbar } from "../layout";
import "./ArticleDetail.css";

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article non trouvé</h2>
        <button onClick={() => navigate("/blog")} className="btn-back">
          Retour au blog
        </button>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <Navbar />
      <div className="article-container">
        <button onClick={() => navigate("/blog")} className="btn-back-top">
          ← Retour au blog
        </button>

        <header className="article-header">
          <div className="article-meta">
            <span className="article-date">{article.date}</span>
            <CategoryBadge categorie={article.categorie} />
          </div>
          <h1 className="article-title">{article.titre}</h1>
          
          <div className="article-author-hero">
            <img
              src={article.auteur.avatar}
              alt={article.auteur.nom}
              className="author-avatar-large"
            />
            <div className="author-info">
              <span className="author-name">{article.auteur.nom}</span>
              <span className="author-role">{article.auteur.role}</span>
            </div>
            <span className="reading-time">{article.tempsLecture} min de lecture</span>
          </div>
        </header>

        <div className="article-image-hero">
          <img src={article.image} alt={article.titre} className="featured-img" />
        </div>

        <div className="article-content">
          <p className="article-excerpt-large">{article.extrait}</p>
          
          <div className="article-body">
            {/* Placeholder for full content since it's not in the data yet */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3>Pourquoi c'est important ?</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <blockquote>
              "L'investissement immobilier est le moyen le plus sûr de bâtir un patrimoine durable 
              à Madagascar."
            </blockquote>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          <div className="article-tags">
            {article.tags?.map((tag) => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
        </div>

        <footer className="article-footer">
          <div className="share-article">
            <span>Partager cet article :</span>
            <div className="share-buttons">
              <button className="share-btn">FB</button>
              <button className="share-btn">TW</button>
              <button className="share-btn">LI</button>
            </div>
          </div>
          <button onClick={() => navigate("/blog")} className="btn-back-bottom">
            Retour au blog
          </button>
        </footer>
      </div>
    </div>
  );
}
