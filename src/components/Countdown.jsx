import useCountdown from '../hooks/useCountdown';
import useReveal from '../hooks/useReveal';
import { WEDDING_DATETIME_ISO } from '../data/content';

function pad(n) {
  return String(n).padStart(2, '0');
}

function Sparkle() {
  return (
    <div className="countdown-divider" aria-hidden="true">
      <span className="countdown-divider-line"></span>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z" />
      </svg>
      <span className="countdown-divider-line"></span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATETIME_ISO);
  const headRef = useReveal('is-visible');
  const rowRef = useReveal('is-visible');
  const footRef = useReveal('is-visible');

  const units = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <section className="countdown-strip">
      <div className="container">
        <div className="countdown-head reveal" ref={headRef}>
          <Sparkle />
          <h2 className="countdown-title">The Countdown Begins</h2>
          <p className="countdown-tagline">Every moment brings us closer to forever.</p>
        </div>

        <div className="countdown reveal-stagger" ref={rowRef}>
          {units.map((unit) => (
            <div className="countdown-unit" key={unit.label}>
              <div className="countdown-num" key={unit.value}>
                {pad(unit.value)}
              </div>
              <div className="countdown-label">{unit.label}</div>
            </div>
          ))}
        </div>

        <div className="countdown-foot reveal" ref={footRef}>
          <Sparkle />
          <p className="countdown-signature">
            20 November 2026
            <span>Sydney, Australia</span>
          </p>
        </div>
      </div>
    </section>
  );
}