import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="not-found__code">404</span>
        <h1>Không tìm thấy trang</h1>
        <p>Trang bạn tìm không tồn tại hoặc đã được chuyển đi.</p>
        <Link to="/" className="btn btn--teal btn--lg">Về trang chủ</Link>
      </div>
    </section>
  );
}
