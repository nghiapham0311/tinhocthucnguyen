import { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import Icon from './Icons.jsx';
import { CONTACT, CONSULT_POINTS, COURSE_GROUPS } from '../data.js';

const DOT_TONES = ['teal', 'blue', 'coral', 'yellow'];

export default function Consult() {
  const [form, setForm] = useState({ name: '', phone: '', course: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: gửi tới backend khi API sẵn sàng (VD: POST /api/consultations)
    console.info('Yêu cầu tư vấn:', form);
    setSent(true);
    setForm({ name: '', phone: '', course: '' });
  };

  return (
    <section className="section section--tint consult" id="lien-he">
      <div className="container">
        <SectionHeading
          no="03"
          title="Nhận tư vấn"
          sub="Cùng chọn khóa học phù hợp với trình độ và mục tiêu của bạn."
        />
        <div className="consult__grid">
          <Reveal className="consult__info">
            <h3>Cùng chọn khóa học phù hợp.</h3>
            <ul className="consult__points">
              {CONSULT_POINTS.map((p, i) => (
                <li key={p.title} className={`dot--${DOT_TONES[i % DOT_TONES.length]}`}>
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </li>
              ))}
            </ul>
            <div className="consult__contacts">
              <a className="contact-tile contact-tile--teal" href={CONTACT.phoneHref}>
                <Icon name="phone" size={22} />
                <span>
                  <small>Hotline</small>
                  <strong>{CONTACT.phone}</strong>
                </span>
              </a>
              <div className="contact-tile contact-tile--blue">
                <Icon name="pin" size={22} />
                <span>
                  <small>Địa chỉ</small>
                  <strong>{CONTACT.address}</strong>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="consult__card">
            <form className="consult__form" onSubmit={onSubmit}>
              <h3>Để lại thông tin</h3>
              <p>Thầy sẽ gọi lại để tư vấn lộ trình miễn phí.</p>
              <label>
                <span>Họ tên</span>
                <input name="name" value={form.name} onChange={onChange} placeholder="Nguyễn Văn A" required />
              </label>
              <label>
                <span>Số điện thoại</span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9 +.]{9,15}"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="09xx xxx xxx"
                  required
                />
              </label>
              <label>
                <span>Khóa học quan tâm</span>
                <select name="course" value={form.course} onChange={onChange}>
                  <option value="">Chưa chọn – cần tư vấn</option>
                  {COURSE_GROUPS.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.audience})
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="btn btn--teal btn--block btn--lg">
                Gửi yêu cầu tư vấn
              </button>
              {sent && (
                <p className="consult__success" role="status">
                  Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
