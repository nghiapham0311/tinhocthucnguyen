import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icons.jsx';
import { CONTACT, ROUTES } from '../data.js';

/*
  variant:
    home      – thanh trắng dính trên cùng, link gạch chân, nút "Đăng ký học" (Trang chủ)
    pill      – menu dạng viên thuốc màu navy trên nền sáng (Khóa học, Văn phòng)
    pill-dark – menu viên thuốc trong suốt trên nền tối, logo trắng (Chứng chỉ)
    bar       – thanh trắng có viền dưới, nút navy (Thiếu nhi)
  cta: { label, href } hoặc null. Không có cta ở variant pill → hiện nút Zalo + gọi điện.
*/
export default function SiteHeader({ variant = 'pill', cta = null, contactHref = '#dang-ky' }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const active = pathname === ROUTES.home ? 'home' : pathname.startsWith(ROUTES.courses) ? 'courses' : '';

  const links = [
    { key: 'home', label: 'Trang chủ', to: ROUTES.home },
    { key: 'courses', label: 'Khóa học', to: ROUTES.courses },
    { key: 'about', label: 'Giới thiệu', to: '/#gioi-thieu' },
    { key: 'contact', label: 'Liên hệ', to: contactHref },
  ];

  const close = () => setOpen(false);

  return (
    <header className={`site-hd site-hd--${variant}`}>
      <div className="site-hd__in">
        <Logo tone={variant === 'pill-dark' ? 'dark' : 'light'} height={variant === 'home' ? 50 : 48} />

        <button
          className="site-hd__menu"
          type="button"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} stroke={2.2} />
        </button>

        <nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Menu chính">
          {links.map((l) =>
            l.to.startsWith('#') ? (
              <a key={l.key} href={l.to} onClick={close}>
                {l.label}
              </a>
            ) : (
              <Link
                key={l.key}
                to={l.to}
                onClick={close}
                className={active === l.key ? 'is-on' : undefined}
                aria-current={active === l.key ? 'page' : undefined}
              >
                {l.label}
              </Link>
            )
          )}
          {cta && (
            <a className="site-nav__cta-m" href={cta.href} onClick={close}>
              {cta.label}
            </a>
          )}
        </nav>

        {cta ? (
          variant === 'home' ? (
            <a className="btn-roll site-hd__cta" href={cta.href}>
              <span className="btn-roll__roll">
                <span>
                  <span>{cta.label}</span>
                  <span aria-hidden="true">{cta.label}</span>
                </span>
              </span>
              <span className="btn-roll__arr">
                <Icon name="arrowRight" size={14} stroke={2.6} />
              </span>
            </a>
          ) : (
            <a className="site-hd__cta site-hd__cta--solid" href={cta.href}>
              {cta.label}
            </a>
          )
        ) : (
          <div className="site-hd__icons">
            <a href={CONTACT.zaloHref} target="_blank" rel="noopener noreferrer" aria-label="Nhắn Zalo">
              <Icon name="chat" />
            </a>
            <a href={CONTACT.phoneHref} aria-label={`Gọi ${CONTACT.phone}`}>
              <Icon name="phone" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
