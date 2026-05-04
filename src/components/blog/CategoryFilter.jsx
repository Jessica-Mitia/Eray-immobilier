import "./CategoryFilter.css";

const CATEGORIES = [
  "Tous",
  "Conseils d'achat",
  "Juridique & Fiscalité",
  "Actualités",
  "Investissement",
  "Guide pratique",
  "Marché immobilier",
];

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="category-filter">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`filter-tab ${active === cat ? "active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}