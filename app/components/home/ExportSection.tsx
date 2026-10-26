
const benefits = [
  {
    number: "01",
    title: "Quality-Focused Sourcing",
    text: "Stone selected with attention to appearance, finish and consistency.",
  },
  {
    number: "02",
    title: "Export-Oriented Service",
    text: "Enquiry support for international buyers and bulk requirements.",
  },
  {
    number: "03",
    title: "Buyer-Focused Communication",
    text: "Discuss specifications, dimensions, quantities and shipping needs.",
  },
];

export default function ExportSection() {
  return (
    <section className="export-section" id="export">
      <div className="section-wrap export-layout">
        <div>
          <span className="section-number">03 / WHY NM SONS</span>

          <h2>
            Your requirements.
            <br />
            <em>Our attention.</em>
          </h2>

          <p className="export-intro">
            Every project has different needs. Let’s discuss the right stone,
            specifications and export requirements for yours.
          </p>
        </div>

        <div className="benefits">
          {benefits.map((benefit) => (
            <div className="benefit" key={benefit.number}>
              <span>{benefit.number}</span>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>

              <span className="benefit-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
