import useReveal from '../hooks/useReveal';

function Flourish() {
  return (
    <div className="invite-flourish" aria-hidden="true">
      <span className="invite-flourish-line"></span>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z" />
      </svg>
      <span className="invite-flourish-line"></span>
    </div>
  );
}

// Faint, debossed-looking leaf veins for the invitation card's corners.
function CornerLeaf({ className }) {
  return (
    <svg className={`invite-card-leaf ${className}`} viewBox="0 0 120 160" aria-hidden="true">
      <path d="M10 150C20 120,28 95,45 70C60 48,75 30,95 10" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M45 70L60 55" stroke="currentColor" strokeWidth="0.8" />
      <path d="M60 48L75 35" stroke="currentColor" strokeWidth="0.8" />
      <path d="M75 30L90 18" stroke="currentColor" strokeWidth="0.8" />
      <path d="M28 95L15 85" stroke="currentColor" strokeWidth="0.8" />
      <path d="M20 120L8 112" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

function BowTie() {
  return (
    <svg className="invite-bowtie" viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M2 8l7 4-7 4V8zM22 8l-7 4 7 4V8z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export default function Intro() {
  const headRef = useReveal();
  const cardRef = useReveal();

  return (
    <section className="intro-invite">
      <div className="container">
        <div className="invite-content">
          <div className="invite-header invite-reveal" ref={headRef}>
            <Flourish />
            <p className="eyebrow">You&rsquo;re Invited</p>
            <h2 className="invite-heading">
              Join Us As We
              <br />
              <span className="invite-heading-script">Celebrate</span>
            </h2>
            <p className="invite-sub">
              With grateful hearts and joyful anticipation, we warmly invite you to celebrate the
              beginning of our forever.
            </p>
          </div>

          <div className="invite-card invite-reveal invite-reveal--delay" ref={cardRef}>
            <CornerLeaf className="invite-card-leaf--tr" />
            <CornerLeaf className="invite-card-leaf--bl" />
            <img className="wax-seal" src="/assets/wax-seal.png" alt="" aria-hidden="true" />

            <p className="invite-card-eyebrow">We Invite You To Join Us On</p>
            <h3 className="invite-card-date">20 November 2026</h3>

            <div className="invite-card-divider" aria-hidden="true">
              <span></span>
              <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z" />
              </svg>
              <span></span>
            </div>

            <p className="invite-card-location">Sydney, Australia</p>

            <BowTie />

            <p className="invite-card-dress">Black Tie &nbsp;&bull;&nbsp; Dress To Impress</p>
            <p className="invite-card-note">This is an adults-only celebration. Children of the immediate family are warmly welcome.</p>
            <a href="#details" className="invite-card-btn">
              View Wedding Details <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}