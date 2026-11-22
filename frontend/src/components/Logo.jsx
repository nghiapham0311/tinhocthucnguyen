import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Tin học Thức Nguyễn EDU – Trang chủ">
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="4" y="4" width="56" height="42" rx="8" fill="#1a8fd0" />
        <rect x="26" y="48" width="12" height="6" fill="#0f2d4a" />
        <rect x="16" y="54" width="32" height="5" rx="2.5" fill="#0f2d4a" />
        <text x="32" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="900" textAnchor="middle" fill="#fff">
          T<tspan fill="#ffc93c">N</tspan>
        </text>
      </svg>
      <span className="logo__text">
        <small>TIN HỌC</small>
        <strong>
          Thức Nguyễn <em>EDU</em>
        </strong>
      </span>
    </Link>
  );
}
