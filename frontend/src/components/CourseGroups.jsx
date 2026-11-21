import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import Icon from './Icons.jsx';
import { COURSE_GROUPS } from '../data.js';

export default function CourseGroups() {
  return (
    <section className="section" id="khoa-hoc">
      <div className="container">
        <SectionHeading
          no="02"
          title="Bạn đang tìm khóa học nào?"
          sub="Ba nhóm khóa học - ba lối vào rõ ràng ngay sau phần giới thiệu."
        />
        <div className="courses">
          {COURSE_GROUPS.map((c, i) => (
            <Reveal
              as="article"
              key={c.id}
              delay={i * 120}
              className={`course-card course-card--${c.tone}`}
              style={{ '--step': i }}
            >
              <div className="course-card__top">
                <span className="course-card__no">{c.no}</span>
                <span className="course-card__icon">
                  <Icon name={c.icon} size={26} />
                </span>
              </div>
              <span className="course-card__audience">{c.audience}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul className="course-card__tags">
                {c.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a href={`#${c.id}`} className={`btn btn--${c.tone} btn--block`}>
                {c.cta}
                <Icon name="arrow" size={16} />
              </a>
            </Reveal>
          ))}
        </div>
        <p className="note">Mỗi ô dẫn đến trang chi tiết: nội dung học · đối tượng · lịch học · đăng ký.</p>
      </div>
    </section>
  );
}
