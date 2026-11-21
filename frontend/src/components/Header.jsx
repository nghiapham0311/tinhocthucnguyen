import { useState } from 'react';
import Logo from './Logo.jsx';
import { CONTACT, NAV_LINKS } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="topbar">
        <div className="container topbar__inner">
          <span>{CONTACT.address}</span>
          <a href={CONTACT.phoneHref}>Tư vấn: {CONTACT.phone}</a>
        </div>
      </div>
      <div className="navbar">
        <div className="container navbar__inner">
          <Logo />
          <button
            className="nav-toggle"
            aria-label="Mở menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav ${open ? 'is-open' : ''}`}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#lien-he" className="btn btn--teal nav__cta" onClick={() => setOpen(false)}>
              Nhận tư vấn
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
