import { useEffect, useState } from 'react';

// Tự động lấy mọi ảnh trong src/assets/hero (thêm ảnh mới chỉ cần chép vào thư mục).
const modules = import.meta.glob('../assets/hero/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const SLIDES = Object.keys(modules)
  .sort()
  .map((path, i) => ({ src: modules[path], alt: `Lớp học Tin học Thức Nguyễn – ảnh ${i + 1}` }));

const INTERVAL = 4000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || SLIDES.length < 2) return undefined;
    const t = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Ảnh lớp học và phòng máy"
    >
      {SLIDES.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`slider__img ${i === index ? 'is-active' : ''}`}
          aria-hidden={i !== index}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
      {SLIDES.length > 1 && (
        <div className="slider__dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              className={i === index ? 'is-active' : ''}
              aria-label={`Xem ảnh ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            >
              {i === index && !paused && <span style={{ animationDuration: `${INTERVAL}ms` }} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
