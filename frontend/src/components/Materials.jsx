import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import Icon from './Icons.jsx';
import { MATERIALS } from '../data.js';

export default function Materials() {
  return (
    <section className="section section--tight" id="hoc-lieu">
      <div className="container">
        <SectionHeading no="05" title="Học liệu & tự luyện" />
        <div className="materials">
          {MATERIALS.map((m, i) => (
            <Reveal as="a" key={m.title} delay={i * 100} href="#hoc-lieu" className={`material-card material-card--${m.tone}`}>
              <span className="material-card__icon">
                <Icon name={m.icon} size={24} />
              </span>
              <span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
