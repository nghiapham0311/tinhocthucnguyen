import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import Img from '../components/Img.jsx';
import { ROUTES } from '../data.js';
import Hero from './home/Hero.jsx';
import Contact from './home/Contact.jsx';
import { Btn, finePointer, reducedMotion } from './home/parts.jsx';
import './home.css';

const MARQUEE = ['WORD', 'EXCEL', 'POWERPOINT', 'CANVA', 'CNTT CƠ BẢN', 'CNTT NÂNG CAO', 'MOS', 'KỸ NĂNG IN ẤN'];

const CARDS = [
  {
    num: '01',
    color: '#3F8B78',
    icon: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
      </>
    ),
    who: 'HỌC SINH TIỂU HỌC & THCS',
    title: 'Tin học thiếu nhi',
    text: 'Nền tảng máy tính, Luyện gõ phím và an toàn mạng. Soạn thảo Word, PowerPoint, Canva theo lộ trình.',
    tags: ['Gõ phím', 'Canva', 'An toàn mạng'],
    to: ROUTES.kids,
    go: 'Xem khóa học sinh',
  },
  {
    num: '02',
    color: '#2F5A96',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M7 8h10M7 11h6" />
        <circle cx="17" cy="17" r="2.5" />
        <path d="M16 19.5 15.5 22l1.5-1 1.5 1-.5-2.5" />
      </>
    ),
    who: 'SINH VIÊN',
    title: 'Luyện thi chứng chỉ',
    text: 'Ôn luyện CNTT cơ bản, nâng cao và MOS theo mục tiêu. Thực hành và giải đề.',
    tags: ['CNTT cơ bản', 'CNTT Nâng cao'],
    to: ROUTES.cert,
    go: 'Xem khóa chứng chỉ',
  },
  {
    num: '03',
    color: '#1B2B4B',
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
      </>
    ),
    who: 'NGƯỜI ĐI LÀM',
    title: 'Tin học văn phòng',
    text: 'Word, Excel, PowerPoint cho công việc. Có thể chọn học riêng từng phần mềm.',
    tags: ['Word', 'Excel', 'PowerPoint'],
    to: ROUTES.office,
    go: 'Xem khóa văn phòng',
  },
];

const PANELS = [
  { cls: 'pn--a', vt: 'Tin học thiếu nhi', title: 'Tin học thiếu nhi', note: 'Ảnh bé học máy tính' },
  { cls: 'pn--b', vt: 'Luyện thi chứng chỉ', title: 'Luyện thi chứng chỉ CNTT', img: 'lop-hoc-1' },
  { cls: 'pn--c', vt: 'Tin học văn phòng', title: 'Tin học văn phòng', img: 'lop-hoc-2' },
];

function Courses() {
  const [tilt, setTilt] = useState({ i: -1, x: 0.5, y: 0.5 });
  const raf = useRef(0);
  const pt = useRef(null);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const move = (i) => (e) => {
    if (!finePointer() || reducedMotion()) return;
    const r = e.currentTarget.getBoundingClientRect();
    pt.current = { i, x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      setTilt(pt.current);
    });
  };
  const leave = () => {
    cancelAnimationFrame(raf.current);
    raf.current = 0;
    setTilt({ i: -1, x: 0.5, y: 0.5 });
  };

  const cardStyle = (i) =>
    tilt.i === i
      ? {
          transform: `rotateX(${((0.5 - tilt.y) * 10).toFixed(2)}deg) rotateY(${((tilt.x - 0.5) * 12).toFixed(2)}deg) translateY(-6px)`,
          transition: 'transform .12s linear, box-shadow .5s',
          '--gx2': `${(tilt.x * 100).toFixed(1)}%`,
          '--gy2': `${(tilt.y * 100).toFixed(1)}%`,
        }
      : undefined;

  return (
    <section className="wrap courses" aria-labelledby="h-courses">
      <div className="head">
        <h2 className="sec-h rv" id="h-courses">
          Bạn đang tìm <span className="it">khóa học</span> nào?
        </h2>
        <span className="tag rv">
          <b>01</b>Ba khóa học cho ba nhóm học viên
        </span>
      </div>
      <div className="cards">
        {CARDS.map((c, i) => (
          <article key={c.num} className="card rv tilt" style={cardStyle(i)} onMouseMove={move(i)} onMouseLeave={leave}>
            <span className="blob" />
            <span className="glare" />
            <div className="top">
              <span className="num">{c.num}</span>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {c.icon}
              </svg>
            </div>
            <span className="who">{c.who}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <div className="tags">
              {c.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <Link className="go" to={c.to}>
              {c.go}{' '}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="wrap about" id="gioi-thieu" aria-labelledby="h-about">
      <span className="tag rv">
        <b>02</b>Giới thiệu lớp học
      </span>
      <h2 className="big rv" id="h-about">
        Phòng học đối diện ngay tại <span className="it">cổng 1</span> của trường Đại học Thủ Dầu Một
      </h2>
      <div className="ab-grid">
        <figure className="ph a wipe">
          <Img name="lop-hoc-thuc-hanh" alt="Học viên thực hành tại lớp" className="par ph-img" />
        </figure>
        <div className="ab-txt rv">
          <p>Phòng học có sẵn máy tính cho từng học viên, thầy Thức kèm riêng từng người và hỗ trợ cả sau khóa học.</p>
          <div>
            <Btn href="#dang-ky">Về lớp học của chúng tôi</Btn>
          </div>
        </div>
        <figure className="ph b wipe">
          <Img name="phong-may" alt="Toàn cảnh phòng máy" className="par ph-img" />
        </figure>
      </div>
    </section>
  );
}

function Results() {
  const [panel, setPanel] = useState(1);
  const open = (i) => () => {
    if (panel !== i) setPanel(i);
  };

  return (
    <section className="wrap res" aria-labelledby="h-res">
      <div className="res-box">
        <div className="res-top">
          <div className="res-l">
            <span className="tag rv">
              <b>03</b>Kết quả thi học viên thi mỗi tháng
            </span>
            <h2 className="rv" id="h-res">
              Học thi kết quả thực hành cao được nhận <span className="it">thưởng tiền mặt</span>
            </h2>
            <div className="ask rv">
              <label htmlFor="d-find" className="sr-only">
                Bạn muốn học gì?
              </label>
              <input id="d-find" type="text" placeholder="Bạn muốn học gì? Ví dụ: Excel" />
              <Btn href="#dang-ky">Tư vấn</Btn>
            </div>
          </div>
          <div className="panels">
            {PANELS.map((p, i) => (
              <button
                key={p.cls}
                className={`pn ${p.cls} ${panel === i ? 'on' : ''}`}
                type="button"
                aria-expanded={panel === i}
                onClick={open(i)}
                onMouseEnter={open(i)}
              >
                {p.img ? (
                  <Img name={p.img} alt="" className="art art-img" />
                ) : (
                  <svg className="art" viewBox="0 0 400 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                      <linearGradient id="home-pn-g1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#7FB1F0" />
                        <stop offset="1" stopColor="#3C6FB8" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="420" fill="url(#home-pn-g1)" />
                    <circle cx="300" cy="90" r="60" fill="#FACC15" opacity=".9" />
                    <rect x="60" y="150" width="220" height="140" rx="14" fill="#0B2A5B" />
                    <rect x="72" y="162" width="196" height="116" rx="8" fill="#FFE9A8" />
                    <circle cx="130" cy="220" r="26" fill="#38BDF8" />
                    <rect x="170" y="196" width="80" height="12" rx="6" fill="#fff" />
                    <rect x="170" y="218" width="60" height="10" rx="5" fill="#F472B6" />
                  </svg>
                )}
                <span className="shade" />
                <span className="vt">{p.vt}</span>
                <span className="info">
                  <small>khóa thi tháng 8</small>
                  <strong>{p.title}</strong>
                </span>
                {p.note && <span className="ph-note">{p.note}</span>}
              </button>
            ))}
          </div>
        </div>
        <p className="res-foot rv">Lớp học sẵn sàng máy tính và giáo viên kèm tận tâm</p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="pg-home">
      <SiteHeader variant="home" cta={{ label: 'Đăng ký học', href: '#dang-ky' }} />
      <Hero />
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
      <Courses />
      <About />
      <Results />
      <Contact />
    </div>
  );
}
