// Ảnh lớp học thật: tự lấy mọi ảnh trong src/assets/hero, sắp theo tên file.
const modules = import.meta.glob('./assets/hero/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

export const CLASS_PHOTOS = Object.keys(modules)
  .sort()
  .map((path, i) => ({ src: modules[path], alt: `Lớp học Tin học Thức Nguyễn – ảnh ${i + 1}` }));
