import { CONTACT } from '../data.js';

export default function ZaloFloat() {
  return (
    <a
      className="zalo-float"
      href={CONTACT.zaloHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Nhắn Zalo ${CONTACT.phone}`}
    >
      <i aria-hidden="true">Zalo</i>
      <b>Tư vấn ngay</b>
    </a>
  );
}
