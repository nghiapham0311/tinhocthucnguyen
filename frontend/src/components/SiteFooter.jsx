import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { CONTACT, COURSES } from '../data.js';

export default function SiteFooter() {
  return (
    <footer className="site-ft">
      <div className="wrap site-ft__grid">
        <div className="site-ft__col">
          <Logo tone="dark" height={52} />
          <span>Tin học thiếu nhi · Luyện thi chứng chỉ CNTT · Tin học văn phòng</span>
        </div>
        <div className="site-ft__col">
          <strong>Liên hệ</strong>
          <span>{CONTACT.address}</span>
          <a href={CONTACT.phoneHref}>{CONTACT.phone} (Zalo)</a>
          <span>Facebook: {CONTACT.facebook}</span>
        </div>
        <div className="site-ft__col">
          <strong>Khóa học</strong>
          {COURSES.map((c) => (
            <Link key={c.key} to={c.path}>
              {c.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
