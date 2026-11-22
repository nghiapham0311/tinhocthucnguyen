import SectionHeading from '../SectionHeading.jsx';
import Reveal from '../Reveal.jsx';
import { LEARNING_STEPS } from '../../data.js';

export default function LearningSteps() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading no="04" title="Cách học tại Thức Nguyễn" />
        <ol className="steps">
          {LEARNING_STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="step">
              <span className="step__no">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
