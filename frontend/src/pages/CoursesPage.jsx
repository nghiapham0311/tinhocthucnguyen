import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import Img from '../components/Img.jsx';
import Icon from '../components/Icons.jsx';
import { ROUTES } from '../data.js';
import './courses.css';

// Từ khóa ô tìm kiếm → trang khóa học.
const KEYWORDS = [
  { path: ROUTES.office, words: ['excel', 'word', 'powerpoint', 'văn phòng', 'van phong', 'in ấn', 'đi làm'] },
  { path: ROUTES.cert, words: ['chứng chỉ', 'chung chi', 'cntt', 'thi', 'sinh viên', 'ôn'] },
  { path: ROUTES.kids, words: ['thiếu nhi', 'thieu nhi', 'bé', 'trẻ', 'canva', 'lớp', 'gõ phím'] },
];

const FAN = [
  {
    to: ROUTES.office,
    cls: 'fc--office',
    tag: '03 · NGƯỜI ĐI LÀM',
    title: 'Tin học văn phòng',
    lines: ['Word · Excel · PowerPoint · In ấn', 'Học phí: [HỌC PHÍ]'],
  },
  {
    to: ROUTES.cert,
    cls: 'fc--cert',
    tag: '02 · SINH VIÊN',
    title: 'Luyện thi chứng chỉ CNTT',
    lines: ['Cơ bản · Nâng cao', 'Thi tại ĐH Thủ Dầu Một'],
  },
  {
    to: ROUTES.kids,
    cls: 'fc--kids',
    tag: '01 · LỚP 3–9',
    title: 'Tin học thiếu nhi',
    lines: ['Máy tính · Word · Excel · Canva', 'Học phí: [HỌC PHÍ]'],
    photo: true,
  },
];

const CARDS = [
  {
    to: ROUTES.kids,
    cls: 'bc--kids',
    tag: '01 · HỌC SINH LỚP 3–9',
    title: 'Tin học thiếu nhi',
    desc: 'Bé nắm vững máy tính, gõ phím, Word, Excel, PowerPoint và Canva để tự tin học tập ở trường.',
    icon: (
      <>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4z" />
      </>
    ),
  },
  {
    to: ROUTES.cert,
    cls: 'bc--cert',
    tag: '02 · SINH VIÊN',
    title: 'Luyện thi chứng chỉ CNTT',
    desc: 'Ôn sát đề chứng chỉ Ứng dụng CNTT cơ bản và nâng cao, thi tại ĐH Thủ Dầu Một. Khai giảng 02/12.',
    icon: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
        <path d="m9.5 9 1.8 1.8L15 7.2" />
      </>
    ),
  },
  {
    to: ROUTES.office,
    cls: 'bc--office',
    tag: '03 · NGƯỜI ĐI LÀM',
    title: 'Tin học văn phòng',
    desc: 'Thành thạo Word, Excel, PowerPoint và in ấn để làm việc nhanh, chuẩn. Học trọn gói hoặc từng phần.',
    plane: true,
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18M11 13v2h2v-2" />
      </>
    ),
  },
];

function Plane() {
  return (
    <span className="plane" aria-hidden="true">
      <svg width="170" height="120" viewBox="0 0 170 120">
        <ellipse cx="88" cy="112" rx="50" ry="6" fill="rgba(11,42,91,0.12)" />
        <rect x="18" y="34" width="120" height="16" rx="8" fill="#4A90D9" />
        <path d="M40 58 L128 50 Q146 49 150 60 Q146 72 128 70 L40 68 Z" fill="#F5D547" />
        <rect x="60" y="66" width="100" height="14" rx="7" fill="#4A90D9" />
        <path d="M136 30 L150 8 Q154 4 156 10 L152 52 Z" fill="#4A90D9" />
        <circle cx="40" cy="63" r="12" fill="#3A2A20" />
        <g className="prop">
          <rect x="36" y="38" width="8" height="50" rx="4" fill="#E8742C" />
        </g>
        <circle cx="90" cy="92" r="7" fill="#1F2937" />
        <circle cx="120" cy="90" r="6" fill="#1F2937" />
        <path d="M86 70 L90 90 M118 70 L120 88" stroke="#1F2937" strokeWidth="3" />
      </svg>
    </span>
  );
}

export default function CoursesPage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    const hit = q && KEYWORDS.find((k) => k.words.some((w) => q.includes(w)));
    if (hit) navigate(hit.path);
    else document.getElementById('cac-khoa')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pg-courses">
      <section className="hero" aria-label="Giới thiệu các khóa học">
        <div className="hero__band" aria-hidden="true" />
        <SiteHeader variant="pill" contactHref="/#dang-ky" />

        <div className="wrap hero__grid">
          <div className="hero__txt">
            <h1 className="hero__h1">
              Chọn khóa tin học
              <span>Đúng với từng người học</span>
              Từ lớp 3 đến đi làm.
            </h1>
            <p className="hero__lead">
              Tin học thiếu nhi, luyện thi chứng chỉ CNTT và tin học văn phòng. Lớp nhỏ, học thực hành trên máy, thầy
              kèm riêng tại Thủ Dầu Một.
            </p>
            <form role="search" className="hero__search" onSubmit={onSearch}>
              <button type="submit" aria-label="Tìm khóa học">
                <Icon name="search" size={18} stroke={2.4} />
              </button>
              <label htmlFor="k-find" className="sr-only">
                Bạn muốn học gì?
              </label>
              <input
                id="k-find"
                type="text"
                placeholder="Bạn muốn học gì? Ví dụ: Excel"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
            <div className="hero__stats">
              <div>
                <strong>7 năm</strong>
                <span>kinh nghiệm dạy</span>
              </div>
              <div>
                <strong>3 khóa</strong>
                <span>cho mọi lứa tuổi</span>
              </div>
              <div>
                <strong>Kèm riêng</strong>
                <span>từng học viên</span>
              </div>
            </div>
          </div>

          <div className="fan">
            {FAN.map((c) => (
              <Link key={c.to} to={c.to} className={`fc ${c.cls}`}>
                <span className="fc__tag">{c.tag}</span>
                <strong className="fc__title">{c.title}</strong>
                {c.lines.map((l) => (
                  <span key={l} className="fc__line">
                    {l}
                  </span>
                ))}
                <span className="fa">
                  <Icon name="arrowUpRight" size={20} stroke={2.4} />
                </span>
                {c.photo && <Img name="be-hoc-may-tinh" alt="Bé học máy tính tại lớp" className="fc__photo" />}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="cac-khoa" className="list" aria-label="Các khóa học">
        <svg className="list__wave" aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 40 C 360 0, 620 140, 980 80 C 1180 46, 1320 60, 1440 90 L1440 120 L0 120 Z" fill="#FFFFFF" />
        </svg>
        <div className="wrap">
          <div className="list__head">
            <span>3 KHÓA HỌC</span>
            <h2>Chọn khóa phù hợp với bạn</h2>
          </div>
          <div className="bc-grid">
            {CARDS.map((c) => (
              <Link key={c.to} to={c.to} className={`bc rv ${c.cls}`}>
                {c.plane && <Plane />}
                <span className="bc-ic" aria-hidden="true">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {c.icon}
                  </svg>
                </span>
                <span className="bc__tag">{c.tag}</span>
                <strong className="bc__title">{c.title}</strong>
                <span className="bc__bar" />
                <span className="bc__desc">{c.desc}</span>
                <span className="bc__cta">
                  Tìm hiểu thêm
                  <span className="bc-ar">
                    <Icon name="arrowRight" size={18} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
