
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="eyebrow">
          <span /> NATURAL STONE · TIMELESS CHARACTER
        </p>

        <h1>
          Nature’s Finest
          <br />
          Stone. <em>Made to Last.</em>
        </h1>

        <p className="hero-description">
          Discover premium Indian granite selected for its natural beauty,
          distinctive character and possibilities across architectural
          and commercial projects.
        </p>

        <div className="hero-actions">
          <a href="#products" className="button-gold">
            Explore Collection <span>↗</span>
          </a>

          <a href="#contact" className="button-outline">
            Discuss Your Requirements
          </a>
        </div>

        <div className="hero-note">
          <span className="note-line" />
          STONE WITH CHARACTER. SERVICE WITH PURPOSE.
        </div>
      </div>

      <div className="hero-index">
        <span>01</span> / 03
      </div>
    </section>
  );
}
