
export default function Intro() {
  return (
    <section className="intro section-wrap" id="about">
      <div className="intro-label">
        <span className="section-number">01 / ABOUT US</span>
        <span className="gold-line" />
      </div>

      <div className="intro-copy">
        <p className="eyebrow dark-eyebrow">
          THE NM SONS APPROACH
        </p>

        <h2>
          Natural beauty.
          <br />
          <em>Considered quality.</em>
        </h2>

        <p>
          At NM SONS EXIM &amp; TRADING LLP, we aim to connect
          buyers with Indian stone products suited to their
          project requirements. From product selection to
          export enquiries, our focus is on clear communication
          and dependable service.
        </p>

        <a className="text-link" href="#contact">
          Get to know us <span>↗</span>
        </a>
      </div>

      <div className="intro-visual">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85"
          alt="Premium stone finishes in an architectural interior"
        />

        <div className="visual-caption">
          <span>THE BEAUTY OF NATURAL MATERIALS</span>
          <span>NM / STONE</span>
        </div>
      </div>
    </section>
  );
}
