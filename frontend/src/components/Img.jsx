import { getImage } from '../images.js';

// Ảnh theo tên trong src/images.js. Chưa có file → khung chờ ghi tên file.
export default function Img({ name, alt = '', className = '', style, ...rest }) {
  const src = getImage(name);
  if (src) return <img src={src} alt={alt} className={className} style={style} {...rest} />;
  return (
    <span
      className={`img-ph ${className}`}
      style={style}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <span>
        {alt || name}
        <small>{name}</small>
      </span>
    </span>
  );
}
