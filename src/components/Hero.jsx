import Monogram from './Monogram';
import { COUPLE, RSVP_LINK } from '../data/content';

export default function Hero() {
  const rsvpHref = RSVP_LINK || '#rsvp';

  return (
    <header className="hero" id="home">
      <div className="hero-media">
        <video autoPlay muted loop playsInline poster="/assets/hero-poster.jpg">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <Monogram color="#FAF7F1" />
        <p className="hero-eyebrow">Together With Their Families</p>
        <h1 className="hero-title">
          {COUPLE.partnerOne} <span className="amp">&amp;</span> {COUPLE.partnerTwo}
        </h1>
        <p className="hero-date">
          Friday <span>·</span> 20 November 2026 <span>·</span> Sydney
        </p>
        <div className="hero-actions btn-row">
          <a
            href={rsvpHref}
            className="btn btn-gold btn-lg"
            target={RSVP_LINK ? '_blank' : undefined}
            rel={RSVP_LINK ? 'noopener' : undefined}
          >
            RSVP Now
          </a>
          <a href="#details" className="btn btn-outline">
            View Details
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </header>
  );
}
