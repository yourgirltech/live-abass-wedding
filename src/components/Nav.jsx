import { useEffect, useState } from 'react';
import { navLinks, RSVP_LINK } from '../data/content';
import Monogram from './Monogram';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const rsvpHref = RSVP_LINK || '#rsvp';

  return (
    <>
      <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#home" className="nav-mark">
          <Monogram size={48} color={scrolled ? 'var(--ink)' : 'var(--ivory)'} />
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={rsvpHref} className="nav-cta" target={RSVP_LINK ? '_blank' : undefined} rel={RSVP_LINK ? 'noopener' : undefined}>
            RSVP
          </a>
        </div>
        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a
          href={rsvpHref}
          className="nav-cta"
          target={RSVP_LINK ? '_blank' : undefined}
          rel={RSVP_LINK ? 'noopener' : undefined}
          onClick={closeMenu}
        >
          RSVP Now
        </a>
      </div>
    </>
  );
}