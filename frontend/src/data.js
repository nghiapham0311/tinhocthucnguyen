export const CONTACT = {
  phone: '097 398 7939',
  phoneHref: 'tel:0973987939',
  zaloHref: 'https://zalo.me/0973987939',
  address: '244/33/32, Phú Lợi, Thủ Dầu Một',
};

export const NAV_LINKS = [
  { label: 'Khóa học', href: '/#khoa-hoc' },
  { label: 'Lịch khai giảng', href: '/#lich-khai-giang' },
  { label: 'Học liệu', href: '/#hoc-lieu' },
  { label: 'Giới thiệu', href: '/#gioi-thieu' },
  { label: 'Liên hệ', href: '#lien-he' },
];

export const CONSULT_POINTS = [
  { title: 'Bắt đầu từ trình độ hiện tại', desc: 'Tư vấn nhu cầu và kiểm tra đầu vào phù hợp.' },
  { title: 'Lộ trình rõ ràng', desc: 'Biết trước sẽ học gì và làm được gì.' },
  { title: 'Học qua bài thực hành', desc: 'Bài tập gần với mục tiêu của từng khóa.' },
  { title: 'Học liệu để ôn tập', desc: 'Tài liệu và hướng dẫn sau mỗi buổi học.' },
];

export { COURSE_GROUPS, getCourse } from './courses.js';

export const SCHEDULE = [
  { group: 'Tin học thiếu nhi', slug: 'tin-hoc-thieu-nhi', schedule: 'Chờ cập nhật', fee: 'Chờ xác nhận' },
  { group: 'CNTT cơ bản / nâng cao / MOS', slug: 'luyen-thi-chung-chi', schedule: 'Chờ cập nhật', fee: 'Chờ xác nhận' },
  { group: 'Word / Excel / PowerPoint', slug: 'tin-hoc-van-phong', schedule: 'Chờ cập nhật', fee: 'Chờ xác nhận' },
];

export const MATERIALS = [
  { title: 'Tài liệu & bài tập', desc: 'Word · Excel · PowerPoint', icon: 'doc', tone: 'blue' },
  { title: 'Ôn luyện chứng chỉ', desc: 'Đề luyện tập theo khóa học', icon: 'check', tone: 'coral' },
  { title: 'Kỹ năng số an toàn', desc: 'Học liệu dành cho học sinh', icon: 'shield', tone: 'green' },
];

export const LEARNING_STEPS = [
  { title: 'Tư vấn & kiểm tra đầu vào', desc: 'Trao đổi mục tiêu, kiểm tra nhanh trình độ hiện tại.' },
  { title: 'Xếp lộ trình phù hợp', desc: 'Biết trước sẽ học những gì và làm được gì sau khóa.' },
  { title: 'Học qua bài thực hành', desc: 'Mỗi buổi đều có bài tập gắn với mục tiêu của khóa.' },
  { title: 'Ôn tập với học liệu', desc: 'Tài liệu, bài tập và hướng dẫn để tự luyện sau buổi học.' },
];
