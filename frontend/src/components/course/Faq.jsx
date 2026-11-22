import { useState } from 'react';
import SectionHeading from '../SectionHeading.jsx';
import { CONTACT } from '../../data.js';

export default function Faq({ course }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--tight" id="lich-khai-giang">
      <div className="container faq-layout">
        <div>
          <SectionHeading no="05" title="Câu hỏi thường gặp" />
          <div className="faq">
            {course.faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                  <button className="faq__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                    {f.q}
                    <span className="faq__plus" aria-hidden="true" />
                  </button>
                  <div className="faq__a">
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="schedule-card">
          <span className="schedule-card__label">Lịch khai giảng</span>
          <h3>{course.title}</h3>
          <dl>
            <div><dt>Lịch học</dt><dd>Chờ cập nhật</dd></div>
            <div><dt>Học phí</dt><dd>Chờ xác nhận</dd></div>
            <div><dt>Hình thức</dt><dd>Tại lớp · Online</dd></div>
          </dl>
          <a href="#lien-he" className="btn btn--accent btn--block">Giữ chỗ khóa tiếp theo</a>
          <a href={CONTACT.phoneHref} className="schedule-card__phone">hoặc gọi {CONTACT.phone}</a>
        </aside>
      </div>
    </section>
  );
}
