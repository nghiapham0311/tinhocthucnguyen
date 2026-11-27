// Ảnh của site lấy từ Google Drive (qua /drive/images.json do dịch vụ drive-sync tạo),
// dự phòng bằng file trong src/assets/images/.
//
// Thứ tự tìm ảnh cho một vị trí (slot), ví dụ 'phong-may':
//   1. File trên Drive có tên đúng slot: phong-may.jpg / phong-may.png ... (đuôi tùy ý)
//   2. File mặc định khai báo trong SLOTS bên dưới (tên file gốc trên Drive)
//   3. File src/assets/images/phong-may.*
//   4. Không có → khung chờ ghi tên slot
// Muốn đổi ảnh: trên Drive, đổi tên ảnh mới thành tên slot (hoặc thay file mặc định).
import { useSyncExternalStore } from 'react';

const local = import.meta.glob('./assets/images/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});
const localByName = {};
for (const path of Object.keys(local)) {
  localByName[path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase()] = local[path];
}

// default: tên file gốc trên Drive dùng khi chưa có file đặt đúng tên slot.
// size: tham số kích thước của Google (s0 = ảnh gốc, giữ nền trong suốt cho logo).
export const SLOTS = {
  logo: { label: 'Logo nền sáng', default: 'logo-ngang.svg', size: 's0' },
  'logo-white': { label: 'Logo nền tối', default: 'logo-ngang-nen-toi.svg', size: 's0' },
  'poster-chieu-sinh': { label: 'Poster chiêu sinh', default: '09C4F108-FBB8-41BC-B610-1385CACA2B94.PNG' },
  'lop-hoc-thuc-hanh': { label: 'Học viên thực hành tại lớp', default: '1K231M1SL_5K5PEV.JPG' },
  'phong-may': { label: 'Toàn cảnh phòng máy', default: 'att.fUt5Safcqvt3ieRUQ0zG7ppvIdK1Us2sac1eMekkWXU.JPG' },
  'lop-hoc-1': { label: 'Lớp học với máy tính', default: 'IMG_5684.HEIC' },
  'lop-hoc-2': { label: 'Sinh viên học buổi tối', default: 'IMG_9945.JPG' },
  'be-hoc-may-tinh': { label: 'Bé học máy tính' },
  'chung-chi-co-ban': { label: 'Chứng chỉ CNTT cơ bản' },
  'chung-chi-nang-cao': { label: 'Chứng chỉ CNTT nâng cao' },
  'icon-chuot': { label: 'Biểu tượng chuột', size: 'w512' },
  'icon-ban-phim': { label: 'Biểu tượng bàn phím', size: 'w512' },
  'icon-may-tinh': { label: 'Biểu tượng máy tính', size: 'w512' },
  'icon-word': { label: 'Biểu tượng Word', size: 'w512' },
  'icon-excel': { label: 'Biểu tượng Excel', size: 'w512' },
  'icon-powerpoint': { label: 'Biểu tượng PowerPoint', size: 'w512' },
};

const driveUrl = (id, size = 'w1600') => `https://lh3.googleusercontent.com/d/${id}=${size}`;

// ---- Kho manifest Drive (tải một lần khi mở trang) ----
let state = { status: 'loading', bySlot: {}, byFile: {} };
const listeners = new Set();

function setManifest(files) {
  const bySlot = {};
  const byFile = {};
  for (const f of files) {
    byFile[f.name.toLowerCase()] ??= f.id;
    bySlot[f.name.replace(/\.[^.]+$/, '').toLowerCase()] ??= f.id;
  }
  state = { status: 'ready', bySlot, byFile };
  listeners.forEach((l) => l());
}

if (typeof window !== 'undefined') {
  fetch('/drive/images.json', { cache: 'no-cache' })
    .then((r) => (r.ok ? r.json() : { files: [] }))
    .catch(() => ({ files: [] }))
    .then((d) => setManifest(Array.isArray(d.files) ? d.files : []));
}

const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function resolveImage(name, s = state) {
  const slot = SLOTS[name] || {};
  const id = s.bySlot[name] || (slot.default && s.byFile[slot.default.toLowerCase()]);
  if (id) return driveUrl(id, slot.size);
  return localByName[name] || null;
}

// Trả về { src, loading }. loading = đang chờ danh sách ảnh từ Drive.
export function useImage(name) {
  const s = useSyncExternalStore(subscribe, () => state, () => state);
  const src = resolveImage(name, s);
  return { src, loading: !src && s.status === 'loading' };
}
