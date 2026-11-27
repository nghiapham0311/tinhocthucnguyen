import { Link } from 'react-router-dom';
import { useImage } from '../images.js';

// light = logo cho nền sáng, dark = logo cho nền tối. Ảnh lấy từ Drive (src/images.js).
// Logo gốc tỉ lệ 1016×303.
export default function Logo({ tone = 'light', height = 48, to = '/' }) {
  const { src, loading } = useImage(tone === 'dark' ? 'logo-white' : 'logo');
  const width = Math.round((height * 1016) / 303);

  return (
    <Link to={to} className={`site-logo site-logo--${tone}`} aria-label="Tin học Thức Nguyễn Edu, Trang chủ">
      {src ? (
        <img src={src} alt="Tin học Thức Nguyễn Edu" width={width} height={height} style={{ height, width: 'auto' }} referrerPolicy="no-referrer" />
      ) : loading ? (
        <span style={{ display: 'block', width, height }} aria-hidden="true" />
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
