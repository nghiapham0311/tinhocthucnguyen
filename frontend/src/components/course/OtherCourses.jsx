import { Link } from 'react-router-dom';
import SectionHeading from '../SectionHeading.jsx';
import Icon from '../Icons.jsx';
import { COURSE_GROUPS } from '../../data.js';

export default function OtherCourses({ current }) {
  const others = COURSE_GROUPS.filter((c) => c.slug !== current.slug);

  return (
    <section className="section section--tight">
      <div className="container">
        <SectionHeading no="07" title="Khóa học khác" />
        <div className="others">
          {others.map((c) => (
            <Link key={c.slug} to={`/khoa-hoc/${c.slug}`} className={`other-card other-card--${c.tone}`}>
              <span className="other-card__icon"><Icon name={c.icon} size={26} /></span>
              <span className="other-card__text">
                <small>{c.audience}</small>
                <strong>{c.title}</strong>
                <span>{c.desc}</span>
              </span>
              <Icon name="arrow" size={20} className="other-card__arrow" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
