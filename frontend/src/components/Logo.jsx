import { Link } from 'react-router-dom';
import { getImage } from '../images.js';

// light = logo cho nền sáng, dark = logo chữ trắng cho nền tối.
export default function Logo({ tone = 'light', height = 48, to = '/' }) {
  const src = getImage(tone === 'dark' ? 'logo-white' : 'logo') || getImage('logo');
  return (
    <Link to={to} className={`site-logo site-logo--${tone}`} aria-label="Tin học Thức Nguyễn Edu, Trang chủ">
      {src ? (
        <img src={src} alt="Tin học Thức Nguyễn Edu" style={{ height, width: 'auto' }} />
      ) : (
        <span className="site-logo__text">
          <i aria-hidden="true">TN</i>
          <span>
            <small>TIN HỌC</small>
            <strong>Thức Nguyễn Edu</strong>
          </span>
        </span>
      )}
    </Link>
  );
}
