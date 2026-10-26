
import ProductCard from "../products/ProductCard";

const products = [
  {
    name: "GD Brown Granite",
    category: "NATURAL GRANITE",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    description:
      "Rich brown tones with a distinctive natural character.",
  },
  {
    name: "Black Granite",
    category: "DARK STONE COLLECTION",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    description:
      "A bold, timeless look for contemporary spaces.",
  },
  {
    name: "Gold Stone Collection",
    category: "PREMIUM SELECTION",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    description:
      "Elegant stone-inspired finishes for refined interiors.",
  },
];

export default function ProductsSection() {
  return (
    <section className="products-section" id="products">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="section-number">
              02 / OUR COLLECTION
            </span>

            <h2>
              Stone that speaks
              <br />
              <em>for itself.</em>
            </h2>
          </div>

          <p>
            Explore our featured stone collections. Contact us
            to confirm available varieties, finishes, dimensions
            and current stock.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
            />
          ))}
        </div>

        <p className="image-disclaimer">
          Featured imagery is illustrative. Actual stone appearance
          and availability must be confirmed with our team.
        </p>
      </div>
    </section>
  );
}
