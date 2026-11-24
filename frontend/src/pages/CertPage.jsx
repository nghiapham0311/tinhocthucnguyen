import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import Img from '../components/Img.jsx';
import { CONTACT, ROUTES } from '../data.js';
import './cert.css';

/* ===== Dữ liệu ===== */
const MARQUEE = [
  'Ôn sát đề thi',
  'Thi thử có chấm điểm',
  'Chứng chỉ Bộ GD&ĐT',
  'Thi tại ĐH Thủ Dầu Một',
  'Lớp nhiều trợ giảng kèm bài hướng dẫn ',
  'Khai giảng hàng tháng',
  'Ôn sát đề thi',
  'Thi thử có chấm điểm',
  'Chứng chỉ Bộ GD&ĐT',
  'Thi tại ĐH Thủ Dầu Một',
  'Lớp nhỏ, kèm riêng',
  'Khai giảng 02/12',
];

const LEVELS = [
  {
    img: 'chung-chi-co-ban',
    imgAlt: 'Chứng chỉ Ứng dụng CNTT cơ bản',
    title: 'CNTT cơ bản',
    sub: '6 mô đun bắt buộc',
    heading: 'Khóa CNTT cơ bản ôn 6 mô đun',
    tone: 'b',
    modules: [
      ['IU01', 'Hiểu biết về CNTT cơ bản'],
      ['IU02', 'Sử dụng máy tính cơ bản'],
      ['IU03', 'Xử lý văn bản cơ bản (Word)'],
      ['IU04', 'Sử dụng bảng tính cơ bản (Excel)'],
      ['IU05', 'Sử dụng trình chiếu cơ bản (PowerPoint)'],
      ['IU06', 'Sử dụng Internet cơ bản'],
    ],
    desc: 'Phù hợp sinh viên cần chứng chỉ để xét tốt nghiệp. Ôn lý thuyết trắc nghiệm và thực hành trên máy, làm đề thi thử có chấm điểm.',
    duration: '12 buổi',
    cta: 'Đăng ký ôn cơ bản',
  },
  {
    img: 'chung-chi-nang-cao',
    imgAlt: 'Chứng chỉ Ứng dụng CNTT nâng cao',
    title: 'CNTT nâng cao',
    sub: 'Cơ bản + 3 mô đun nâng cao',
    heading: 'Khóa CNTT nâng cao: cơ bản + 3 mô đun nâng cao',
    tone: 'n',
    modules: [
      ['IU07', 'Xử lý văn bản nâng cao (Word)'],
      ['IU08', 'Sử dụng bảng tính nâng cao (Excel)'],
      ['IU09', 'Sử dụng trình chiếu nâng cao (PowerPoint)'],
    ],
    desc: 'Dành cho sinh viên ngành hoặc trường yêu cầu chứng chỉ nâng cao. Học viên cần nắm vững phần cơ bản, sau đó ôn chuyên sâu 3 mô đun nâng cao và luyện đề thực hành.',
    duration: '[SỐ] buổi',
    cta: 'Đăng ký ôn nâng cao',
  },
];

const SLOT_LABELS = {
  bsaa: 'Cơ bản · Sáng · Thứ 2, 4, 6 · 9h30 – 11h30',
  bsac: 'Cơ bản · Sáng · Thứ 3, 5, 7 · 9h30 – 11h30',
  bcha: 'Cơ bản · Chiều · Thứ 2, 4, 6 · 15h30 – 17h30',
  bt1a: 'Cơ bản · Tối · Ca 1 · Thứ 2, 4, 6 · 17h30 – 19h30',
  bt1c: 'Cơ bản · Tối · Ca 1 · Thứ 3, 5, 7 · 17h30 – 19h30',
  bt2a: 'Cơ bản · Tối · Ca 2 · Thứ 2, 4, 6 · 19h30 – 21h30',
  nsaa: 'Nâng cao · Sáng · Thứ 2, 4, 6 · 9h30 – 11h30',
  nsac: 'Nâng cao · Sáng · Thứ 3, 5, 7 · 9h30 – 11h30',
  nchc: 'Nâng cao · Chiều · Thứ 3, 5, 7 · 15h30 – 17h30',
  nt1a: 'Nâng cao · Tối · Ca 1 · Thứ 2, 4, 6 · 17h30 – 19h30',
  nt1c: 'Nâng cao · Tối · Ca 1 · Thứ 3, 5, 7 · 17h30 – 19h30',
  nt2a: 'Nâng cao · Tối · Ca 2 · Thứ 2, 4, 6 · 19h30 – 21h30',
  nt2c: 'Nâng cao · Tối · Ca 2 · Thứ 3, 5, 7 · 19h30 – 21h30',
};

const DAYS = ['Thứ 2, 4, 6', 'Thứ 3, 5, 7'];

// Mỗi hàng: buổi, giờ, icon, [id ca Thứ 2-4-6, id ca Thứ 3-5-7] (null = không mở lớp)
const ROWS = [
  { name: 'Sáng', time: '9h30 – 11h30', icon: 'sun', slots: [['bsaa', 'bsac'], ['nsaa', 'nsac']] },
  { name: 'Chiều', time: '15h30 – 17h30', icon: 'sunset', slots: [['bcha', null], [null, 'nchc']] },
  { name: 'Tối · Ca 1', time: '17h30 – 19h30', icon: 'moon', slots: [['bt1a', 'bt1c'], ['nt1a', 'nt1c']] },
  { name: 'Tối · Ca 2', time: '19h30 – 21h30', icon: 'moon', slots: [['bt2a', null], ['nt2a', 'nt2c']] },
];

const LEVEL_OPTIONS = ['CNTT cơ bản', 'CNTT nâng cao', 'Chưa biết, cần tư vấn'];

/* ===== Icon ===== */
function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function RowIcon({ name }) {
  const p = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'sun')
    return (
      <svg {...p}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    );
  if (name === 'sunset')
    return (
      <svg {...p}>
        <path d="M12 3v2M5.6 5.6l1.4 1.4M3 12h2M19 12h2M17 7l1.4-1.4" />
        <path d="M8 12a4 4 0 0 1 8 0" />
        <path d="M4 17h16M7 21h10" />
      </svg>
    );
  return (
    <svg {...p}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

/* ===== Trang ===== */
export default function CertPage() {
  const [level, setLevel] = useState(0);
  const [slot, setSlot] = useState(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ level: LEVEL_OPTIONS[0], name: '', phone: '', school: '' });
  const [errors, setErrors] = useState({});

  // Chọn bằng ở trên thì ô "Chứng chỉ" trong form đi theo
  useEffect(() => {
    setForm((f) => (f.level === LEVEL_OPTIONS[2] ? f : { ...f, level: LEVEL_OPTIONS[level] }));
  }, [level]);

  const pickedLabel = slot ? SLOT_LABELS[slot] : 'Chưa chọn ca, bấm "Chọn ca" trong bảng';
  const cur = LEVELS[level];

  const setField = (k) => (e) => {
    const v = e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const send = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Vui lòng nhập họ tên';
    const digits = form.phone.replace(/\D/g, '');
    if (!digits) er.phone = 'Vui lòng nhập số điện thoại';
    else if (digits.length < 9 || digits.length > 11) er.phone = 'Số điện thoại chưa đúng';
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(er.name ? 'c-name' : 'c-phone')?.focus();
      return;
    }
    // TODO: gửi tới backend (POST /api/registrations)
    // payload: { course: 'luyen-thi-chung-chi', level: form.level, slot, slotLabel: slot ? SLOT_LABELS[slot] : null, name, phone, school }
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setForm((f) => ({ ...f, name: '', phone: '', school: '' }));
    setErrors({});
  };

  return (
    <div className="pg-cert">
      {/* ===== Hero ===== */}
      <section className="hero" aria-label="Luyện thi chứng chỉ ứng dụng CNTT">
        <span className="hero__ring" aria-hidden="true" />
        <span className="hero__ring2" aria-hidden="true" />
        <span className="hero__blob" aria-hidden="true" />

        <SiteHeader variant="pill-dark" cta={{ label: 'Đăng ký ôn thi', href: '#dang-ky' }} />

        <div className="wrap hero__in">
          <span className="rise crumb">
            <Link to={ROUTES.courses}>Khóa học</Link> › Luyện thi chứng chỉ CNTT
          </span>
          <span className="rise hero__tag" style={{ animationDelay: '.05s' }}>
            SINH VIÊN · THI TẠI ĐH THỦ DẦU MỘT
          </span>
          <h1 className="h1 rise hero__title" style={{ animationDelay: '.1s' }}>
            Luyện thi chứng chỉ <span className="serif-acc">Ứng dụng CNTT</span> cơ bản và nâng cao
          </h1>
          <p className="rise hero__lead" style={{ animationDelay: '.2s' }}>
            Ôn sát đề, thi thử có chấm điểm. Chứng chỉ do Bộ Giáo dục và Đào tạo cấp, dùng để xét tốt nghiệp và xin việc.
          </p>

          <div className="certs">
            <span className="certs__glow" aria-hidden="true" />
            <span className="certs__shadow" aria-hidden="true" />
            <Img name="chung-chi-co-ban" alt="Chứng chỉ Ứng dụng CNTT cơ bản do Bộ Giáo dục và Đào tạo cấp" className="cert certL" />
            <Img name="chung-chi-nang-cao" alt="Chứng chỉ Ứng dụng CNTT nâng cao do Bộ Giáo dục và Đào tạo cấp" className="cert certR" />
          </div>
        </div>
      </section>

      {/* ===== Marquee ===== */}
      <div className="mq" aria-label="Ôn sát đề thi, Thi thử có chấm điểm, Chứng chỉ Bộ GD&ĐT, Thi tại ĐH Thủ Dầu Một, Lớp nhỏ, kèm riêng, Khai giảng 02/12">
        <div className="mq-in" aria-hidden="true">
          {MARQUEE.map((t, i) => (
            <span key={i}>
              {t}
              <b aria-hidden="true">✦</b>
            </span>
          ))}
        </div>
      </div>

      {/* ===== Chọn chứng chỉ ===== */}
      <section className="sec sec--tint">
        <div className="wrap">
          <div className="sec-hd">
            <span className="chip">Chọn chứng chỉ</span>
            <h2 className="h2 rv">Bạn cần thi bằng nào?</h2>
            <p>Bấm vào một tấm bằng để xem nội dung ôn và thông tin khóa.</p>
          </div>

          <div className="stage">
            {LEVELS.map((lv, i) => (
              <button
                key={lv.img}
                type="button"
                className={`pc ${level === i ? 'on' : i === 0 ? 'off-l' : 'off-r'}`}
                onClick={() => setLevel(i)}
                aria-pressed={level === i}
              >
                <Img name={lv.img} alt={lv.imgAlt} className="pc__img" />
                <span className="pc__bar">
                  <span className="pc__txt">
                    <strong>{lv.title}</strong>
                    <span>{lv.sub}</span>
                  </span>
                  <span className="pc__go">Xem khóa</span>
                </span>
                <span className="gl" aria-hidden="true" />
              </button>
            ))}
          </div>

          <div key={level} className="pop info-g">
            <div className="info-main">
              <h3>{cur.heading}</h3>
              <div className="mods">
                {cur.modules.map(([code, name]) => (
                  <div key={code} className={`mod mod--${cur.tone}`}>
                    <b>{code}</b>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <p className="info-desc">{cur.desc}</p>
            </div>
            <aside className={`info-card info-card--${cur.tone}`}>
              <div className="kv">
                <span>Thời lượng</span>
                <strong>{cur.duration}</strong>
              </div>
              <div className="kv">
                <span>Khai giảng</span>
                <strong>02/12 · sáng, chiều, tối</strong>
              </div>
              <div className="kv">
                <span>Lịch thi</span>
                <strong>Tháng 12</strong>
              </div>
              <div className="kv">
                <span>Học phí</span>
                <strong>[HỌC PHÍ]</strong>
              </div>
              <a href="#dang-ky" className="btn btn--sb">
                {cur.cta}
                <span className="arr">
                  <Arrow />
                </span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== Lịch học ===== */}
      <section className="sec" id="lich-hoc">
        <div className="wrap wrap--narrow">
          <div className="sec-hd sec-hd--mb">
            <span className="chip">Lịch học tháng 12</span>
            <h2 className="h2 rv">Đăng ký chọn ca học</h2>
            <p>Khai giảng 02/12 · Thi tháng 12 · Mỗi buổi 2 tiếng</p>
          </div>

          <div className="step">
            <b className="stp">1</b>
            <strong>Chọn lớp</strong>
          </div>
          <div role="tablist" aria-label="Chọn lớp" className="segs">
            {LEVELS.map((lv, i) => (
              <button key={lv.img} type="button" role="tab" className="seg" onClick={() => setLevel(i)} aria-selected={level === i}>
                {lv.title}
              </button>
            ))}
          </div>

          <div className="step">
            <b className="stp">2</b>
            <strong>Chọn ca trong bảng</strong>
          </div>
          <div className="rv tt-box">
            <table className="tt" key={level}>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="vh">Buổi</span>
                  </th>
                  {DAYS.map((d) => (
                    <th key={d} scope="col">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.name}>
                    <th scope="row">
                      <span className="rh">
                        <span className="ri">
                          <RowIcon name={r.icon} />
                        </span>
                        <span>
                          <strong>{r.name}</strong>
                          <small>{r.time}</small>
                        </span>
                      </span>
                    </th>
                    {r.slots[level].map((id, di) => (
                      <td key={di}>
                        {id ? (
                          <button
                            type="button"
                            className="cell"
                            onClick={() => setSlot(id)}
                            aria-pressed={slot === id}
                            aria-label={`${r.name} ${DAYS[di]} ${r.time}`}
                          >
                            <span className="ck" aria-hidden="true" />
                            <span className="cl">Chọn ca</span>
                          </button>
                        ) : (
                          <span className="cell off">Không mở lớp</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="picked">
            <span className="picked__l">
              <b className="stp stp--o">3</b>
              <span className="picked__txt">
                <span>Ca bạn đã chọn</span>
                <strong>{pickedLabel}</strong>
              </span>
            </span>
            <a href="#dang-ky" className="btn">
              Giữ chỗ ca này
              <span className="arr">
                <Arrow />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="sec sec--gal" aria-label="Lớp ôn thi tại trung tâm">
        <div className="wrap gal-wrap">
          <div className="gal-hd">
            <h2 className="h2 rv">Lớp ôn thi tại trung tâm</h2>
            <p className="rv">Phòng máy đối diện cổng 1 Đại học Thủ Dầu Một. Khai giảng 2/12, thi tháng 12.</p>
          </div>
          <div className="gal">
            <figure className="gal-f gal-f--big rv">
              <Img name="poster-chieu-sinh" alt="Chiêu sinh tháng 12: khai giảng 2/12, thi tháng 12" className="gal-img gal-img--top" />
            </figure>
            <figure className="gal-f gal-f--wide rv">
              <Img name="lop-hoc-1" alt="Lớp học với máy chiếu" className="gal-img" />
            </figure>
            <figure className="gal-f gal-f--wide rv">
              <Img name="lop-hoc-2" alt="Sinh viên thực hành trên máy" className="gal-img" />
            </figure>
          </div>
        </div>
      </section>

      {/* ===== Đăng ký ===== */}
      <section id="dang-ky" className="reg" aria-label="Đăng ký ôn thi">
        <span className="reg__hill1" aria-hidden="true" />
        <span className="reg__hill2" aria-hidden="true" />
        <div className="wrap reg__in">
          <div className="reg__copy">
            <h2>
              <span className="reg__q">
                Sắp tới hạn nộp bằng đại học cao đẳng ?<br />
                Cần chứng chỉ tin học chuẩn bộ giáo dục đề đi làm hay xét tuyển&nbsp;
              </span>
              <span className="h2 reg__cta">Đăng ký ôn thi ngay</span>
            </h2>
            <p>Để lại số điện thoại, thầy Thức gọi lại báo lịch ôn, lịch thi gần nhất và học phí.</p>
            <div className="reg__btns">
              <a href={CONTACT.zaloHref} className="reg__zalo">
                Nhắn Zalo {CONTACT.phone}
              </a>
              <a href={CONTACT.phoneHref} className="reg__call">
                Gọi ngay
              </a>
            </div>
          </div>

          <div className="reg__card">
            {sent ? (
              <div className="reg__ok" role="status">
                <strong>Đã nhận đăng ký</strong>
                <span>Thầy Thức sẽ gọi lại cho bạn sớm nhất.</span>
                <button type="button" onClick={reset}>
                  Đăng ký thêm
                </button>
              </div>
            ) : (
              <form
                className="reg__form"
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
              >
                <h3>
                  Đăng ký <strong>ôn thi chứng chỉ</strong>
                </h3>
                <div className="reg__slot">
                  Ca đã chọn: <strong>{pickedLabel}</strong> · <a href="#lich-hoc">đổi ca</a>
                </div>
                <label className="fl" htmlFor="c-level">
                  <span className="fl__in">
                    <strong>Chứng chỉ</strong>
                    <select id="c-level" value={form.level} onChange={setField('level')}>
                      {LEVEL_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </span>
                </label>
                <div className="fl-row">
                  <div className="fl-col">
                    <label className={`fl ${errors.name ? 'is-err' : ''}`} htmlFor="c-name">
                      <span className="fl__in">
                        <strong>Họ tên</strong>
                        <input
                          id="c-name"
                          type="text"
                          placeholder="Nhập họ tên"
                          autoComplete="name"
                          value={form.name}
                          onChange={setField('name')}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'c-name-err' : undefined}
                        />
                      </span>
                    </label>
                    {errors.name && (
                      <span id="c-name-err" className="fl-err">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="fl-col">
                    <label className={`fl ${errors.phone ? 'is-err' : ''}`} htmlFor="c-phone">
                      <span className="fl__in">
                        <strong>Điện thoại</strong>
                        <input
                          id="c-phone"
                          type="tel"
                          placeholder="SĐT / Zalo"
                          autoComplete="tel"
                          inputMode="tel"
                          value={form.phone}
                          onChange={setField('phone')}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'c-phone-err' : undefined}
                        />
                      </span>
                    </label>
                    {errors.phone && (
                      <span id="c-phone-err" className="fl-err">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                <label className="fl" htmlFor="c-school">
                  <span className="fl__in">
                    <strong>Trường, ngành</strong>
                    <input id="c-school" type="text" placeholder="Ví dụ: ĐH Thủ Dầu Một, Kế toán" value={form.school} onChange={setField('school')} />
                  </span>
                </label>
                <button type="submit" className="reg__send">
                  Gửi đăng ký
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
