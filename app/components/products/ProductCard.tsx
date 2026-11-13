
type ProductCardProps = {
  name: string;
  category: string;
  image: string;
  description: string;
};

export default function ProductCard({
  name,
  category,
  image,
  description,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url("${image}")` }}
        aria-label={`${name} granite image`}
        role="img"
      >
        <span className="product-index">{category}</span>
        <span className="product-arrow">↗</span>
      </div>

      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3>{name}</h3>
        <p>{description}</p>

        <span className="text-link">
          View Product Details <span>↗</span>
        </span>
      </div>
    </article>
  );
}
