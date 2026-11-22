import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading.jsx';
import { SCHEDULE } from '../data.js';

export default function Schedule() {
  return (
    <section className="section section--tight" id="lich-khai-giang">
      <div className="container">
        <SectionHeading
          no="04"
          title="Lịch khai giảng"
          sub="Hiển thị ngày, giờ và học phí sau khi thầy xác nhận thông tin."
        />
        <div className="table-wrap">
          <table className="schedule">
            <thead>
              <tr>
                <th>Nhóm khóa học</th>
                <th>Lịch học</th>
                <th>Học phí</th>
                <th>Tư vấn</th>
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((r) => (
                <tr key={r.group}>
                  <td data-label="Nhóm khóa học"><Link to={`/khoa-hoc/${r.slug}`} className="schedule__course">{r.group}</Link></td>
                  <td data-label="Lịch học">{r.schedule}</td>
                  <td data-label="Học phí">{r.fee}</td>
                  <td data-label="Tư vấn"><a href="#lien-he">Nhận tư vấn</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
