import { useState } from "react";
import { Link } from "react-router-dom";
import articles from "../../data/articles";
import {
  BlogHero,
  FeaturedArticle,
  CategoryFilter,
  ArticlesGrid,
  Pagination
} from ".";
import { Navbar } from "../layout";
import "./BlogPage.css";

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  const restArticles = articles.filter((a) => a.id !== featuredArticle.id);

  const filtered =
    activeCategory === "Tous"
      ? restArticles
      : restArticles.filter((a) => a.categorie === activeCategory);

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
      <Navbar />
      <div className="blog-container">
        <BlogHero />

        <main className="blog-main">
          <section className="section-featured">
            <FeaturedArticle article={featuredArticle} />
          </section>
          <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />
          <ArticlesGrid articles={paginated} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          <section className="cta-banner">
            <div className="cta-text">
              <h3>Vous cherchez un terrain ?</h3>
              <p>Consultez nos offres disponibles et trouvez la parcelle idéale pour votre projet.</p>
            </div>
            <Link to="/produits" className="cta-btn">Voir nos terrains →</Link>
          </section>
        </main>
      </div>
    </div>
  );
}