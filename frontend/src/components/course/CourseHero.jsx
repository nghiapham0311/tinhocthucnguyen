import { Link } from 'react-router-dom';
import Icon from '../Icons.jsx';
import { CLASS_PHOTOS } from '../../images.js';

const CHIP_TONES = ['blue', 'green', 'coral', 'yellow'];
const CHIP_POS = ['tl', 'tr', 'ml', 'mr'];

export default function CourseHero({ course }) {
  const photo = CLASS_PHOTOS[course.image % CLASS_PHOTOS.length];
  const facts = [
    { label: 'Đối tượng', value: course.audience },
    { label: 'Hình thức', value: 'Tại lớp · Online' },
    { label: 'Thời lượng', value: 'Chờ cập nhật', muted: true },
    { label: 'Học phí', value: 'Chờ xác nhận', muted: true },
  ];

  return (
    <section className="c-hero">
      <span className="deco deco--ring deco--a" aria-hidden="true" />
      <span className="deco deco--blob deco--c" aria-hidden="true" />
      <div className="container c-hero__inner">
        <div className="c-hero__content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <Link to="/#khoa-hoc">Khóa học</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{course.title}</span>
          </nav>

          <div className="c-hero__badge">
            <span className="c-hero__icon"><Icon name={course.icon} size={22} /></span>
            <span>{course.audience}</span>
          </div>
          <h1>{course.title}</h1>
          <p className="c-hero__lead">{course.lead}</p>

          <dl className="c-hero__facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd className={f.muted ? 'is-muted' : ''}>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero__actions">
            <a href="#lien-he" className="btn btn--accent btn--lg">Đăng ký tư vấn</a>
            <a href="#noi-dung" className="btn btn--ghost btn--lg">Xem nội dung học</a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__frame">
            {photo && (
              <div className="slider">
                <img className="slider__img is-active" src={photo.src} alt={photo.alt} />
              </div>
            )}
            {course.chips.map((label, i) => (
              <span
                key={label}
                className={`chip chip--${CHIP_TONES[i % 4]} chip--${CHIP_POS[i % 4]}`}
                style={{ animationDelay: `${i * 0.6}s` }}
                aria-hidden="true"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
