
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
      <a
        className="product-image"
        href="#contact"
        style={{ backgroundImage: `url("${image}")` }}
        aria-label={`Enquire about ${name}`}
      >
        <span className="product-index">{category}</span>
        <span className="product-arrow">↗</span>
      </a>

      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3>{name}</h3>
        <p>{description}</p>

        <a className="text-link" href="#contact">
          Enquire about this stone <span>↗</span>
        </a>
      </div>
    </article>
  );
}
