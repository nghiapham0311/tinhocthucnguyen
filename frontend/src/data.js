export const CONTACT = {
  phone: '097 398 7939',
  phoneHref: 'tel:0973987939',
  zaloHref: 'https://zalo.me/0973987939',
  address: '244/33/32, Phú Lợi, Thủ Dầu Một',
};

export const NAV_LINKS = [
  { label: 'Khóa học', href: '#khoa-hoc' },
  { label: 'Lịch khai giảng', href: '#lich-khai-giang' },
  { label: 'Học liệu', href: '#hoc-lieu' },
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Liên hệ', href: '#lien-he' },
];

export const COURSE_GROUPS = [
  {
    id: 'hoc-sinh',
    no: '01',
    tone: 'teal',
    icon: 'kid',
    audience: 'Học sinh tiểu học & THCS',
    title: 'Tin học thiếu nhi',
    desc: 'Nền tảng máy tính, gõ phím và an toàn mạng. Word, PowerPoint, Canva theo lộ trình.',
    tags: ['Gõ phím', 'Canva', 'An toàn mạng'],
    cta: 'Xem khóa học sinh',
  },
  {
    id: 'sinh-vien',
    no: '02',
    tone: 'blue',
    icon: 'certificate',
    audience: 'Sinh viên',
    title: 'Luyện thi chứng chỉ',
    desc: 'Ôn luyện CNTT cơ bản, nâng cao và MOS theo mục tiêu. Thực hành và giải đề.',
    tags: ['CNTT cơ bản', 'Nâng cao', 'MOS'],
    cta: 'Xem khóa chứng chỉ',
  },
  {
    id: 'nguoi-di-lam',
    no: '03',
    tone: 'navy',
    icon: 'briefcase',
    audience: 'Người đi làm',
    title: 'Tin học văn phòng',
    desc: 'Word, Excel, PowerPoint cho công việc. Có thể chọn học riêng từng phần mềm.',
    tags: ['Word', 'Excel', 'PowerPoint'],
    cta: 'Xem khóa văn phòng',
  },
];

export const CONSULT_POINTS = [
  { title: 'Bắt đầu từ trình độ hiện tại', desc: 'Tư vấn nhu cầu và kiểm tra đầu vào phù hợp.' },
  { title: 'Lộ trình rõ ràng', desc: 'Biết trước sẽ học gì và làm được gì.' },
  { title: 'Học qua bài thực hành', desc: 'Bài tập gần với mục tiêu của từng khóa.' },
  { title: 'Học liệu để ôn tập', desc: 'Tài liệu và hướng dẫn sau mỗi buổi học.' },
];

export const SCHEDULE = [
  { group: 'Tin học thiếu nhi', schedule: 'Chờ cập nhật', fee: 'Chờ xác nhận' },
  { group: 'CNTT cơ bản / nâng cao / MOS', schedule: 'Chờ cập nhật', fee: 'Chờ xác nhận' },
  { group: 'Word / Excel / PowerPoint', schedule: 'Chờ cập nhật', fee: 'Chờ xác nhận' },
];

export const MATERIALS = [
  { title: 'Tài liệu & bài tập', desc: 'Word · Excel · PowerPoint', icon: 'doc', tone: 'blue' },
  { title: 'Ôn luyện chứng chỉ', desc: 'Đề luyện tập theo khóa học', icon: 'check', tone: 'coral' },
  { title: 'Kỹ năng số an toàn', desc: 'Học liệu dành cho học sinh', icon: 'shield', tone: 'green' },
];
