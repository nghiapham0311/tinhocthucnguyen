import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';

export default function NotFoundPage() {
  return (
    <>
      <SiteHeader variant="bar" cta={{ label: 'Đăng ký học', href: '/#dang-ky' }} contactHref="/#dang-ky" />
      <section className="notfound">
        <h1>Không tìm thấy trang</h1>
        <p>Trang bạn tìm không tồn tại hoặc đã được chuyển.</p>
        <Link to="/">Về trang chủ</Link>
      </section>
    </>
  );
}
