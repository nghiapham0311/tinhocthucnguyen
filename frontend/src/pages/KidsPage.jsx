import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import Img from '../components/Img.jsx';
import { CONTACT, ROUTES } from '../data.js';
import './kids.css';

/* ---------- Dữ liệu ---------- */

// 5 khối kỹ năng trong máy gắp (nhãn khối + bảng treo)
const BLOCKS = [
  {
    label: 'Máy tính',
    kicker: '01 / KỸ NĂNG NỀN TẢNG',
    title: 'Sử dụng thành thạo ',
    em: 'máy tính.',
    desc: 'Bật tắt máy đúng cách, dùng chuột và bàn phím, gõ 10 ngón đúng tư thế, sắp xếp thư mục và dùng Internet an toàn.',
    chips: ['Gõ 10 ngón', 'Thư mục, tệp', 'An toàn mạng'],
  },
  {
    label: 'Word',
    kicker: '02 / SOẠN THẢO',
    title: 'Kỹ năng ',
    em: 'Word.',
    desc: 'Soạn bài văn, trình bày đoạn văn đẹp, chèn hình và bảng, tự làm thiệp, báo tường và bài tập ở trường.',
    chips: ['Soạn thảo', 'Chèn hình', 'Bảng biểu'],
  },
  {
    label: 'Excel',
    kicker: '03 / BẢNG TÍNH',
    title: 'Kỹ năng ',
    em: 'Excel.',
    desc: 'Lập bảng điểm, bảng chi tiêu, dùng công thức đơn giản, sắp xếp dữ liệu và vẽ biểu đồ cho bài học.',
    chips: ['Công thức', 'Sắp xếp', 'Biểu đồ'],
  },
  {
    label: 'Trình chiếu',
    kicker: '04 / THUYẾT TRÌNH',
    title: 'Tạo bài trình chiếu ',
    em: 'cho học tập.',
    desc: 'Làm slide PowerPoint và thiết kế trên Canva: chọn bố cục, hình ảnh, hiệu ứng vừa đủ, rồi tự tin đứng lên thuyết trình trước lớp.',
    chips: ['PowerPoint', 'Canva', 'Thuyết trình'],
  },
  {
    label: 'Tìm kiếm học tập',
    kicker: '05 / TỰ HỌC',
    title: 'Tìm kiếm ',
    em: 'công cụ học tập.',
    desc: 'Tìm thông tin trên Google đúng cách, dùng từ điển và công cụ dịch, chọn ứng dụng học tập phù hợp và biết tránh trang web không an toàn.',
    chips: ['Tìm kiếm thông minh', 'Từ điển, dịch', 'Học online an toàn'],
  },
];

const MARQUEE = [
  'Gõ 10 ngón',
  'Word',
  'Excel',
  'PowerPoint',
  'Canva',
  'Tìm kiếm thông minh',
  'An toàn mạng',
  'Thuyết trình tự tin',
];

const SKILLS = [
  { bg: '#F3EBDD', title: 'Sử dụng thành thạo máy tính', desc: 'Chuột, bàn phím, gõ 10 ngón, thư mục, an toàn mạng.' },
  { bg: '#DCEFFA', title: 'Kỹ năng Word', desc: 'Soạn bài, chèn hình, bảng, làm thiệp và báo tường.' },
  { bg: '#F8E6C2', title: 'Kỹ năng Excel', desc: 'Bảng điểm, công thức đơn giản, sắp xếp, biểu đồ.' },
  { bg: '#E1E7F5', title: 'Tạo bài trình chiếu cho học tập', desc: 'PowerPoint, Canva và tự tin thuyết trình trước lớp.' },
  { bg: '#FDE3D5', title: 'Tìm kiếm công cụ học tập', desc: 'Tìm thông tin đúng cách, từ điển, học online an toàn.' },
];

const SUBJECTS = [
  {
    c: '#E8A23A',
    soft: '#FFF4E2',
    img: 'icon-chuot',
    alt: 'Biểu tượng Chuột máy tính',
    title: 'Luyện chuột',
    items: [
      'Làm chủ thao tác chuột chính xác, linh hoạt',
      'Rèn sự phối hợp tay – mắt và khả năng tập trung',
      'Bước khởi đầu để sử dụng thành thạo mọi phần mềm',
    ],
  },
  {
    c: '#4F7FE8',
    soft: '#EAF1FF',
    img: 'icon-ban-phim',
    alt: 'Biểu tượng Bàn phím',
    title: 'Luyện gõ phím',
    items: [
      'Hình thành thói quen gõ phím đúng tư thế, đúng ngón',
      'Tăng dần tốc độ và độ chính xác qua luyện tập đều đặn',
      'Nền tảng cho mọi hoạt động học tập và làm việc trên máy tính',
    ],
  },
  {
    c: '#8B5CF6',
    soft: '#F2ECFF',
    img: 'icon-may-tinh',
    alt: 'Biểu tượng Máy tính',
    title: 'Kĩ năng máy tính',
    items: [
      'Hiểu cách máy tính, phần mềm và Internet vận hành',
      'Tổ chức, lưu trữ và tìm kiếm thông tin một cách khoa học',
      'Tự tin sử dụng công nghệ trong học tập và cuộc sống',
    ],
  },
  {
    c: '#2F5DB8',
    soft: '#E8EEFA',
    img: 'icon-word',
    alt: 'Biểu tượng Word',
    title: 'Soạn thảo Word',
    items: [
      'Trình bày văn bản rõ ràng, khoa học và có thẩm mỹ',
      'Biết lựa chọn công cụ phù hợp với từng mục đích',
      'Kĩ năng văn phòng thiết yếu cho học tập và công việc sau này',
    ],
  },
  {
    c: '#2E8B57',
    soft: '#E7F5EC',
    img: 'icon-excel',
    alt: 'Biểu tượng Excel',
    title: 'Bảng tính Excel',
    items: [
      'Tổ chức dữ liệu một cách có hệ thống',
      'Dùng công thức để tính toán, so sánh và rút ra nhận xét',
      'Bước đầu hình thành tư duy dữ liệu',
    ],
  },
  {
    c: '#D2553A',
    soft: '#FDEDE8',
    img: 'icon-powerpoint',
    alt: 'Biểu tượng PowerPoint',
    title: 'Trình chiếu PowerPoint',
    items: [
      'Trình bày ý tưởng mạch lạc bằng chữ và hình ảnh',
      'Phát triển óc sáng tạo và cảm nhận thẩm mỹ',
      'Tự tin thuyết trình, chia sẻ trước tập thể',
    ],
  },
];

const GRADES = ['Lớp 3', 'Lớp 4', 'Lớp 5', 'Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9'];

/* ---------- Biểu tượng nhỏ ---------- */

const CheckSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* ---------- Khu vực ---------- */

function ClawStage() {
  const [picked, setPicked] = useState(0);
  const letters1 = ['T', 'H', 'I', 'Ế', 'U'];
  const letters2 = ['N', 'H', 'I'];

  return (
    <section aria-label="Gắp khối kỹ năng" className="kd-stage">
      <div className="kd-crumb">
        <span className="kd-crumb__path">
          <Link to={ROUTES.courses}>Khóa học</Link> › Tin học thiếu nhi
        </span>
        <h1>Tin học thiếu nhi · Lớp 3–9</h1>
      </div>
      <span className="kd-hint">BẤM VÀO MỘT KHỐI ĐỂ GẮP ↓</span>

      <div aria-hidden="true" className="kd-rail" />
      <div aria-hidden="true" className="kd-rail-ticks" />
      <div aria-hidden="true" className="kd-trolley">
        <span />
        <span />
      </div>

      <span className="fl-d fl-d--1" aria-hidden="true">
        <svg width="54" height="54" viewBox="0 0 24 24" fill="#F3EBDD" stroke="#0B2A5B" strokeWidth="1.2" strokeLinejoin="round">
          <path d="M4 3l14 7-6 1.5L9.5 18z" />
        </svg>
      </span>
      <span className="fl-d fl-d--2" aria-hidden="true">
        <span className="fl-d__aa">Aa</span>
      </span>
      <span className="fl-d fl-d--3" aria-hidden="true">
        <span className="fl-d__ap">A+</span>
      </span>
      <span className="fl-d fl-d--4" aria-hidden="true">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="3" width="12" height="18" rx="6" />
          <path d="M12 7v3" />
        </svg>
      </span>
      <span className="tw tw--1" aria-hidden="true">✦</span>
      <span className="tw tw--2" aria-hidden="true">✦</span>
      <span className="tw tw--3" aria-hidden="true">✦</span>

      <span className="big" aria-hidden="true">
        {letters1.map((ch, i) => (
          <span key={`a${i}`} className="wv" style={{ animationDelay: `${(i * 0.12).toFixed(2)}s` }}>
            {ch}
          </span>
        ))}{' '}
        {letters2.map((ch, i) => (
          <span key={`b${i}`} className="wv" style={{ animationDelay: `${(0.72 + i * 0.12).toFixed(2)}s` }}>
            {ch}
          </span>
        ))}
      </span>

      {BLOCKS.map((b, k) => (
        <button
          key={b.label}
          type="button"
          className={`bx bx${k}${picked === k ? ' is-on' : ''}`}
          aria-pressed={picked === k}
          onClick={() => setPicked(k)}
        >
          <span className="top" />
          <span className="side" />
          <span className="lbl">{b.label}</span>
        </button>
      ))}

      {BLOCKS.map((b, k) => (
        <div key={b.kicker} className={`hz${picked === k ? ' is-on' : ''}`} aria-hidden={picked !== k}>
          <div aria-hidden="true" className="hz-wire" />
          <div className="hz-in">
            <span className="hz-k">{b.kicker}</span>
            <strong className="hz-t">
              {b.title}
              <em>{b.em}</em>
            </strong>
            <span className="hz-d">{b.desc}</span>
            <div className="hz-chips">
              {b.chips.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="door l" aria-hidden="true" />
          <div className="door r" aria-hidden="true" />
        </div>
      ))}

      <span className="kd-foot">THỨC NGUYỄN EDU · 5 KHỐI KỸ NĂNG · LỚP 3–9</span>
    </section>
  );
}

function Marquee() {
  return (
    <div className="mq" aria-label={MARQUEE.join(', ')}>
      <div className="mq-in" aria-hidden="true">
        {[...MARQUEE, ...MARQUEE].map((t, i) => (
          <span key={i}>
            {t}
            <b aria-hidden="true">✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoBar() {
  return (
    <section className="kd-info-sec">
      <div className="wrap info">
        <div className="info__it">
          <span>Đối tượng</span>
          <strong>Học sinh lớp 3–9</strong>
        </div>
        <div className="info__it">
          <span>Thời lượng</span>
          <strong>12&nbsp; buổi</strong>
        </div>
        <div className="info__it">
          <span>Ca học</span>
          <strong>[CA HỌC]</strong>
        </div>
        <div className="info__it">
          <span>Học phí</span>
          <strong>[HỌC PHÍ]</strong>
        </div>
        <a href="#dang-ky" className="btn">
          Đăng ký cho bé
          <span className="arr">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="sec kd-skills">
      <div className="wrap">
        <div className="kd-tag">
          <span className="kd-tag__b">5 khối</span>
          <span className="kd-tag__t">Bé học gì trong khóa</span>
        </div>
        <h2 className="h2 rv">Mỗi khối là một kỹ năng bé dùng được ngay ở trường</h2>
        <div className="sk-grid">
          {SKILLS.map((s, i) => (
            <div key={s.title} className="sk rv sk-card" style={{ background: s.bg }}>
              <b>{String(i + 1).padStart(2, '0')}</b>
              <strong>{s.title}</strong>
              <span>{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  return (
    <section className="sec pm-sec">
      <div className="wrap pm-wrap">
        <div className="pm-head">
          <div className="pm-head__l">
            <div className="kd-tag">
              <span className="kd-tag__b">6 phân môn</span>
              <span className="kd-tag__t">Lộ trình từ chuột đến thuyết trình</span>
            </div>
            <h2 className="h2 rv">Nội dung học tập</h2>
            <p className="pm-head__p rv">
              Tại sao chọn luyện tin học?
              <br />
              Học mà chơi, bài tập được thiết kế cụ thể thú vị thực tế
            </p>
          </div>
          <div className="pm-head__r">
            <div className="sk rv pm-why">
              <strong>Lớp học hiện đại</strong>
              <span>Mỗi bé một máy, học thực hành trực tiếp.</span>
            </div>
            <div className="sk rv pm-why">
              <strong>Kèm riêng từng bé</strong>
              <span>Bé chậm hay nhanh đều được thầy theo sát.</span>
            </div>
          </div>
        </div>
        <div className="pm-grid">
          {SUBJECTS.map((s, i) => (
            <article key={s.title} className="pm rv" style={{ '--c': s.c, '--soft': s.soft, '--i': i }}>
              <span className="pm-step">{String(i + 1).padStart(2, '0')}</span>
              <div className="pm-ic">
                <Img name={s.img} alt={s.alt} className="pm-ic__img" width="256" height="256" />
              </div>
              <span className="pm-k">PHÂN MÔN</span>
              <h3 className="pm-t">{s.title}</h3>
              <span className="pm-em">EM SẼ HỌC</span>
              <ul className="pm-ul">
                {s.items.map((it) => (
                  <li key={it} className="pm-li">
                    <span className="pm-ck">
                      <CheckSvg />
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Register() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', grade: '' });
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const send = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Vui lòng nhập tên phụ huynh.';
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 9 || digits.length > 11) er.phone = 'Số điện thoại chưa đúng.';
    setErrors(er);
    if (Object.keys(er).length) return;
    // TODO: gửi tới backend (POST /api/registrations)
    setSent(true);
  };

  const reset = () => {
    setForm({ name: '', phone: '', grade: '' });
    setErrors({});
    setSent(false);
  };

  const errMsg = errors.name || errors.phone;

  return (
    <section id="dang-ky" aria-label="Đăng ký cho bé" className="kd-reg">
      <span aria-hidden="true" className="kd-hill kd-hill--1" />
      <span aria-hidden="true" className="kd-hill kd-hill--2" />
      <div className="wrap kd-reg__in">
        <div className="kd-reg__l">
          <h2 className="kd-reg__h">
            <span className="kd-reg__h1">Cho bé học thử?</span>
            <span className="kd-reg__h2">Giữ chỗ lớp thiếu nhi</span>
          </h2>
          <p className="kd-reg__p">Để lại số điện thoại, thầy Thức gọi lại báo lịch khai giảng, ca học và học phí.</p>
          <div className="kd-reg__acts">
            <a href={CONTACT.zaloHref} className="kd-reg__zalo">
              Nhắn Zalo {CONTACT.phone}
            </a>
            <a href={CONTACT.phoneHref} className="kd-reg__call">
              Gọi ngay
            </a>
          </div>
        </div>
        <div className="kd-form" aria-live="polite">
          {sent ? (
            <div className="kd-form__done">
              <strong>Đã nhận đăng ký</strong>
              <span>Thầy Thức sẽ gọi lại cho ba mẹ sớm nhất.</span>
              <button type="button" className="kd-form__again" onClick={reset}>
                Đăng ký thêm
              </button>
            </div>
          ) : (
            <div className="kd-form__body">
              <h3>
                Đăng ký <strong>cho bé</strong>
              </h3>
              <div className="kd-form__row">
                <label className={`fl${errors.name ? ' is-err' : ''}`} htmlFor="t-name">
                  <span className="fl__in">
                    <strong>Tên phụ huynh</strong>
                    <input
                      id="t-name"
                      type="text"
                      placeholder="Nhập họ tên"
                      autoComplete="name"
                      value={form.name}
                      onChange={set('name')}
                      aria-invalid={!!errors.name}
                    />
                  </span>
                </label>
                <label className={`fl${errors.phone ? ' is-err' : ''}`} htmlFor="t-phone">
                  <span className="fl__in">
                    <strong>Điện thoại</strong>
                    <input
                      id="t-phone"
                      type="tel"
                      placeholder="SĐT / Zalo"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      aria-invalid={!!errors.phone}
                    />
                  </span>
                </label>
              </div>
              <label className="fl" htmlFor="t-grade">
                <span className="fl__in">
                  <strong>Bé đang học lớp</strong>
                  <select id="t-grade" value={form.grade} onChange={set('grade')}>
                    <option value="">Chọn lớp</option>
                    {GRADES.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </span>
              </label>
              {errMsg && (
                <p className="kd-form__err" role="alert">
                  {errMsg}
                </p>
              )}
              <button type="button" className="kd-form__send" onClick={send}>
                Gửi đăng ký
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function KidsPage() {
  return (
    <div className="pg-kids">
      <SiteHeader variant="bar" cta={{ label: 'Đăng ký học', href: '#dang-ky' }} />
      <ClawStage />
      <Marquee />
      <InfoBar />
      <Skills />
      <Subjects />
      <Register />
    </div>
  );
}
