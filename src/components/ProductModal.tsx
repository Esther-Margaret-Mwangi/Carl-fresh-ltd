import { Link } from "react-router-dom";
import {
  MapPin, Calendar, ClipboardList, Globe, Package, ArrowRight, X,
} from "lucide-react";
import type { Product } from "../data/products";

const specIcons: Record<string, React.ReactNode> = {
  origin: <MapPin size={15} strokeWidth={1.75} />,
  season: <Calendar size={15} strokeWidth={1.75} />,
  specs: <ClipboardList size={15} strokeWidth={1.75} />,
  markets: <Globe size={15} strokeWidth={1.75} />,
};

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;

  return (
    <div
      className="product-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <div className="product-modal-image">
          <img
            src={product.img}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="product-modal-body">
          <div className="product-detail-tag">{product.category}</div>
          <h2 className="product-detail-name">{product.name}</h2>
          <p className="product-detail-desc">{product.desc}</p>

          <div className="product-specs">
            {(
              [
                { key: "origin", label: "Origin", value: product.origin },
                { key: "season", label: "Harvest Season", value: product.season },
                { key: "specs", label: "Quality Specs", value: product.specs },
                { key: "markets", label: "Export Markets", value: product.markets },
              ] as const
            ).map(({ key, label, value }) => (
              <div key={key} className="product-spec">
                <span className="spec-icon">{specIcons[key]}</span>
                <div className="spec-content">
                  <span className="spec-label">{label}</span>
                  <span className="spec-value">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-gray-mid)",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Packaging Options
            </span>
            <div className="product-packaging-chips">
              {product.packaging.map((p) => (
                <span key={p} className="packaging-chip">
                  <Package
                    size={11}
                    style={{ display: "inline", verticalAlign: "middle", marginRight: "3px" }}
                  />
                  {p}
                </span>
              ))}
            </div>
          </div>

          <Link
            to="/contact#quote"
            className="btn-primary"
            style={{ marginTop: "1.5rem", display: "inline-flex" }}
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
