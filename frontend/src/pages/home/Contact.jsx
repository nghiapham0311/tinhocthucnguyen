import { useState } from 'react';
import { CONTACT } from '../../data.js';
import { Btn, Check } from './parts.jsx';

const EMPTY = { course: 'Chọn khóa học', name: '', phone: '', time: '' };

export default function Contact() {
  const [f, setF] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');
  const [msg, setMsg] = useState('');

  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const d = f.phone.replace(/\D/g, '');
    if (!f.name.trim()) {
      setErr('name');
      setMsg('Anh chị nhập họ tên giúp thầy nhé.');
      return;
    }
    if (d.length < 9 || d.length > 11) {
      setErr('phone');
      setMsg('Số điện thoại cần 9 đến 11 chữ số.');
      return;
    }
    // TODO: gửi tới backend (POST /api/registrations)
    setSent(true);
    setErr('');
    setMsg('');
  };

  const again = () => {
    setF(EMPTY);
    setSent(false);
  };

  return (
    <section className="contact" id="dang-ky" aria-labelledby="h-ct">
      <span className="cloud c1 cl-a" />
      <span className="cloud c2 cl-b" />
      <span className="cloud c1 cl-c" />
      <div className="hill h1">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 170 C 240 80 420 90 640 150 S 1060 230 1440 120 V320 H0Z" fill="#BFD8F6" />
        </svg>
      </div>
      <div className="hill h2">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 230 C 300 150 520 200 760 220 S 1200 160 1440 210 V320 H0Z" fill="#93BCEB" />
        </svg>
      </div>
      <div className="hill">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 270 C 280 230 560 290 860 262 S 1260 240 1440 270 V320 H0Z" fill="#2F5A96" />
        </svg>
      </div>

      <div className="wrap ct-in">
        <div className="ct-l">
          <span className="tag rv">
            <b>04</b>Tư vấn và liên hệ
          </span>
          <h2 id="h-ct" className="rv">
            <span className="it">Chưa biết chọn khóa nào?</span>
            <b>Để thầy Thức tư vấn</b>
          </h2>
          <p className="rv">
            Lớp học tại {CONTACT.address}. Gọi hoặc nhắn Zalo để hỏi lịch học, học phí và xếp lớp phù hợp.
          </p>
          <div className="row rv">
            <Btn variant="light" href={CONTACT.zaloHref} target="_blank" rel="noopener">
              Nhắn Zalo
            </Btn>
            <a className="btn ghost" href={CONTACT.phoneHref}>
              Gọi <span className="phone">{CONTACT.phone}</span>
            </a>
          </div>
        </div>

        <form className="form rv" noValidate onSubmit={submit}>
          {!sent ? (
            <div className="form-body">
              <h3>
                Bạn muốn <strong>học khóa nào?</strong>
              </h3>
              <p className="lead">Để lại thông tin, thầy gọi lại tư vấn lịch học và học phí phù hợp.</p>
              <label className="fld" htmlFor="w-course">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 7l10-4 10 4-10 4z" />
                  <path d="M6 9v5c0 1.7 2.7 3 6 3s6-1.3 6-3V9" />
                </svg>
                <span>
                  <strong>Khóa học</strong>
                  <select id="w-course" value={f.course} onChange={set('course')}>
                    <option>Chọn khóa học</option>
                    <option>Tin học thiếu nhi (lớp 3–9)</option>
                    <option>Luyện thi chứng chỉ CNTT</option>
                    <option>Tin học văn phòng</option>
                    <option>Chưa biết, cần tư vấn</option>
                  </select>
                </span>
              </label>
              <div className="two">
                <label className={`fld ${err === 'name' ? 'err' : ''}`} htmlFor="w-name">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
                  </svg>
                  <span>
                    <strong>Họ tên</strong>
                    <input
                      id="w-name"
                      type="text"
                      value={f.name}
                      onChange={set('name')}
                      placeholder="Nhập họ tên"
                      autoComplete="name"
                      aria-invalid={err === 'name' || undefined}
                    />
                  </span>
                </label>
                <label className={`fld ${err === 'phone' ? 'err' : ''}`} htmlFor="w-phone">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="6" y="2" width="12" height="20" rx="2" />
                    <path d="M11 18h2" />
                  </svg>
                  <span>
                    <strong>Điện thoại</strong>
                    <input
                      id="w-phone"
                      type="tel"
                      value={f.phone}
                      onChange={set('phone')}
                      placeholder="SĐT / Zalo"
                      autoComplete="tel"
                      inputMode="tel"
                      aria-invalid={err === 'phone' || undefined}
                    />
                  </span>
                </label>
              </div>
              <label className="fld" htmlFor="w-time">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                </svg>
                <span>
                  <strong>Thời gian học</strong>
                  <input id="w-time" type="text" value={f.time} onChange={set('time')} placeholder="Ví dụ: tối thứ 2, 4, 6" />
                </span>
              </label>
              <p className="msg" role="alert">
                {msg}
              </p>
              <Btn type="submit" className="send">
                Gửi đăng ký tư vấn
              </Btn>
            </div>
          ) : (
            <div className="done">
              <span className="ok">
                <Check size={30} color="#16A34A" />
              </span>
              <strong>Đã nhận đăng ký</strong>
              <span>Thầy Thức sẽ gọi lại cho anh chị sớm nhất.</span>
              <button className="btn ghost" type="button" onClick={again}>
                Đăng ký thêm
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
