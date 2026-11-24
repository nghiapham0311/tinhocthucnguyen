import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import Img from '../components/Img.jsx';
import { CONTACT, ROUTES } from '../data.js';
import './office.css';

const FILES = ['Cong-van-so-12.docx', 'Bang-luong-thang-11.xlsx', 'Bao-cao-quy-4.pptx', 'In-tai-lieu.pdf'];

const TABS = [
  { icon: 'W', label: 'Word', cls: 'c-word' },
  { icon: 'X', label: 'Excel', cls: 'c-excel' },
  { icon: 'P', label: 'PowerPoint', cls: 'c-ppt' },
  { icon: 'In', label: 'In ấn', cls: 'c-print' },
];

const CHECKS = [
  'Soạn văn bản đúng chuẩn căn lề, font chữ',
  'Tạo mục lục, đánh số trang tự động trong Word',
  'Dùng hàm SUM, IF, VLOOKUP trong Excel',
  'Lọc, sắp xếp dữ liệu và vẽ biểu đồ',
  'Làm slide báo cáo gọn, đẹp trong PowerPoint',
  'In 2 mặt, in đúng trang, xuất file PDF',
];

const TIPS = [
  {
    title: 'Gợi ý: học trọn gói từ đầu',
    text: 'Bắt đầu từ Word, Excel, PowerPoint căn bản đến in ấn. Thầy kèm từng bước, học xong làm được việc ngay.',
  },
  {
    title: 'Gợi ý: tập trung Excel và báo cáo',
    text: 'Bạn đã có nền. Nên học sâu hàm Excel, xử lý dữ liệu và làm slide báo cáo cho công việc.',
  },
  {
    title: 'Gợi ý: học nâng cao theo công việc',
    text: 'Bạn khá vững rồi. Thầy sẽ kèm theo đúng bài toán ở cơ quan bạn để làm nhanh và chuyên nghiệp hơn.',
  },
];

function Arrow() {
  return (
    <span className="arr">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

function WordPane() {
  return (
    <div className="fade w-wrap">
      <div className="w-doc">
        <div className="w-head">
          <span>CÔNG TY ABC</span>
          <span>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span>
        </div>
        <strong className="w-title">CÔNG VĂN</strong>
        <div className="line" style={{ width: '100%' }} />
        <div className="line" style={{ width: '94%' }} />
        <div className="line" style={{ width: '98%' }} />
        <div className="w-typing">
          <div className="line" />
          <span className="cursor" />
        </div>
        <div className="w-chips">
          <span>Căn lề chuẩn</span>
          <span>Mục lục tự động</span>
          <span>Trộn thư</span>
        </div>
      </div>
    </div>
  );
}

function ExcelPane() {
  const bars = [
    ['62%', 'l'],
    ['54%', 'd'],
    ['82%', 'l'],
    ['46%', 'd'],
    ['70%', 'l'],
  ];
  return (
    <div className="fade x-wrap">
      <div className="x-fx">
        <strong>fx</strong>
        <span>=SUM(B2:C2)</span>
      </div>
      <table className="xl">
        <tbody>
          <tr><th>Nhân viên</th><th>Lương</th><th>Thưởng</th><th>Tổng</th></tr>
          <tr><td>An</td><td>8.000</td><td>1.200</td><td className="hl">9.200</td></tr>
          <tr><td>Bình</td><td>7.500</td><td>900</td><td className="b">8.400</td></tr>
          <tr><td>Chi</td><td>9.000</td><td>1.500</td><td className="b">10.500</td></tr>
        </tbody>
      </table>
      <div className="x-chart">
        {bars.map(([h, c], i) => (
          <div key={i} className={`bar bar--${c}`} style={{ height: h, animationDelay: `${(i + 1) / 10}s` }} />
        ))}
      </div>
    </div>
  );
}

function PptPane() {
  return (
    <div className="fade p-wrap">
      <div className="p-thumbs">
        <span className="on" />
        <span />
        <span />
      </div>
      <div className="p-slide">
        <strong>Báo cáo kết quả quý 4</strong>
        <div className="p-body">
          <span className="p-pie" aria-hidden="true" />
          <div className="p-legend">
            <span><i style={{ background: '#C43E1C' }} />Kinh doanh 46%</span>
            <span><i style={{ background: '#F59E0B' }} />Dịch vụ 28%</span>
            <span><i style={{ background: '#94A3B8' }} />Khác 26%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrintPane() {
  return (
    <div className="fade i-wrap">
      <div className="i-printer">
        <div className="i-top"><span /></div>
        <div className="i-slot">
          <div className="i-paper">
            <div className="line" style={{ width: '60%' }} />
            <div className="line" style={{ width: '100%' }} />
            <div className="line" style={{ width: '90%' }} />
            <div className="line" style={{ width: '96%' }} />
          </div>
        </div>
      </div>
      <div className="i-chips">
        <span>Khổ A4</span>
        <span>In 2 mặt</span>
        <span>Không lệch trang</span>
        <span>Xuất PDF</span>
      </div>
    </div>
  );
}

const PANES = [WordPane, ExcelPane, PptPane, PrintPane];

export default function OfficePage() {
  const [tab, setTab] = useState(0);
  const [auto, setAuto] = useState(true);
  const [pos, setPos] = useState(50);
  const [checks, setChecks] = useState([false, false, false, false, false, false]);
  const [sent, setSent] = useState(false);

  // Tự chuyển tab mỗi 4 giây cho tới khi người dùng tự bấm tab
  useEffect(() => {
    if (!auto) return undefined;
    const id = setInterval(() => setTab((t) => (t + 1) % 4), 4000);
    return () => clearInterval(id);
  }, [auto]);

  const count = checks.filter(Boolean).length;
  const lvl = count <= 2 ? 0 : count <= 4 ? 1 : 2;
  const Pane = PANES[tab];

  const toggle = (k) => setChecks((c) => c.map((v, i) => (i === k ? !v : v)));

  const send = (e) => {
    e.preventDefault();
    // TODO: gửi tới backend (POST /api/registrations)
    setSent(true);
  };

  return (
    <div className="pg-office">
      <SiteHeader variant="pill" cta={{ label: 'Đăng ký học', href: '#dang-ky' }} />

      {/* ---------- Hero ---------- */}
      <section className="hero" aria-label="Tin học văn phòng">
        <div className="wrap two">
          <div className="hero__txt">
            <span className="rise crumb">
              <Link to={ROUTES.courses}>Khóa học</Link> › Tin học văn phòng
            </span>
            <span className="rise d05 pill">NGƯỜI ĐI LÀM · SINH VIÊN MỚI RA TRƯỜNG</span>
            <h1 className="h1 rise d10">
              Làm việc nhanh gấp đôi với <em>Word, Excel</em> và PowerPoint
            </h1>
            <p className="rise d20 lead">
              Học các kỹ năng văn phòng: Word cơ bản, Excel, Powepoint slide thuyết trình và in ấn chuẩn. Chọn học trọn gói
              hoặc từng công cụ.
            </p>
            <div className="rise d30 hero__cta">
              <a href="#dang-ky" className="btn">
                Giữ chỗ lớp mới
                <Arrow />
              </a>
            </div>
          </div>

          <div className="rise d25 win">
            <div className="win__bar">
              <span className="dot dot--r" />
              <span className="dot dot--y" />
              <span className="dot dot--g" />
              <span className="win__file">{FILES[tab]}</span>
            </div>
            <div role="tablist" aria-label="Phần mềm" className="tabs">
              {TABS.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  role="tab"
                  className="tab"
                  aria-selected={tab === i ? 'true' : 'false'}
                  onClick={() => {
                    setTab(i);
                    setAuto(false);
                  }}
                >
                  <i className={t.cls}>{t.icon}</i>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
            <div className="win-body">
              <Pane key={tab} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trước và sau ---------- */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="sec-head">
            <span className="tag tag--orange">Trước và sau</span>
            <h2 className="h2">Kéo thanh trượt để thấy sự khác biệt</h2>
            <p>Cùng một bản báo cáo, trước khi học và sau khi học tin học văn phòng.</p>
          </div>
          <div className="ba">
            <div className="ba__before">
              <span className="bb-title">bao cao doanh thu thang 11!!!</span>
              <span className="bb-who">nguoi lam: ......</span>
              <span className="bb-txt">
                {'Doanh thu thang nay tang so voi thang truoc , chi tiet o bang duoi    ( xem ky )'}
              </span>
              <div className="bb-grid">
                <span className="bd">Thang10</span>
                <span className="bd">120tr</span>
                <span>{'   '}</span>
                <span>thang 11</span>
                <span className="bd r">135 tr</span>
              </div>
              <span className="badge badge--bad">TRƯỚC KHI HỌC</span>
            </div>
            <div className="ba__after" style={{ width: `${pos}%` }}>
              <div className="ba__after-in">
                <span className="ba-kicker">PHÒNG KINH DOANH · THÁNG 11/2026</span>
                <strong className="ba-title">Báo cáo doanh thu tháng 11</strong>
                <span className="ba-txt">
                  Doanh thu tháng 11 đạt 135 triệu đồng, tăng 12,5% so với tháng 10. Chi tiết theo bảng dưới.
                </span>
                <table className="xl">
                  <tbody>
                    <tr><th>Tháng</th><th>Doanh thu</th><th>Thay đổi</th></tr>
                    <tr><td>Tháng 10</td><td>120.000.000</td><td>–</td></tr>
                    <tr><td>Tháng 11</td><td className="b">135.000.000</td><td className="up">+12,5%</td></tr>
                  </tbody>
                </table>
                <span className="badge badge--good">SAU KHI HỌC</span>
              </div>
            </div>
          </div>
          <div className="ba__ctl">
            <label htmlFor="ba-range" className="sr-only">
              Kéo để so sánh trước và sau
            </label>
            <input
              id="ba-range"
              className="range"
              type="range"
              min="0"
              max="100"
              value={pos}
              onChange={(e) => setPos(+e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ---------- Tự kiểm tra ---------- */}
      <section id="muc-do" className="sec">
        <div className="wrap two two--half">
          <div className="chk-col">
            <span className="tag tag--green">Tự kiểm tra 30 giây</span>
            <h2 className="h2">Bạn đã làm được những việc nào?</h2>
            <p>Tích vào việc bạn đã tự làm được, thầy gợi ý lộ trình phù hợp.</p>
            {CHECKS.map((label, i) => (
              <button key={label} type="button" className="chk" aria-pressed={checks[i] ? 'true' : 'false'} onClick={() => toggle(i)}>
                <span className="bx" />
                {label}
              </button>
            ))}
          </div>
          <div className="score">
            <span className="score__lbl">Bạn đã làm được</span>
            <strong className="score__num">
              {count}
              <span>/6</span>
            </strong>
            <div className="meter">
              <div style={{ width: `${Math.round((count / 6) * 100)}%` }} />
            </div>
            <div className="fade tip" key={lvl}>
              <strong>{TIPS[lvl].title}</strong>
              <span>{TIPS[lvl].text}</span>
            </div>
            <a href="#dang-ky" className="btn">
              Đăng ký theo gợi ý
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Nội dung khóa học ---------- */}
      <section className="sec sec--white">
        <div className="wrap">
          <h2 className="h2 mods-title">Nội dung khóa học</h2>
          <div className="mods">
            <div className="mod mod--w">
              <span className="mod__ic c-word">W</span>
              <strong>Word</strong>
              <span>Công văn, hợp đồng, báo cáo đúng thể thức. Mục lục, trộn thư, bảng biểu.</span>
            </div>
            <div className="mod mod--x">
              <span className="mod__ic c-excel">X</span>
              <strong>Excel</strong>
              <span>Hàm thông dụng, bảng lương, thống kê, lọc dữ liệu, biểu đồ.</span>
            </div>
            <div className="mod mod--p">
              <span className="mod__ic c-ppt">P</span>
              <strong>PowerPoint</strong>
              <span>Slide báo cáo, thuyết trình gọn gàng, chuyên nghiệp.</span>
            </div>
            <div className="mod mod--i">
              <span className="mod__ic mod__ic--sm c-print">In</span>
              <strong>In ấn</strong>
              <span>Căn lề, chia trang, in 2 mặt, xuất PDF đúng ý.</span>
            </div>
          </div>
          <div className="facts">
            <span><span>Hình thức</span><strong>Trọn gói hoặc từng phần</strong></span>
            <span><span>Thời lượng</span><strong>[SỐ] buổi</strong></span>
            <span><span>Ca học</span><strong>[CA HỌC]</strong></span>
            <span><span>Học phí</span><strong>[HỌC PHÍ]</strong></span>
          </div>
        </div>
      </section>

      {/* ---------- Lớp học thực hành ---------- */}
      <section className="gal-sec" aria-label="Lớp học thực hành">
        <div className="wrap gal-wrap">
          <div className="gal-head">
            <h2 className="h2 rv">Lớp học thực hành</h2>
            <p className="rv">Mỗi học viên một máy, thầy kèm riêng từng người.</p>
          </div>
          <div className="gal">
            <figure className="gal-f gal-f--big rv">
              <Img name="phong-may" alt="Toàn cảnh lớp tin học" className="gal-img" />
            </figure>
            <figure className="gal-f rv">
              <Img name="lop-hoc-thuc-hanh" alt="Học viên thực hành Excel" className="gal-img" />
            </figure>
            <figure className="gal-f rv">
              <Img name="lop-hoc-2" alt="Lớp học buổi tối" className="gal-img" />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- Đăng ký ---------- */}
      <section id="dang-ky" className="reg" aria-label="Đăng ký học">
        <span className="reg__hill reg__hill--a" aria-hidden="true" />
        <span className="reg__hill reg__hill--b" aria-hidden="true" />
        <div className="wrap reg__in">
          <div className="reg__txt">
            <h2 className="reg__h">
              <span className="reg__h-a">Đi làm bận rộn?</span>
              <span className="reg__h-b">Chọn ca tối, học kèm riêng</span>
            </h2>
            <p>Để lại số điện thoại, thầy Thức gọi lại xếp ca học và báo học phí.</p>
            <div className="reg__acts">
              <a href={CONTACT.zaloHref} className="reg__zalo">Nhắn Zalo {CONTACT.phone}</a>
              <a href={CONTACT.phoneHref} className="reg__call">Gọi ngay</a>
            </div>
          </div>
          <div className="reg__card">
            {sent ? (
              <div className="reg__done">
                <strong>Đã nhận đăng ký</strong>
                <span>Thầy Thức sẽ gọi lại cho anh chị sớm nhất.</span>
                <button type="button" className="reg__again" onClick={() => setSent(false)}>
                  Đăng ký thêm
                </button>
              </div>
            ) : (
              <form className="reg__form" onSubmit={send}>
                <h3>
                  Đăng ký <strong>tin học văn phòng</strong>
                </h3>
                <label className="fl" htmlFor="v-part">
                  <span>
                    <strong>Muốn học</strong>
                    <select id="v-part">
                      <option>Trọn gói Word, Excel, PowerPoint, in ấn</option>
                      <option>Chỉ Word</option>
                      <option>Chỉ Excel</option>
                      <option>Chỉ PowerPoint</option>
                      <option>Chưa biết, cần tư vấn</option>
                    </select>
                  </span>
                </label>
                <div className="reg__row">
                  <label className="fl" htmlFor="v-name">
                    <span>
                      <strong>Họ tên</strong>
                      <input id="v-name" type="text" placeholder="Nhập họ tên" required />
                    </span>
                  </label>
                  <label className="fl" htmlFor="v-phone">
                    <span>
                      <strong>Điện thoại</strong>
                      <input id="v-phone" type="tel" placeholder="SĐT / Zalo" required pattern="[0-9 .+]{9,15}" title="Số điện thoại 9 đến 11 chữ số" />
                    </span>
                  </label>
                </div>
                <label className="fl" htmlFor="v-time">
                  <span>
                    <strong>Thời gian muốn học</strong>
                    <input id="v-time" type="text" placeholder="Ví dụ: tối thứ 2, 4, 6" />
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
