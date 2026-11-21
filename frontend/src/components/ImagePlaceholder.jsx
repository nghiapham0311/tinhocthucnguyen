export default function ImagePlaceholder({ title, note, className = '' }) {
  return (
    <div className={`img-ph ${className}`} role="img" aria-label={title}>
      <svg viewBox="0 0 48 32" width="48" height="32" aria-hidden="true">
        <rect x="1" y="1" width="46" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="11" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M3 28 L17 18 L26 24 L34 15 L45 26" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <strong>{title}</strong>
      {note && <span>{note}</span>}
    </div>
  );
}
