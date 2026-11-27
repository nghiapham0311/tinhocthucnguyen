import { useState } from 'react';
import { useImage } from '../images.js';

// Ảnh theo tên slot trong src/images.js (Google Drive → file local → khung chờ).
export default function Img({ name, alt = '', className = '', style, ...rest }) {
  const { src, loading } = useImage(name);
  const [failed, setFailed] = useState(null);

  if (src && failed !== src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setFailed(src)}
        {...rest}
      />
    );
  }
  return (
    <span
      className={`img-ph ${loading ? 'is-loading' : ''} ${className}`}
      style={style}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      {!loading && (
        <span>
          {alt || name}
          <small>{name}</small>
        </span>
      )}
    </span>
  );
}
