// Ảnh của site: bỏ file vào src/assets/images/ đúng tên trong IMAGE_FILES là tự hiện.
// Chưa có file thì <Img> hiện khung chờ ghi tên file cần bổ sung.
const modules = import.meta.glob('./assets/images/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

const byName = {};
for (const path of Object.keys(modules)) {
  const file = path.split('/').pop();
  byName[file.replace(/\.[^.]+$/, '')] = modules[path];
}

// Tên (không đuôi) → mô tả. Đuôi file tùy chọn: png, jpg, jpeg, webp, svg.
export const IMAGE_FILES = {
  logo: 'Logo nền sáng (khoảng 1016×303)',
  'logo-white': 'Logo chữ trắng cho nền tối (khoảng 1016×303)',
  'poster-chieu-sinh': 'Poster chiêu sinh tháng 12 (khoảng 1199×1312)',
  'lop-hoc-thuc-hanh': 'Học viên thực hành tại lớp',
  'phong-may': 'Toàn cảnh phòng máy',
  'lop-hoc-1': 'Lớp học với máy tính',
  'lop-hoc-2': 'Sinh viên / lớp học buổi tối',
  'be-hoc-may-tinh': 'Bé học máy tính tại lớp',
  'chung-chi-co-ban': 'Chứng chỉ Ứng dụng CNTT cơ bản',
  'chung-chi-nang-cao': 'Chứng chỉ Ứng dụng CNTT nâng cao',
  'icon-chuot': 'Biểu tượng chuột máy tính (256×256)',
  'icon-ban-phim': 'Biểu tượng bàn phím (256×256)',
  'icon-may-tinh': 'Biểu tượng máy tính (256×256)',
  'icon-word': 'Biểu tượng Word (256×256)',
  'icon-excel': 'Biểu tượng Excel (256×256)',
  'icon-powerpoint': 'Biểu tượng PowerPoint (256×256)',
};

export const getImage = (name) => byName[name];
