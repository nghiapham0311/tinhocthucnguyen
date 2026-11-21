import { useState } from 'react';
import Icon from './Icons.jsx';
import { CONTACT } from '../data.js';

export default function QuickContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`quick ${open ? 'is-open' : ''}`}>
      <div className="quick__menu" id="quick-menu" hidden={!open}>
        <a className="quick__item quick__item--zalo" href={CONTACT.zaloHref} target="_blank" rel="noreferrer">
          <span className="quick__icon">Zalo</span>
          <span>Chat Zalo</span>
        </a>
        <a className="quick__item quick__item--phone" href={CONTACT.phoneHref}>
          <span className="quick__icon"><Icon name="phone" size={18} /></span>
          <span>{CONTACT.phone}</span>
        </a>
        <a className="quick__item quick__item--consult" href="#lien-he" onClick={() => setOpen(false)}>
          <span className="quick__icon"><Icon name="chat" size={18} /></span>
          <span>Đăng ký tư vấn</span>
        </a>
      </div>
      <button
        className="quick__toggle"
        aria-label={open ? 'Đóng liên hệ nhanh' : 'Mở liên hệ nhanh'}
        aria-expanded={open}
        aria-controls="quick-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? 'close' : 'chat'} size={26} />
      </button>
    </div>
  );
}
