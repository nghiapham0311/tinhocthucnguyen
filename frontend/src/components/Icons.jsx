const paths = {
  kid: (
    <>
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5.5 20c.6-3.8 3.2-6 6.5-6s5.9 2.2 6.5 6" />
      <path d="M9.6 6.2c1-1.6 3.8-1.6 4.8 0" />
    </>
  ),
  certificate: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 8h10M7 11h6" />
      <circle cx="16.5" cy="16.5" r="2.5" />
      <path d="M15 18.6 14.5 22l2-1 2 1-.5-3.4" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  check: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.2 3 7.6 7 9 4-1.4 7-4.8 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h2.8l1.4 4-2 1.3a11 11 0 0 0 6.4 6.4l1.3-2 4 1.4v2.8A2 2 0 0 1 18.4 20 15.4 15.4 0 0 1 4 5.6a2 2 0 0 1 2.6-2.1z" />
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 10h8M8 13h5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
