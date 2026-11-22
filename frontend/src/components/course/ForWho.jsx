import SectionHeading from '../SectionHeading.jsx';
import Reveal from '../Reveal.jsx';
import Icon from '../Icons.jsx';

export default function ForWho({ course }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading no="01" title="Khóa học dành cho ai?" />
        <div className="who">
          {course.forWho.map((w, i) => (
            <Reveal key={w.title} delay={i * 110} className="who__card">
              <span className="who__icon"><Icon name={w.icon} size={26} /></span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
