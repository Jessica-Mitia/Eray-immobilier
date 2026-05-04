import ArticleCard from "./ArticleCard";
import "./ArticlesGrid.css";

export default function ArticlesGrid({ articles }) {
  if (articles.length === 0) {
    return (
      <div className="no-results">
        <p>Aucun article dans cette catégorie pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="articles-grid">
      {articles.map((article, index) => (
        <ArticleCard
          key={article.id}
          article={article}
          style={{ animationDelay: `${index * 0.08}s` }}
        />
      ))}
    </div>
  );
}