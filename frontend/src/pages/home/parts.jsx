import { Link } from 'react-router-dom';

// Mũi tên trong vòng tròn của nút (giống thiết kế).
export function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function Check({ size = 18, color = '#fff', width = 2.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/*
  Nút viên thuốc có chữ cuộn + mũi tên xoay.
  to → <Link>, type → <button>, còn lại → <a href>.
*/
export function Btn({ to, href, type, variant = '', className = '', children, ...rest }) {
  const cls = ['btn', variant, className].filter(Boolean).join(' ');
  const inner = (
    <>
      <span className="roll">
        <span>
          <span>{children}</span>
          <span aria-hidden="true">{children}</span>
        </span>
      </span>
      <span className="arr">
        <Arrow />
      </span>
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (type) return <button type={type} className={cls} {...rest}>{inner}</button>;
  return <a href={href} className={cls} {...rest}>{inner}</a>;
}

export function reducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

export function finePointer() {
  try {
    return window.matchMedia('(pointer: fine)').matches;
  } catch {
    return true;
  }
}
