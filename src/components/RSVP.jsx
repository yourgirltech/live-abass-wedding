import Monogram from './Monogram';
import useReveal from '../hooks/useReveal';
import { RSVP_LINK } from '../data/content';

function Flourish() {
  return (
    <div className="rsvp-flourish" aria-hidden="true">
      <span className="rsvp-flourish-line"></span>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z" />
      </svg>
      <span className="rsvp-flourish-line"></span>
    </div>
  );
}

export default function RSVP() {
  const ref = useReveal('is-visible');
  const rsvpHref = RSVP_LINK || '#';

  return (
    <section className="bg-ink rsvp-section" id="rsvp">
      <div className="container reveal" ref={ref}>
        <Monogram color="var(--champagne)" style={{ marginBottom: 20 }} />
        <Flourish />
        <span className="eyebrow">RSVP</span>
        <h2 className="display-2">Join Us In Celebration</h2>
        <p className="lede">
          Your presence would mean the world to us. Please let us know if you'll be celebrating
          with us by following the link below.
        </p>
        <a
          href={rsvpHref}
          className="btn btn-gold btn-lg"
          target={RSVP_LINK ? '_blank' : undefined}
          rel={RSVP_LINK ? 'noopener' : undefined}
        >
          RSVP Now
        </a>
        <div className="rsvp-deadline">Kindly RSVP by 20 October 2026</div>
      </div>
    </section>
  );
}
