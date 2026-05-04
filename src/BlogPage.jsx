import { useState } from "react";
import articles from "./data/articles";
import {
  BlogHero,
  FeaturedArticle,
  CategoryFilter,
  ArticlesGrid,
  Pagination
} from "./components/blog";
import "./BlogPage.css";

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);

  // Article mis en avant (le premier marqué featured ou le premier de la liste)
  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  // Articles sans le featured
  const restArticles = articles.filter((a) => a.id !== featuredArticle.id);

  // Filtrage par catégorie
  const filtered =
    activeCategory === "Tous"
      ? restArticles
      : restArticles.filter((a) => a.categorie === activeCategory);

  // Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function handleCategoryChange(cat) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  return (
    <div className="blog-page">
      <div className="blog-container">
        <BlogHero />

        <main className="blog-main">
          {/* Article en vedette */}
          <section className="section-featured">
            <FeaturedArticle article={featuredArticle} />
          </section>

          {/* Filtre catégories */}
          <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />

          {/* Grille d'articles */}
          <ArticlesGrid articles={paginated} />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

          {/* Bannière CTA */}
          <section className="cta-banner">
            <div className="cta-text">
              <h3>Vous cherchez un terrain ?</h3>
              <p>Consultez nos offres disponibles et trouvez la parcelle idéale pour votre projet.</p>
            </div>
            <a href="#" className="cta-btn">Voir nos terrains →</a>
          </section>
        </main>
      </div>
    </div>
  );
}