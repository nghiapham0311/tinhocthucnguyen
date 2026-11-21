import ImagePlaceholder from './ImagePlaceholder.jsx';

const CHIPS = [
  { label: 'Word', tone: 'blue', pos: 'tl' },
  { label: 'Excel', tone: 'green', pos: 'tr' },
  { label: 'PowerPoint', tone: 'coral', pos: 'ml' },
  { label: 'Canva', tone: 'yellow', pos: 'mr' },
];

export default function Hero() {
  return (
    <section className="hero" id="gioi-thieu">
      <span className="deco deco--ring deco--a" aria-hidden="true" />
      <span className="deco deco--dots deco--b" aria-hidden="true" />
      <span className="deco deco--blob deco--c" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">01 / Giới thiệu khóa học</span>
          <h1>
            Vững kỹ năng tin học.
            <span>
              Tự tin <mark>học &amp; làm.</mark>
            </span>
          </h1>
          <p className="hero__lead">
            Tin học cho học sinh, sinh viên và người đi làm.
            <br />
            Chọn khóa học phù hợp với mục tiêu của bạn.
          </p>
          <div className="hero__actions">
            <a href="#khoa-hoc" className="btn btn--teal btn--lg">Khám phá khóa học</a>
            <a href="#lien-he" className="btn btn--navy btn--lg">Nhận tư vấn</a>
          </div>
          <div className="hero__modes">
            <span className="pill pill--teal">Học tại lớp</span>
            <span className="pill pill--blue">Học online</span>
            <p>Nội dung thực hành gắn với từng nhóm học viên.</p>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__frame">
            <ImagePlaceholder
              title="Ảnh lớp / phòng máy"
              note="Giữ nguyên ảnh thật, không thay bối cảnh"
              className="hero__img"
            />
            {CHIPS.map((c, i) => (
              <span
                key={c.label}
                className={`chip chip--${c.tone} chip--${c.pos}`}
                style={{ animationDelay: `${i * 0.6}s` }}
                aria-hidden="true"
              >
                {c.label}
              </span>
            ))}
          </div>
          <div className="hero__caption">Tin học Thức Nguyễn EDU</div>
        </div>
      </div>
    </section>
  );
}
