/** Dải phân cách hình sóng: `top` là màu section phía trên, `bottom` là màu section phía dưới. */
export default function Wave({ top = 'var(--tint)', bottom = 'var(--white)' }) {
  return (
    <div className="wave" style={{ background: top }} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0 48c160-34 320-44 480-20s320 52 480 36 320-48 480-40v56H0z" fill={bottom} />
      </svg>
    </div>
  );
}
