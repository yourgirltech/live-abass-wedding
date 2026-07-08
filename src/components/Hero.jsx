import { useRef } from 'react';
import Monogram from './Monogram';
import { COUPLE, RSVP_LINK } from '../data/content';

export default function Hero() {
 const rsvpHref = RSVP_LINK || '/rsvp';
  const videoRef = useRef(null);

  function handleTimeUpdate() {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration && video.currentTime >= video.duration - 1.5) {
      video.currentTime = 0;
    }
  }

  return (
    <header className="hero" id="home">
      <div className="hero-media">
        <video ref={videoRef} autoPlay muted playsInline webkit-playsinline="true" poster="/assets/welcome-poster-joyful.jpg" onTimeUpdate={handleTimeUpdate}>
            <source src="/assets/welcome-video.mp4" type="video/mp4" />
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
          <a href="#details" className="btn btn-outline">View Details</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </header>
  );
}