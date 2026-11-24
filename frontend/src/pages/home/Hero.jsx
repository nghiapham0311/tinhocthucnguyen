import { useCallback, useEffect, useRef, useState } from 'react';
import Img from '../../components/Img.jsx';
import { CONTACT, ROUTES } from '../../data.js';
import { Btn, Check, finePointer, reducedMotion } from './parts.jsx';

const N = 4;
// Góc nghiêng [rotateX, rotateY] của sân khấu 3D theo từng slide.
const POSES = [[6, -14], [4, 12], [8, -6], [3, 16]];
const TILES = [['W', 'X', 'P'], ['A+', 'IT', '✓'], ['W', 'Ca', 'P'], ['X', 'W', 'In']];

const PILL_ICONS = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9 14-2 8 5-3 5 3-2-8" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
};

const SLIDES = [
  {
    badge: 'THÔNG BÁO',
    title: 'KHAI GIẢNG LỚP MỚI',
    t2: 'TIN HỌC THIẾU NHI · LUYỆN THI CNTT · VĂN PHÒNG',
    sub: 'Lớp sĩ số nhỏ, học trực tiếp trên máy tại Thủ Dầu Một',
    icon: 'calendar',
    pill: 'KHAI GIẢNG: 2/12',
    chips: ['SĨ SỐ NHỎ', 'KÈM RIÊNG TỪNG HỌC VIÊN'],
    noteStrong: 'Đăng ký sớm để giữ chỗ trong lớp.',
    noteText: `Nhắn Zalo ${CONTACT.phone} để được tư vấn chọn khóa.`,
    cta: { label: 'ĐĂNG KÝ NGAY', href: '#dang-ky' },
  },
  {
    badge: 'LUYỆN THI',
    title: 'CHỨNG CHỈ ỨNG DỤNG CNTT',
    t2: 'CƠ BẢN VÀ NÂNG CAO',
    sub: 'Ôn luyện và thi tại Đại học Thủ Dầu Một',
    icon: 'medal',
    pill: 'CHỨNG CHỈ DO BỘ GD&ĐT CẤP',
    chips: ['ÔN THEO ĐỀ THI', 'THI THỬ CÓ CHẤM ĐIỂM'],
    noteStrong: 'Dành cho sinh viên cần chứng chỉ để ra trường.',
    noteText: 'Khai giảng 2/12, thi tháng 12.',
    cta: { label: 'XEM KHÓA LUYỆN THI', to: ROUTES.cert },
  },
  {
    badge: 'THIẾU NHI',
    title: 'TIN HỌC CHO BÉ LỚP 3–9',
    t2: 'WORD · EXCEL · POWERPOINT · CANVA',
    sub: 'Nắm vững nền tảng máy tính, tự tin học tập ở trường',
    icon: 'card',
    pill: 'HỌC PHÍ: [HỌC PHÍ]',
    chips: ['HỌC THỰC HÀNH', 'HỖ TRỢ SAU KHÓA HỌC'],
    noteStrong: 'Phụ huynh có thể đến xem lớp trước khi đăng ký.',
    noteText: 'Lịch học: [CA HỌC].',
    cta: { label: 'XEM KHÓA THIẾU NHI', to: ROUTES.kids },
  },
  {
    badge: 'NGƯỜI ĐI LÀM',
    title: 'TIN HỌC VĂN PHÒNG',
    t2: 'WORD · EXCEL · POWERPOINT · IN ẤN',
    sub: 'Làm việc nhanh, chính xác, chuyên nghiệp',
    icon: 'calendar',
    pill: 'KHAI GIẢNG: [NGÀY]',
    chips: ['THỰC HÀNH TRÊN MÁY', 'KỸ NĂNG IN ẤN'],
    noteStrong: 'Dành cho sinh viên mới ra trường và người đi làm.',
    noteText: 'Học buổi tối: [CA HỌC].',
    cta: { label: 'XEM KHÓA VĂN PHÒNG', to: ROUTES.office },
  },
];

function Bar({ label }) {
  return (
    <div className="bar">
      <i />
      <i />
      <i />
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [booted, setBooted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [mouse, setMouse] = useState([0, 0]);
  const [restartKey, setRestartKey] = useState(0);

  const pausedRef = useRef(false);
  const rafRef = useRef(0);
  const pmRef = useRef([0, 0]);
  const touchX = useRef(null);

  pausedRef.current = paused;

  // Tự chuyển slide mỗi 6 giây (tạm dừng khi rê chuột vào hero).
  useEffect(() => {
    if (reducedMotion()) return undefined;
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setSlide((s) => (s + 1) % N);
        setBooted(true);
      }
    }, 6000);
    return () => clearInterval(id);
  }, [restartKey]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const go = useCallback((i) => {
    setSlide(((i % N) + N) % N);
    setBooted(true);
    setRestartKey((k) => k + 1);
  }, []);

  const onMove = (e) => {
    if (!finePointer() || reducedMotion()) return;
    const r = e.currentTarget.getBoundingClientRect();
    pmRef.current = [(e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5];
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      setMouse(pmRef.current);
    });
  };

  const onLeave = () => {
    setPaused(false);
    setMouse([0, 0]);
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(slide + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  const [mx, my] = mouse;
  const rigStyle = {
    '--rx': `${(POSES[slide][0] - my * 8).toFixed(2)}deg`,
    '--ry': `${(POSES[slide][1] + mx * 14).toFixed(2)}deg`,
  };
  const tiles = TILES[slide];
  const on = (i) => (i === slide ? 'on' : '');

  return (
    <section
      className={`hero${booted ? ' booted' : ''}${paused ? ' paused' : ''}`}
      id="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Thông báo nổi bật"
    >
      <div className="wrap hero-in">
        <div className="slides" aria-live="polite">
          {SLIDES.map((s, i) => (
            <div key={s.badge} className={`slide ${on(i)}`} aria-hidden={i !== slide}>
              <span className="badge a d0">{s.badge}</span>
              <h1 className="a d1">{s.title}</h1>
              <span className="t2 a d2">{s.t2}</span>
              <span className="sub a d3">{s.sub}</span>
              <span className="pill a d4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {PILL_ICONS[s.icon]}
                </svg>
                <i />
                {s.pill}
              </span>
              <div className="chips a d5">
                {s.chips.map((c) => (
                  <span className="chip" key={c}>
                    <i>
                      <Check />
                    </i>
                    {c}
                  </span>
                ))}
              </div>
              <div className="note a d6">
                <strong>{s.noteStrong}</strong>
                <span>{s.noteText}</span>
              </div>
              <div className="cta-row a d7">
                <Btn to={s.cta.to} href={s.cta.href} tabIndex={i === slide ? undefined : -1}>
                  {s.cta.label}
                </Btn>
                <div className="addr">
                  <span>{CONTACT.address}</span>
                  <span>
                    Zalo/Hotline: <b>{CONTACT.phone}</b>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stage" aria-hidden="true">
          <div className="rig" style={rigStyle}>
            <div className="plate" />
            <div className="shadow" />
            <div className={`laptop ${slide === 0 ? 'off' : ''}`}>
              <div className="lid">
                <div className="scr">
                  <div className={`face ${on(0)}`}>
                    <Bar label="Phiếu đăng ký học" />
                    <div className="lineph w70" />
                    <div className="lineph w90" />
                    <div className="lineph w55" />
                    <div className="okc">
                      <Check size={24} color="#16A34A" width={3.2} />
                    </div>
                    <div className="fcap">Đăng ký thành công</div>
                  </div>
                  <div className={`face ${on(1)}`}>
                    <Bar label="Kết quả thi" />
                    <div className="cert">
                      <small>CHỨNG CHỈ</small>
                      <strong className="cert__t">ỨNG DỤNG CNTT</strong>
                      <div className="lineph w60" />
                      <div className="lineph w40" />
                      <span className="seal">ĐẠT</span>
                    </div>
                    <div className="fcap">Thi đạt chứng chỉ</div>
                  </div>
                  <div className={`face ${on(2)}`}>
                    <Bar label="Bài trình bày" />
                    <div className="kid">
                      <span className="k1" />
                      <span className="k2" />
                      <span className="k3" />
                      <span className="k4" />
                      <span className="k5" />
                    </div>
                    <div className="fcap">Bài trình bày của bé</div>
                  </div>
                  <div className={`face ${on(3)}`}>
                    <Bar label="Báo cáo doanh thu.xlsx" />
                    <div className="xl">
                      <div className="grid">
                        {Array.from({ length: 18 }, (_, k) => (
                          <i key={k} className={k < 3 ? 'h' : undefined} />
                        ))}
                      </div>
                      <div className="chart">
                        <i className="b40" />
                        <i className="b65" />
                        <i className="b50" />
                        <i className="b85" />
                        <i className="b72" />
                      </div>
                    </div>
                    <div className="fcap">Báo cáo Excel hoàn chỉnh</div>
                  </div>
                </div>
              </div>
              <div className="base" />
            </div>
            <span className="tile t1">{tiles[0]}</span>
            <span className="tile t2">{tiles[1]}</span>
            <span className="tile t3">{tiles[2]}</span>
            <div className={`poster ${slide === 0 ? 'on' : ''}`}>
              <Img
                name="poster-chieu-sinh"
                alt="Chiêu sinh tháng 12: khai giảng 2/12, thi tháng 12"
                className="poster__img"
                width="1199"
                height="1312"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="slider-ui">
        <div className="wrap">
          <div className="dots">
            {SLIDES.map((s, i) => (
              <button key={s.badge} className={`dot ${on(i)}`} type="button" aria-label={`Xem slide ${i + 1}`} onClick={() => go(i)} />
            ))}
          </div>
          <div className="arrows">
            <button className="arw" type="button" aria-label="Slide trước" onClick={() => go(slide - 1)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className="arw" type="button" aria-label="Slide tiếp theo" onClick={() => go(slide + 1)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
