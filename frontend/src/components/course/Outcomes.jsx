import SectionHeading from '../SectionHeading.jsx';
import Reveal from '../Reveal.jsx';

export default function Outcomes({ course }) {
  return (
    <section className="section section--tight">
      <div className="container">
        <SectionHeading no="02" title="Học xong, bạn làm được gì?" />
        <Reveal as="ul" className="outcomes">
          {course.outcomes.map((o) => (
            <li key={o}>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="currentColor" />
                <path d="m7.5 12.3 3 3 6-6.3" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{o}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
