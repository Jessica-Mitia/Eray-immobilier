import "./CategoryBadge.css";

const PALETTE = {
  "Conseils d'achat":    { bg: "#e8f5e9", color: "#2e7d32" },
  "Juridique & Fiscalité": { bg: "#fff3e0", color: "#e65100" },
  "Actualités":          { bg: "#e3f2fd", color: "#1565c0" },
  "Investissement":      { bg: "#f3e5f5", color: "#6a1b9a" },
  "Guide pratique":      { bg: "#e0f7fa", color: "#00695c" },
  "Marché immobilier":   { bg: "#fce4ec", color: "#c62828" },
};

export default function CategoryBadge({ categorie }) {
  const style = PALETTE[categorie] || { bg: "#f1f5f9", color: "#334155" };
  return (
    <span
      className="category-badge"
      style={{ background: style.bg, color: style.color }}
    >
      {categorie}
    </span>
  );
}