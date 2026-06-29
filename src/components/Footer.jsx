import Monogram from './Monogram';
import { IconInstagram, IconFacebook, IconMail } from './icons';
import { CONTACT } from '../data/content';

function Flourish() {
  return (
    <div className="footer-flourish" aria-hidden="true">
      <span className="footer-flourish-line"></span>
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z" />
      </svg>
      <span className="footer-flourish-line"></span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer bg-ink">
      <div className="container">
        <Monogram color="var(--champagne)" />
        <p className="thank-you">Thank you for being part of our story.</p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/livemayele?igsh=MWV1ZDR3ZzhvZ3B3bQ==" aria-label="Instagram">
            <IconInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <IconFacebook />
          </a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email">
            <IconMail size={16} />
          </a>
        </div>
        <Flourish />
        <p className="footer-meta">
          Live Mayele &amp; Abass Lateef &nbsp;&bull;&nbsp; &copy; 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
