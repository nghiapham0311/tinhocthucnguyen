export default function SectionHeading({ no, title, sub }) {
  return (
    <div className="section-heading">
      <h2>
        <span className="badge">{no}</span>
        {title}
      </h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}
